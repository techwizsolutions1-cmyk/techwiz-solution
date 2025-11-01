import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ContextProvider from "./components/contextprovider";
import Header from "./components/header";
import Footer from "./components/footer";
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

  openGraph: {
    title:
      "Empower Your Business Growth with Proven IT & Digital Solutions | TechWiz",
    description:
      "Transform your business with TechWiz — Expert Web, and digital marketing services that accelerate growth and drive real-world results.",
    url: "https://techwiz-solution.vercel.app",
    siteName: "TechWiz Solutions",
    images: [
      {
        url: "https://techwiz-solution.vercel.app/images/preview.jpg",
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
      "Empower Your Business Growth with Proven IT & Digital Solutions | Tech",
    description:
      "Transform your business with TechWiz — Expert Web, and digital marketing services that accelerate growth and drive real-world results.",
    images: ["https://techwiz-solution.vercel.app/images/preview.jpg"],
  },
};

// Wrap everything in ContextProvider
export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <meta name="robots" content="noindex, nofollow" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ContextProvider>
          <Header/>
          {children}
          <Footer/>
        </ContextProvider>
      </body>
    </html>
  );
}
