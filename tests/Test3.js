/*
    * Test 3 performs quick search.
    * Using CodeceptJS Data Driven functionality.
*/

Feature('Quick Search Test');

let motorcycles = new DataTable(['type']);
motorcycles.add(['Yamaha MT07']);
motorcycles.add(['Yamaha MT09']);
motorcycles.add(['Yamaha MT25']);


Data(motorcycles).Scenario('Search With Data Driven Model', ({ I,homePage,quickSearchPage,current}) => {
    I.amOnPage('/');
    homePage.setSearchBox(current.type);
    quickSearchPage.clickMotorcycleOption();
    quickSearchPage.checkNumberOfResultsInTable();
});
