import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Events from "./components/Events";
import Home from "./components/Home";
import Awards from "./components/Awards";
import Club from "./components/Club";
import Contacts from "./components/Contacts";
import Gallery from "./components/Gallery";
import Achivers from "./components/Achivers";
import Blogs from "./components/Blogs";
import Navbar  from "./components/navbar";


const App = () => {
  return (
    <BrowserRouter>
      <div>
       <Navbar/>
{/* <br/> */}
        <div>
          <Routes>
            <Route path="/events" element={<Events />} />
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/club" element={<Club />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/achivers" element={<Achivers />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route paht="/ourblogs" element={<Blogs />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
