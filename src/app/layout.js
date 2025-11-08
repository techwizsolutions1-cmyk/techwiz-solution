import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/header";
import Footer from "./components/footer";
import ContextProvider from "./components/contextprovider";
import ContextProvider2 from "./components/contextprovider2";
import ContextProvider3 from "./components/contextprovider3";
import Script from "next/script";

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
  description:
    "Transform your business with TechWiz — Expert Web, and digital marketing services that accelerate growth and drive real-world results.",
  icons: {
    icon: "/favicon.ico",
  },

  // ✅ SEO & Indexing
  metadataBase: new URL("https://techwizpk.com/"),
  alternates: {
    canonical: "https://techwizpk.com",
  },
  robots: {
    index: true,
    follow: true,
  },

  // ✅ Open Graph
  openGraph: {
    title:
      "Empower Your Business Growth with Proven IT & Digital Solutions | TechWiz",
    description:
      "Transform your business with TechWiz — Expert Web, and digital marketing services that accelerate growth and drive real-world results.",
    url: "https://techwizpk.com",
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

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
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
      <head>
        {/* ✅ Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NR4X3NDJ');
          `}
        </Script>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ✅ Microsoft Clarity */}
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);
              t.async=1;
              t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t,y);
            })(window,document,"clarity","script","u28i05mfst");
          `}
        </Script>

        {/* ✅ GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NR4X3NDJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <ContextProvider>
          <ContextProvider2>
            <ContextProvider3>
              <Header />
              {children}
              <Footer />
            </ContextProvider3>
          </ContextProvider2>
        </ContextProvider>
      </body>
    </html>
  );
}
