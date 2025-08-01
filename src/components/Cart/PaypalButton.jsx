import React from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const PaypalButton = ({ amount = "100", onSuccess, onError }) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": "ASKW6IKSu6oxIRlhAbupkYwpc4TOiB7xesdHcHUqpRaYKib5OPnsXb2B05xQKllTeLvywJIpFsI7TGjP",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount.toString(), // must be string
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(onSuccess);
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalButton;
