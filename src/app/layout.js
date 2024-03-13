import "./globals.css";
import Image from "next/image";

// export const metadata = {
//   title: "OxeMed",
//   description: "Sistema para gerenciar atendimentos de centro médico",
  
// };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        
            { children }   

      </body>
    </html>
  );
}
