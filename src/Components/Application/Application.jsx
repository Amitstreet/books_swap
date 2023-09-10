import Nav from "../Utils/Nev";
import Sidebar from "../Utils/Sidebar";
import CodeContent from "./CodeContent";

function Application() {
  return (
    <>
      {/* <Nav />
      <Sidebar /> */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:pl-72">
        <CodeContent />
      </div>
    </>
  );
}

export default Application;
