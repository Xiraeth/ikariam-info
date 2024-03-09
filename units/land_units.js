"use strict";

$("document").ready(function () {
  let maps = false; // 2% for land units
  let codeOfHonour = false; // 4% for land units
  let logistics = false; // 8% for land units
  let allSelected = false; // toggle all surveys
  let militaristicFuture = 0;

  $("#spearmanInput").on("input", function () {
    const result = Math.round($(this).val() * 0.6);
    const span = $(this).parent().find("span");
    span.text(result);
    calcTotalPoints();
    calcTotalUpkeep();
    calculateTotalMaterial();
  });

  $("#slingerInput").on("input", function () {
    const result = Math.round($(this).val() * 0.4);
    const span = $(this).parent().find("span");
    span.text(result);
    calcTotalPoints();
    calcTotalUpkeep();
    calculateTotalMaterial();
  });

  $("#swordsmanInput").on("input", function () {
    const result = Math.round($(this).val() * 1.2);
    const span = $(this).parent().find("span");
    span.text(result);
    calcTotalPoints();
    calcTotalUpkeep();
    calculateTotalMaterial();
  });

  $("#hopliteInput").on("input", function () {
    const result = Math.round($(this).val() * 1.4);
    const span = $(this).parent().find("span");
    span.text(result);
    calcTotalPoints();
    calcTotalUpkeep();
    calculateTotalMaterial();
  });

  $("#ramInput").on("input", function () {
    const result = Math.round($(this).val() * 4.4);
    const span = $(this).parent().find("span");
    span.text(result);
    calcTotalPoints();
    calcTotalUpkeep();
    calculateTotalMaterial();
  });

  $("#archerInput").on("input", function () {
    const result = Math.round($(this).val() * 1.1);
    const span = $(this).parent().find("span");
    span.text(result);
    calcTotalPoints();
    calcTotalUpkeep();
    calculateTotalMaterial();
  });

  $("#catapultInput").on("input", function () {
    const result = Math.round($(this).val() * 11.2);
    const span = $(this).parent().find("span");
    span.text(result);
    calcTotalPoints();
    calcTotalUpkeep();
    calculateTotalMaterial();
  });

  $("#carabineerInput").on("input", function () {
    const result = Math.round($(this).val() * 4);
    const span = $(this).parent().find("span");
    span.text(result);
    calcTotalPoints();
    calcTotalUpkeep();
    calculateTotalMaterial();
  });

  $("#giantInput").on("input", function () {
    const result = Math.round($(this).val() * 6.5);
    const span = $(this).parent().find("span");
    span.text(result);
    calcTotalPoints();
    calcTotalUpkeep();
    calculateTotalMaterial();
  });

  $("#mortarInput").on("input", function () {
    const result = Math.round($(this).val() * 31);
    const span = $(this).parent().find("span");
    span.text(result);
    calcTotalPoints();
    calcTotalUpkeep();
    calculateTotalMaterial();
  });

  $("#bombardInput").on("input", function () {
    const result = Math.round($(this).val() * 5.8);
    const span = $(this).parent().find("span");
    span.text(result);
    calcTotalPoints();
    calcTotalUpkeep();
    calculateTotalMaterial();
  });

  $("#gyrocopterInput").on("input", function () {
    const result = Math.round($(this).val() * 2.5);
    const span = $(this).parent().find("span");
    span.text(result);
    calcTotalPoints();
    calcTotalUpkeep();
    calculateTotalMaterial();
  });

  $("#cookInput").on("input", function () {
    const result = Math.round($(this).val() * 4);
    const span = $(this).parent().find("span");
    span.text(result);
    calcTotalPoints();
    calcTotalUpkeep();
    calculateTotalMaterial();
  });

  $("#doctorInput").on("input", function () {
    const result = Math.round($(this).val() * 10);
    const span = $(this).parent().find("span");
    span.text(result);
    calcTotalPoints();
    calcTotalUpkeep();
    calculateTotalMaterial();
  });

  $("#spartanInput").on("input", function () {
    const result = Math.round($(this).val() * 1.6);
    const span = $(this).parent().find("span");
    span.text(result);
    calcTotalPoints();
    calcTotalUpkeep();
    calculateTotalMaterial();
  });

  $("#maps").on("change", function () {
    maps = maps === true ? false : true;
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

  $("#selectAll").on("change", function () {
    allSelected = !allSelected; // Toggle the state

    // Update the state of all checkboxes
    $("#maps, #codeOfHonour, #logistics").prop("checked", allSelected);
  });

  $("#militaristicFuture").on("input", function () {
    militaristicFuture = $(this).val() / 100;
    calcTotalUpkeep();
  });

  $("#woodReduction").on("input", function () {
    calculateTotalMaterial();
  });

  $("#sulphurReduction").on("input", function () {
    calculateTotalMaterial();
  });

  $("#crystalReduction").on("input", function () {
    calculateTotalMaterial();
  });

  $("#wineReduction").on("input", function () {
    calculateTotalMaterial();
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

    if (maps) discount += 0.02;
    if (codeOfHonour) discount = 0.04;
    if (logistics) discount += 0.08;
    if (militaristicFuture > 0) discount += militaristicFuture;

    totalUpkeep = parseFloat(
      totalUpkeep - totalUpkeep * discount
    ).toLocaleString("en-US", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    $("#totalUpkeep").find("span").text(totalUpkeep);
  }

  function calculateTotalMaterial() {
    let totalWood = 0;
    let totalSulphur = 0;
    let totalCrystal = 0;
    let totalWine = 0;
    let totalCost = 0;

    $(".militaryPoints").each(function () {
      const input = $(this).parent().prevAll("input");
      const baseWood = $(this).data("wood");
      const baseSulphur = $(this).data("sulphur");
      const baseCrystal = $(this).data("crystal");
      const baseWine = $(this).data("wine");
      const woodReduction = parseFloat($("#woodReduction").val()) || 0;
      const sulphurReduction = parseFloat($("#sulphurReduction").val()) || 0;
      const crystalReduction = parseFloat($("#crystalReduction").val()) || 0;
      const wineReduction = parseFloat($("#wineReduction").val()) || 0;

      totalSulphur += baseSulphur * input.val() * (1 - sulphurReduction / 100);
      totalWood += baseWood * input.val() * (1 - woodReduction / 100);
      totalCrystal += baseCrystal * input.val() * (1 - crystalReduction / 100);
      totalWine += baseWine * input.val() * (1 - wineReduction / 100);
    });

    totalCost += totalSulphur + totalWood + totalCrystal + totalWine;

    $("#totalWood").text(
      totalWood.toLocaleString("en-US", {
        style: "decimal",
        maximumFractionDigits: 2,
        minimumFractionDigits: 0,
      })
    );
    $("#totalSulphur").text(
      totalSulphur.toLocaleString("en-US", {
        style: "decimal",
        maximumFractionDigits: 2,
        minimumFractionDigits: 0,
      })
    );
    $("#totalCrystal").text(
      totalCrystal.toLocaleString("en-US", {
        style: "decimal",
        maximumFractionDigits: 2,
        minimumFractionDigits: 0,
      })
    );
    $("#totalWine").text(
      totalWine.toLocaleString("en-US", {
        style: "decimal",
        maximumFractionDigits: 2,
        minimumFractionDigits: 0,
      })
    );
    $("#totalMaterials").text(
      totalCost.toLocaleString("en-US", {
        style: "decimal",
        maximumFractionDigits: 2,
        minimumFractionDigits: 0,
      })
    );
  }
});
