import { Color } from "./comonents/Color";
import data from "./assets/data";

function App() {
  // data.map((data) => {
  //   console.log(data.color);
  // });
  return (
    <>
      <div className="container">
        {" "}
        {data.map((box) => {
          return <Color name={box.color} code={box.code} color={box.code} />;
        })}
      </div>
    </>
  );
}

export default App;
