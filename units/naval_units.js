"use strict";

$("#ramshipInput").on("input", function () {
  const result = Math.round($(this).val() * 5);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
  calculateTotalMaterial();
});

$("#ballistashipInput").on("input", function () {
  const result = Math.round($(this).val() * 6.8);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
  calculateTotalMaterial();
});

$("#catapultshipInput").on("input", function () {
  const result = Math.round($(this).val() * 6.4);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
  calculateTotalMaterial();
});

$("#fireshipInput").on("input", function () {
  const result = Math.round($(this).val() * 6.2);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
  calculateTotalMaterial();
});

$("#mortarshipInput").on("input", function () {
  const result = Math.round($(this).val() * 22.4);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
  calculateTotalMaterial();
});

$("#rocketshipInput").on("input", function () {
  const result = Math.round($(this).val() * 28);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
  calculateTotalMaterial();
});

$("#steamramInput").on("input", function () {
  const result = Math.round($(this).val() * 24);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
  calculateTotalMaterial();
});

$("#paddlespeedboatInput").on("input", function () {
  const result = Math.round($(this).val() * 6.4);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
  calculateTotalMaterial();
});

$("#ballooncarrierInput").on("input", function () {
  const result = Math.round($(this).val() * 28);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
  calculateTotalMaterial();
});

$("#tenderInput").on("input", function () {
  const result = Math.round($(this).val() * 16);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
  calculateTotalMaterial();
});

$("#divingboatInput").on("input", function () {
  const result = Math.round($(this).val() * 20.2);
  const span = $(this).parent().find("span");
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
  calculateTotalMaterial();
});

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

$("#woodReduction").on("input", function() {
  calculateTotalMaterial();
})

$("#sulphurReduction").on("input", function() {
  calculateTotalMaterial();
})

$("#crystalReduction").on("input", function() {
  calculateTotalMaterial();
})

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

  if (shipMaintenance) discount = 0.02;
  if (pitch) discount += 0.04;
  if (seaCharts) discount += 0.08;

  totalUpkeep = parseFloat(totalUpkeep - totalUpkeep * discount).toLocaleString('en-US', {
    style: 'decimal',
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

    totalSulphur += baseSulphur * input.val() * ( 1 - sulphurReduction / 100);
    totalWood += baseWood * input.val() * ( 1 - woodReduction / 100);
    totalCrystal += baseCrystal * input.val() * ( 1 - crystalReduction / 100);
  });

  totalCost += totalSulphur + totalWood + totalCrystal;
  
  $("#totalWood").text(totalWood.toLocaleString("en-US", {
    style: "decimal",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  }));
  $("#totalSulphur").text(totalSulphur.toLocaleString("en-US", {
    style: "decimal",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  }));
  $("#totalCrystal").text(totalCrystal.toLocaleString("en-US", {
    style: "decimal",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  }));
  $("#totalMaterials").text(totalCost.toLocaleString("en-US", {
    style: "decimal",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  }));
}

