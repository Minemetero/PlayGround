function checkFlag() {
    const enteredFlag = document.getElementById('flagInput').value.toUpperCase();
    const correctFlag = 'OBVIOUSLY';

    if (enteredFlag === correctFlag) {
        document.querySelector('.locker').textContent = '🔓';
        alert("Don't be happy to early. Mr.C's secret is always safe!");
        // Redirect to the harder game
        window.location.href = 'locker2.html';
    } else {
        alert("Flag is obviously!");
    }
}