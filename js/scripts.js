$(document).ready(function()  {
  $("form#groceries").submit(function(event){
    var blanks = ["#input1","#input2","#input3","#input4","#input5","#input6"];
   
    var newArray = [];

    blanks.forEach(function(blank){
      var userInput = $(blank).val();
      newArray.push(userInput);
    });
   
    newArray.sort();

    newArray.forEach(function(item){
      $("ul").append("<li>"+item.toUpperCase()+"</li>");
    });
    $("form#groceries").hide();
    $("#finallist").show();
    event.preventDefault();
  });
});













    // var userInput = blanks.map(function(blank){
    //   blank.sort();
    //   blank.toUpperCase();
      
  
    // });
    // alert(userInput);

    // // userInput.forEach(function(item) {
    // //     $(".output").append("<li>" + item + "</li>");
    // // });
    // // $(".output").show();
    // event.preventDefault();
//   });
// });