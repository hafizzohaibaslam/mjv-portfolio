import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

type LogoProps = {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  href?: string;
};

const Logo = ({
  src = "/icons/logo.svg",
  alt = "Logo",
  width = 100,
  height = 100,
  className,
  href = "/",
}: LogoProps) => {
  const containerClasses = cn("cursor-pointer", className);
  const imageClasses = cn("w-full h-full object-contain");

  return (
    <Link href={href} className={containerClasses}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={imageClasses}
      />
    </Link>
  );
};

export default Logo;
