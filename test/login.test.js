const LoginPage = require('../pageobjects/login.page');
const ProductsPage = require('../pageobjects/products.page');

describe('Inicio de sesión', () => {
  it('Iniciar sesión con usuario y contraseñas validos', async () => {
    await LoginPage.open();
    await LoginPage.login('', '');

    await expect(ProductsPage.title).toBeDisplayed();
  });

  it('Cerrar sesión y validar que retorna a la página principal', async () => {

  });
});