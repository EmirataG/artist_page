import type { Album } from "@/data";

const AlbumPiecesList = ({ album }: { album: Album }) => {
  return (
    <div className="flex flex-col gap-4 bg-gray-800 p-4 rounded-lg h-full w-64 shadow-inner">
      <h4 className="font-bold text-lg text-gray-200">Tracklist</h4>
      <div className="max-h-40 pb-4 overflow-scroll border-b border-white">
        <ul className="space-y-2">
          {album.tracks.map((piece, index) => (
            <li
              key={index}
              className="text-gray-600 dark:text-gray-400 truncate hover:text-white hover:border-white transition-all duration-200"
            >
              {index + 1}. {piece.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-gray-400 text-justify">
        <span>{album.description}</span>
      </div>
    </div>
  );
};

export default AlbumPiecesList;
