import React from "react";
import one from "../Assets/video-1.jpg";
import two from "../Assets/video-2.jpg";
import three from "../Assets/video-3.jpg";
import four from "../Assets/video-4.jpg";
import five from "../Assets/video-5.jpg";

const Gallery = () => {
  const data = [
    { imageLink: one },
    { imageLink: two },
    { imageLink: three },
    { imageLink: four },
    { imageLink: five },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {data.map((e, index) => (
        <div key={index}>
          <img
            className="h-60 w-full max-w-full rounded-lg object-cover object-center"
            src={e.imageLink}
            alt="gallerphoto"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
