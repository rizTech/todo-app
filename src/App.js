import './App.css';
import TaskForm from './components/TaskForm';
import TaskEditForm from './components/TaskEditForm';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path='/' element={<TaskForm />} />
        <Route path='/edit' element={<TaskEditForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
