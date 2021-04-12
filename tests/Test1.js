
/*
   * Test 1 performs the required validations on the homepage. 
*/

Feature('HomePage Validation Test');

Scenario('Main Elements Visibility Control', ({ I,homePage}) => {
    I.amOnPage('/');
    homePage.checkLogoIsVisible();
    homePage.checkSearchBoxIsVisible();
    homePage.checkDetailSearchLinkIsVisible();
    homePage.checkLoginLinkIsVisible();
    homePage.checkSignUpLinkIsVisible();
    homePage.checkFreeAdLinkIsVisible();
    homePage.checkHomePageShowcaseLinkIsVisible();
    homePage.checkNumberOfAdsInShowcase();
    homePage.checkAraziSuvPickupLinkIsVisible();
    homePage.checkMotorcycleLinkIsVisible();
});
