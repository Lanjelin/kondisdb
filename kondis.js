$(function() {
    $(".center-column").removeAttr("style");
    $("body").removeAttr("style");
    $("table").removeAttr("style");
    $("form > table:nth-child(3) > tbody > tr").addClass("lineone");
    $("form > table:nth-child(3) > tbody > tr > td:nth-child(1)").addClass("date");
    $("form > table:nth-child(3) > tbody > tr > td:nth-child(2)").addClass("region");
    $("form > table:nth-child(3) > tbody > tr > td:nth-child(3)").addClass("city");
    $("form > table:nth-child(3) > tbody > tr > td:nth-child(4)").addClass("name");
    $("form > table:nth-child(3) > tbody > tr > td:nth-child(5)").addClass("distance");
    $('.lineone').each(function(){
        $("<tr class=\"linetwo\" bgcolor=\""+$(this).attr("bgcolor")+" \">").insertAfter(this).prepend($(this).find(".name"));
        $(this).find(".distance").insertAfter($(this).find(".city"));
    });
    console.log("ready!");
});
