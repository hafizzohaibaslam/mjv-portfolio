import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

type LogoProps = {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  imageClassName?: string;
  href?: string;
};

const Logo = ({
  src = "/icons/logo.svg",
  alt = "Logo",
  width = 100,
  height = 100,
  className = "",
  imageClassName = "",
  href = "/",
}: LogoProps) => {
  const containerClass = cn("cursor-pointer", className);
  const imageClass = cn("w-full h-full object-contain", imageClassName);

  return (
    <Link href={href} className={containerClass}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={imageClass}
      />
    </Link>
  );
};

export default Logo;
