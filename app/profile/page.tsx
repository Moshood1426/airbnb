import React from "react";
import { auth } from "@clerk/nextjs/server";

const ProfilePage = async () => {
  await auth.protect();

  return <div>page</div>;
};

export default ProfilePage;
