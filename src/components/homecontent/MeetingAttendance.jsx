import React from "react";
import Photo1 from "../../Assets/MENS.jpeg";
import Photo2 from "../../Assets/WOMENS.jpeg";
import Photo3 from "../../Assets/TOTAL.jpeg";
import Photo4 from "../../Assets/KAIT USERS.jpeg";
import Photo5 from "../../Assets/NEW USERS.jpeg";

import { Slide, Fade } from "react-awesome-reveal";

const MeetingAttendance = () => {
  const CardData = [
    {
      id: 1,
      img: Photo1,
      title: "Total Mens",
      desc: "1600 +",
    },
    {
      id: 2,
      img: Photo2,
      title: "Total Womens",
      desc: "1400 +",
    },
    {
      id: 3,
      img: Photo3,
      title: "Total Users",
      desc: "3000 +",
    },
    {
      id: 4,
      img: Photo4,
      title: "Kait Users",
      desc: "600 +",
    },
    {
      id: 5,
      img: Photo5,
      title: "New Users",
      desc: "2000 +",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-800 to-indigo-800 pb-[300px] py-16">
      <h1 className="text-gray-100 text-center text-3xl font-extrabold">
        Meeting Attendance
      </h1>
      <br />

      {/* cardsection */}

      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-5 place-items-center ">
        {CardData.map(({ id, img, title, desc }) => {
          return (
            <div
              key={id}
              className="text-white shadow-md rounded-lg overflow-hidden relative group mb-6"
            >
              <img
                src={img}
                alt=""
                className="w-full max-w-[300px] h-[350px] rounded-lg "
              />
              {/* overlaysection */}

              <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                <div className="space-y-4">
                  <Slide cascade>
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <Fade cascade damping={0.05}>
                      {desc}
                    </Fade>
                  </Slide>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MeetingAttendance;
