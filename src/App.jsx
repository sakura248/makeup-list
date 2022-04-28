import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Index from "./components/screen/Index";
import MyList from "./components/screen/MyList";
import SignIn from "./components/screen/SignIn";
import SignUp from "./components/screen/SignUp";
// import PrivateRoute from "./hooks/UseAuthStatus";

function App() {
  return (
    <Router>
      {/* <PrivateRoute> */}
      <div className="flex font-body">
        <Navigation />
        <Routes>
          <Route index element={<Index />} />
          <Route path="MyList" element={<MyList />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="SignUp" element={<SignUp />} />
        </Routes>
      </div>
      {/* </PrivateRoute> */}
    </Router>
  );
}

export default App;
