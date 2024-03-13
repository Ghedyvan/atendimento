"use client";

import Image from "next/image";
import { Button } from "@nextui-org/react";
import "../../globals.css";
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";

export default function DashboardLayout({ children }) {

  const sessionUser = localStorage.getItem("user");
  const user = JSON.parse(sessionUser);
  console.log("Usuário é:", user);

  const fecharSessao = () => {
    localStorage.removeItem("user");
    window.location.href = "/colaborador";
  }

  if (typeof window !== 'undefined') {
    const item = localStorage.getItem('key')
  }

  if(!user) {
    return <div className="w-screen h-screen flex justify-center items-center flex-col gap-4">
      <h1 className="text-[36px]">Acesso restrito!</h1>
      <p className="text-[28px]">Por favor, faça login para acessar a página</p>
    </div>
  }

  return (
    <section>
      <Navbar isBordered className="bg-[#fafcfb]" >
      <NavbarBrand>
        <Image src={'/assets/oxemed.png'} width={100} height={100} alt="Logo"/>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link color="foreground" aria-current="page" href="#">
            Início
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="#" color="foreground">
            Pacientes
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Agendamentos
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Olá</p>
              <p className="font-semibold">{user.name}</p>
            </DropdownItem>
            <DropdownItem key="settings">Meu perfil</DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={fecharSessao}>
              Sair
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
    <div className="w-full mx-auto max-w-[1024px] px-[1.5rem]">

      {children}
    
    </div>
      
    </section>
  );
}
