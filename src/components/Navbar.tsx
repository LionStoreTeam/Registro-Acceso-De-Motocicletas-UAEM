import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image";

async function Navbar() {
  const session = await getServerSession(authOptions);
  // console.log(session);

  return (
    <nav className="bg-[#001660] w-full">
      <div className="flex p-4 justify-around container mx-auto">
        <h1 className="pt-4 font-bold text-xl text-slate-200 cursor-default">
          Registro de Motocicletas UAEM
        </h1>

        <ul className="flex gap-x-2 justify-center items-center">
          {!session ? (
            <>
              <li className="px-3 py-1">
                <Image
                  src="/uaem-tag-icon.png"
                  width={70}
                  height={70}
                  alt="logo"
                  priority
                />
              </li>
            </>
          ) : (
            <>
              <li className="px-3 py-4 text-slate-200">
                <Link href="/api/auth/signout">Cerrar Sesión</Link>
                {/* <button onClick={() => signOut()}>Cerrar Sesión</button> */}
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
