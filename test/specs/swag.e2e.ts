const expectChai = require('chai').expect;
import LoginPage from  '../pageobjects/login.page';
import ProductsPage from '../pageobjects/products.page';
import CartPage from '../pageobjects/cart.page';
import CheckoutPage from '../pageobjects/checkout.page';
import CheckoutOverviewPage from '../pageobjects/checkout2.page';
import CheckoutCompletePage from '../pageobjects/checkout3.page';


describe('Sample Test', () => {
    it('1. Verify login ', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(ProductsPage.burgerButton).toBeExisting();
    });

    it('2. Verify add to cart', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(ProductsPage.burgerButton).toBeExisting();
        await ProductsPage.addBackpackToCart();
        await expect(ProductsPage.cartBadge).toBeExisting();
        await ProductsPage.openCart();
        await expect(CartPage.cartItemsNames).toBeExisting();
        CartPage.getCartItemNameText().then((text)=>{ 
            expect(text).toEqual('Sauce Labs Backpack')
        });
    });

    it.only('3. Verify all items order', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await ProductsPage.addAllToCart();
        const expectedTotalPriceWoTax = await ProductsPage.getAllItemsPrices();
        console.log("Expected expectedTotalPriceWoTax:" + expectedTotalPriceWoTax) 
        await ProductsPage.openCart();
        await CartPage.clickCheckoutButton();
        await CheckoutPage.input('Test', 'Test', '78660')
        await expect(await CheckoutOverviewPage.getItemsPrice()).toHaveValue(129.94); // this is not working as designed yet
        await expect(await CheckoutOverviewPage.getTotalPrice()).toHaveValue(expectedTotalPriceWoTax+3.20); // this is not working as designed yet
        await CheckoutOverviewPage.clickFinish();
        await expect(CheckoutCompletePage.thankYouHeader).toBeExisting();
    });
});


