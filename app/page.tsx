import { UserButton,SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import nextimg from "../assets/nextjs.png"
import Navbar from "./navbar/page";

export default function Home() {
  return (
    <main>
    <Navbar/>
      <br/>
      <div className="flex justify-center align-middle  "  >
      <Image className=" rounded-[50%] "
      src={nextimg}
      width={400}
      height={400}
      objectFit="cover"
      alt="Picture of the author"
    />
      </div>
      <h1  className="flex justify-center align-middle "> HOME PAGE</h1>
    </main>
  );
}
