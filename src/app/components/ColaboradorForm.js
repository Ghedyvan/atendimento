"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function ColaboradorForm() {
  const [userId, setUserId] = useState("");
  const router = useRouter();

  const setUserSession = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    router.push("/dashboard");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userIdInt = parseInt(userId);

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = response.data;
      console.log("Data:", userId);
      const user = users.find((user) => user.id === userIdInt);
      console.log("User:", user);
      if (user) {
        console.log("User found:", user);

        setUserSession(user);
      } else {
        console.log("User not found");
        alert("Usuário não encontrado");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <div>
      <h1 className="text-xl mb-8 max-w-[400px] text-center">
        Seja bem vindo de volta! <br /> Informe suas{" "}
        <span className="font-semibold text-">CREDENCIAIS</span> para prosseguir{" "}
        <span className="font-semibold text-"></span>
      </h1>
      <div className="flex w-full justify-center">
        <form
          action=""
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
          className="w-full flex flex-col gap-2 items-center  max-w-[300px]"
        >
          <input
            name="matricula"
            type="number"
            placeholder="Matricula"
            className=" border-blue-400 border-opacity-40 border pl-4 py-2 rounded-xl w-full"
          />
          <input
            name="senha"
            type="password"
            placeholder="Senha"
            className=" border-blue-400 border-opacity-40 border pl-4 py-2 rounded-xl w-full"
          />
          <div className="w-full flex justify-center">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-400 py-2 px-6 rounded-xl text-white"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
