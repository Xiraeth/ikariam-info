"use strict";

$("document").ready(function () {
  let shipMaintenance = false; // 2% for naval units
  let pitch = false; // 4% for naval units
  let seaCharts = false; // 8% for naval units
  let allSelected = false; // toggle all surveys
  let seafaringFuture = 0;

  $('.options input[type="checkbox"]').prop("checked", false);

  calculateShipData("#ramshipInput", 5);
  calculateShipData("#ballistashipInput", 6.8);
  calculateShipData("#catapultshipInput", 6.4);
  calculateShipData("#fireshipInput", 6.2);
  calculateShipData("#mortarshipInput", 22.4);
  calculateShipData("#rocketshipInput", 28);
  calculateShipData("#steamramInput", 24);
  calculateShipData("#paddlespeedboatInput", 6.4);
  calculateShipData("#ballooncarrierInput", 28);
  calculateShipData("#tenderInput", 16);
  calculateShipData("#divingboatInput", 20.2);
  calculateShipData("#ramshipInput", 5);

  $("#shipMaintenance").on("change", function () {
    shipMaintenance = shipMaintenance === true ? false : true;
    calcTotalUpkeep();
  });

  $("#pitch").on("change", function () {
    pitch = pitch === true ? false : true;
    calcTotalUpkeep();
  });

  $("#seaCharts").on("change", function () {
    seaCharts = seaCharts === true ? false : true;
    calcTotalUpkeep();
  });

  $("#selectAll").on("change", function () {
    allSelected = !allSelected; // Toggle the state

    // Update the state of all checkboxes
    $("#shipMaintenance, #pitch, #seaCharts").prop("checked", allSelected);

    // Update variables to calculate ukpeep properly
    shipMaintenance = $("#shipMaintenance").prop("checked");
    pitch = $("#pitch").prop("checked");
    seaCharts = $("#seaCharts").prop("checked");

    calcTotalUpkeep();
  });

  $("#seafaringFuture").on("input", function () {
    seafaringFuture = $(this).val() / 100;
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

  function calculateShipData(inputId, offensivePoints) {
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

    if (shipMaintenance) discount += 0.02;
    if (pitch) discount += 0.04;
    if (seaCharts) discount += 0.08;
    if (seafaringFuture > 0) discount += seafaringFuture;

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
    let totalCost = 0;

    $(".militaryPoints").each(function () {
      const input = $(this).parent().prevAll("input");
      const baseWood = $(this).data("wood");
      const baseSulphur = $(this).data("sulphur");
      const baseCrystal = $(this).data("crystal");
      const woodReduction = parseFloat($("#woodReduction").val()) || 0;
      const sulphurReduction = parseFloat($("#sulphurReduction").val()) || 0;
      const crystalReduction = parseFloat($("#crystalReduction").val()) || 0;

      totalSulphur += baseSulphur * input.val() * (1 - sulphurReduction / 100);
      totalWood += baseWood * input.val() * (1 - woodReduction / 100);
      totalCrystal += baseCrystal * input.val() * (1 - crystalReduction / 100);
    });

    totalCost += totalSulphur + totalWood + totalCrystal;

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
    $("#totalMaterials").text(
      totalCost.toLocaleString("en-US", {
        style: "decimal",
        maximumFractionDigits: 2,
        minimumFractionDigits: 0,
      })
    );
  }
});
