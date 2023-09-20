const websiteFunctions = () => {
  function openExploreBtn(selectedCategory) {
    var x = document.getElementsByClassName("tabs");

    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(selectedCategory).style.display = "block";
  }
}

export default websiteFunctions;