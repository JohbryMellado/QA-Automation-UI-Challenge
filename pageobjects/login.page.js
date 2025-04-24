class LoginPage {
    get inputUsername() { return $(''); }
    get inputPassword() { return $(''); }
    get btnLogin() { return $(''); }
    get menuButton() { return $(''); }
    get logoutLink() { return $(''); }
  
    async open() {
      await browser.url('/');
    }
  
    async login(username, password) {
      await this.inputUsername.setValue(username);
      await this.inputPassword.setValue(password);
      await this.btnLogin.click();
    }
  
    async logout() {
      await this.menuButton.click();
      await $('').waitForClickable();
      await this.logoutLink.click();
    }
}
  
module.exports = new LoginPage();