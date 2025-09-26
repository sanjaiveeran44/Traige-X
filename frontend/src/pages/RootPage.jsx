import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "./RootPage.css";

const RootPage = () => {
    return (
      <div className="root-page">
        <Header />
        <Hero />
        <Footer />
      </div>
    );
  };
  
export default RootPage;