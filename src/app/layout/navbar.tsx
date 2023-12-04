import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="p-10 bg-gray-800 py-4"
      style={{ background: "rgb(241, 180, 187)" }}
    >
      <div className="flex justify-end">
        <ul className="flex space-x-6">
          <li>
            <Link href="/about" className="text-black hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/research" className="text-black hover:text-gray-300">
              Research
            </Link>
          </li>
          <li>
            <Link href="/team" className="text-black hover:text-gray-300">
              Team
            </Link>
          </li>
          <li>
            <Link
              href="/recruitment"
              className="text-black hover:text-gray-300"
            >
              Recruitment
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
