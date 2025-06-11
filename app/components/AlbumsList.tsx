import { albums } from "@/data";

import AlbumListEntry from "./AlbumListEntry";

const AlbumsList = () => {
  return (
    <div className="items-center p-4">
      <div className="flex items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <h3 className="mx-4 text-center text-xl font-semibold">Albums</h3>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="flex flex-wrap gap-4 p-4">
        {albums.map((album, index) => (
          <AlbumListEntry key={index} album={album} />
        ))}
      </div>
    </div>
  );
};

export default AlbumsList;
