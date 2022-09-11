$(".qa dt").on("click", function () {
  $(this).parent().toggleClass("open");
  $(this).next().slideToggle();
});