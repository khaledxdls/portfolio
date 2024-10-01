
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
  const pathname=usePathname();

  const getLinkClass = (path: string) =>
    pathname === path
      ? "text-accent-400 border-b-4 border-b-amber-700"
      : "hover:text-accent-400 hover:border-b-4 hover:border-b-amber-700 transition-all duration-300";

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link href="/" className={getLinkClass("/")}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={getLinkClass("/about")}>
            About
          </Link>
        </li>
       
        <li>
          <Link href="/projects" className={getLinkClass("/projects")}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/experience" className={getLinkClass("/experience")}>
            Experience
          </Link>
        </li>
        <li>
          <Link href="/education" className={getLinkClass("/education")}>
            Education
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar
