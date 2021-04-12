
/*
    * Test 2 performs detail search.
    * Validate result message with expected message and applied CodeceptJS functionalities.
*/

Feature('Detail Search Test');

Scenario('Search Function Control', ({ I,homePage,searchPage}) => {
    I.amOnPage('/');
    homePage.clickDetailSearchButton();
    searchPage.selectCategory('Vasıta');
    searchPage.selectCategory('Motosiklet');
    searchPage.selectCategory('Yamaha');
    searchPage.selectCategory('MT-07 ABS');
    searchPage.setMinYear(1998);
    searchPage.setMaxYear(1999);
    searchPage.selectColour('Gri');
    searchPage.selectSecurityOption('Çekiş Kontrolü');
    searchPage.clickSearchButton();
    searchPage.validateSearchResultMessage('Arama filtrelerinize uygun ilan bulunamadı.');
});
