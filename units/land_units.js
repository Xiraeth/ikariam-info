"use strict";

$("document").ready(function () {
  let maps = false; // 2% for land units
  let codeOfHonour = false; // 4% for land units
  let logistics = false; // 8% for land units
  let allSelected = false; // toggle all surveys
  let militaristicFuture = 0;

  calculateTroopData("#spearmanInput", 0.6);
  calculateTroopData("#slingerInput", 0.4);
  calculateTroopData("#swordsmanInput", 1.2);
  calculateTroopData("#hopliteInput", 1.4);
  calculateTroopData("#ramInput", 4.4);
  calculateTroopData("#archerInput", 1.1);
  calculateTroopData("#catapultInput", 11.2);
  calculateTroopData("#carabineerInput", 4);
  calculateTroopData("#giantInput", 6.5);
  calculateTroopData("#mortarInput", 31);
  calculateTroopData("#bombardInput", 5.8);
  calculateTroopData("#gyrocopterInput", 2.5);
  calculateTroopData("#cookInput", 4);
  calculateTroopData("#doctorInput", 10);
  calculateTroopData("#spartanInput", 1.6);

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
    // Toggle the state
    allSelected = !allSelected;

    // Update the state of all checkboxes
    $("#maps, #codeOfHonour, #logistics").prop("checked", allSelected);

    // Update variables to calculate ukpeep properly
    maps = $("#maps").prop("checked");
    codeOfHonour = $("#codeOfHonour").prop("checked");
    logistics = $("#logistics").prop("checked");

    calcTotalUpkeep();
  });

  $("#militaristicFuture").on("input", function () {
    militaristicFuture = $(this).val() / 100;
    calcTotalUpkeep();
  });

  $("#woodReduction, #sulphurReduction, #crystalReduction, #wineReduction").on(
    "input",
    function () {
      calculateTotalMaterial();
    }
  );

  function calculateTroopData(inputId, offensivePoints) {
    $(inputId).on("input", function () {
      const result = Math.round($(this).val() * offensivePoints);
      const span = $(this).parent().find("span");
      span.text(result);
      calcTotalPoints();
      calcTotalUpkeep();
      calculateTotalMaterial();
    });
  }

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
