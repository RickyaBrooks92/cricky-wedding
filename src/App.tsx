import React, { useEffect, useRef } from "react";

const App = () => {
  // I want this component to render a video feed of the users phone camera

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return <div>Hello World</div>;
};

export default App;
