import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData, apiUrl } from "./data";
import { useEffect, useState } from "react";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch(apiUrl);
      const output = await req.json();
      // console.log(output.data);
      setCourses(output.data);
      // console.log(courses);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(courses);
  }, [courses]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-bgDark2">
        <Filter filterData={filterData} setCategory={setCategory} />
        <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh] ">
          <Cards courses={courses} category={category} />
        </div>
      </div>
    </div>
  );
};

export default App;
