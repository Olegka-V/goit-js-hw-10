import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");



form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputRadioValue = event.target.elements.state.value;
    const delay = event.target.elements.delay.value;
    const promise = createPromise(inputRadioValue, delay);
    promise.then(() => {
        iziToast.success({
            position: "topRight",
            message: `✅ Fulfilled promise in ${delay}ms`
        });
    }).catch(() => {
        iziToast.error({
            position: "topRight",
            message: `❌ Rejected promise in ${delay}ms`,
        });
    });
});


function createPromise(inputRadioValue, delay) {
    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            if (inputRadioValue === "fulfilled") {
                resolve(delay);
            } else if (inputRadioValue === "rejected") {
                reject(delay);
            }
        }, delay);
    });
    return promise;
}