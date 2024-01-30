import PacienteConfirmado from "@/app/components/PacienteConfirmado";
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
      <div className="w-full h-full flex pt-10 items-center flex-col">
        <PacienteConfirmado />
      </div>
    </>
  );
}
