$(document).ready(() => {

  //Temp converter
  $converter.click(() => {

    if ($converter.text() === 'Convert to °F') {
      $converter.text('Convert to °C');
      $tempText.text(`${$tempF}°F`);

    } else {
      $converter.text('Convert to °F');
      $tempText.text(`${$tempC}°C`);

    } //if loop
  }); //$converter click

  //Submit button handler
  $searchInput.keydown(() => {

    //NOTE: Timeout only used ensure the keydown is acknowledged before the 'if' conditional.
    setTimeout(() => {

      if ($.trim($('#searchInput').val()) !== "") {
        $submitButton.prop('disabled', false);

      } else {
        $submitButton.prop('disabled', true);

      };
    }, 100);

  }); //$searchInput click
}); //document ready
