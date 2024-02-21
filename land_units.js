"use strict";

const DARK_COLOUR = "rgb(51, 53, 64)";
const WHITE_COLOUR = "#f6f6b8";
const HEADER_LIGHT = "#ebeb6d";
const HEADER_DARK = "#c7c7c7";

let codeOfHonour = false;
let logistics = false;
let theme = localStorage.theme;

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

$("#spearmanInput").on("input", function () {
  const result = Math.round($(this).val() * 0.6);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#slingerInput").on("input", function () {
  const result = Math.round($(this).val() * 0.4);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#swordsmanInput").on("input", function () {
  const result = Math.round($(this).val() * 1.2);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#hopliteInput").on("input", function () {
  const result = Math.round($(this).val() * 1.4);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#ramInput").on("input", function () {
  const result = Math.round($(this).val() * 4.4);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#archerInput").on("input", function () {
  const result = Math.round($(this).val() * 1.1);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#catapultInput").on("input", function () {
  const result = Math.round($(this).val() * 11.2);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#carabineerInput").on("input", function () {
  const result = Math.round($(this).val() * 4);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#giantInput").on("input", function () {
  const result = Math.round($(this).val() * 12.4);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#mortarInput").on("input", function () {
  const result = Math.round($(this).val() * 62);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#bombardInput").on("input", function () {
  const result = Math.round($(this).val() * 11.6);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#gyrocopterInput").on("input", function () {
  const result = Math.round($(this).val() * 2.5);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#cookInput").on("input", function () {
  const result = Math.round($(this).val() * 4);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#doctorInput").on("input", function () {
  const result = Math.round($(this).val() * 10);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#spartanInput").on("input", function () {
  const result = Math.round($(this).val() * 1.6);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#codeOfHonour").on("change", function () {
  codeOfHonour = codeOfHonour === true ? false : true;
  calcTotalUpkeep();
});

$("#logistics").on("change", function () {
  logistics = logistics === true ? false : true;
  calcTotalUpkeep();
});

function calcTotalPoints() {
  let totalPoints = 0;

  // calculate total points in span elements
  $(".militaryPoints").each(function () {
    totalPoints += parseInt($(this).text() || 0);
  });

  $("#totalPoints").text(totalPoints);
}

function calcTotalUpkeep() {
  let totalUpkeep = 0;
  let discount = 0;

  $(".militaryPoints").each(function () {
    const inputId = $(this).parent().prevAll("input").attr("id");
    const inputValue = parseInt($("#" + inputId).val() || 0);
    const unitUpkeep = parseInt($(this).data("upkeep") || 0);

    totalUpkeep += inputValue * unitUpkeep;
  });

  if (codeOfHonour) discount = 0.04;
  if (logistics) discount += 0.08;

  totalUpkeep = parseFloat(totalUpkeep - totalUpkeep * discount);

  totalUpkeep = parseFloat(totalUpkeep.toFixed(2));

  $("#totalUpkeep").find("span").text(totalUpkeep);
}
