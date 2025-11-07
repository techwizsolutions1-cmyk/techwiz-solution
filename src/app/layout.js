import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/header";
import Footer from "./components/footer";
import ContextProvider from "./components/contextprovider";
import Script from "next/script"; // ✅ import Script

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Empower Your Business Growth with Proven IT & Digital Solutions | TechWiz",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://techwizpk.com/"),

  description:
    "Transform your business with TechWiz — Expert Web, and digital marketing services that accelerate growth and drive real-world results.",
  openGraph: {
    title:
      "Empower Your Business Growth with Proven IT & Digital Solutions | TechWiz",
    description:
      "Transform your business with TechWiz — Expert Web, and digital marketing services that accelerate growth and drive real-world results.",
    url: "https://techwiz-solution.vercel.app",
    siteName: "TechWiz Solutions",
    images: [
      {
        url: "/about.avif",
        width: 1200,
        height: 630,
        alt: "TechWiz Solutions Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@techwiz.pk",
    title:
      "Empower Your Business Growth with Proven IT & Digital Solutions | TechWiz",
    description:
      "Transform your business with TechWiz — Expert Web, and digital marketing services that accelerate growth and drive real-world results.",
    images: ["/about.avif"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* ❌ Don’t put Script here — metadata handles head content */}
      <meta name="robots" content="noindex, nofollow" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Microsoft Clarity Script */}
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function (c, l, a, r, i, t, y) {
              c[a] = c[a] || function () {
                (c[a].q = c[a].q || []).push(arguments);
              };
              t = l.createElement(r);
              t.async = 1;
              t.src = "https://www.clarity.ms/tag/" + i;
              y = l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t, y);
            })(window, document, "clarity", "script", "u28i05mfst");
          `}
        </Script>

        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NR4X3NDJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <ContextProvider>
          <Header />
          {children}
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
