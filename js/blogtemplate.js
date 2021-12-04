$(document).ready(function(){
  $.get("https://techlearningsbackend.herokuapp.com/fetchPost", function(data){
//  console.log(JSON.stringify(data));
   var id=localStorage.getItem('id');
submitForm(id);


  });

  });

  function submitForm(id){
      	 $.ajax({
      		type: "POST",
      		url: "http://localhost:8080/findById?id="+id,
      		data:"",
      		contentType: "application/json; charset=utf-8",
             dataType: "json",
      		success: function(response){
      			//$("#contact").html(response)
      			//$("#contact-modal").modal('hide');
      			$("#postData").html(response.postData);
      			$("#postTitle").html(response.postTitle);
      			$("#postTag").html(response.postTag);


      		},
      		error: function(){
      			alert("Error");
      		}
      	});
      }