// priceUpdaterWorker.js
self.onmessage = function (event) {
    const products = event.data.products;


    const updatedProducts = products.map(product => {
        return {
            ...product,
            price: product.price * 0.9
        };
    });


    self.postMessage(updatedProducts);
};
