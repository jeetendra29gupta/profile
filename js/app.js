"use strict";

w3.includeHTML();

function showDetails(id) {
  var projectX = document.getElementById(id);
  if (projectX.className.indexOf("w3-show") == -1) {
    projectX.className += " w3-show";
  } else {
    projectX.className = projectX.className.replace(" w3-show", "");
  }
}

setTimeout(function () {
  var diffDate = new Date((new Date()) - (new Date('2014-07-29')));
  document.getElementById("totalJoin").innerHTML = ((diffDate.toISOString().slice(0, 4) - 1970) + "Y " + diffDate.getMonth() + "M " + (diffDate.getDate() - 1) + "D");

  diffDate = new Date((new Date()) - (new Date('2016-05-02')));
  document.getElementById("payTMJoin").innerHTML = ((diffDate.toISOString().slice(0, 4) - 1970) + "Y " + diffDate.getMonth() + "M " + (diffDate.getDate() - 1) + "D");

  diffDate = new Date((new Date('2016-05-02')) - (new Date('2014-07-29')));
  document.getElementById("accelJoin").innerHTML = ((diffDate.toISOString().slice(0, 4) - 1970) + "Y " + diffDate.getMonth() + "M " + (diffDate.getDate() - 1) + "D");
}, 2000);
