import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for React Router v6+
import { StoreContext } from '../../context/StoreContext';

const CheckoutPage = () => {
  const { cartItems,setCartItems } = useContext(StoreContext);
  const navigate = useNavigate(); // Use useNavigate hook for redirection

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false); // To track order success

  const calculateTotal = () => {
    return Object.keys(cartItems).reduce((total, itemID) => {
      const item = cartItems[itemID];
      const price = parseFloat(item.price.replace('₹', ''));
      return total + price * item.quantity;
    }, 0);
  };

  const validateForm = () => {
    const errors = {};
    if (!formValues.firstName) errors.firstName = 'First name is required.';
    if (!formValues.lastName) errors.lastName = 'Last name is required.';
    if (!formValues.email || !/\S+@\S+\.\S+/.test(formValues.email))
      errors.email = 'A valid email address is required.';
    if (!formValues.street) errors.street = 'Street address is required.';
    if (!formValues.city) errors.city = 'City is required.';
    if (!formValues.state) errors.state = 'State is required.';
    if (!formValues.zipCode || !/^\d+$/.test(formValues.zipCode))
      errors.zipCode = 'A valid zip code is required.';
    if (!formValues.country) errors.country = 'Country is required.';
    if (!formValues.phone || !/^\d{10}$/.test(formValues.phone))
      errors.phone = 'A valid phone number is required.';
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const processPayment = async () => {
    setIsProcessing(true);

    // Simulating payment process
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true); // Simulate payment success
      }, 2000); // Simulate a delay of 2 seconds
    });
  };

  const handleSubmit = async () => {
    const errors = validateForm();
    setFormErrors(errors);
    setCartItems({})

    if (Object.keys(errors).length === 0) {
      if (selectedPayment) {
        try {
          const paymentSuccess = await processPayment();
          setIsProcessing(false);

          if (paymentSuccess) {
            setOrderPlaced(true); // Set orderPlaced state to true upon successful order
            setTimeout(() => {
              navigate('/'); // Redirect to home page after 5 seconds
            }, 5000);
          } else {
            alert('Payment failed. Please try again.');
          }
        } catch (error) {
          setIsProcessing(false);
          alert('An error occurred during payment processing.');
        }
      } else {
        alert('Please select a payment method.');
      }
    }
    //  else {
    //   alert('Please fix the errors in the form.');
    // }
  };

  return (
    <div className="container mx-auto px-4 py-12 mt-10">
      {/* Progress Bar */}
      <div className="hidden md:flex justify-between items-center mb-8 ">
        {['Cart', 'Delivery Information', 'Payment', 'Order Placed'].map((label, index) => (
          <div
            key={index}
            className={`flex-1 flex items-center ${
              index <= (orderPlaced ? 3 : 2) ? 'text-orange-500' : 'text-gray-500'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex justify-center items-center ${
                index <= (orderPlaced ? 3 : 2) ? 'bg-orange-500 text-white' : 'bg-gray-300'
              }`}
            >
              {index + 1}
            </div>
            <div className="flex-1 h-1 bg-gray-300 mx-2">
              {index <= (orderPlaced ? 4 : 1) && <div className="h-1 bg-orange-500 w-full"></div>}
            </div>
            <span className="text-sm">{label}</span>
          </div>
        ))}
      </div>

      {orderPlaced ? (
        <div className="text-center mt-8">
          <h2 className="text-2xl font-bold text-green-500">Order Placed Successfully!</h2>
          <p className="text-lg text-gray-600">You will be redirected to the homepage shortly...</p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column: Delivery Information */}
          <div className="col-span-2  bg-white border rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Delivery Information</h2>
            <form>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'firstName', placeholder: 'First name' },
                  { name: 'lastName', placeholder: 'Last name' },
                  { name: 'email', placeholder: 'Email address', colSpan: 2 },
                  { name: 'street', placeholder: 'Street', colSpan: 2 },
                  { name: 'city', placeholder: 'City' },
                  { name: 'state', placeholder: 'State' },
                  { name: 'zipCode', placeholder: 'Zip Code' },
                  { name: 'country', placeholder: 'Country' },
                  { name: 'phone', placeholder: 'Phone', colSpan: 2 },
                ].map(({ name, placeholder, colSpan }) => (
                  <div key={name} className={`col-span-${colSpan || 1}`}>
                    <input
                      type="text"
                      name={name}
                      placeholder={placeholder}
                      value={formValues[name]}
                      onChange={handleInputChange}
                      className={`border ${
                        formErrors[name] ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg p-3 w-full`}
                    />
                    {formErrors[name] && (
                      <span className="text-sm text-red-500">{formErrors[name]}</span>
                    )}
                  </div>
                ))}
              </div>
            </form>
          </div>

          {/* Right Column: Product Summary */}
          <div className="bg-white border rounded-lg shadow-md p-6 col-span-2 lg:col-span-1">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
            <div className="space-y-4">
              {Object.keys(cartItems).map((itemID) => {
                const item = cartItems[itemID];
                return (
                  <div key={itemID} className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-md object-cover"
                    />
                    <div className="flex-1 ">
                      <h3 className="text-gray-800 font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-gray-800 font-medium">₹{item.price}</p>
                  </div>
                );
              })}
            </div>
            <hr className="my-4" />
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-medium">₹{calculateTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Delivery Fee:</span>
              <span className="font-medium">₹40.00</span>
            </div>
            <div className="flex justify-between items-center text-lg font-bold mt-4">
              <span>Total:</span>
              <span>₹{(calculateTotal() + 40).toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}

      {/* Payment Section */}
      {!orderPlaced && (
        <div className="mt-8 bg-white border rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Payment Options</h2>
          <div className="space-y-4">
            {['Credit Card', 'Debit Card', 'Google Pay', 'Cash on Delivery'].map((option, index) => (
              <label key={index} className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="payment"
                  value={option}
                  onChange={() => setSelectedPayment(option)}
                  className="h-5 w-5 text-orange-500"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Place Order Button */}
      {!orderPlaced && (
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={isProcessing}
            className={`py-3 px-6 rounded-lg ${
              isProcessing
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-orange-500 hover:bg-orange-600 text-white'
            }`}
          >
            {isProcessing ? 'Processing...' : 'Place Order'}
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
