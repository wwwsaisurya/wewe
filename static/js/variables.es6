const $appWindow = $('#appWindow'),
        $appInfo = $('#newSearch, #location, #temp, #title, #description'),

      $converter = $('#converter'),
$newSearchButton = $('#newSearch'),
     $searchForm = $('#searchForm'),
    $searchInput = $('#searchInput'),
     $sloganText = $('#header h4'),
   $submitButton = $('#submitButton'),
       $tempText = $('#temp h2'),

          $tempC = (Number($('#temp h2').text().slice(0, -2))).toFixed(1),
          $tempF = ($tempC * 9 / 5 + 32).toFixed(1);
