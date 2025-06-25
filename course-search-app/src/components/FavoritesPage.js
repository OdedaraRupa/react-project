import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import CourseCard from "./CourseCard";

const FavoritesPage = () => {
  const {favorites} = useContext(FavoritesContext);
  return (
    <div>
      <h2>My Favorite Courses</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favorites.map((courses) => (
          <CourseCard key={courses.id} courses={courses} />
        ))
      )}
    </div>
  );
};

export default FavoritesPage;