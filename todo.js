//check on specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on X to delete ToDo
//adding event as argument stops the event from bubbling up
$("ul").on("click", "span", function(event){
    //this here refers to the span
    //after the task fades out, we remove the li
    $(this).parent().fadeOut(500, function(){
        //this here refers to the li
        $(this).remove();
    });
    event.stopPropagation();  
})

$("input[type='text']").keypress(function(event){
    //which corresponds to the character code of the key that was pressed
    if(event.which===13){   //enter key has code 13
        var todoText=$(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + todoText+ "</li>")
    };
});

$("h1").on("click", ".fa-plus", function(){
    $("input[type=text]").fadeToggle();
});

