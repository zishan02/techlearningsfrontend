/*!
* Start Bootstrap - Blog Post v5.0.3 (https://startbootstrap.com/template/blog-post)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-post/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
$(document).ready(function(){
  $.get("https://techlearningsbackend.herokuapp.com/fetchPost", function(data){
//  console.log(JSON.stringify(data));
    $("#postdescr1").text(data[0].postPreview);
    $("#postId").val(data[0].postId);
     $("#postdescr2").text(data[1].postPreview);
      $("#postdescr3").text(data[2].postPreview);
       $("#postdescr4").text(data[3].postPreview);
       $("#postdescr5").text(data[3].postPreview);
     $("#postTitle1").text(data[0].postTitle);
     $("#postTitle2").text(data[1].postTitle);
     $("#postTitle3").text(data[2].postTitle);
     $("#postTitle4").text(data[3].postTitle);
      $("#postTitle5").text(data[3].postTitle);
    });
$("#postTitle1").click(function (event) {
localStorage.setItem('id', $("#postId").val());

window.location.href='blogtemplate.html';

});
$("#postTitle2").click(function (event) {
localStorage.setItem('id', $("#postId").val());

window.location.href='blogtemplate.html';

});
$("#postTitle3").click(function (event) {
localStorage.setItem('id', $("#postId").val());

window.location.href='blogtemplate.html';

});
$("#postTitle4").click(function (event) {
localStorage.setItem('id', $("#postId").val());

window.location.href='blogtemplate.html';

});
$("#postTitle5").click(function (event) {
localStorage.setItem('id', $("#postId").val());

window.location.href='blogtemplate.html';

});
});




