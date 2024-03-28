import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

const btn = document.querySelector("button[type='submit']");
const form = document.querySelector(".form");
const inputFulfilled = document.querySelector("input[value='fulfilled']");
const inputRejected = document.querySelector("input[ value='rejected']");
const delay = document.querySelector("input[name='delay']");

let val = null;

btn.addEventListener("click", (event) => {
    let isFormValid = form.checkValidity();
    if (!isFormValid) {
        form.reportValidity();
    } else {
        event.preventDefault();
    
        if (inputFulfilled.checked) {
            val = inputFulfilled.defaultValue;
        }
        if (inputRejected.checked) {
            val = inputRejected.defaultValue;
        }
        createPromise(delay.value);
    }
});


function createPromise(delay) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (val === "fulfilled") {
                resolve(iziToast.success({message:`✅ Fulfilled promise in ${delay}ms`
}));
            } else {
                reject(iziToast.error({ message: `❌ Rejected promise in ${delay}ms`
}));
            }
        }, delay);
    })
    return promise;
}