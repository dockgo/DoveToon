$(function () {
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header-web").setAttribute("style","");
  } else {
    document.getElementById("header-web").setAttribute("style","box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px; transform: translateY(-56px);");
  }
  prevScrollpos = currentScrollPos;
}
})();
