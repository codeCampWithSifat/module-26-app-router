import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "Home Page",
  description: "Home Page Component",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <div className=" bg-rose-100">
          {" "}
          <Navbar />{" "}
        </div> */}
        <div className="min-h-screen">{children}</div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
