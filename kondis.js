

$(function() {
    $("form > table:nth-child(1)").addClass("search");
    $("<div>").insertAfter("form").attr("id","showfilter").attr("type","button");
    $("#showfilter").text("Søk");
    $("#showfilter").click(function() {
        if($("#showfilter").text() == "Lukk"){
            $(".search").hide();
            $("#showfilter").text("Søk");
            return;
        }
        if($("#showfilter").text() == "Søk"){
            $(".search").show();
            $("#showfilter").text("Lukk");
            return;
        }
    });


    $("form > table:nth-child(1) > tbody > tr:nth-child(3) td a").insertAfter("form > table:nth-child(1) > tbody > tr:nth-child(2) td a").attr("style","padding-left:10px;");
    $("form > table:nth-child(1) > tbody > tr:nth-child(3) td").html($.trim($("form > table:nth-child(1) > tbody > tr:nth-child(3) td").html().split("&nbsp;").join(" ")));
    $("form > table:nth-child(1) > tbody > tr:nth-child(8) td:nth-child(2)").removeAttr("align");
    $("form > table:nth-child(1) > tbody > tr:nth-child(4) td:nth-child(1)").removeAttr("width").attr("id","fylke");
    $("form > table:nth-child(1) > tbody > tr:nth-child(4) td:nth-child(2)").removeAttr("width").attr("id","kommune");
    $("form > table:nth-child(1) > tbody > tr:nth-child(4) td:nth-child(3)").removeAttr("width").attr("id","arrangement");

    $(".center-column").removeAttr("style");
    $("body").removeAttr("style");
    $("table").removeAttr("style");
    $("form > table:nth-child(3) > tbody > tr").addClass("lineone");
    $("form > table:nth-child(3) > tbody > tr > td:nth-child(1)").addClass("date");
    $("form > table:nth-child(3) > tbody > tr > td:nth-child(2)").addClass("region");
    $("form > table:nth-child(3) > tbody > tr > td:nth-child(3)").addClass("city");
    $("form > table:nth-child(3) > tbody > tr > td:nth-child(4)").addClass("name");
    $("form > table:nth-child(3) > tbody > tr > td:nth-child(5)").addClass("distance");
    $(".lineone").each(function(){
        $("<tr>").addClass("linetwo").attr("bgColor", $(this).attr("bgColor")).insertAfter($(this)).prepend($(this).find(".name"));
        $(this).find(".distance").insertAfter($(this).find(".city"));
    });
    console.log("ready!");
});
