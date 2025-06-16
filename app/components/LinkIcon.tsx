import { IconType } from "react-icons";
import Link from "next/link";

const LinkIcon = ({
  icon,
  href,
}: {
  icon: IconType;
  href: string | null | undefined;
}) => {
  const IconComponent = icon;
  return (
    <Link
      href={href ? href : "#"}
      target="blank"
      className="p-2 flex border content-center items-center rounded-full hover:rotate-10 active:scale-95 duration-300"
    >
      <IconComponent className="size-8" />
    </Link>
  );
};

export default LinkIcon;
