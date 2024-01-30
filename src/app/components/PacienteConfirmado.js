'use client'

import Image from "next/image";
import Link from "next/link";

export default function PacienteConfirmado() {
  return (
    <div className="flex flex-col max-w-[400px]">
      <div className="text-xl mb-12 max-w-[400px] text-center">
        Perfeito, você ingressou na fila! <br />
        <div className="mt-8 font-bold">Sua posição:<br/> <p className="font-bold text-6xl mt-2">14</p></div>
        <p className="mt-8">Posição atual da fila: <span className="font-bold">7</span></p>
      </div>
      <Link href={'/paciente'} className="bg-blue-400 bg-opacity-80 py-2 px-8 text-white rounded-xl text-center" >Concluir</Link>
    </div>
  );
}
