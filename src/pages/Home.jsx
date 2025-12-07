import './home.css'
import Header from '../components/Header'
import SideBar from "../components/SideBar";

import MainContent from "../components/MainContent";
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="home-container container">
      <Header />
      <div className="home-content">
        <SideBar />
        <MainContent />
      </div>
      <Footer/>
    </div>
  );
}
