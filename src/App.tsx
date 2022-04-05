import { useState } from "react";
import TopNavbar from "./components/navbar";
import Sidenav from "./components/sidenav";
import "./assets/styles/global.css";
import TabsComponent from "./components/Tabs";

function App() {
  // const [isOpen, setOpen] = useState(false);
  return (
    <>
      <TopNavbar />
      {/* <Sidenav isOpen={isOpen} setOpen={setOpen} /> */}
      <Sidenav />
      <TabsComponent />
    </>
  );
}

export default App;
