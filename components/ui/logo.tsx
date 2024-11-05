import Logo from "@/public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const MainLogo = () => {
  return (
    <Link
      href="/"
      className="flex flex-row items-center justify-center gap-2 cursor-pointer mr-4"
    >
      <Image src={Logo} alt="Factor Studio" height={25} width={25} />
    </Link>
  );
};

export default MainLogo;
