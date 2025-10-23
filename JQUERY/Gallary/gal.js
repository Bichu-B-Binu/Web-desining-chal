$(document).ready(function () {
  let runner = 0;

  $("#btn-1").click(function () {
    runner--;
    switch (runner) {
      case 0:
        $("#imgs").attr("src", "img/1.png");
        break;
      case 1:
        $("#imgs").attr("src", "img/2.png");
        break;
      case 2:
        $("#imgs").attr("src", "img/3.png");
        break;
      case 3:
        $("#imgs").attr("src", "img/4.png");
        break;
      case 4:
        $("#imgs").attr("src", "img/5.png");
        break;
      case 5:
        $("#imgs").attr("src", "img/6.png");
        break;
      case 6:
        $("#imgs").attr("src", "img/7.png");
        break;

      default:
        $("#imgs").attr("src", "img/1.png");

        break;
    }
    if (runner === -1) {
      alert("Start of the Gallery");
      runner = 0;
    }
  });

  $("#btn-2").click(function () {
    runner++;
    switch (runner) {
      case 0:
        $("#imgs").attr("src", "img/1.png");
        break;
      case 1:
        $("#imgs").attr("src", "img/2.png");
        break;
      case 2:
        $("#imgs").attr("src", "img/3.png");
        break;
      case 3:
        $("#imgs").attr("src", "img/4.png");
        break;
      case 4:
        $("#imgs").attr("src", "img/5.png");
        break;
      case 5:
        $("#imgs").attr("src", "img/6.png");
        break;
      case 6:
        $("#imgs").attr("src", "img/7.png");
        break;

      default:
        $("#imgs").attr("src", "img/1.png");

        break;
    }
    if (runner === 8) {
      alert("End of the Gallery");
      runner = 0;
    }
  });
});
