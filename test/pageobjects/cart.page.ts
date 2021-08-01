import Page from './page';

class CartPage extends Page {

    get cartItemsNames () { return $('//*[@class="inventory_item_name"]')}
    get checkoutButton () { return $('#checkout') }
    
    async getCartItemNameText () {
        await this.cartItemsNames.getText();
    }


    async clickCheckoutButton () {
        await (await this.checkoutButton).click();
    }

}

export default new CartPage();
