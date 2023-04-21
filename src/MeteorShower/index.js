import { useEffect, useState } from "react";
import "./index.scss";

const MeteorShower = () => {
  const [className, setClassName] = useState("");

  useEffect(() => {
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  function tick() {
    const num = Math.floor(Math.random() * 8) + 1;
    setClassName(`meteor meteor-${num}`);
  }

  return <div className={className} key={className}></div>;
};

export default MeteorShower;
