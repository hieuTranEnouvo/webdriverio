import homPageUI from "../interfaces/homePageUI"
import abtractsPage from "../commons/AbtractsPage"

class HomePage {

  // Actions
  async navigateToLoginPage() {
    await homPageUI.btnSignIn.click();
    console.log("Sign In Button Is Clicked");
  }
}
export default new HomePage();