import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 py-10 bg-[#f6f4f6]">
      <div className="flex flex-col max-w-5xl mx-auto text-center gap-y-3">
        <p className=" font-bold">© 2023, Change.org, PBC</p>
        <p>
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
