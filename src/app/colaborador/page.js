import ColaboradorForm from "../components/ColaboradorForm";
import Image from "next/image";

export default function Paciente() {
  return (
    <main className="bg-blue-400 w-screen h-screen flex justify-center items-center">
          <div className="max-w-[70%] w-full h-full max-h-[70%] bg-white flex flex-col justify-start items-center rounded-3xl">
      <Image
        className="pt-[5%]"
        src={"/assets/oxemed.png"}
        alt="Logo Oxemed"
        width={400}
        height={100}
      />
      <div className="w-full h-full flex mt-[10%] items-center flex-col">
        <ColaboradorForm />
      </div>
      </div>
      </main>

  );
}
