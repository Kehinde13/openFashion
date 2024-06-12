import Brand from "./components/Brand";
import Collections from "./components/Collections";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NewArrivals from "./components/NewArrivals";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <NewArrivals />
      <Brand />
      <Collections />
    </main>
  );
}
