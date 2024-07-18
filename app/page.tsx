import Image from "next/image";
import Link from "next/link";
import AvatarImage from "@/public/avatar-jessica.jpeg";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center flex-col gap-4 justify-center bg-grey-900">
      <article className="bg-grey-800 w-[370px] rounded-2xl flex flex-col items-center justify-center p-8 gap-0">
        <Image
          src={AvatarImage}
          width={80}
          height={80}
          alt="avatar"
          className="rounded-full mb-6"
        />
        <h1 className="font-[700] text-[22px]">Jessica Randall</h1>
        <h2 className="text-green font-[600] text-[13px]">
          London, United Kingdom
        </h2>
        <p className="font-[400] text-[14px] my-6">
          "Front-end developer and avid reader."
        </p>
        <ul className="w-full space-y-4">
          {[
            "GitHub",
            "Frontend Master",
            "LinkedIn",
            "Twitter",
            "Instagram",
          ].map((element: string, index: number) => (
            <li
              key={index}
              className="bg-grey-700 text-center p-3 font-[600] text-[14px] rounded-md hover:bg-green hover:text-grey-900 cursor-pointer transition-colors"
            >
              {element}
            </li>
          ))}
        </ul>
      </article>
      <footer className="text-[11px] text-center text-white">
        Challenge by{" "}
        <Link
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </Link>
        . Coded by{" "}
        <Link
          href="https://www.frontendmentor.io/profile/mw-138"
          target="_blank"
        >
          mw-138
        </Link>
        .
      </footer>
    </main>
  );
}
