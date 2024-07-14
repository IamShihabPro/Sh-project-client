import React, { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { useNavigate } from "react-router-dom";
import { RootState } from "@/redux/store";
import Loader from "@/component/Loader/Loader";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvc: ""
  });
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!cartItems || cartItems.length === 0) {
    return <Loader />;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (paymentMethod === "cod") {
      // Implement COD logic here
      navigate("/success");
    } else if (paymentMethod === "stripe") {
      // Implement Stripe payment logic here
      navigate("/success");
    }
  };

  return (
    <div className="container mx-auto mt-24 p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">

      {/* stripe */}
        {paymentMethod === "stripe" && (
            <div>
              <h2 className="text-2xl font-semibold text-center mb-4">Stripe Payment Details</h2>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={userDetails.cardNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Expiry Date</label>
                <input
                  type="text"
                  name="expiryDate"
                  value={userDetails.expiryDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium">CVC</label>
                <input
                  type="text"
                  name="cvc"
                  value={userDetails.cvc}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
            </div>
        )}

        {/* cod */}

        
        {paymentMethod === "cod" && (
          <div>
             <h2 className="text-2xl font-semibold mb-4 text-center">User Details</h2>
            <div className="mb-4">
          <label className="block mb-2 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            value={userDetails.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Address</label>
          <input
            type="text"
            name="address"
            value={userDetails.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
          </div>
        )}



        

        <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            <input
              type="radio"
              name="paymentMethod"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={handlePaymentChange}
              className="mr-2"
            />
            Cash on Delivery
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            <input
              type="radio"
              name="paymentMethod"
              value="stripe"
              checked={paymentMethod === "stripe"}
              onChange={handlePaymentChange}
              className="mr-2"
            />
            Stripe
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Placing Order..." : "Place Order"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
