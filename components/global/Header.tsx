import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import { Button } from "../ui/button";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
        <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
      </Link>
      <ul className="flex flex-row items-center gap-8">
        <li>
          <form className="mb-10">
            <Button>Logout</Button>
          </form>
        </li>
      </ul>
    </header>
  );
};

export default Header;
