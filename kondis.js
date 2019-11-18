
$(function() {
    $("form > table:nth-child(1)").addClass("search");
    $("<div type='button'>").insertAfter("form").attr("id","showfilter");
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
    //Flytte "Søk i karusell-link
    $("form > table:nth-child(1) > tbody > tr:nth-child(3) td a").insertAfter("form > table:nth-child(1) > tbody > tr:nth-child(2) td a").attr("style","padding-left:10px;");
    // Fjerne mellmorom forran checkboxes
    $("form > table:nth-child(1) > tbody > tr:nth-child(3) td").html($.trim($("form > table:nth-child(1) > tbody > tr:nth-child(3) td").html().split("&nbsp;").join(" ")));
    $("form > table:nth-child(1) > tbody > tr:nth-child(8) td:nth-child(2)").removeAttr("align");

    /* ### Results ### */
    $(".center-column").removeAttr("style");
    $("body").removeAttr("style");
    $("table").removeAttr("style");
    //Setter inn en ekstra TR for navn på aktivitet, flytter distanse til første TR etter by
    $("form > table:nth-child(3) > tbody > tr").addClass("lineone");
    console.log("tr");
    $("form > table:nth-child(3) > tbody > tr > td:nth-child(1)").addClass("date");
    console.log("date!");
    $("form > table:nth-child(3) > tbody > tr > td:nth-child(2)").addClass("region");
    console.log("region!");
    $("form > table:nth-child(3) > tbody > tr > td:nth-child(3)").addClass("city");
    console.log("city!");
    $("form > table:nth-child(3) > tbody > tr > td:nth-child(4)").addClass("name");
    console.log("name!");
    $("form > table:nth-child(3) > tbody > tr > td:nth-child(5)").addClass("distance");
    console.log("distance!");
    $('.lineone').each(function(){
        console.log("each");
        $("<tr class=\"linetwo\" bgcolor=\""+$(this).attr("bgcolor")+" \">").insertAfter(this).prepend($(this).find(".name"));
        $(this).find(".distance").insertAfter($(this).find(".city"));
    });
    console.log("ready!");
});
