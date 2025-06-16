import type { Album } from "@/data";

const AlbumPiecesList = ({ album }: { album: Album }) => {
  return (
    <div className="flex flex-col gap-4 bg-gray-800 p-4 rounded-lg w-64 shadow-inner h-86">
      <h4 className="font-bold text-lg text-gray-200">Tracklist</h4>
      <div className="min-h-24 max-h-40 h-fit pb-4 border-b border-white shrink-0">
        <ul className="space-y-2 overflow-scroll">
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
      <div className="text-gray-400 text-justify overflow-scroll">
        <span>{album.description}</span>
      </div>
    </div>
  );
};

export default AlbumPiecesList;
