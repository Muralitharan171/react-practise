import logo from './logo.svg';
import './App.css';

function App() {
  const data = [
    {type:"free",
    details:"0$",
    clr:"orange"
  },
    {type:"pro",
  details:"9$",
  clr:"white"

  },
  {type:"plus",
  details:"25$",
  clr:"green"
}]
  return (
    
    <div className="App">
      <h1>&#x2713; follow me</h1>
      <h1>&#215;unfollow me</h1>
    {data.map((item,idx)=>(
      <SampleCard
      key={idx}
      type={item.type}
      details={item.details}
      clr={item.clr}
      />
    ))}
    </div>
  );
}

export default App;


function SampleCard (props) {
 
  return(
    <div style={{backgroundColor:props.clr}} className="card-content">
      <h1> name:{props.type}</h1>
      <h1> details:{props.details}</h1>
    </div>
  )
}
