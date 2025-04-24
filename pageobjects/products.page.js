class ProductsPage {
    get title() { return $(''); }
    get addToCartButtons() { return $$(''); }
    get cartIcon() { return $(''); }

    async addFirstNProducts(n) {
        for (let i = 0; i < n; i++) {
            await this.addToCartButtons[i].click();
        }
    }

    async goToCart() {
        await this.cartIcon.click();
    }
}

module.exports = new ProductsPage();