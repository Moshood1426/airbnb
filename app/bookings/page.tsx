import React from "react";
import { auth } from "@clerk/nextjs/server";

const BookingsPage = async () => {
  await auth.protect();

  return <div>page</div>;
};

export default BookingsPage;
