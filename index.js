document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button").onclick = () => {
        let input = document.querySelector("input").value;
        checkPal(input);
        document.querySelector("input").value = "";
    }
    
})

function checkPal(input) {
    const rev = reverseString(input);
    if (rev === input) {
        alert(`${input} is a Palindrome`);
    }
    else {
        alert(`${input} is NOT a Palindrome`);
    }

}

function reverseString(input) {
    return input.split("").reverse().join("");
}