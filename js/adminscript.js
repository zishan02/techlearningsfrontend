/*!
* Start Bootstrap - Blog Post v5.0.3 (https://startbootstrap.com/template/blog-post)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-post/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

$("#postform").submit(function (event) {
submitForm();
});
function submitForm(){

var formData={
postData: $("#exampleFormControlTextarea1").val(),
postTag: $("#postTagInput").val(),
postTitle: $("#postTitleInput").val()
}
	 $.ajax({
		type: "POST",
		url: "http://localhost:8080/addPost",
		data:JSON.stringify(formData),
		contentType: "application/json; charset=utf-8",
            dataType: "json",
		success: function(response){
			//$("#contact").html(response)
			//$("#contact-modal").modal('hide');
			alert("response");
		},
		error: function(){
			alert("Error");
		}
	});
}
