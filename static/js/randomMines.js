/*
This script is a quick loader that adds links to other intermines on the homepage. A few are hardcoded in the go, so there's a small chance each time there will be mines displaying twice. They'll change the next time though, and this gives a chance for all working mines to show up. Nice!
*/

var randomMines = (function() {
  // thanks mozilla for helping me when I'm too lazy to write basic xhr code
  //https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started

  //let's fetch mines from the intermine registry
  var httpRequest;
  var registry = "http://registry.intermine.org/service/instances"
  //this is where we call the api
  function makeRequest(server) {
    httpRequest = new XMLHttpRequest();
    //rudimentary error handling
    if (!httpRequest) {
      handleError("Error loading issues");
      return false;
    }
    httpRequest.onreadystatechange = handleResults;
    httpRequest.open('GET', server);
    httpRequest.send();
  }

  //handle error gracefully (show nothing) or display the results
  function handleResults(event) {
    if (event.target.readyState === XMLHttpRequest.DONE) {
      if (event.target.status === 200) {
        var mines = JSON.parse(event.target.responseText);
        renderMineEntries(mines.instances);
      } else {
        console.error('There was a problem loading random mines.');
      }
    }

  }

//render the html string for a single mine
  function singleMine(mine) {
    return '<a href="' + mine.url + '"' + 'title="' + mine.description + '" class="intermine-link">' +
      '<span class="minename">' + mine.name+ '  </span>' +
      '</a>'
  }

//quick and easy - generate an html string and add it to the dom
  function renderMineEntries(mines) {
    var htmlElement = document.getElementById("random-mines");
    var mineHtml = "";
    //we don't want to show allllll the mines, just 8 randoms.
    mines = shuffle(mines).slice(0,7);
    mines.map(function(mine){
      mineHtml += singleMine(mine);
    });
    htmlElement.outerHTML = mineHtml;
  }

  //shuffle algorithm lovingly adopted from stackoverflow
  // question: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  //author: https://stackoverflow.com/users/151312/coolaj86 Coolaj86
  function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

makeRequest(registry);

})();
