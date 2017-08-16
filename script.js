$(document).ready(function() {

 function getQuote(){
   $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random", function(json){
     quote = json.quote;
     author = json.author.toLowerCase();
     html = "";

     html += "<p id='quote'>" + quote + "</p>";
     html += "<p id='author' class='right-align'>-" + author + "</p>"

     $("#goods").html(html);

     $(".waves-effect").prop("href", "https://twitter.com/intent/tweet?text=" + quote + "%20-" + author)

   });
 };

  getQuote();

  $("#shuffle").click(function(){
    getQuote();
  });


}); 
