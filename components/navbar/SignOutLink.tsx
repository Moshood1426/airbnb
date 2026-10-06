"use client";

import { SignOutButton } from "@clerk/nextjs";
import { toast } from "@/components/ui/toast";

const SignOutLink = () => {
  const handleLogout = () => {
    toast.add({ description: "You have been signed out." });
  };

  return (
    <SignOutButton redirectUrl="/">
      <button className="w-full text-left" onClick={handleLogout}>
        Logout
      </button>
    </SignOutButton>
  );
};

export default SignOutLink;
