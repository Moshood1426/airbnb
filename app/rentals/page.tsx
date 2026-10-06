import React from "react";
import { auth } from "@clerk/nextjs/server";

const RentalsPage = async () => {
  await auth.protect();

  return <div>page</div>;
};

export default RentalsPage;
