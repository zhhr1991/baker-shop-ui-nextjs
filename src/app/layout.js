import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";



export const metadata = {
  title: "Bakery Site",
  description: "Generated a Baker shop site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-[#f5f0e8]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
