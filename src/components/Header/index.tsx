import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="border-b-2">
      <div className="flex max-w-5xl mx-auto p-4">
        <Link href="/">
          <Image
            priority
            src={"/images/logo.png"}
            alt="logo"
            width={150}
            height={150}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
