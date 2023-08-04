import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

// export const metadata = {
//   title: "Home Page",
//   description: "Home Page Component",
// };

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
}
