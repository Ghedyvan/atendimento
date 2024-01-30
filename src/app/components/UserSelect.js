import Image from "next/image"
import Link from "next/link"

export default function UserSelect(){
    return(
        <div className="flex flex-col w-full items-center">
            <h1 className="text-xl mb-12">Selecione o <span className="font-semibold text-">tipo de usuário:</span></h1>
        <div className="flex w-full max-w-[450px] justify-between">
          <Link href={'/colaborador'} className="flex flex-col items-center border-blue-400 border-opacity-40 border p-8 rounded-3xl">
            <Image className="mb-4"
              src={"/assets/pessoa2.svg"}
              alt="Doutor"
              width={130}
              height={130}
            />
            <div className="text-lg">Colaborador</div>
          </Link>
          <Link href={'/paciente'} className="flex flex-col items-center border-blue-400 border-opacity-40 border p-8 rounded-3xl">
            <Image className="mb-4"
              src={"/assets/pessoa.svg"}
              alt="Paciente"
              width={130}
              height={130}
            />
            <div className="text-lg">Paciente</div>
          </Link>
        </div>
        </div>
    )
}