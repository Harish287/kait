import React from "react";
// import Page from "./clubsilver";

const ClubComponent = ({ e }) => {
  //https://kaitworld.comv1/api/club/1
  console.log(e.id);

  return (
    <>
      <div
        className={` grid grid-cols-${e.id}  bg-slate-600  items-center gap-6  h-[100vh]  p-6`}
      >
        {e.members.map((e) => (
          <div className=" bg-cyan-500 h-[30vh] gap-6 p-8 ">{e.name}</div>
        ))}

        {/* <div className=" bg-cyan-500 h-[30vh] w-[20vw]"></div>
        <div className=" bg-red-500 h-[30vh] w-[20vw]"></div>
        <div className=" bg-cyan-500 h-[30vh] w-[20vw]"></div>
        <div className=" bg-red-500 h-[30vh] w-[20vw]"></div>
        <div className=" bg-red-500 h-[30vh] w-[20vw]"></div> */}
      </div>
    </>
  );
};

const Clubbronze = ({ e }) => {
  return (
    <div>
      <div
        key={e.id}
        className={`grid grid-cols-${e.id}  bg-slate-600  items-center gap-6    p-6 `}
      >
        {e.members.map((e) => (
          <div className="bg-cyan-500 gap-6 p-8 flex justify-between text-white">
            <div>{e.user_name}</div>
            <div>{e.amount}</div>
            <div>{e.user_id}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Clubsilver = ({ e }) => {
  return (
    <div>
      <div
        key={e.id}
        className={`grid md:grid-cols-4 bg-slate-600  items-center gap-6    p-6 `}
      >
        {e.members.map((e) => (
          <div className="bg-cyan-500 gap-6 p-8 h-[250px] ">
            <div className="text-center" dangerouslySetInnerHTML={{__html: e.user_name }}></div>

            <div className="text-center">{e.user_id}</div>
            <img className=" h-[150px] w-[150px] m-auto" src={e.user_image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

const Clubgold = ({ e }) => {
  return (
    <div>
      <div
        key={e.id}
        className={`grid md:grid-cols-2 bg-slate-600  items-center gap-6   p-6 `}
      >
        {e.members.map((e) => (
          <div className="bg-cyan-500 gap-6 p-8 h-[250px] md:flex justify-between items-center ">
            <div className="text-center" dangerouslySetInnerHTML={{ __html: e.user_name }}></div>
            {/* <div >{e.user_name}</div> */}
            {/* <div>{e.amount}</div> */}
            <div className="text-center">{e.user_id}</div>
            <div>
              <img className="h-[150px] w-[150px] m-auto" src={e.user_image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Clubplatinum = ({ e }) => {
  return (
    <div>
      <div
        key={e.id}
        className=" md:grid   grid-cols-2 bg-slate-600  items-center gap-6   p-6 "
      >
        {e.members.map((e) => (
          <div className=" flex justify-center flex-col p-8 md:flex md:justify-center md:flex-col md:gap-5  bg-cyan-500  md:p-8  md:h-[400px]    ">
            {/* <div className="flex justify-evenly "> */}
            <div className="text-center">{e.user_id}</div>
            <div className="text-center" dangerouslySetInnerHTML={{ __html: e.user_name }}></div>{" "}
            {/* </div> */}
            {/* <div className="flex justify-center "> */}
            <img
              className=" text-center m-auto md:h-[300px]  md:w-[300px] h-[100px]w-[100px] "
              src={e.user_image}
              alt=""
            />
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};
const Clubdiamond = ({ e }) => {
  return (
    <div>
      <div
        key={e.id}
        className=" grid grid-cols-1 bg-slate-600  items-center  md:overflow-x-scroll h-[500px] gap-6 p-6"
      >
        {e.members.map((e) => (
          <div className="bg-cyan-500 gap-6 p-8  h-[400px] flex justify-center items-center">
            {/* <div>{e.name}</div> */}
            <div className="font-extrabold">{e.notes}</div>
            {/* <div>{e.amount}</div>
            <div>{e.user_id}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export {
  ClubComponent,
  Clubbronze,
  Clubdiamond,
  Clubsilver,
  Clubplatinum,
  Clubgold,
};
