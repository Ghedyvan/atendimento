import "./globals.css";
import { Providers } from "./providers";
import Image from "next/image";

// export const metadata = {
//   title: "OxeMed",
//   description: "Sistema para gerenciar atendimentos de centro médico",

// };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="light">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
