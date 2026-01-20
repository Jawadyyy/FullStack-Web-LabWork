const jsonString = `
{
  "id": 101,
  "name": "Ali Khan",
  "courses": ["CS101", "CS201", "CS301"]
}
`;

const student = JSON.parse(jsonString);

console.log("Student ID:", student.id);
console.log("Student Name:", student.name);
console.log("Registered Courses:", student.courses.join(", "));
