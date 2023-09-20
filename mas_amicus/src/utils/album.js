const albumScreen = () => {
  var counter = 2;

  setInterval(function(){
    document.getElementById('btn' + counter).click();
    counter++;
    console.log(counter);
    if (counter == 4){
      counter = 1;
    }
  }, 5000);
}

export default albumScreen;