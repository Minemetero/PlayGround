const flag : string = "020dd3dc162a25483a5648c8ea007dc379ed5cb922f5cc7e4d2c48b3b69cc354"; // this cannot be decoded hahahahahhahahahahahahhahahhaahahaha
let valueOf2 : string | null;


const hashData = async (data : any) : Promise<string> => {
    const encodedData = new TextEncoder().encode(data);
    const hashBuffer = await crypto.subtle.digest("SHA-256", encodedData);
    return Array.prototype.slice.call(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

const checkTrue = async () : Promise<void> => {
    const valueOf = document.getElementById("password") as HTMLInputElement | null;
    valueOf2 = valueOf?.value || null;
    if (valueOf == null) {
        return;
    };

    if (flag === await hashData(valueOf2?.toUpperCase())) {
        alert("Password is correct");
        window.location.replace('https://tinyurl.com/3sykfcnt');
        return;
    };
    alert("Password is incorrect");
};

// look into the images closely, there may be something hidden in them :)