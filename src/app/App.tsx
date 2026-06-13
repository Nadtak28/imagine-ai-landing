import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Solutions } from "./components/Solutions";
import { TechStack } from "./components/TechStack";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#08080f", fontFamily: "Geist, sans-serif", overflowX: "hidden" }}
    >
      <Nav />
      <Hero />
      <Solutions />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}
