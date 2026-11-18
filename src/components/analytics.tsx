"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

export function Analytics() {
  const [consent, setConsent] = useState<"accepted" | "declined" | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("analytics-consent");
    queueMicrotask(() => {
      if (saved === "accepted" || saved === "declined") setConsent(saved);
      setReady(true);
    });

    const handleCheckoutClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;
      if (link.href.includes("kiwify")) {
        const currentConsent = window.localStorage.getItem("analytics-consent");
        if (currentConsent !== "accepted") return;
        const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
        gtag?.("event", "begin_checkout", {
          item_name: siteConfig.productName,
        });
        const fbq = (window as typeof window & { fbq?: (...args: unknown[]) => void }).fbq;
        fbq?.("track", "InitiateCheckout");
      }
    };
    document.addEventListener("click", handleCheckoutClick);
    return () => document.removeEventListener("click", handleCheckoutClick);
  }, []);

  const chooseConsent = (value: "accepted" | "declined") => {
    window.localStorage.setItem("analytics-consent", value);
    setConsent(value);
  };

  return (
    <>
      {consent === "accepted" && siteConfig.analytics.ga4Id ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.ga4Id}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${siteConfig.analytics.ga4Id}');
            `}
          </Script>
        </>
      ) : null}
      {consent === "accepted" && siteConfig.analytics.metaPixelId ? (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
            s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
            (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init','${siteConfig.analytics.metaPixelId}');
            fbq('track','PageView');
          `}
        </Script>
      ) : null}
      {ready && consent === null ? (
        <aside
          role="dialog"
          aria-label="Consentimento de cookies"
          className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl sm:left-auto sm:right-6 sm:w-[420px]"
        >
          <p className="font-black text-slate-950">Privacidade e cookies</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Podemos utilizar tecnologias de análise para melhorar a experiência. Você pode aceitar ou recusar.
          </p>
          <div className="mt-4 flex gap-3">
            <button type="button" className="rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white" onClick={() => chooseConsent("accepted")}>
              Aceitar
            </button>
            <button type="button" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700" onClick={() => chooseConsent("declined")}>
              Recusar
            </button>
          </div>
        </aside>
      ) : null}
    </>
  );
}
