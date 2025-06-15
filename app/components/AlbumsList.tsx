import { albums } from "@/data";
import { mockWorks } from "@/data";
import AlbumListEntry from "./AlbumListEntry";
import MockWork from "./MockWork";

const AlbumsList = () => {
  return (
    <div className="items-center">
      <div className="flex items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <h3 className="mx-4 text-center text-xl font-semibold">
          Albums and EPs
        </h3>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      {/* This container now correctly handles scrolling.
        - `sm:flex-row` keeps your responsive design for wider screens.
        - `overflow-x-auto` enables horizontal scrolling when needed.
      */}
      <div className="flex sm:flex-row flex-col items-center gap-4 py-4 overflow-x-auto">
        {albums.map((album, index) => (
          // This wrapper div with `flex-shrink-0` is the key.
          // It prevents the AlbumListEntry from being squished by the flex container.
          <div key={index} className="flex-shrink-0">
            <AlbumListEntry album={album} />
          </div>
        ))}
        {mockWorks.map((work, index) => (
          // This wrapper div with `flex-shrink-0` is the key.
          // It prevents the AlbumListEntry from being squished by the flex container.
          <div key={index} className="flex-shrink-0 hidden sm:block">
            <MockWork mockWork={work} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumsList;
