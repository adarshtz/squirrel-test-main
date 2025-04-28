import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-squirrel-neutral-900 antialiased ">
        <Navbar />
        <main className="pt-16 ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
