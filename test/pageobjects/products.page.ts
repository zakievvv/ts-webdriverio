import Page from './page';

class ProductsPage extends Page {

    get burgerButton () { return $('#react-burger-menu-btn') }
    get backpackAddToCartButton () { return $('//*[@id="add-to-cart-sauce-labs-backpack"]')}
    get allAddToCartButtons () { return $$('//*[@class="btn btn_primary btn_small btn_inventory"]')}
    get allItemsPrices () { return $$('//*[@class="inventory_item_price"]')}
    get cartButton () { return $('//*[@class="shopping_cart_link"]')}
    get cartBadge () { return $('//*[@class="shopping_cart_badge"]')}
    
    async addBackpackToCart () {
        await (await this.backpackAddToCartButton).click();
    }

    async openCart () {
        await (await this.cartButton).click();
    }

    async addAllToCart () {
        (await this.allAddToCartButtons).forEach(function(el) {
            el.click();
        });
    }

    async getAllItemsPrices () {
        var expectedTotalPrice = 0.00;
        (await this.allItemsPrices).forEach(function(el) {
            el.getText().then((text) => {
                console.log("Item price: " + parseFloat(text.replace('$', '')));
                var temp = text.replace('$', '');
                expectedTotalPrice = expectedTotalPrice + parseFloat(temp);
                console.log("expectedTotalPrice: " + expectedTotalPrice);
            });
            
        });
        console.log("expectedTotalPrice: " + expectedTotalPrice);
        return expectedTotalPrice;
    }
}

export default new ProductsPage();
