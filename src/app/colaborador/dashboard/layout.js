import "../../globals.css";
import Image from "next/image";

export const metadata = {
  title: "OxeMed",
  description: "Sistema para gerenciar atendimentos de centro médico",
  
};

export default function DashboardLayout({ children }) {

  return (
    <html lang="pt-br">
      <nav>
        <div className="flex justify-between items-center bg-blue-500 p-4">
          <div className="flex items-center space-x-4">
           
            <h1 className="text-white text-2xl">OxeMed</h1>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/colaborador/dashboard" className="text-white">Dashboard</a>
            <a href="/colaborador/dashboard/atendimentos" className="text-white">Atendimentos</a>
            <a href="/colaborador/dashboard/consultas" className="text-white">Consultas</a>
            <a href="/colaborador/dashboard/relatorios" className="text-white">Relatórios</a>
            <a href="/colaborador/dashboard/ajuda" className="text-white">Ajuda</a>
            <a href="/colaborador/dashboard/configuracoes" className="text-white">Configurações</a>
            <a href="/colaborador/dashboard/sair" className="text-white">Sair</a>
          </div>
        </div>
      </nav>
      <body>
        
      </body>
    </html>
  );
}
