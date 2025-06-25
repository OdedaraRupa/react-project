

import React from 'react'
import CourseList from './components/CourseList';
import { CoursesData } from './data/CoursesData';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FavoritesPage from './components/FavoritesPage';

function App() {
  return (  
    <Router>
      <nav>
        <Link to="/">All Courses</Link> | 
        <Link to="/favorites">Favorites</Link>
      </nav>

      <Routes>
        <Route path="/" element={  <CourseList data={CoursesData}  defaultSortingOrder="relevant" defaultPagination={'10'}  />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
      
  );
}

export default App;
