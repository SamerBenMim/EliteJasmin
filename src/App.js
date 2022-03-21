import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import img from './assets/19264420_475301836152540_6674068954699460727_o.jpg'
import WlcSection from './components/section/WlcSection/wlcSection';
import Description from './components/description/description';
import Separation from './components/separation/separation';
import Strategy from './components/strategy/strategy';
import Info from './components/Info/info';
import Boules from './components/Boules/Boules';
import Acceuil from "./Pages/Acceuil/acceuil.jsx"
import Login from './Pages/Login/login';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    
    <div className="App">

            <BrowserRouter>
            <Navbar/>
    <Routes>
      <Route path="/EliteJasmin" element={ <Acceuil />}/>
      <Route path="/EliteJasmin/login" element={<Login/>}/>
    </Routes>
  </BrowserRouter>







            {/* <Link to="/">
            ssssssssssssss
            </Link>
            <BrowserRouter>
      <Switch>
        <Route exact path="/">
        <Acceuil />
        </Route>
        <Route path="/users">
        </Route>
      </Switch>
    </BrowserRouter> */}
         {/* <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Acceuil />}/>
        <Route path="/login" exact element={<Login/>}/>
        <Route path="*" element={<h1>not found</h1>} />
      </Routes>
    </BrowserRouter> */}
     {/* <Navbar/>
     <WlcSection/>
     <Separation/>
     <Info/>
     <Strategy/>
     <Boules/> */}

    </div>
  );
}

export default App;
