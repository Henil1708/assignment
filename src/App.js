import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/auth/Login';
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./pages/auth/ProtectedRoutes";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' index element={<Login />} />
        <Route path='/' element={<ProtectedRoutes />}>
          
        <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
