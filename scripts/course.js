const courses = [

    { code: "WDD231", credits: 2, completed: false },
    { code: "CSEPC110", credits: 2, completed: true },
    { code: "WDD130", credits: 2, completed: true },
    { code: "CSE111", credits: 2, completed: true },
    { code: "WDD131", credits: 2, completed: true },
    { code: "CSE210", credits: 2, completed: true },
    { code: "CSE499", credits: 3, completed: false },
    { code: "CSE212", credits: 2, completed: false },
    { code: "CSE270", credits: 3, completed: false },
    { code: "CSE300", credits: 1, completed: false },
    { code: "CSE310", credits: 3, completed: false },
    { code: "CSE325", credits: 3, completed: false },
    { code: "CSE370", credits: 2, completed: false },
    { code: "WDD330", credits: 3, completed: false },
    { code: "CSE340", credits: 3, completed: false },
    { code: "CSE341", credits: 3, completed: false },
    { code: "WDD430", credits: 3, completed: false }

]
const courseList = document.querySelector("#course-list")
const creditTotal = document.querySelector("#credit-total")

function displayCourses(filter) {

    courseList.innerHTML = "";
    const filteredCourses = courses.filter(course =>
        filter === "all" || course.code.startsWith(filter)
    );
    filteredCourses.forEach(course => {

        const courseElement = document.createElement("div")
        courseElement.classList.add("course");

        if (course.completed) {
            courseElement.classList.add("completed");
        }
        courseElement.textContent =
            `${course.code} - ${course.credits} credits`;

        courseList.appendChild(courseElement);
    })
}