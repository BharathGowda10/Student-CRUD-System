import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '/node_modules/bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import Home from './component/Home';
import StudentsView from './students/StudentsView';
import NavBar from './component/NavBar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AddStudents from './students/AddStudents';
import EditStudents from './students/EditStudents';
import StudentProfile from './students/StudentProfile';


function App() {
  return (
    <main className="container mt-5">
       <Router>
        <NavBar/>
        <Routes>
          <Route
          exact path='/' element={<Home/>}>
          </Route>
          <Route
          exact path='/view-students' element={<StudentsView/>}>
          </Route>
          <Route
          exact path='/add-students' element={<AddStudents/>}>
          </Route>
          <Route
          exact path='/edit-students/:id' element={<EditStudents/>}>
          </Route>
          <Route
          exact path='/students-profile/:id' element={<StudentProfile/>}>
          </Route>
        </Routes>
       </Router>
        
    </main>
  );
}

export default App;
