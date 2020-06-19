const { When, Given, Then, After, Before } = require("cucumber");
const LoginPage = require("../pages/login_page");
const Page = require("../support/builder");
let page, loginPage;
Before(async () => {
  page = await Page.build("Desktop");
  loginPage = await new LoginPage(page);
});

After(async () => {
  await page.close();
});

Given(/^I open login page$/, async () => {
  await page.goto("http://zero.webappsecurity.com/login.html");
});

When(/^I fill the login form$/, async () => {
  await loginPage.fillLoginForm("username", "password");
});
When(/^I click on the submit button$/, async () => {
  await loginPage.submitLogin();
});
Then(/^I expect to see application content$/, async () => {
  await loginPage.verifyLogin();
});
