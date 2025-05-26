import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AnnouncementBanner from "../components/announcement-banner";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-squirrel-neutral-900 antialiased">
        <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-20">
            <Navbar />
            <AnnouncementBanner />
          </header>
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
