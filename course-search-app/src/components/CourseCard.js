import React, { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext';

const CourseCard =({courses}) => {
  const { addToFavorites, removeFromFavorites, isFavorites } = useContext(FavoritesContext);
  const handleClick = () => {
    isFavorites(courses.id) ? removeFromFavorites(courses.id) : addToFavorites(courses);
  }; 
  return(
    <div className='single-course'>
        <p>{courses.institution}</p>
        <h2>{courses.programType}</h2>
        <h3>{courses.areaOfStudy}</h3>
        <p>{courses.delivery}</p>
        <p>{courses.description}</p>
         <button onClick={handleClick}>
        {isFavorites(courses.id) ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  )
}
export default CourseCard;