// Check off todo after clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$("input[type='text']").keypress(function(event){ 
	 
	if(event.which === 13){
		// Grabbing the new ToDo
		var text = $(this).val();
		// Add to todos
		$("ul").append("<li><span><i class=\"far fa-trash-alt\"></i></span> " + text + "</li>");
		$("input[type='text']").val("");
	}

});
$("#button").on("click",function(){
	$("input").toggleClass("display");

});