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

// ---------- Load Subjects ----------

function loadSubjects(semester) {

    subjectContainer.innerHTML = "";
    paperContainer.innerHTML = "<p>Select Subject First</p>";

    semesterSubjects[semester].forEach(subject => {

        const div = document.createElement("div");

        div.className = "subject-card";
        div.innerHTML = `<h3>${subject}</h3>`;

        div.addEventListener("click", () => {

            loadQuestionPapers(subject);

            // Automatically move to Subject Resources
            setTimeout(() => {

                document.getElementById("papers").scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 100);

        });

        subjectContainer.appendChild(div);

    });

    // Automatically move to Subjects section
    setTimeout(() => {

        document.getElementById("subjects").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

}

    

        

    
    
        

// ---------- Load Papers ----------

function loadQuestionPapers(subject) {


    paperContainer.innerHTML = "";

    const paper = document.createElement("div");

    paper.className = "paper-card";

    paper.innerHTML = `

        <h2>${subject}</h2>

        <br>

        <button onclick="openResource('${subject}','Syllabus')">
            Syllabus
        </button>

        <button onclick="openResource('${subject}','Notes')">
            Notes
        </button>

        <button onclick="openResource('${subject}','Question Papers')">
            Previous Papers
        </button>

        <button onclick="openResource('${subject}','Important Questions')">
            Important Questions
        </button>

        

        <button onclick="openResource('${subject}','Videos')">
            Video Lectures
        </button>

        <br><br>

        

    `;

    paperContainer.appendChild(paper);

}  

// ---------- View PDF ----------

function DownloadPDF(subject, year) {

    alert(

        "Open PDF for:\n\n" +

        subject +

        "\n" +

        year +

        "\n\nLater this will open the actual PDF."

    );

}

// ---------- Download PDF ----------






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

// ---------- Console ----------

console.log("BCA Question Paper Portal Loaded Successfully");
function openResource(subject, resource){

    alert(
        subject +
        "\n\n" +
        resource +
        "\n\nThis will open the selected resource."
    );

}

function getAccess(subject){

    alert(
        "Opening all study resources for\n\n" +
        subject
    );

}