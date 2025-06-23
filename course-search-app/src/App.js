

import React from 'react'
import CourseList from './components/CourseList';
import { CoursesData } from './data/CoursesData';

function App() {
  return (
      <CourseList 
        data={CoursesData} 
        defaultSortingOrder="relevant" 
        defaultPagination={'10'}  />
  );
}

export default App;
