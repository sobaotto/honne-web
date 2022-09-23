import * as React from "react";
import Img from "./example.png";
import "./reset.css";

//テストしやすいようにわざと作った関数
export const generateHelloWorld = () => {
  return "hello world.";
};

export const App = () => {
  const [isMounted, setMount] = React.useState(false);
  React.useEffect(() => {
    setMount(true);
  }, []);
  return (
    <div data-testid="text">
      {isMounted && (
        <div>
          {generateHelloWorld()}
          <img src={Img}></img>
        </div>
      )}
    </div>
  );
};
