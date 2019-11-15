$(function() {
    $(".center-column").removeAttr("style");
    $("body").removeAttr("style");
    $("table").removeAttr("style");
    $("form > table:nth-child(3) > tbody > tr").addClass("lineone").attr("style","width:100%;");
    $("form > table:nth-child(3) > tbody > tr > td:nth-child(1)").addClass("date").attr("style","width:25%;");
    $("form > table:nth-child(3) > tbody > tr > td:nth-child(2)").addClass("region").attr("style","width:25%;");
    $("form > table:nth-child(3) > tbody > tr > td:nth-child(3)").addClass("city").attr("style","width:25%;");
    $("form > table:nth-child(3) > tbody > tr > td:nth-child(4)").addClass("name");
    $("form > table:nth-child(3) > tbody > tr > td:nth-child(5)").addClass("distance").attr("style","width:25%;");
    $('.lineone').each(function(){
        $("<tr class=\"linetwo\" bgcolor=\""+$(this).attr("bgcolor")+" \">").insertAfter(this).prepend($(this).find(".name"));
        $(this).find(".distance").insertAfter($(this).find(".city"));
    });
    console.log("ready!");
});
