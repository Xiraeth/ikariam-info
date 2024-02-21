'use strict';

const DARK_COLOUR = 'rgb(51, 53, 64)';
const WHITE_COLOUR = '#f6f6b8';

let theme = 'light';

$("#themeBtn").click(function(){
  if (theme === 'dark') {
    $(':root').css('--bg-color', WHITE_COLOUR);
    $(':root').css('--text-color', DARK_COLOUR);
    $('#themeBtn').toggleClass('fa-sun');
    $('#themeBtn').toggleClass('fa-moon');
    theme = 'light';
  } else {
    $(':root').css('--bg-color', DARK_COLOUR);
    $(':root').css('--text-color', WHITE_COLOUR);
    $('#themeBtn').toggleClass('fa-sun');
    $('#themeBtn').toggleClass('fa-moon');
    theme = 'dark';
  }
})

$("#spearmanInput").on("input", function() {
  const result = Math.round($(this).val() * 0.6);
  const span = $(this).parent().find('span');
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
})

$("#slingerInput").on("input", function() {
  const result = Math.round($(this).val() * 0.4);
  const span = $(this).parent().find('span');
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#swordsmanInput").on("input", function() {
  const result = Math.round($(this).val() * 1.2);
  const span = $(this).parent().find('span');
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#hopliteInput").on("input", function() {
  const result = Math.round($(this).val() * 1.4);
  const span = $(this).parent().find('span');
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#ramInput").on("input", function() {
  const result = Math.round($(this).val() * 4.4);
  const span = $(this).parent().find('span');
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#archerInput").on("input", function() {
  const result = Math.round($(this).val() * 1.1);
  const span = $(this).parent().find('span');
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#catapultInput").on("input", function() {
  const result = Math.round($(this).val() * 11.2);
  const span = $(this).parent().find('span');
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});

$("#carabineerInput").on("input", function() {
  const result = Math.round($(this).val() * 4);
  const span = $(this).parent().find('span');
  span.text(result);
  calcTotalPoints();
  calcTotalUpkeep();
});


function calcTotalPoints() {
  let totalPoints = 0;

  // calculate total points in span elements
  $('.militaryPoints').each(function() {
    totalPoints += parseInt($(this).text() || 0);
  })

  $("#totalPoints").text(totalPoints);
}

function calcTotalUpkeep() {
  let totalUpkeep = 0;

  $('.militaryPoints').each(function() {
    const inputId = $(this).parent().prevAll('input').attr('id');
    const inputValue = parseInt($('#' + inputId).val() || 0);
    const unitUpkeep = parseInt($(this).data('upkeep') || 0);

    totalUpkeep += inputValue * unitUpkeep;
  });

  console.log(totalUpkeep);

  // Update the totalUpkeep to the respective container or element
  // For example, assuming there is a container with id "totalUpkeep"
  $("#totalUpkeep").find('span').text(totalUpkeep);
}