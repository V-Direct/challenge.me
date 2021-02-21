import React from "react";
import "../css/App.css";
import NavBar from "./NavBar/NavBar";
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
    const {data} = this.state
    return (
      <div className="app">
        <NavBar />
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
