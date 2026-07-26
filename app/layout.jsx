import "./globals.css";
import { CartProvider } from "./context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "گھر کا دَواخانہ | قدرتی جڑی بوٹیاں اور ہربل مصنوعات",
  description:
    "گھر کا دَواخانہ پر خالص جڑی بوٹیاں، ہربل پاؤڈر، قدرتی تیل اور حکمت سے متعلق مصنوعات حاصل کریں۔",
  keywords: [
    "گھر کا دَواخانہ",
    "جڑی بوٹیاں",
    "ہربل مصنوعات",
    "ہلدی پاؤڈر",
    "کلونجی",
    "قدرتی علاج"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ur" dir="rtl">
      <body>

        <CartProvider>

          <Navbar />

          {children}

          <Footer />

        </CartProvider>

      </body>
    </html>
  );
}
