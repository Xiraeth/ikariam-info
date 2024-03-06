"use strict";

const DARK_COLOUR = "rgb(51, 53, 64)";
const WHITE_COLOUR = "#f6f6b8";
const HEADER_LIGHT = "#ebeb6d";
const HEADER_DARK = "#c7c7c7";

const BG_COLOUR_LIGHT = "#ebeb6d";
const BG_COLOUR_DARK = "rgba(0, 0, 0, 0.6)";

let theme = localStorage.theme || "light";

$("document").ready(function () {
  if (theme === "light") {
    $(":root").css("--bg-colour", WHITE_COLOUR);
    $(":root").css("--bg-colour-dim", BG_COLOUR_LIGHT);
    $(":root").css("--text-colour", DARK_COLOUR);
    $(":root").css("--link-colour", DARK_COLOUR);
    $(":root").css("--navbar-colour", HEADER_LIGHT);
    $("#themeBtn").toggleClass("fa-sun");
    $("#themeBtn").toggleClass("fa-moon");
  } else {
    $(":root").css("--bg-colour", DARK_COLOUR);
    $(":root").css("--bg-colour-dim", BG_COLOUR_DARK);
    $(":root").css("--text-colour", WHITE_COLOUR);
    $(":root").css("--link-colour", WHITE_COLOUR);
    $(":root").css("--navbar-colour", HEADER_DARK);
    $("#themeBtn").toggleClass("fa-sun");
    $("#themeBtn").toggleClass("fa-moon");
  }
});

$("#themeBtn").click(function () {
  if (theme === "dark") {
    $(":root").css("--bg-colour", WHITE_COLOUR);
    $(":root").css("--bg-colour-dim", BG_COLOUR_LIGHT);
    $(":root").css("--text-colour", DARK_COLOUR);
    $(":root").css("--link-colour", DARK_COLOUR);
    $(":root").css("--navbar-colour", HEADER_LIGHT);
    $("#themeBtn").toggleClass("fa-sun");
    $("#themeBtn").toggleClass("fa-moon");
    theme = "light";
    localStorage.setItem("theme", theme);
  } else {
    $(":root").css("--bg-colour", DARK_COLOUR);
    $(":root").css("--bg-colour-dim", BG_COLOUR_DARK);
    $(":root").css("--text-colour", WHITE_COLOUR);
    $(":root").css("--link-colour", WHITE_COLOUR);
    $(":root").css("--navbar-colour", HEADER_DARK);
    $("#themeBtn").toggleClass("fa-sun");
    $("#themeBtn").toggleClass("fa-moon");
    theme = "dark";
    localStorage.setItem("theme", theme);
  }
});
