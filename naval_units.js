"use strict";

$("#ramshipInput").on("input", function () {
  const result = Math.round($(this).val() * 5);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#ballistashipInput").on("input", function () {
  const result = Math.round($(this).val() * 6.8);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#catapulshipInput").on("input", function () {
  const result = Math.round($(this).val() * 6.4);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#fireshipInput").on("input", function () {
  const result = Math.round($(this).val() * 6.2);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#mortarshipInput").on("input", function () {
  const result = Math.round($(this).val() * 22.4);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#rocketshipInput").on("input", function () {
  const result = Math.round($(this).val() * 28);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#steamramInput").on("input", function () {
  const result = Math.round($(this).val() * 24);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#paddlespeedboatInput").on("input", function () {
  const result = Math.round($(this).val() * 6.4);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#ballooncarrierInput").on("input", function () {
  const result = Math.round($(this).val() * 28);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#tenderInput").on("input", function () {
  const result = Math.round($(this).val() * 16);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#divingboatInput").on("input", function () {
  const result = Math.round($(this).val() * 20.2);
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

  totalUpkeep = parseFloat(totalUpkeep - totalUpkeep * discount).toFixed(2);

  $("#totalUpkeep").find("span").text(totalUpkeep);
}
