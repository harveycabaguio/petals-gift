// fake pager
$(document).ready(function() {
  $(".button").click(function() {
    var leftPos = $(".content-wrapper").scrollLeft();
    var contWidth = $(".content-wrapper").width();
    var contMargin = parseInt($(".content-wrapper").css("margin-left"));
    if ($(this).attr("id") == "scrollLeft") {
      $(".content-wrapper").animate({scrollLeft: leftPos - contWidth - (contMargin * 2)}, 120);
    } else {
      $(".content-wrapper").animate({scrollLeft: leftPos + contWidth + (contMargin * 2)}, 120);
    }
  });
});