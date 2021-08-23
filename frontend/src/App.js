import{BrowserRouter as Router,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./components/home";
import Note from "./components/notes";
import CreateNote from "./components/createNote";

function App() {
 return(<Router>
   <Navbar/>

    <Route path="/" exact><Home/></Route>
    <Route path="/notes"><Note/></Route>
    <Route path="/create"><CreateNote/></Route>


   </Router>
  //home
  //notes
  //create note
 )
}

export default App;
