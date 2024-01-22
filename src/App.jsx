
import './App.css'
import './assets/css/bootstrap.css'
import { Route, Routes } from "react-router-dom";
import HomesPages from "./views/HomePages.jsx";
import PlanPage from "./views/PlanPage.jsx";
import Navigation from './components/Navigation.jsx'
function App() {

  return (
    <>
   <div>
 <Navigation />
 <HomesPages />
 </div>

    </>
  )
}

export default App
