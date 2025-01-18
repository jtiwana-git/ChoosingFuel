/*
Project: Project 2 - Shop Front
File: script.js
Created Date: 11/01/2025
modified Date: 18/01/2025
Author: Jagdeep Tiwana
*/

const body = document.querySelector("body");
const toggle = document.querySelectorAll(".icon-container");
const navItems = document.querySelector(".nav-items");
const navToggle = document.querySelector(".toggle");
const toggleActive = document.querySelector(".toggleActive");

toggle.forEach((item) => {
  item.addEventListener("click", () => {
    body.classList.toggle("dark");
    toggle.style.visability = "hidden";
  });
});

navToggle.addEventListener("click", () => {
  navItems.classList.toggle("navisActive");
  navToggle.classList.toggle("toggleActive");
});
