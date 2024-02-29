'use client'

export default function ColaboradorForm() {

  function handleSubmit(e){
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    //Se for passar fetch para uma API diretamente usa essa linha abaixo
    // fetch('/api/colaborador', { method: form.method, body: formData });

    //Se for usar como objeto, usa essa linha abaixo
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    window.location.href = "/colaborador/dashboard";
  }

  return (
    <div>
      <h1 className="text-xl mb-8 max-w-[400px] text-center">
        Seja bem vindo de volta! <br /> Informe suas{" "}
        <span className="font-semibold text-">CREDENCIAIS</span> para prosseguir{" "}
        <span className="font-semibold text-"></span>
      </h1>
      <div className="flex w-full justify-center">
        <form method="post" onSubmit={handleSubmit} className="w-full flex flex-col gap-2 items-center  max-w-[300px]">
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
              <button type="submit" className="bg-blue-400 py-2 px-6 rounded-xl text-white">
                Entrar
              </button>
          </div>
        </form>
      </div>
    </div>
  );
}
