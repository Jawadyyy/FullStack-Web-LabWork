const students = [];

  document.getElementById("studentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const student = {
      name: document.getElementById("name").value,
      age: parseInt(document.getElementById("age").value),
      department: document.getElementById("department").value,
      cgpa: parseFloat(document.getElementById("cgpa").value)
    };

    students.push(student);

    document.getElementById("jsonOutput").textContent = JSON.stringify(student, null, 2);

    const tableBody = document.getElementById("studentTable");
    tableBody.innerHTML = "";
    students.forEach((s, index) => {
      tableBody.innerHTML += `<tr>
        <td>${index + 1}</td>
        <td>${s.name}</td>
        <td>${s.age}</td>
        <td>${s.department}</td>
        <td>${s.cgpa}</td>
      </tr>`;
    });

    this.reset(); 
  });