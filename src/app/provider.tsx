"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Script from "next/script";
import React, { ReactNode, createContext, useEffect, useState } from "react";

export function Providers({ children }: { children: ReactNode }) {
  const [hostname, setHostname] = useState<string | null>(null);

  useEffect(() => {
    const currentUrl = window.location.hostname;

    if (currentUrl) {
      setHostname(currentUrl);
    }
  }, []);

  const Script1 = () => {
    return (
      <>
        {/* <!-- Meta Pixel Code --> 1 */}
        <Script id="show-Pixel 1">
          {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '333048769297986');
              fbq('track', 'PageView');
          `}
        </Script>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=333048769297986&ev=PageView&noscript=1"
        />
      </>
    );
  };

  const scripts = () => {
    switch (true) {
      case hostname === "changeinfo.online":
        return Script1();
      case hostname === "localhost":
        return Script1();
      default:
        return null;
    }
  };

  return (
    <>
      {hostname && scripts()}
      {children}
    </>
  );
}
