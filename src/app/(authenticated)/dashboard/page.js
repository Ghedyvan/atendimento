'use client'
import DashboardLayout from "./layout";

export default function Dashboard() {

  if (typeof window !== 'undefined') {
    const item = localStorage.getItem('key')
  }

  const sessionUser = localStorage.getItem("user");
  const user = JSON.parse(sessionUser);
  console.log("Usuário é:", user);

  if(!user) {
    return <div className="w-screen h-screen flex justify-center items-center flex-col gap-4">
      <h1 className="text-[36px]">Acesso restrito!</h1>
      <p className="text-[28px]">Por favor, faça login para acessar a página</p>
    </div>
  }

  return (

      <h1>Bem vindo {user.name}</h1>

  );
}