"use strict";

const calcMaterial = (a, b, c, d, n, level) => {
  return (a / b) * c ** (level - n) - d;
};

$("#dumpCurrent").on("input", function () {
  const currentLv = parseInt($(this).val());
  if (currentLv > 0) {
    console.log(currentLv);
  }
});
