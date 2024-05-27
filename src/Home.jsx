import Hero from "./Components/Home/Hero";
import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import LocationComponent from "./Components/locations";

function Home() {
  
 return (
      <>
        <div className=" lg:pl-64">
          <LocationComponent/>
          <Hero />
        </div>
      </>
    );
}

export default Home;
