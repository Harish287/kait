import React from "react";
import Webcard from "./webcard";
import users from "../../Assets/users-alt.svg";
import Chart from "../../Assets/chart-histogram.svg";
import Coin from "../../Assets/usd-circle.svg";

const websection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-800 to-indigo-800  py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-white">
            Web3, Aggregated.
          </h1>
          <p className="mt04 text-xl text-gray-300">
            Enabling an infinitely scalable web of sovereign blockchains that
            feels like a single chain.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Webcard
            title="BUILD"
            text=" 
            Join Kairaa Blockchain Academy And Empower Yourself With In-Depth Blockchain Education!"
            image={users}
          />

          <Webcard
            title="Stake"
            text="  Participate in securing the network by delegating MATIC tokens"
            image={Chart}
          />

          <Webcard
            title="  Use kait "
            text=" 
            Range Of Certifications To Validate Your Skills And Opening Doors To New Opportunities! "
            image={Coin}
          />
        </div>
      </div>
    </section>
  );
};

export default websection;
