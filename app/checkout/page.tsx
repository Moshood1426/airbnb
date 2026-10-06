import React from "react";
import { auth } from "@clerk/nextjs/server";

const CheckoutPage = async () => {
  await auth.protect();
  
  return <div>page</div>;
};

export default CheckoutPage;
