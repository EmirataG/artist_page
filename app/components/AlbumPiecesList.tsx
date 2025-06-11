import type { Piece } from "@/data";

const AlbumPiecesList = ({ pieces }: { pieces: Piece[] }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg h-full w-80 shadow-inner">
      <h4 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-200">
        Tracklist
      </h4>
      <ul className="space-y-4">
        {pieces.map((piece, index) => (
          <li
            key={index}
            className="text-gray-600 dark:text-gray-400 truncate border-b-1 hover:text-white hover:border-white transition-all duration-200"
          >
            {index + 1}. {piece.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumPiecesList;
