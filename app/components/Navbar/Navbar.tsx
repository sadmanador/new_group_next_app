"use client";
import Link from "next/link";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <>
      <nav
        className={`px-2 md:px-8 lg:px-16 global-font bg-slate-400 md:shadow-none z-50 fixed top-0 w-full  ${
          openMenu && "shadow-2xl shadow-neutral-300"
        }`}
      >
        {/* Large Device */}
        <div className="flex justify-between items-center py-4">
          <Link href="/" onClick={() => setOpenMenu(false)}>
            <h1 className="text-3xl font-bold">Filmzy</h1>
          </Link>
          <div>
            <ul className="md:flex hidden font-medium gap-4 lg:gap-10">
              <li className="hover:scale-105 transition">
                <Link href="/sakib">Sakib</Link>
              </li>
              <li className="hover:scale-105 transition">
                <Link href="/tips">Tips</Link>
              </li>
              <li className="hover:scale-105 transition">
                <Link href="/sadman">Sadman</Link>
              </li>
              <li className="hover:scale-105 transition">
                <Link href="/yasin">Yasin</Link>
              </li>
              <li className="hover:scale-105 transition">
                <Link href="/shafayet">Shafayet</Link>
              </li>
            </ul>
            {openMenu ? (
              <div
                onClick={() => setOpenMenu(!openMenu)}
                className="text-4xl scale-125 transition cursor-pointer hover:scale-110 md:hidden"
              >
                <IoMdClose />
              </div>
            ) : (
              <div
                className="text-4xl md:hidden scale-125 transition cursor-pointer hover:scale-110 "
                onClick={() => setOpenMenu(!openMenu)}
              >
                <IoMdMenu />
              </div>
            )}
          </div>
        </div>
      </nav>
      {openMenu && (
        <div className="fixed top-0  w-full z-40 md:hidden">
          <div className=" h-[100vh] top-0 left-0 bg-slate-500 text-white shadow-lg w-full flex items-center justify-center flex-col">
            {/* <Navmenu > */}
            <ul className="text-center text-xl space-y-2">
              <li
                onClick={() => setOpenMenu(!openMenu)}
                className="border-2 border-black px-2 py-1 rounded-lg hover:scale-110 transition hover:bg-black"
              >
                <Link href="/sakib">Sakib</Link>
              </li>
              <li
                onClick={() => setOpenMenu(!openMenu)}
                className="border-2 border-black px-2 py-1 rounded-lg hover:scale-110 transition hover:bg-black"
              >
                <Link href="/murshed">Murshed</Link>
              </li>
              <li
                onClick={() => setOpenMenu(!openMenu)}
                className="border-2 border-black px-2 py-1 rounded-lg hover:scale-110 transition hover:bg-black"
              >
                <Link href="/sadman">Sadman</Link>
              </li>
              <li
                onClick={() => setOpenMenu(!openMenu)}
                className="border-2 border-black px-2 py-1 rounded-lg hover:scale-110 transition hover:bg-black"
              >
                <Link href="/yasin">Yasin</Link>
              </li>
              <li
                onClick={() => setOpenMenu(!openMenu)}
                className="border-2 border-black px-2 py-1 rounded-lg hover:scale-110 transition hover:bg-black"
              >
                <Link href="/shafayet">Shafayet</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
