$(document).ready(function () {
  $("#input_form").submit(function(event){

    event.preventDefault();
    var sentence = $("#text-input").val();
    var words = sentence.split(" ");
    alert(words);
    words.forEach(function(word){
      var wordCount = 0;

      words.forEach(function(word2){
        if (word === word2){
          wordCount++;
        };
      });

      alert(word + ": " + wordCount);
      // $("#output").append(word + ": " + wordCount);
    });
  });
});
