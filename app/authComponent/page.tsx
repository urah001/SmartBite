import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Auth = () => {
  return (
    <header className="flex-row sticky justify-end">
      <Button asChild className="ml-4">
        <Link href={"/protected"}>login</Link>
      </Button>
      <Button asChild className="ml-4">
        <Link href={"/signup"}>signup</Link>
      </Button>
    </header>
  );
};

export default Auth;
