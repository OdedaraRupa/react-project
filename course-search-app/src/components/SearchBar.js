import React, { useState } from "react";
import { CoursesData } from "../data/CoursesData";
const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const [suggestions, setSuggestions] = useState([]);
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.length === 0) {
      setSuggestions([]);
    } else {
      const filter = CoursesData.filter(
        (CoursesData) =>
          CoursesData.title.toLowerCase().includes(value.toLowerCase()) ||
          CoursesData.institution.toLowerCase().includes(value.toLowerCase()) ||
          CoursesData.programType.toLowerCase().includes(value.toLowerCase())
      ).map((CoursesData) => ({
        title: CoursesData.title,
        institution: CoursesData.institution,
        programType: CoursesData.programType,
      }));

      const suggestionSet = new Set();
      filter.forEach((CoursesData) => {
        suggestionSet.add(CoursesData.title);
        suggestionSet.add(CoursesData.institution);
        suggestionSet.add(CoursesData.programType);
      });
      setSuggestions([...suggestionSet]);
    }
  };
  const handleSelect = (value) => {
    setSearchQuery(value);
    setSuggestions([]);
  };
  return (
    <React.Fragment>
      <div className="col-4 search-bar">
        <input
          type="text"
          placeholder="search by Course title, Institute, or Area of Study"
          value={searchQuery}
          onChange={handleChange}
        ></input>
        {suggestions.length > 0 && (
          <ul className="suggestions">
            {suggestions.map((title, index) => (
              <li key={index} onClick={() => handleSelect(title)}>
                {title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </React.Fragment>
  );
};
export default SearchBar;
