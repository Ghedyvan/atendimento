import ColaboradorForm from "../components/ColaboradorForm";
import Image from "next/image";

export default function Paciente() {
  return (
    <>
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
    </>
  );
}
