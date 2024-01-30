import "./globals.css";
import Image from "next/image";

export const metadata = {
  title: "OxeMed",
  description: "Sistema para gerenciar atendimentos de centro médico",
  
};

export default function RootLayout({ children }) {




  return (
    <html lang="pt-br">
      <body>
        <main className="bg-blue-400 w-screen h-screen flex justify-center items-center">
          <div className="max-w-[70%] w-full h-full max-h-[70%] bg-white flex flex-col justify-start items-center rounded-3xl">
            { children }   
          </div>
        </main>
      </body>
    </html>
  );
}
