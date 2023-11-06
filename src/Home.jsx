import Hero from "./Components/Home/Hero";
import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Home() {
  let user = useSelector((store) => store.UserData.items.auth.isSignedin);

  let location = useLocation();

  
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else
    return (
      <>
        <div className=" lg:pl-64">
          <Hero />
        </div>
      </>
    );
}

export default Home;
