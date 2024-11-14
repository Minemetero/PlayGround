// Function to hash the flag using SHA-256
async function hashFlag(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Pre-hashed correct flag
const correctFlagHash = 'b1fc7cae5c24f2625866f490e53b17f4e4ddb30c33d6422ff650dce5a8345253';

async function checkFlag() {
    const enteredFlag = document.getElementById('flagInput').value;
    const hashedEnteredFlag = await hashFlag(enteredFlag);
    const successMessage = "TXIuQyBpcyBzbWFydCBidXQgbm90IHRoYXQgc21hcnQsIHdlIGZvdW5kIGEgVVJMIGxlYWQgdG8gYSBjbG91ZCBzdG9yYWdlLiBJIGd1ZXNzIGhlIHB1dHRlZCBzb21lIGZpbGVzIHRoZXJl";

    if (hashedEnteredFlag === correctFlagHash) {
        document.querySelector('.locker').textContent = '🔓';
        alert(atob(successMessage));
        // Redirect to the harder game
        window.location.href = 'locker3.html';
    } else {
        alert("Incorrect flag! Keep trying!");
    }
}

function checkRiddleAnswer() {
    const answer = document.getElementById('riddleInput').value.toLowerCase();
    if (answer === 'echo') {//I know you don't know the answer to this riddle because I don't know this riddle either
        const riddleClueEncoded = 'UGFydCBvZiB0aGUgZmxhZyBpczogVEhFX09OTFlf';
        document.getElementById('riddleClue').textContent = atob(riddleClueEncoded);
        document.getElementById('riddleClue').classList.remove('hidden');
    } else {
        alert("Incorrect! Try again.");
    }
}

function checkCipherAnswer() {
    const answer = document.getElementById('cipherInput').value.toUpperCase();
    const encodedCorrectAnswer = 'VEhFUkUgSVMgTk8gU0VDUkVU';
    if (answer === atob(encodedCorrectAnswer)) {
        const cipherClueEncoded = 'U0lOR0xFX0dFTklVUw==';
        document.getElementById('cipherClue').textContent = atob(cipherClueEncoded);
        document.getElementById('cipherClue').classList.remove('hidden');
    } else {
        alert("Incorrect! Try again.");
    }
}