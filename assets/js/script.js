function checkFlag() {
    const enteredFlag = document.getElementById('flagInput').value.toUpperCase();
    const correctFlag = 'OBVIOUSLY';

    if (enteredFlag === correctFlag) {
        document.querySelector('.locker').textContent = '🔓';
        alert("Don't be happy to early. Mr.C realize it and transfor the secret already!");
        // Redirect to the harder game
        window.location.href = 'locker2.html';
    } else {
        alert("Incorrect flag! Keep trying!");
    }
}