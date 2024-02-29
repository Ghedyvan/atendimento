"use client";

import Image from "next/image";

export default function PacienteForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    //Se for passar fetch para uma API diretamente usa essa linha abaixo
    // fetch('/api/paciente', { method: form.method, body: formData });
  

    //Se for usar como objeto, usa essa linha abaixo
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    window.location.href = "/paciente/confirmado";
  }

  return (
    <div>
      <h1 className="text-xl mb-12 max-w-[400px] text-center">
        Seja bem vindo a OxeMed! <br /> Informe seu{" "}
        <span className="font-semibold text-">CPF</span> para prosseguir{" "}
        <span className="font-semibold text-"></span>
      </h1>
      <div className="flex w-full max-w-[300px] justify-between">
        <form
          method="post"
          onSubmit={handleSubmit}
          className="w-full flex gap-2 items-center"
        >
          <input
            type="number"
            name="CPF"
            placeholder="123.456.789-00"
            className=" border-blue-400 border-opacity-40 border pl-4 py-2 rounded-xl w-full"
          />
          <button className="w-10 h-10" type="submit">
            <Image
              src={"/assets/setaDireita.svg"}
              width={40}
              height={40}
              alt="Seta"
              className="bg-blue-400 bg-opacity-40 rounded-full"
            />
          </button>
        </form>
      </div>
    </div>
  );
}
