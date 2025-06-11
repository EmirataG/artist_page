import type { Piece } from "@/data";

import Image from "next/image";

const SinglesListEntry = ({ piece }: { piece: Piece }) => {
  return (
    <article className="flex flex-col gap-2">
      <Image
        className="size-80 rounded-md select-none hover:scale-101 duration-300 active:scale-99"
        src={piece.artwork!}
        objectFit="cover"
        alt={`cover art for ${piece.title}`}
      />
      <div>
        <h3 className="font-semibold">{piece.title}</h3>
      </div>
    </article>
  );
};

export default SinglesListEntry;
