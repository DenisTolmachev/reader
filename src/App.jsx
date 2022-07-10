import { Reader } from "components/Reader/Reader"
import data from "data/data.json"

export const App = () => {
  return (
    <Reader data={data}/>
  );
};
