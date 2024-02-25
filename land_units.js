"use strict";

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
  const result = Math.round($(this).val() * 6.5);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#mortarInput").on("input", function () {
  const result = Math.round($(this).val() * 31);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#bombardInput").on("input", function () {
  const result = Math.round($(this).val() * 5.8);
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

  totalUpkeep = parseFloat(totalUpkeep - totalUpkeep * discount).toFixed(2);

  $("#totalUpkeep").find("span").text(totalUpkeep);
}
