
const I = actor();
const assert = require('assert');

module.exports = {
    minYearInput: '//input[@placeholder="Min Yıl"]',
    maxYearInput: '//input[@placeholder="Max Yıl"]',
    colourLabel: '//tbody/tr[12]/td[@class="second"]//dd[@class="collapseContent"]//span[1]',
    securityCheckbox: '#a106200',
    searchButton: '//button[@value="Arama Yap"]',
    searchResultMessageLabel: '#saveSearchResult',
   
    selectCategory(searchCategory){
        // selects given category in detail search page
        I.scrollTo(locate('span').withText(searchCategory));
        I.waitForVisible(locate('span').withText(searchCategory));
        I.waitForClickable(locate('span').withText(searchCategory));
        I.click(locate('span').withText(searchCategory));
    },

    setMinYear(minYear){
        // set minumum year criteria
        I.scrollTo(this.minYearInput)
        I.waitForVisible(this.minYearInput);
        I.fillField(this.minYearInput,minYear);
    },

    setMaxYear(maxYear){
        // set maximum year criteria
        I.waitForVisible(this.maxYearInput);
        I.fillField(this.maxYearInput,maxYear);
    },

    selectColour(colourOption){
        // set colour criteria
        I.scrollTo(this.colourLabel);
        I.waitForClickable(this.colourLabel);
        I.click(this.colourLabel);
        I.click(locate('label').withText(colourOption));
    },

    selectSecurityOption(securityOption){
        // set security option criteria
        I.waitForClickable(locate('label').withText(securityOption));
        I.click(locate('label').withText(securityOption))
        I.seeCheckboxIsChecked(this.securityCheckbox);
    },

    clickSearchButton(){
        // wait until clickable search button and click
        I.waitForClickable(this.searchButton);
        I.click(this.searchButton);
    },
    
    async validateSearchResultMessage(expectedMessage) {
        // validates result actual message with expected message
        I.waitForVisible(this.searchResultMessageLabel,10);
        var actualMessage = await I.grabTextFrom(this.searchResultMessageLabel);
        assert.strictEqual(actualMessage,expectedMessage);
    }
};

Object.setPrototypeOf(module.exports,class SearchPage {}.prototype);