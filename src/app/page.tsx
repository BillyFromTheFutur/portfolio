import LeftPanel from "@/components/LeftPanel";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen bg-[#fdfdf5] p-8 gap-0">
      <main className="grid grid-cols-3 gap-8 row-start-2 h-full p-0">
        <LeftPanel />
        <MainContent />
      </main>
    </div>
  );
}
