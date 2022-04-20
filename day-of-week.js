$(function() {

  var hrefs = new Array(7);

  hrefs[1] = "container Moday-active";
  hrefs[2] = "container Tuesday-active";
  hrefs[3] = "container Wednesday-active";
  hrefs[4] = "container Thursday-active";
  hrefs[5] = "container Friday-active";
  hrefs[6] = "container Saturday-active";
  hrefs[7] = "container Sunday-active";

  var dayNum = new Date().getDay();
  var image = document.createElement("div");

  if (dayNum in hrefs) {
    document.getElementById("day-active").appendChild(image);
    image.class = hrefs[dayNum]
  }

})();
