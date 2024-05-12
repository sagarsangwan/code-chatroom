import Image from "next/image";
import Googlelogin from "./googlelogin";
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Googlelogin />


    </main>
  );
}
