import Navbar from "./components/Navbar";
import Trending from "./components/Trending";
import Reasons from "./components/Reasons";
import FAQs from "./components/FAQs";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="bg-black px-35 text-white">
      <Navbar />
      <HeroSection />
      <Trending />
      <Reasons />
      <FAQs />
      <Subscription />
      <Footer />
    </div>
  );
}

export default App;
