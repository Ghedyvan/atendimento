import Image from "next/image";
import Link from "next/link";

export default function ColaboradorForm() {
  return (
    <div>
      <h1 className="text-xl mb-8 max-w-[400px] text-center">
        Seja bem vindo de volta! <br /> Informe suas{" "}
        <span className="font-semibold text-">CREDENCIAIS</span> para prosseguir{" "}
        <span className="font-semibold text-"></span>
      </h1>
      <div className="flex w-full justify-center">
        <form className="w-full flex flex-col gap-2 items-center  max-w-[300px]">
          <input
            type="number"
            placeholder="Matricula"
            className=" border-blue-400 border-opacity-40 border pl-4 py-2 rounded-xl w-full"
          />
          <input
            type="password"
            placeholder="Senha"
            className=" border-blue-400 border-opacity-40 border pl-4 py-2 rounded-xl w-full"
          />

          {/* ESSE TRECHO ABAIXO DEVE SER DESCOMENTADO QUANDO O BACKEND ESTIVER PRONTO */}

          {/* <div className="w-full flex justSIDEBAify-center">
            <button className="bg-blue-400 py-2 px-6 rounded-xl text-white">
              Entrar
            </button>
          </div> */}
          <div className="w-full flex justify-center">
            <Link
              href={"/colaborador/dashboard"}
              className="mt-2 h-10"
              type="submit"
            >
              <button className="bg-blue-400 py-2 px-6 rounded-xl text-white">
                Entrar
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
