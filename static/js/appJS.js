'use strict';

var $appWindow = $('#appWindow'),
    $appInfo = $('#newSearch, #location, #temp, #title, #description'),
    $converter = $('#converter'),
    $newSearchButton = $('#newSearch'),
    $searchForm = $('#searchForm'),
    $searchInput = $('#searchInput'),
    $sloganText = $('#header h4'),
    $submitButton = $('#submitButton'),
    $tempText = $('#temp h2'),
    $tempC = Number($('#temp h2').text().slice(0, -2)).toFixed(1),
    $tempF = ($tempC * 9 / 5 + 32).toFixed(1);
//# sourceMappingURL=/Users/AnthonyMartinovic/Desktop/Software Development/My Software Projects/nodeWeatherApp/static/js/variables.js.map

"use strict";

$(document).ready(function () {

  $submitButton.click(function () {

    $appWindow.animate({
      "height": "+=148"
    }, 2000).css({
      "pointer-events": "none"
    });

    $sloganText.animate({
      "margin-bottom": "+=178px"
    }, 2000).text("Please wait...");

    $searchForm.animate({
      "opacity": "0"
    }, 1000);
  }); //$submitButton click

  $newSearchButton.click(function () {

    $appWindow.animate({
      "height": "-=148"
    }, 2000).css({
      "pointer-events": "none"
    });

    $sloganText.animate({
      "margin-bottom": "-148px"
    }, 2000).text("Please wait...");

    $appInfo.animate({
      "opacity": "0"
    }, 1000);
  }); //$newSearchButton click
}); //document ready
//# sourceMappingURL=/Users/AnthonyMartinovic/Desktop/Software Development/My Software Projects/nodeWeatherApp/static/js/animations.js.map
'use strict';

$(document).ready(function () {

  //Temp converter
  $converter.click(function () {

    if ($converter.text() === 'Convert to °F') {
      $converter.text('Convert to °C');
      $tempText.text($tempF + '\xB0F');
    } else {
      $converter.text('Convert to °F');
      $tempText.text($tempC + '\xB0C');
    } //if loop
  }); //$converter click

  //Submit button handler
  $searchInput.keydown(function () {

    //NOTE: Timeout only used ensure the keydown is acknowledged before the 'if' conditional.
    setTimeout(function () {

      if ($.trim($('#searchInput').val()) !== "") {
        $submitButton.prop('disabled', false);
      } else {
        $submitButton.prop('disabled', true);
      };
    }, 100);
  }); //$searchInput click
}); //document ready
//# sourceMappingURL=/Users/AnthonyMartinovic/Desktop/Software Development/My Software Projects/nodeWeatherApp/static/js/functions.js.map
//# sourceMappingURL=appJS.js.map
