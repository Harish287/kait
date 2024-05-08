import React from "react";

// props data from websection page

const Webcard = ({ title, text, image }) => {
  // styling when hover

  const handldMouseMove = (event) => {
    const planetBackground = event.currentTarget;
    const { left, top, width, height } =
      planetBackground.getBoundingClientRect();
    const { clientX, clientY } = event;

    const mouseX = (clientX - left) / width;
    const mouseY = (clientY - top) / height;

    const backgroundPosX = mouseX * 50;
    const backgroundPosy = mouseY * 50;

    planetBackground.style.backgroundPosition = `${backgroundPosX}% ${backgroundPosy}%`;
  };

  return (
    <div
      className="rounded-lg shadow-sm planet-background-1 coursor-pointer p-6"
      onMouseMove={handldMouseMove}
    >
      <div className="flex items-center justify-center w-12 h-12 bg-indigo-500 rounded-md">
        <img alt="" src={image} className="w-[60%] brightness-0 invert" />
      </div>

      <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-300">{text}</p>
    </div>
  );
};

export default Webcard;
