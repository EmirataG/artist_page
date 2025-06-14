import Image from "next/image";
import Vinyl from "./Vinyl";

import type { Album, Piece } from "@/data";

const Anouncement = ({ work }: { work: Album | Piece }) => {
  return (
    <div className="rounded-md bg-gray-900 flex flex-col sm:flex-row justify-between hover:scale-101 duration-300">
      <Image
        src={work.artwork!}
        objectFit="cover"
        alt={`cover art for ${work.title}`}
        className="size-96 sm:size-96 rounded-md"
      />
      <div className="p-4 text-left grow-1">
        <h2 className="text-3xl font-bold">{`${work.title}`}</h2>
        <h4 className="text-xl">{"Is out now!!!"}</h4>
      </div>
      <Vinyl pieceName={work.title} />
    </div>
  );
};

export default Anouncement;
