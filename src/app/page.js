import Image from "next/image";
import Link from "next/link";
import UserSelect from "./components/UserSelect";

export default function Home() {
  return (
    <main className="bg-blue-400 w-screen h-screen flex justify-center items-center">
      <div className="max-w-[70%] w-full h-full max-h-[70%] bg-white flex flex-col justify-start items-center rounded-3xl">
        <div className="w-full h-full flex mt-[10%] items-center flex-col">
          <UserSelect />
        </div>
      </div>
    </main>
  );
}
