const I = actor();

module.exports = {

    logo: 'a[class="logo"]',
    searchBox: '#searchText',
    detailSearchLink: 'a[title="Detaylı Arama"]',
    loginLink: 'a[title="Giriş Yap"]',
    signUpLink: 'a[title="Üye Ol"]',
    freeAdLink: '#post-new-classified',
    homePageShowcaseLink: locate('h3').withText('Anasayfa Vitrini'),
    showCaseAdsXpath: '//ul[@class="vitrin-list clearfix"]//li',
    araziSuvPickupLabel: '//ul[@class="categories-left-menu"]//a[@title="Arazi, SUV & Pickup"]',
    motorcycleLabel: '//ul[@class="categories-left-menu"]//a[@title="Motosiklet"]',
    
    checkLogoIsVisible(){
        //checks logo is visible or not.
        I.seeElement(this.logo);
    },

    checkSearchBoxIsVisible(){
        //checks search box is visible or not.
        I.seeElement(this.searchBox);
    },

    checkDetailSearchLinkIsVisible(){
        //checks detail search link button is visible or not.
        I.seeElement(this.detailSearchLink);
    },

    checkLoginLinkIsVisible(){
        //checks login button is visible or not.
        I.seeElement(this.loginLink);
    },

    checkSignUpLinkIsVisible(){
        //checks sign up button is visible or not.
        I.seeElement(this.signUpLink);
    },

    checkFreeAdLinkIsVisible(){
        //checks create free ad button is visible or not.
        I.seeElement(this.freeAdLink);
    },

    checkHomePageShowcaseLinkIsVisible(){
        //checks Anasayfa Vitrini Label is visible or not.
        I.seeElement(this.homePageShowcaseLink);
    },

    checkNumberOfAdsInShowcase(){
        //validation of total ads in homepage is equal to 56
        I.seeNumberOfVisibleElements(this.showCaseAdsXpath,56);
    },

    checkAraziSuvPickupLinkIsVisible(){
        //checks Arazi, SUV & Pickup Link button is visible or not.
        I.seeElement(this.araziSuvPickupLabel);
    },

    checkMotorcycleLinkIsVisible(){
        //checks Motorcycle Link button is visible or not.
        I.seeElement(this.motorcycleLabel);
    },

    clickDetailSearchButton(){
        //wait until clickable detail search button and click
        I.waitForClickable(this.detailSearchLink);
        I.click(this.detailSearchLink);
    },

    setSearchBox(searchData){
        //wait until visible search box input and send keys, press Enter 
        I.waitForVisible(this.searchBox);
        I.fillField(this.searchBox,searchData);
        I.pressKey('Enter');
    }
};

Object.setPrototypeOf(module.exports,class HomePage {}.prototype);