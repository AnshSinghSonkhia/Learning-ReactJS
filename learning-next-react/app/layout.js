import { Inter } from "next/font/google";
import "./globals.css";
import MyContext from "@/Helper/Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ansh Learning React+Next",
  description: "kya hi description du aapko ;)",
    type: "website",
    keywords: "React, Next, Tailwind, Ansh",
    locale: "en",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body suppressHydrationWarning className={inter.className}>
                {children}
            <MyContext>
            </MyContext>
        </body>
    </html>
  );
}
