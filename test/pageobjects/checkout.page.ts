import Page from './page';

class CheckoutPage extends Page {

    get inputFirstname () { return $('#first-name')}
    get inputLastname () { return $('#last-name') }
    get inputZipcode () { return $('#postal-code') }
    get continueButton () { return $('#continue') }
    
    async input (firstname: string, lastname: string, zipcode: string) {
        await (await this.inputFirstname).setValue(firstname);
        await (await this.inputLastname).setValue(lastname);
        await (await this.inputZipcode).setValue(zipcode);
        await (await this.continueButton).click();
    }


}

export default new CheckoutPage();
