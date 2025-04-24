const ProductsPage = require('../pageobjects/products.page');
const CartPage = require('../pageobjects/cart.page');
const LoginPage = require('../pageobjects/login.page');

describe('Acceder y agregar items al carrito', () => {
    before(async () => {
        await LoginPage.open();
        await LoginPage.login('', '');
    });

    it('Agregar 2 items al carrito de comprar y verificar que se hayan agregado', async () => {
        
    });

    it('Eliminar 1 item y verificar que solo haya 1 item', async () => {
        await CartPage.removeFirstItem();
        const items = await CartPage.cartItems;
        await expect(items.length).toBe(1);
    });
});