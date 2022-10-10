import { useState, useEffect } from "react";
import placeholderSrc from "../../../public/loading/image_processing.gif";

const ProgressiveImg = ({ src, ...props }) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const customClass =
    placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded";

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  return (
    <div className="center-container">
      <img
        {...{ src: imgSrc, ...props }}
        alt={props.alt || ""}
        className={`image ${customClass}`}
      />
    </div>
  );
};

export default ProgressiveImg;
