import Abstract from "./components/Abstract";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Carousel />
      <Abstract />
    </main>
  );
}
