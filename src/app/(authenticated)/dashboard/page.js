'use client'
import DashboardLayout from "./layout";

export default function Dashboard() {

  const sessionUser = localStorage.getItem("user");
  const user = JSON.parse(sessionUser);
  console.log("Usuário é:", user);

  return (
    <DashboardLayout>
      <h1>Bem vindo {user.name}</h1>
    </DashboardLayout>
  );
}