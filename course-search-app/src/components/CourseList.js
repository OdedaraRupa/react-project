// for number sorting and for date sorting use this logic 

// if(sortOrder === 'upvotes'){
//         sortedArray.sort((a,b)=> b.upvotes - a.upvotes )
//     }else if(sortOrder === 'date'){
//       sortedArray.sort((a,b) => new Date(b.date) - new Date(a.date));
// }


import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import SortDropdown from "./SortDropdown";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";

const CourseList = ({ data, defaultSortingOrder, defaultPagination }) => {
  // Searching Operation
  const [searchQuery, setSearchQuery] = useState("");
 
  // Sorting
  const [sortOrder, setSortOrder] = useState(defaultSortingOrder);
  const [sortedData, setSortedData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemPerPage] = useState(Number(defaultPagination));

 
  useEffect(() => {
    const filterData = data.filter((course) => {
      const query = searchQuery.toLowerCase();
      return (
        course.institution.toLowerCase().includes(query) ||
        course.programType.toLowerCase().includes(query) ||
        course.areaOfStudy.toLowerCase().includes(query)
      );
    });

    let sorted = [...filterData];
    switch (sortOrder) {
      case "program-asc":
        sorted.sort((a, b) => a.programType.localeCompare(b.programType));
        break;
      case "program-desc":
        sorted.sort((a, b) => b.programType.localeCompare(a.programType));
        break;
      case "institution-asc":
        sorted.sort((a, b) => a.institution.localeCompare(b.institution));
        break;
      case "institution-desc":
        sorted.sort((a, b) => b.institution.localeCompare(a.institution));
        break;
      case "relevant":
      default:
        break;
    }
    setSortedData(sorted);
    setCurrentPage(1);
  }, [sortOrder, searchQuery,data]);

  // Calculate pagination
  const indexOfLast = currentPage * itemsPerPage;
  const indexofFirst = indexOfLast - itemsPerPage;
  const currentCourse = sortedData.slice(indexofFirst, indexOfLast);
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const handleResultsPerPageChange = (e) => {
    setItemPerPage(parseInt(e.target.value));
    setCurrentPage(1); // reset to page 1 when per page changes
  };

  return (
    <React.Fragment>
      <div className="courses">
        <div className="search-result">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          ></SearchBar>
          <Pagination
            handleResultsPerPageChange={handleResultsPerPageChange}
            itemsPerPage={itemsPerPage}
          ></Pagination>
          <SortDropdown setSortOrder={setSortOrder} />
        </div>
        <div className="course-list">
          {currentCourse.map((courses, index) => (
            <CourseCard courses={courses} key={index} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
export default CourseList;
