import { useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";

function Card({ course, likedCourse, setLikedCourses }) {
  function clickHandler() {
    if (course) {
      if (likedCourse.includes(course.id)) {
        setLikedCourses(prev => prev.filter(cid => cid !== course.id));
        toast.warning("Like Removed");
      } else {
        if (likedCourse.length === 0) {
          setLikedCourses([course?.id]);
        } else {
          setLikedCourses(prev => [...prev, course.id]);
        }
        toast.success("Liked Successfully");
      }
    }
  }

  let description = `${course.description.substr(0, 150)} ReadMore...`;

  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} />

        <div
          className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center">
          <button onClick={clickHandler}>
            <FcLike />
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-white">{description}</p>
      </div>
    </div>
  );
}

export default Card;
