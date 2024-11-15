const flag = "020dd3dc162a25483a5648c8ea007dc379ed5cb922f5cc7e4d2c48b3b69cc354"; // this cannot be decoded hahahahahhahahahahahahhahahhaahahaha

const hashData = async (data) => {
    const encodedData = new TextEncoder().encode(data);
    const hashBuffer = await crypto.subtle.digest("SHA-256", encodedData);
    return Array.prototype.slice.call(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

const checkTrue = async () => {
    try {
        const passwordInput = document.getElementById("password");
        console.log("Password input element:", passwordInput);
        console.log("Password value:", passwordInput?.value);
        
        if (!passwordInput || !passwordInput.value) {
            alert("Please enter a password");
            return;
        }

        const inputHash = await hashData(passwordInput.value.toUpperCase());
        
        if (inputHash === flag) {
            alert("Password is correct");
            window.location.href = 'https://burdenowl.github.io/PlayGround2/';
        } else {
            alert("Password is incorrect");
        }
    } catch (error) {
        console.error("Error checking password:", error);
        alert("An error occurred while checking the password");
    }
};

// look into the images closely, there may be something hidden in them :)
