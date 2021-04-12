
const I = actor();

module.exports = {

    motorcycleLabel: '//a[@data-category="3517" and contains(text(),"Motosiklet")]',
    searchResultsTableCount: '//tbody[@class="searchResultsRowClass"]//tr',
    afterSearchAdsCountLabel: '(//div[@class="result-text estimated-result-text"]//span)[3]',
   
    async clickMotorcycleOption(){
        // when you search motorcycle, there is an additional page comes up before the results,
        // in order to pass that page, this method is implemented
        let numberOfElement = await I.grabNumberOfVisibleElements(this.motorcycleLabel);
        if(numberOfElement > 0){
            I.waitForClickable(this.motorcycleLabel);
            I.click(this.motorcycleLabel);
        }
    },

    async checkNumberOfResultsInTable(){
        // shows how many ads shows in result page
        let numberOfResult = await I.grabNumberOfVisibleElements(this.searchResultsTableCount);
        I.say("Toplam Sonuç: " + await I.grabTextFrom(this.afterSearchAdsCountLabel));

        if(numberOfResult > 0){
            I.say("Arama işlemi sonucunda ilanlar ekranda gösterilmektedir..");
        }
        else {
            I.say("Arama sonucunda ilan bulunamamıştır..");
        }
    }
};

Object.setPrototypeOf(module.exports,class QuickSearchPage {}.prototype);