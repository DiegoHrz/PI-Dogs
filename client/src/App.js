import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Views/Landing/Landing";
import Details from "./Views/Details/Details";
import Home from "./Views/Home/Home";
import Create from "./Views/Create/Create";
import Navbar from "./Components/Navbar/Navbar";
//in version 6 : import {BrowserRouter, Route, Routes}

function App() {
  return (
    <div className="App">
      {/*siempre es obligatorio que todas las rutas esten dentro del BrowserRouter mientras que si sale del switch no ha problema*/}
      <BrowserRouter>
        <Switch>
          {/*o es la 1ra ruta / y renderiza Landing o renderiza el componente navbar en todas las rutas */}
          <Route exact path={"/"} component={Landing}></Route>
          <Route path={""} component={Navbar}></Route>
        </Switch>
        <Switch>
          <Route path={"/home"} component={Home}></Route>
          <Route path={"/create"} component={Create}></Route>
          <Route path={"/details"} component={Details}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

/* in version 6 of react-router-dom:
      <BrowserRouter>
        <Switch>
          <Route path={'/'} element={<Landing/>} ></Route>
          <Route></Route>
        </Switch>
      </BrowserRouter>
*/
