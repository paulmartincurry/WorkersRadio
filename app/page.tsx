import MiniPlayer from '../components/MiniPlayer';
import NowPlayingCard from '../components/NowPlayingCard';
import Ticker from '../components/Ticker';

export default function HomePage() {
  return (
    <main className="container mx-auto p-4 space-y-6 flex flex-col flex-grow">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2 w-full">
          <MiniPlayer />
        </div>
        <div className="md:w-1/2 w-full flex items-stretch">
          <NowPlayingCard />
        </div>
      </div>
      <Ticker />
    </main>
  );
}
