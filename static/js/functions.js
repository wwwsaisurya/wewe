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