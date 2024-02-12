import {data} from "./data";
import './App.css';
import {useState} from "react";


function App () {

  const [stateOne , stateTwo] = useState (data);
  const [showMore,setShowMore] = useState(false);



  const removePlace = (id) => {
    let newPlace = stateOne.filter((place) => place.id !== id);
    stateTwo(newPlace);
  }



  return (<div>
    <div className="container">
      <h1>Lapland : {stateOne.length} Unmissable Adventures. </h1>
    </div>

    {stateOne.map((place => {
      const {id,activity,description,image} = place;

      return (
        <div key ={id}>
        <div className="container">
          <h2>{id}.{activity}</h2>
        </div>

    <div className="container">
    <p>{showMore ? description : description.substring(0,150) + "..." }
      <button onClick = {() =>setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}
      </button>
      </p>
    </div>

        <div className="container">
          <img src = {image} alt="pic" width="500px"></img>
        </div>

        <div className="container">
          <button className="btn" onClick={()=>removePlace(id)}>Remove</button>
        </div>
        </div>
        )
    }))}
    <div className="container">
      <button className="btn" onClick={() => stateTwo([])}>Delete All</button>
      </div>

      </div>
   
  )
}
export default App;
