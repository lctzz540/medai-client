import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ size = 100 }) => {
  return (
    <p className="fixed left-0 top-0 flex w-full justify-center bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:from-inherit lg:static lg:w-auto  lg:rounded-xl  lg:p-4 ">
      <Link
        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
        href="/"
        rel="noopener noreferrer"
      >
        <Image
          src="/logo.svg"
          alt="Med AI logo"
          width={size}
          height={size}
          priority
        />
      </Link>
    </p>
  );
};

export default Logo;
