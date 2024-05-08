import React from "react";

const aboutkait = () => {
  return (
    <div>
      <div className="flex min-h-screen flex-col justify-center bg-slate-100">
        <div className="group w-96 h-96 [perspective:1000px]">
          <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]:">
            <div className="absolute inset-0">
              <h1 className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40">
                KAIT FEATURES
              </h1>
            </div>

            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <ul>
                <li>Rapid growth rate</li>
                <li>Possibility for inflation Headge</li>
                <li>Transactional Freedom</li>
                <li>Stacking Opportunity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutkait;
