
import { products } from './products';
import { renderProducts } from './rendering';

function addProduct(event) {
    import('./product-management.js').then((mod) => {
        mod.addProduct(event)
    })
}

function deleteProduct(productTd) {
    import('./product-management.js').then((mod) => {
        mod.deleteProduct(productTd)
    })
}

function initProducts() {
    renderProducts(products, deleteProduct);
  }

const addProductForm = document.getElementById('new-product');

initProducts();

addProductForm.addEventListener('submit', addProduct);
