
import './App.css';
import Banner from './Compontents/Banner/Banner';
import NavBar from './Compontents/NavBar/NavBar';
import RowPost from './Compontents/RowPost/RowPost';
import {action,original,romance,comedy,documentaries,horror} from"./urls"
// tmdb third party website used getting apis
function App() {
  return (
    <div className="App">
       <NavBar/>
       <Banner/>
       <RowPost url={original} title="NetFlix Originals"/>
       <RowPost url={action} title="Action" isSmall />
       <RowPost url={comedy} title="Comedy" isSmall />
       <RowPost url={romance} title="Romance" isSmall />
       <RowPost url={documentaries} title="Documentaries" isSmall />
       <RowPost url={horror} title="Horror" isSmall />
    </div>
  );
}

export default App;
