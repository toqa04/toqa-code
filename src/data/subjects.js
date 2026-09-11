// Central list of subjects. Each subject can optionally carry a `materialsUrl`
// (a Google Drive folder link, opened in a new tab). Subjects without a link
// show a "Materials coming soon" state instead of a dead button.
//
// Two links were supplied with the brief and have been mapped to the two
// subjects that already have posters/materials ready (Java, Software
// Architecture & Design). Add the rest as they're ready — see README.

export const subjects = [
  {
    id: "java",
    name: "Java",
    tagline: "Core language, OOP in practice, and the JVM ecosystem.",
    materialsUrl: "https://drive.google.com/drive/folders/1Opgvg6ipcwWKyn7YVKQtEx4BWBzpZ_tT?usp=sharing",
  },
  {
    id: "software-architecture",
    name: "Software Architecture",
    linkLabel: "archi",
    tagline: "Design principles, patterns, and structuring real systems.",
    materialsUrl: "https://drive.google.com/drive/folders/14nogWCKsGCCPqmU7K8qoBLVSEK-VlaEe?usp=sharing",
  },
  {
    id: "oop",
    name: "OOP",
    tagline: "Object-oriented design: classes, inheritance, polymorphism.",
    materialsUrl: null,
  },
  {
    id: "data-structures",
    name: "Data Structures",
    tagline: "Lists, trees, graphs, and how to choose the right one.",
    materialsUrl: null,
  },
  {
    id: "algorithms",
    name: "Algorithms",
    tagline: "Complexity, recursion, sorting, and problem-solving patterns.",
    materialsUrl: null,
  },
  {
    id: "cpp",
    name: "C++",
    tagline: "Memory, pointers, and systems-level programming fundamentals.",
    materialsUrl: null,
  },
  {
    id: "csharp",
    name: "C#",
    tagline: ".NET fundamentals and object-oriented development.",
    materialsUrl: null,
  },
  {
    id: "os",
    name: "Operating Systems",
    tagline: "Processes, memory management, scheduling, and concurrency.",
    materialsUrl: null,
  },
];

// Options for the "Book a Private Session" form's subject <select>.
export const bookingSubjects = subjects.map((s) => s.name);
