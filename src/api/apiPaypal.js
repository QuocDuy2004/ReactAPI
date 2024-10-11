// paypalAPI.js
import axios from 'axios';

export const initiatePayPalPayment = async (orderData) => {
  try {
    const response = await axios.post('/api/paypal/create-payment', orderData);
    return response.data; // Đảm bảo trả về { paymentUrl }
  } catch (error) {
    throw new Error('Error initiating PayPal payment: ' + error.message);
  }
};
