/*
$("#createCategoryBt").click(function(){
   

    var categoryName = $("#categoryName").val();
    var categoryDescription = $("#categoryDescription").val();
    var categoryImage = $("#categoryImage").val();
    if (categoryName ) {
        $("#test").append( "<strong>Hellohhhhhhhhhh</strong>" );
            $.post(
                "/admin/categories/create",
                {categoryName: categoryName, categoryDescription:categoryDescription,categoryImage:categoryImage},
                function () {
                    
                }
            ).fail(function(res){
                alert("Error: " + res.getResponseHeader("error"));
            });
          
    } else {
        alert("A username and password is required");
    }
}); */