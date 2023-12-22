import Abstract from "./components/Abstract";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Carousel />
      <Banner
        title="Your Banner Title"
        description="Your Banner Description Goes Here"
      />
      <Abstract />
    </main>
  );
}
