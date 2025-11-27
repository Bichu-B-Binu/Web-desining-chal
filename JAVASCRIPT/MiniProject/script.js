// Dataset
const courses = [
  {
    name: "javaScript",
    price: 1000,
    rating: 4.57,
    isAvailable: false,
    languages: ["Malayalam", "Tamil"],
    mentor: { name: "subin", contact: "99-223-34344" },
  },
  {
    name: "cyber Security",
    price: 2000,
    rating: 5.87,
    isAvailable: false,
    languages: ["Malayalam", "Tamil"],
    mentor: { name: "rahul", contact: "99-223-34344" },
  },
  {
    name: "flutter",
    price: 3000,
    rating: 7.27,
    isAvailable: false,
    languages: ["Malayalam", "Tamil"],
    mentor: { name: "deepak", contact: "99-223-34344" },
  },
  {
    name: "django",
    price: 4000,
    rating: 9.47,
    isAvailable: false,
    languages: ["Malayalam", "Tamil"],
    mentor: { name: "manoj", contact: "99-223-34344" },
  },
  {
    name: "data Science",
    price: 5000,
    rating: 7.57,
    isAvailable: false,
    languages: ["Malayalam", "Tamil"],
    mentor: { name: "vishnu", contact: "99-223-34344" },
  },
  {
    name: "mechine Learning",
    price: 6000,
    rating: 8.87,
    isAvailable: false,
    languages: ["Malayalam", "Tamil"],
    mentor: { name: "renu", contact: "99-223-34344" },
  },
];

// Function to format and display courses
const formatName = (name) => name.charAt(0).toUpperCase() + name.slice(1);

// Display total number of courses
function displayCourses(courses) {
  const courseContainer = document.querySelector("#course-container");
  courses.forEach((course) => {
    const courseUI = `<div class="course-card">
            <h3>${formatName(course.name)}</h3>
            <p>Price: ${course.price}</p>
            <p>Rating: ${Math.round(course.rating * 10) / 10}</p>
            <p>Available Languages: ${course.languages}</p>
            <p>Instructor: ${formatName(course.mentor.name)}</p>
            <p>Contact: ${course.mentor.contact}</p>
         </div>`;
    courseContainer.innerHTML = courseContainer.innerHTML + courseUI;
  });
}
displayCourses(courses);

// Display total course count
const courseCount = document.querySelector("#course-count");

courseCount.innerText = `Total Courses: ${courses.length}`;
