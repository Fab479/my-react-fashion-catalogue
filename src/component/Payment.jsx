import {useState} from 'react';
import axios from 'axios';

function Payment({total}){
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const handlePayment =  async () =>{
        if (!email.trim()){
            alert('Please enter your email address');
            return;
        }
        
        if (!Number.isFinite(total) || total  <= 0){
            alert('Your cart must be greater than zero.');
            return;
        }

        setLoading(true)

        try{
        const response = await axios.post('/api/payment/initialize', {
            email: email.trim(),
            amount: Math.round(total * 100),
        });
        
        const {authorization_url} = response.data;
        if(!authorization_url){
            throw new Error('Paystack checkout URL was not returned');
        }

        window.location.assign(authorization_url);
    }catch (error) {
        console.error(
            'Payment initialization failed',
            error.response?.data || error.message
        );
        alert(
            error.response?.data?.message ||
            'Unable to to initialize payment. please try again'
        );

        setLoading(false);
    }
         };
    
    return(
        <section>
        <h1>make payment</h1>
        <label htmlFor='payment-email'>Email address</label>
        <input
        id='payment-email'
        type='email'
        placeholder='Enter your email'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        />

        <button onClick={handlePayment}
        disabled={loading}>
            {loading? 'processing...' : `Pay ₦${total.toLocaleString('en-NG')}`}
        </button>
        </section>
    );
}

export default Payment