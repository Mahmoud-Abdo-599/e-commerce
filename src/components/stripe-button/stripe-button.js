import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_m96e8DSR0bLrPhRflQIkDX7a00WYYgwBnd';
    const onToken = token => {
        console.log(token);
        alert('payment succeful');  
    }

    return (
        <StripeCheckout 
           label='pay now'
           name='CRWN Clothing Ltd.'
           billingAddress
           shippingAddress
           image= 'http://svgshare.com/i/CUz.svg'
           description={`Yor Total Is $${price}`}
           amount={priceForStripe}
           panelLabel='pay now'
           token={onToken}
           stripeKey={publishablekey}
        />
    )
};

export default StripeCheckoutButton ;