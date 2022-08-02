import './App.css';
import { Route, Routes } from 'react-router';
import TaskPage from './pages/tasks';
import Login from './pages/login';
import Header from './components/Header';
function App() {
  document.title="To Do App";
  return (
    <div className="App">
            <Header/>
            <Routes>
            <Route path="/login" element={<Login/>} exact />
            <Route path="/" element={<TaskPage/>} exact />
            </Routes>
    </div>
  );
}

export default App;
