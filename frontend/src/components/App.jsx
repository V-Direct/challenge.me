import React from "react";
import "../css/App.css";
import ChallengeItem from "./ChallengeItem/ChallengeItem";


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      data: []
    }
  }
    
  componentDidMount(){
      fetch("http://localhost:3001/challenge/")
        .then((res) => res.json())
        .then((challenge) => {
          this.setState({data: challenge});
          console.log(this.state);
        });
  }

  render(){
    const {data} = this.state;
    return (
      <div className="app">
        <div className="row">
          <div className="col s2" style={{background: "red"}}>zeljko</div>
          <div className="col s8" style={{background: "yellow", display: "flex",  flexDirection: "column", justifyContent: "right"}}>
            <div className="row">
                
            </div>
            <div className="row">
            {data.map(item => (
              <ChallengeItem 
              key={item._id}
              title={item.title}
              tag={item.tag}
              description={item.description}
              creator={item.creator}
              labels={item.labels}
            />
        ))}
            </div>
          </div>
          <div className="col s2" style={{background: "red"}}>max</div>
        
        
        </div>
        
        
      </div>
    )
  }
}


export default App;

// function App() {
//   const [state, setState] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3001/challenge/")
//       .then((res) => res.json())
//       .then((data) => setState(data));
//   });

//   return (
//     <div>
//       <NavBar />
//       {state.map((item) => (
//         <ChallengeItem
//           title={item.title}
//           tag={item.tag}
//           description={item.description}
//           labels={item.labels}
//         />
//       ))}
//     </div>
//   );
// }
