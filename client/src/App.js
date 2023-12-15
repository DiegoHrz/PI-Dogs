import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//in version 6 : import {BrowserRouter, Route, Routes}


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={"/"} component={} ></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
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