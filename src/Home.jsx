import Hero from "./Components/Home/Hero";
import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Home() {


  
 return (
      <>
        <div className=" lg:pl-64">
          <Hero />
        </div>
      </>
    );
}

export default Home;
