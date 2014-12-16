jQuery(document).ready(function($){
	$(".display_list" ).click(
		function(){
			$(this).next().toggle("blind");
	});

	$.each($(".stations_number"),
		function(){
			var number = $(this).parent().find(".metro_list ul li").length;
			$(this).text( number + " stations");
		}
	);
	$.each($(".directions"),
		function(){
			var directions = $(this).parent().find(".metro_list ul li:first").text() + " - "
			+ $(this).parent().find(".metro_list ul li:last").text() ;
			$(this).text( directions);
		}
	);


	$(".search").on("keyup",
		function(){
			var query = $(".search").val();
			$(".metro_list > ul li").each(function(){

				if($(this).text().search(query) != -1 && query != "")
				{
					$(this).addClass("selected")
				}
				else {
					$(this).removeClass("selected");
				}

				$("#breadcrums").text(query);
			})
		}
	);

});