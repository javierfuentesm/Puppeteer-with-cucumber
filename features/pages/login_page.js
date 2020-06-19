class LoginPage {
  constructor(page) {
    this.page = page;
  }
  async fillLoginForm(user_id, user_password) {
    await this.page.waitAndType("#user_login", user_id);
    await this.page.waitAndType("#user_password", user_password);
  }
  async submitLogin() {
    await this.page.waitAndClick(".btn-primary");
  }
  async verifyLogin() {
    await this.page.waitFor(5000);
  }
}
module.exports = LoginPage;
