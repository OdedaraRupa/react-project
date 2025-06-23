import React from 'react'

const CourseCard =({courses}) => {
  return(
    <div className='single-course'>
        <p>{courses.institution}</p>
        <h2>{courses.programType}</h2>
        <h3>{courses.areaOfStudy}</h3>
        <p>{courses.delivery}</p>
        <p>{courses.description}</p>
    </div>
  )
}
export default CourseCard;