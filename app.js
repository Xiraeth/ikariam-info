'use strict';

const DARK_COLOUR = "rgb(51, 53, 64)";
const WHITE_COLOUR = "#f6f6b8";
const HEADER_LIGHT = "#ebeb6d";
const HEADER_DARK = "#c7c7c7";

let maps = false; // 2% for land units
let codeOfHonour = false; // 4% for land units
let logistics = false; // 8% for land units
let shipMaintenance = false; // 2% for land units
let pitch = false; // 4% for land units
let seaCharts = false; // 8% for land units

let theme = localStorage.theme || 'light';

$("document").ready(function () {
  if (theme === "light") {
    $(":root").css("--bg-color", WHITE_COLOUR);
    $(":root").css("--text-color", DARK_COLOUR);
    $(":root").css("--navbar-color", HEADER_LIGHT);
    $("#themeBtn").toggleClass("fa-sun");
    $("#themeBtn").toggleClass("fa-moon");
  } else {
    $(":root").css("--bg-color", DARK_COLOUR);
    $(":root").css("--text-color", WHITE_COLOUR);
    $(":root").css("--navbar-color", HEADER_DARK);
    $("#themeBtn").toggleClass("fa-sun");
    $("#themeBtn").toggleClass("fa-moon");
  }
});

$("#themeBtn").click(function () {
  if (theme === "dark") {
    $(":root").css("--bg-color", WHITE_COLOUR);
    $(":root").css("--text-color", DARK_COLOUR);
    $(":root").css("--navbar-color", HEADER_LIGHT);
    $("#themeBtn").toggleClass("fa-sun");
    $("#themeBtn").toggleClass("fa-moon");
    theme = "light";
    localStorage.setItem("theme", theme);
  } else {
    $(":root").css("--bg-color", DARK_COLOUR);
    $(":root").css("--text-color", WHITE_COLOUR);
    $(":root").css("--navbar-color", HEADER_DARK);
    $("#themeBtn").toggleClass("fa-sun");
    $("#themeBtn").toggleClass("fa-moon");
    theme = "dark";
    localStorage.setItem("theme", theme);
  }
});
