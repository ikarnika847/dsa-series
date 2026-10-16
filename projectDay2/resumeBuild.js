
const resume = {
    name: "Karnika Gupta",
    email: "karnika@example.com",
    phone: "9876543210",

    education: [
        {
            degree: "B.Tech Computer Science",
            college: "Anand International College of Engineering",
            year: 2026
        }
    ],

    skills: ["JavaScript", "Node.js", "Express.js", "PostgreSQL"],

    experience: [
        {
            role: "Software Developer Intern",
            company: "ABC Company",
            duration: "6 months"
        }
    ]
};

// Resume generate karne ka function
function generateResume(data) {
    console.log("\n========== MY RESUME ==========\n");

    console.log("Name:", data.name);
    console.log("Email:", data.email);
    console.log("Phone:", data.phone);

    console.log("\n--- EDUCATION ---");

    data.education.forEach((item, index) => {
        console.log(`${index + 1}. ${item.degree}`);
        console.log("   College:", item.college);
        console.log("   Year:", item.year);
    });

    console.log("\n--- SKILLS ---");
    console.log(data.skills.join(", "));

    console.log("\n--- EXPERIENCE ---");

    data.experience.forEach((item, index) => {
        console.log(`${index + 1}. ${item.role}`);
        console.log("   Company:", item.company);
        console.log("   Duration:", item.duration);
    });

    console.log("\n===============================\n");
}

generateResume(resume);
