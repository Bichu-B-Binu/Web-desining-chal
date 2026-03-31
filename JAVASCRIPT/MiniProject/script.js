// Dataset
const courses = [
  {
    name: "javaScript",
    price: 1000,
    ratting: 4.57,
    isAvailable: false,
    languages: ["Malayalam", "Tamil"],
    mentor: { name: "subin", contact: "99-223-34344" },
  },
  {
    name: "cyber Security",
    price: 2000,
    ratting: 5.87,
    isAvailable: false,
    languages: ["Malayalam", "Tamil"],
    mentor: { name: "rahul", contact: "99-223-34344" },
  },
  {
    name: "flutter",
    price: 3000,
    ratting: 7.27,
    isAvailable: false,
    languages: ["Malayalam", "Tamil"],
    mentor: { name: "deepak", contact: "99-223-34344" },
  },
  {
    name: "django",
    price: 4000,
    ratting: 9.47,
    isAvailable: false,
    languages: ["Malayalam", "Tamil"],
    mentor: { name: "manoj", contact: "99-223-34344" },
  },
  {
    name: "data Science",
    price: 5000,
    ratting: 7.57,
    isAvailable: false,
    languages: ["Malayalam", "Tamil"],
    mentor: { name: "vishnu", contact: "99-223-34344" },
  },
  {
    name: "machine Learning",
    price: 6000,
    ratting: 8.87,
    isAvailable: false,
    languages: ["Malayalam", "Tamil"],
    mentor: { name: "renu", contact: "99-223-34344" },
  },
];

// Function to format and display courses
const formatName = (name) => name.charAt(0).toUpperCase() + name.slice(1);

// Display total course count
const displayTotalCourseCount = (courses) => {
  const courseCount = document.querySelector("#course-count");
  courseCount.innerText = `Total Courses: ${courses.length}`;
};

// Display total number of courses
function displayCourses(courses) {
  const courseContainer = document.querySelector("#course-container");
    courseContainer.innerHTML = "";
  courses.forEach((course) => {
    const courseUI = `<div class="course-card">
            <h3>${formatName(course.name)}</h3> 
            <p>Price: ${course.price}</p>
            <p>Rating: ${Math.round(course.ratting * 10) / 10}</p>
            <p>Available Languages: ${course.languages}</p>
            <p>Instructor: ${formatName(course.mentor.name)}</p>
            <p>Contact: ${course.mentor.contact}</p>
         </div>`;
    courseContainer.innerHTML = courseContainer.innerHTML + courseUI;
  });
}

// Find top rated course
const findtopRatedCourse = (courses) => {
  const topRated = courses.reduce((acc, course) => {
    return acc.ratting > course.ratting ? acc : course;
  });
  return topRated;
};

// Display top rated course
displyaTopRatedCourses = (coursesArr) => {
  const topRatedCourse = findtopRatedCourse(coursesArr);
  const top = document.querySelector("#top-rated-course");

  const courseUI = `<div class="course-card">
                        <h3>${formatName(topRatedCourse.name)}</h3>
                        <p>Price: ${topRatedCourse.price}</p>
                        <p>Rating: ${
                          Math.round(topRatedCourse.ratting * 10) / 10
                        }</p>
                        <p>Available Languages: ${topRatedCourse.languages}</p>
                        <p>Instructor: ${formatName(
                          topRatedCourse.mentor.name
                        )}</p>
                        <p>Contact: ${topRatedCourse.mentor.contact}</p>
                    </div>`;

  top.innerHTML = courseUI;
};

// Search functionality

const getSearchesult = (query, courses) => {
  const result = courses.filter((course) => {
    return course.name.includes(query);
  });
  displayCourses(result);
  displayTotalCourseCount(result);
  
};


// Initialize page
const initPage = () => {
  displayTotalCourseCount(courses);
  displayCourses(courses);
  displyaTopRatedCourses(courses);
  const searchInput = document.querySelector("#search");
  searchInput.addEventListener("input", (e) => {
    getSearchesult(e.target.value, courses);
  });
};
initPage();
