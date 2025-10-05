import "regenerator-runtime/runtime";
import './styles/main.scss';

// import interview from "./interview";
// import interviewOne from "./recursiveFunc";
// import arrayFunc from "./arrayFunc";
import comments from "./comments";
import load20 from "./load20";
import groupUser from "./userGroup";

import constructivePattern from "./constructivePattern";
import getFeatureState from "./summary";

// import memoize from './memoize';
// import UserService from './userService';

// const btn = document.getElementById("recurcive");
// const box = document.getElementById("menu");

const loadModule = () => {
    btn.disabled = true;
    const btnLabel = btn.textContent;
    btn.textContent = "loading…";
    box.innerHTML = `
      <div class="spinner" aria-busy="true" role="status" aria-live="polite"></div>
      <div style="text-align:center;margin-top:.5rem;">Loading recursive list…</div>`;

    Promise.all([
        import("./recModule.js"),
        new Promise(res => setTimeout(res, 2000))
    ])
        .then(([mod]) => {
            const run = mod.default;
            run();
        })
        .catch(err => {
            console.error(err);
            box.innerHTML = `<div style="color:#b00020;text-align:center;">Failed to load module.</div>`;
        })
        .finally(() => {
            btn.disabled = false;
            btn.textContent = btnLabel;
        });
};

// btn.addEventListener("click", loadModule);

function initApp() {
    // interview();
    // comments();
    // load20();
    groupUser();
    // constructivePattern();
    // interviewOne();
    // arrayFunc();
    // getFeatureState();

    // ✅ Testing memoize + userService
    // const userService = new UserService();

    // Fetch user data multiple times to see caching in action
    // userService.getUserData(1).then(data => console.log('User 1:', data));
    // userService.getUserData(1).then(data => console.log('User 1 again (should be cached):', data));
    // userService.getUserData(2).then(data => console.log('User 2:', data));
    // userService.getUserData(2).then(data => console.log('User 2 again (should be cached):', data));


    // const priceUpdaterWorker = new Worker(new URL('./priceUpdaterWorker.js', import.meta.url));

    // priceUpdaterWorker.onmessage = function (event) {
    //     const updatedProducts = event.data;
    //     console.log('new Prices', updatedProducts);

    // };
    // const products = [
    //     { id: 1, name: 'productsOne', price: 150 },
    //     { id: 2, name: 'productstwo', price: 180 },
    // ];
    // function updateProductPrices(products) {
    //     priceUpdaterWorker.postMessage({ products });
    // }
    // updateProductPrices(products);


}


initApp();
