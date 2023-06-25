import Link from "next/link";

const Navmenu = () => {
    return (
        <ul className="text-center text-xl space-y-2">
      <li
        // onClick={() => setOpenMenu(false)}
        className="border px-2 py-1 rounded-lg hover:scale-110 transition hover:bg-black"
      >
        <Link href="/">Home</Link>
      </li>
      <li
        // onClick={() => setOpenMenu(false)}
        className="border px-2 py-1 rounded-lg hover:scale-110 transition hover:bg-black"
      >
        <Link href="/projects">Projects</Link>
      </li>
      <li
        // onClick={() => setOpenMenu(false)}
        className="border px-2 py-1 rounded-lg hover:scale-110 transition hover:bg-black"
      >
        <Link href="">Contact</Link>
      </li>
      <li
        // onClick={() => setOpenMenu(false)}
        className="border px-2 py-1 rounded-lg hover:scale-110 transition hover:bg-black"
      >
        <Link href="">About</Link>
      </li>
    </ul>
    );
};

export default Navmenu;