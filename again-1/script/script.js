//======================================== * SHADOW ON NAVIGATION * =============================================//

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navigation").style.boxShadow =
      "0 0.5px 20px rgba(0,0,0,.5)";
  } else {
    document.getElementById("navigation").style.boxShadow =
      "0 0 0 rgba(0,0,0,0)";
  }
}
