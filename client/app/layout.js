import "./globals.css";
import NavBar from "./components/navbar"; 

export const metadata = {
  title: "MiniLinkedIn",
  description: "A simple community platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 font-sans p-4">
        <NavBar />
        <main className="max-w-3xl mx-auto mt-6">{children}</main>
      </body>
    </html>
  );
}