import Image from "next/image";
import Link from "next/link";
import UserSelect from "./components/UserSelect";

export default function Home() {
  return (
    <div className="w-full h-full flex mt-[10%] items-center flex-col">
      <UserSelect />
    </div>
  );
}
