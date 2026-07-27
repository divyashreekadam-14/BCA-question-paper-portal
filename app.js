// ================================
// BCA QUESTION PAPER PORTAL
// app.js
// ================================


// ---------- Get Started Button ----------

const startBtn = document.getElementById("startBtn");

if (startBtn) {
    startBtn.addEventListener("click", () => {

        document.getElementById("semester").scrollIntoView({
            behavior: "smooth"
        });

    });
}


// ---------- Subject Data ----------

const semesterSubjects = {

    1: [
        "Programming in C++",
        "Mathematical and statistical reasoning",
        "Digital Computer Organization",
        "English",
        "Kannada",
        "Indian constituition"
    ],

    2: [
        "Data Structures",
        "Operating System",
        "Environmental Studies",
        "kannada",
        "English ",
        "Programming in Java"
    ],

    3: [
        "C#",
        "DBMS",
        "kannada",
        "English",
        "Software Engineering",
        "E-Commerce and E-Governance",
        "Web Technology"
    ],

    4: [
        "Operating System",
        "Java Programming",
        "DBMS",
        "Computer Networks",
        "Python",
        "Software Engineering",
        "Web Technology"
    ],

    5: [
        "PHP",
        "Computer Graphics",
        "Cloud Computing",
        "Cyber Security",
        "AI Basics",
        "Project Work"
    ],

    6: [
        "Machine Learning",
        "Data Analytics",
        "Mobile Application Development",
        "IoT",
        "Internship",
        "Major Project"
    ]

};


// ---------- Question Paper Years ----------

const paperYears = [

    "2025 Question Paper",
    "2024 Question Paper",
    "2023 Question Paper"

];


// ---------- Semester Click ----------

const semesterCards = document.querySelectorAll(".semester-card");

const subjectContainer = document.getElementById("subjectContainer");

const paperContainer = document.getElementById("paperContainer");


semesterCards.forEach(card => {

    card.addEventListener("click", () => {

        const semester = card.dataset.sem;

        loadSubjects(semester);

    });

});


// ---------- Load Subjects ----------

function loadSubjects(semester) {

    subjectContainer.innerHTML = "";

    paperContainer.innerHTML = "<p>Select Subject First</p>";


    semesterSubjects[semester].forEach(subject => {

        const div = document.createElement("div");

        div.className = "subject-card";

        div.innerHTML = `<h3>${subject}</h3>`;


        div.addEventListener("click", () => {

            loadQuestionPapers(subject, semester);


            setTimeout(() => {

                document.getElementById("papers").scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }, 100);

        });


        subjectContainer.appendChild(div);

    });


    setTimeout(() => {

        document.getElementById("subjects").scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }, 100);

}


// ---------- Load Subject Resources ----------

function loadQuestionPapers(subject, semester) {


    paperContainer.innerHTML = "";


    const paper = document.createElement("div");

    paper.className = "paper-card";


    paper.innerHTML = `

        <h2>${subject}</h2>

        <br>

        <button onclick="openResource('${subject}', 'Syllabus', '${semester}')">
            Syllabus
        </button>


        <button onclick="openResource('${subject}', 'Notes', '${semester}')">
            Notes
        </button>


        <button onclick="openResource('${subject}', 'Question Papers', '${semester}')">
            Previous Papers
        </button>


        <button onclick="openResource('${subject}', 'Important Questions', '${semester}')">
            Important Questions
        </button>


        <button onclick="openResource('${subject}', 'Videos', '${semester}')">
            Video Lectures
        </button>

        <br><br>

    `;


    paperContainer.appendChild(paper);

}


// ---------- Open Resources ----------

function openResource(subject, resource, semester) {


    // ---------- SYLLABUS ----------

   // ---------- SYLLABUS ----------

if (resource === "Syllabus") {

    // Semester 1
    if (semester === "1") {

        window.open(
            "assets/notes/semester1/semester1-syllabus.pdf",
            "_blank"
        );

        return;
    }

    // Semester 2
    if (semester === "2") {

        window.open(
            "assets/notes/semester2/semester2-syllabus.pdf",
            "_blank"
        );

        return;
    }

    // Semester 3
    if (semester === "3") {

        window.open(
            "assets/notes/semester3/semester3-syllabus.pdf",
            "_blank"
        );

        return;
    }

    // Semester 4
    if (semester === "4") {

        window.open(
            "assets/notes/semester4/semester4-syllabus.pdf",
            "_blank"
        );

        return;
    }

    // Semester 5 & 6
    alert(
        "Syllabus is not available yet for Semester " + semester
    );

    return;
}


    // ---------- NOTES ----------

    if (resource === "Notes") {


        if (

            semester === "1" &&

            subject === "Digital Computer Organization"

        ) {

            window.open(

                "assets/notes/semester1/Digital%20computer%20organization%20notes/notes.html",

                "_blank"

            );

            return;

        }


        if (

            semester === "1" &&

            subject === "Programming in C++"

        ) {

            window.open(

                "assets/programming-in-c++/notes.html",

                "_blank"

            );

            return;

        }
        if (

    semester === "2" &&

    subject === "Operating System"

) {

    window.open(

        "assets/notes/semester2/notes.html",

        "_blank"

    );

    return;

}


        alert("Notes will be uploaded soon.");

        return;

    }


    // ---------- PREVIOUS PAPERS ----------

    if (resource === "Question Papers") {

        alert(

            "Previous papers for " +

            subject +

            " will be uploaded soon."

        );

        return;

    }


    // ---------- IMPORTANT QUESTIONS ----------

    if (resource === "Important Questions") {

        alert(

            "Important questions for " +

            subject +

            " will be uploaded soon."

        );

        return;

    }


    // ---------- VIDEO LECTURES ----------

    if (resource === "Videos") {

        alert(

            "Video lectures for " +

            subject +

            " will be uploaded soon."

        );

        return;

    }

}


// ---------- Fade Animation ----------

const observer = new IntersectionObserver((entries) => {


    entries.forEach(entry => {


        if (entry.isIntersecting) {


            entry.target.style.opacity = "1";


            entry.target.style.transform = "translateY(0px)";


        }

    });

});


document.querySelectorAll(".semester-card").forEach(card => {


    card.style.opacity = "0";


    card.style.transform = "translateY(40px)";


    card.style.transition = "0.6s";


    observer.observe(card);

});


// ---------- Get Access ----------

function getAccess(subject) {


    alert(

        "Opening all study resources for\n\n" +

        subject

    );

}