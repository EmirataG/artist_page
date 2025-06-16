import type { IconType } from "react-icons";
import Link from "next/link";

const StreamServicesIcon = ({
  href,
  icon: Icon,
}: {
  href: string | null;
  icon: IconType;
}) => {
  return (
    <Link
      href={href ? href : "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white drop-shadow-lg transition-transform"
      // Stop propagation is handled by the parent div in this implementation
    >
      <Icon className="size-8" />
    </Link>
  );
};
export default StreamServicesIcon;
