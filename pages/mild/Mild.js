/*
Project: Project 2 - Shop Front
File: Mild.js
Created Date: 19/01/2025
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
class Mild {
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
    const mild = new Mild();

    // Validate
    if (name === "" || comment === "") {
      // Alert
      alert("Please fill in all fields");
    } else {
      // Add comment to list
      mild.addCommentToList(comments);

      // Clear fields
      mild.clearFields();
    }
    e.preventDefault();
  });
