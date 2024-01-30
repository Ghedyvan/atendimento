import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-blue-400 w-screen h-screen flex justify-center items-center">
      <div className="max-w-[70%] w-full h-full max-h-[70%] bg-white flex flex-col justify-center items-center rounded-3xl">
        <h1 className="text-xl mb-12">Selecione o <span className="font-semibold text-">tipo de usuário:</span></h1>
        <div className="flex w-full max-w-[450px] justify-between">
          <div className="flex flex-col items-center border-blue-400 border-opacity-40 border p-8 rounded-3xl">
            <Image className="mb-4"
              src={"/assets/pessoa2.svg"}
              alt="Doutor"
              width={130}
              height={130}
            />
            <div className="text-lg">Colaborador</div>
          </div>
          <div className="flex flex-col items-center border-blue-400 border-opacity-40 border p-8 rounded-3xl">
            <Image className="mb-4"
              src={"/assets/pessoa.svg"}
              alt="Paciente"
              width={130}
              height={130}
            />
            <div className="text-lg">Paciente</div>
          </div>
        </div>
      </div>
    </main>
  );
}
