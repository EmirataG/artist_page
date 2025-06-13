import { StaticImageData } from "next/image";
import Image from "next/image";

import type { Album, Piece } from "@/data";

const Anouncement = ({ work }: { work: Album | Piece }) => {
  return (
    <div className="rounded-md">
      <Image
        src={work.artwork!}
        objectFit="cover"
        alt={`cover art for ${work.title}`}
        className="size-full sm:size-96 rounded-md"
      />
    </div>
  );
};

export default Anouncement;
