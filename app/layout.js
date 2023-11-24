// import Background from "./clientComponent/background";
import "./globals.css";

import dynamic from "next/dynamic";

const Background = dynamic(() => import("./clientComponent/background"));

export const metadata = {
  title: "mr.j portfolio",
  description:
    "mr.j personal portfolio , problem solver experienced in full stack development",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Background />
        {children}
      </body>
    </html>
  );
}
