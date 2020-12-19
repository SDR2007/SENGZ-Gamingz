window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.padding = "5px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("nav").style.padding = "20px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}