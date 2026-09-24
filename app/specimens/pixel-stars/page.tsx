import { BackgroundPixelStars } from "@/components/ui/background-pixel-stars";

export default function PixelStarsSpecimen() {
  return (
    <main className="h-dvh w-dvw overflow-hidden bg-black bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAIElEQVR42mIUEhJiwAbevXuHVZyJgUQwqmEUDB0AEGAADd8DEPTX6ksAAAAASUVORK5CYII=')] bg-[size:10px]">
      <BackgroundPixelStars />
    </main>
  );
}
