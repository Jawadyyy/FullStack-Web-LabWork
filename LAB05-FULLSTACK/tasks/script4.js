let students = [];

fetch('students.json')
  .then(response => response.json())
  .then(data => {
    students = data;
    displayStudents(students);
  });

function displayStudents(list) {
  const table = document.getElementById('studentTable');
  table.innerHTML = '';

  list.forEach(student => {
    const row = document.createElement('tr');

    if (student.cgpa < 2.5) {
      row.style.backgroundColor = 'rgb(255, 150, 150)';
    }

    row.innerHTML = `
      <td>${student.rollNo}</td>
      <td>${student.name}</td>
      <td>${student.department}</td>
      <td>${student.cgpa}</td>
      <td>${student.year}</td>
    `;
    table.appendChild(row);
  });
}

function sortByName() {
  const sorted = [...students].sort((a, b) => a.name.localeCompare(b.name));
  displayStudents(sorted);
}

function sortByCGPA() {
  const sorted = [...students].sort((a, b) => b.cgpa - a.cgpa);
  displayStudents(sorted);
}

document.getElementById('filterDept').addEventListener('input', function () {
  const value = this.value.toLowerCase();
  const filtered = students.filter(s => s.department.toLowerCase().includes(value));
  displayStudents(filtered);
});
