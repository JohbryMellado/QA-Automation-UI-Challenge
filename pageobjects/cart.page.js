class CartPage {
    get cartItems() { return $$(''); }
    get removeButtons() { return $$(''); }

    async removeFirstItem() {
        if (this.removeButtons.length > 0) {
            await this.removeButtons[0].click();
        }
    }
}

module.exports = new CartPage();