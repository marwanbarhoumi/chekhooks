import { useState } from "react";
import { Add } from "./component/Add";
import { data } from "./component/data";
import { MovieList } from "./component/MovieList";
function App() {
  const [list, setList] = useState(data);
  const  handelAdd = (newMovie) => {
console.log(newMovie);
setList([...list, newMovie])
  };
  
  return (
    <div className="App">
      <Add handelAdd={handelAdd} />
      <MovieList list={list} />
    </div>
  );
}

export default App;
