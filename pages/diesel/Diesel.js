/*
Project: Project 2 - Shop Front
File: petrol.js
Created Date: 12/01/2025
Modified Date: 18/01/2025
Author: Jagdeep Tiwana
*/

// Class for comments
class Comment {
  constructor(name, comment) {
    this.name = name;
    this.comment = comment;
  }
}

// UI Class: Handle UI comments
class Diesel {
  addCommentToList(comment) {
    const list = document.getElementById("comment-list");
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${comment.name}</td>
      <td>${comment.comment}</td>
       `;
    list.appendChild(row);
  }

  clearFields() {
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
  }
}

// Event Listening

document
  .getElementById("comment-form")
  .addEventListener("submit", function (e) {
    // Get form values
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;

    // Instantiate comment
    const comments = new Comment(name, comment);

    // Instantiate UI
    const diesel = new Diesel();

    // Validate
    if (name === "" || comment === "") {
      // Alert
      alert("Please fill in all fields");
    } else {
      // Add comment to list
      diesel.addCommentToList(comments);

      // Clear fields
      diesel.clearFields();
    }
    e.preventDefault();
  });
