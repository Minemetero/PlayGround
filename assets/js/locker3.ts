const flag : string = "020dd3dc162a25483a5648c8ea007dc379ed5cb922f5cc7e4d2c48b3b69cc354"; // this cannot be decoded hahahahahhahahahahahahhahahhaahahaha

const hashData = async (data : string) => {
    const encodedData = new TextEncoder().encode(data);
    const hashBuffer = await crypto.subtle.digest("SHA-256", encodedData);
    return Array.prototype.slice.call(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

const checkTrue = (data : string) => {
} 

console.log(flag);

// look into the images closely, there may be something hidden in them :)

// hashData("THERE_IS_ALWAYS_A_PATH_TO_SUCCESS").then(hash => console.log(hash));
