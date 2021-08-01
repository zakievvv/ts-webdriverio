import Page from './page';

class CheckoutOverviewPage extends Page {

    get itemsPrice () { return $('//*[@class="summary_subtotal_label"]')}
    get totalPrice () { return $('//*[@class="summary_total_label"]')}
    get finish () { return $('#finish') }
    
    async getItemsPrice () {
        var finalValue;
        (await this.itemsPrice).getText().then((text) => {
            console.log("itemsPrice: " + parseFloat(text.replace('Item total: $', '')));
            finalValue = parseFloat(text.replace('Item Total: $', ''));
        });
        return finalValue
    }

    async getTotalPrice () {
        var finalValue;
        (await this.totalPrice).getText().then((text) => {
            console.log("totalPrice: " + parseFloat(text.replace('Total: $', '')));
            finalValue = parseFloat(text.replace('Total: $', ''));
        });
        return finalValue
    }
    
    async clickFinish () {
        await (await this.finish).click();
    }

}

export default new CheckoutOverviewPage();
