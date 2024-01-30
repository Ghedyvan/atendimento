import Image from "next/image";
import Link from "next/link";

export default function PacienteForm(){
    return(
        <div>
            <h1 className="text-xl mb-12 max-w-[400px] text-center">
            Seja bem vindo a OxeMed! <br/> Informe seu{" "}
            <span className="font-semibold text-">CPF</span> para prosseguir{" "}
            <span className="font-semibold text-"></span>
          </h1>
          <div className="flex w-full max-w-[300px] justify-between">
            <form className="w-full flex gap-2 items-center">
              <input
                type="number"
                placeholder="123.456.789-00"
                className=" border-blue-400 border-opacity-40 border pl-4 py-2 rounded-xl w-full"
              />
              {/* <button className="w-10 h-10" type="submit">
                <Image
                  src={"/assets/setaDireita.svg"}
                  width={40}
                  height={40}
                  alt="Seta"
                  className="bg-blue-400 bg-opacity-40 rounded-full"
                />
              </button> */}
              <Link href={'/paciente/confirmado'} className="w-10 h-10" type="submit">
                <Image
                  src={"/assets/setaDireita.svg"}
                  width={40}
                  height={40}
                  alt="Seta"
                  className="bg-blue-400 bg-opacity-40 rounded-full mt-[2px]"
                />
              </Link>
            </form>
          </div>
        </div>
    )
}