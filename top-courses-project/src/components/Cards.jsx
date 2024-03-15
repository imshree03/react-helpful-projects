import React, { useState, useEffect } from "react";
import Card from "./Card";
import { filterData } from "../data";

function Cards({ courses, category }) {
  const [likedCourse, setLikedCourses] = useState([]);

  let allCourses = [];
  function getCourses() {
    if (category === "All") {
      Object.values(courses).forEach(courseCategory => {
        courseCategory.forEach(course => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
      return courses[category];
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map(course => (
        <Card
          key={course.id}
          course={course}
          likedCourse={likedCourse}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
}

export default Cards;
