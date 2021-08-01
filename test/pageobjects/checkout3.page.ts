import Page from './page';

class CheckoutCompletePage extends Page {

    get thankYouHeader () { return $('//*[@class="complete-header"]')}
    
}

export default new CheckoutCompletePage();
