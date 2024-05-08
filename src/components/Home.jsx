import React from "react";

import Webcard from "./homecontent/websection";
import MeetingAttendance from "./homecontent/MeetingAttendance";
// import Aboutkait from "./homecontent/aboutkait"

const Home = () => {
  return (
    <div>
      <div>
        <Webcard />
      </div>

      <div>
        <h1>Club Members</h1>
        <p>
          <h1>Welcome to Kait Club</h1> We're thrilled to have you as part of our
          community. Whether you're a long-time member or just joining us, this
          website is your hub for all things related to our club.
        </p>
      </div>

      <div className="bg-gradient-to-r from-purple-800 to-indigo-800  ">
        <h1 className="text-center text-[50px] font-extrabold text-white">
          Why Kait?
        </h1>
        <h3 className="text-center text-[30px]  text-white">Kait Features</h3>
        <div className="text-white text-center  flex-row md:flex justify-center md:gap-32 md:text-left">
          <div>
            <li>Own Blockchain and Crypto Coin</li>
            <li>Own Crypto Exchange</li>
            <li>Rapid Growth Rate</li>
            <li>Transactional Freedom</li>
          </div>
          <div>
            <li>Stacking Opportunity</li>
            <li>Available For Usdt Pair and Inr pair</li>
            <li>Trading Fee in Kait coins</li>
          </div>
        </div>
      </div>

      <div>
        <MeetingAttendance />
      </div>
      {/* <div><Aboutkait/></div> */}
    </div>
  );
};

export default Home;
