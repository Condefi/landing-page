import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/logo.png";

interface MainLogoProps {
  height?: number;
  width?: number;
}

const MainLogo = ({ height = 128, width = 128 }: MainLogoProps) => {
  return (
    <Link
      href="/"
      className="flex flex-row items-center justify-center gap-2 cursor-pointer mr-4"
    >
      <Image src={Logo} alt="Factor Studio" height={height} width={width} />
    </Link>
  );
};

export default MainLogo;
