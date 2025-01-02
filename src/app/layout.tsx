import type { Metadata } from "next";
import "./globals.css";
// import '@fontsource/poppins/400.css'; 
// import '@fontsource/poppins/500.css';
// import '@fontsource/poppins/600.css';
// import '@fontsource/poppins/700.css'; 
import ResponsiveAppBar from "@/components/navbar/ResponsiveAppBar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Club Management",
  description: "College project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <ResponsiveAppBar isAuthenticated={true} />

        {children}
        <Footer />

      </body>
    </html>
  );
}
