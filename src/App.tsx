import React from 'react';
import { Route,Routes} from 'react-router-dom'
import TodosPage from './pages/TodosPage';
import AboutPage from './pages/AboutPage';
import OneTodo from './pages/OneTodo';
import Completed from './pages/Completed';
import Navbar from './components/Navbar';




const App: React.FC = () => {
 
  return (
    <>
    <Navbar/>
    <div className='container'>
    <Routes>
      <Route element={<TodosPage/>} path='/' />
      <Route element={<AboutPage/>} path='/about' />
      <Route element={<OneTodo/>} path='/oneTodo/:id' />
      <Route element={<Completed/>} path='/completed' />
    </Routes>
    </div>
    </>
  );
};

export default App;