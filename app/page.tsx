import Header from "./components/Header";
import Anouncement from "./components/Anouncement";
import AlbumsList from "./components/AlbumsList";
import SinglesList from "./components/SinglesList";
import Footer from "./components/Footer";

import { releaseToBeAnounced } from "@/data";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-5">
      <Header />
      <Anouncement work={releaseToBeAnounced} />
      <h2 className="text-center text-2xl font-semibold">All Stuff by Me:</h2>
      <AlbumsList />
      <SinglesList />
      <Footer />
    </div>
  );
}
