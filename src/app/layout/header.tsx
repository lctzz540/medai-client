import Navbar from "./navbar";
import Logo from "./logo";

const Header = () => {
  return (
    <div className="z-10 pb-10 w-full items-center justify-between font-mono text-sm lg:flex">
      <Logo />
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <Navbar />
      </div>
      <div className="lg:hidden h-32"></div>
    </div>
  );
};
export default Header;
