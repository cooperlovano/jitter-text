var dancingWords = [];
dancingWords.parent('sidebar');

function DanceSpan(element, x, y) {
  element.position(x, y);
  
  this.brownian = function() {
    x += random(-1, 1);
    y += random(-2, 2);
    element.position(x, y);
  };
}

function setup() {
  //Selected elements don't need to be created by 
  // p5js, they can be just plain HTML.
  //createP('I'
   // + ' to jitter').addClass('text');

  // this grabs any other elements with class 'text' in the HTML
  // page.
  var texts = selectAll('.text');
  for (var i=0; i<texts.length; i++) {
    var paragraph = texts[i].html();
    var words = paragraph.split(' ');
    for (var j=0; j<words.length; j++) {   
      var spannedWord = createSpan(words[j]);

      var dw = new DanceSpan(spannedWord, (width/4), random(height));
      dancingWords.push(dw);
      
    }
  }
  
  //var resize = div.elt.offsetWidth;
}

function draw() {
  
  text("width: " + width, 20, 20);
  if (mouseX<320){
  for (var i=0; i<dancingWords.length; i++) {
    dancingWords[i].brownian();
  }}
}