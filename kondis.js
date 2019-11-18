
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

    $("form > table:nth-child(1) > tbody > tr:nth-child(2)").attr("id","link");
    $("form > table:nth-child(1) > tbody > tr:nth-child(3)").attr("id","type");
    $("form > table:nth-child(1) > tbody > tr:nth-child(4)").attr("id","fylke");
    $("form > table:nth-child(1) > tbody > tr:nth-child(5)").attr("id","fra");
    $("form > table:nth-child(1) > tbody > tr:nth-child(6)").attr("id","helgene");
    $("form > table:nth-child(1) > tbody > tr:nth-child(7)").attr("id","kvalitet");
    $("form > table:nth-child(1) > tbody > tr:nth-child(8)").attr("id","per");
    $("<tr>").attr("id","arrangement").insertAfter("#fylke").prepend($("#fylke td:nth-child(3)"));
    $("<tr>").attr("id","kommune").insertAfter("#fylke").prepend($("#fylke td:nth-child(2)"));
    $("<tr>").attr("id","distanse").insertAfter("#fra").prepend($("#fra td:nth-child(3)"));
    $("<tr>").attr("id","til").insertAfter("#fra").prepend($("#fra td:nth-child(2)"));
    $("<tr>").attr("id","lisens").insertAfter("#helgene").prepend($("#helgene td:nth-child(2)"));
    $("<tr>").attr("id","sok").insertAfter("#per").prepend($("#per td:nth-child(2)"));

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
