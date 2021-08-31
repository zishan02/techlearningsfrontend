/*!
* Start Bootstrap - Blog Post v5.0.3 (https://startbootstrap.com/template/blog-post)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-post/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
$(document).ready(function(){
  $.get("https://techlearningsbackend.herokuapp.com/fetchPost", function(data){
    $("#postdescr").text(data[0].postData);
    });

});
