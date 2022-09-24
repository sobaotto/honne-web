import * as React from "react";
import Img from "./example.png";
import "./reset.css";
import { useTranslation } from 'react-i18next';

export const App = () => {
  const [t] = useTranslation()

  const [isMounted, setMount] = React.useState(false);
  React.useEffect(() => {
    setMount(true);
  }, []);
  return (
    <div data-test id="text">
      {isMounted && (
        <div>
          {t('hoge')}
          <img src={Img}></img>
        </div>
      )}
    </div>
  );
};
