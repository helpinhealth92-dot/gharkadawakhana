import "./globals.css";
import { CartProvider } from "./context/CartContext";


export const metadata = {
  title: "گھر کا دَواخانہ",
  description: "قدرتی جڑی بوٹیاں اور ہربل مصنوعات",
};


export default function RootLayout({ children }) {

  return (

    <html lang="ur" dir="rtl">

      <body>

        <CartProvider>
          {children}
        </CartProvider>

      </body>

    </html>

  );

}
