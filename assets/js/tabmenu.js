$(function () {
    let headers = $(".tab-menu .tab-header div");
    let contents = $(".tab-menu .tab-body div");
  
    for (const header of headers) {
      $(header).on("click", function () {
        $(".active").removeClass("active");
        $(header).addClass("active");
        for (const content of contents) {
          if ($(header).attr("data-id") == $(content).attr("data-id")) {
            $(content).removeClass("d-none");
          } else {
            $(content).addClass("d-none");
          }
        }
      });
    }
  });
  