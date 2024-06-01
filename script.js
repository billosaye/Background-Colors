var index = 0;

function changeColors() {
    var colors = ["yellow", "orange", "green", "red", "blue", "purple"];
    document.getElementsByTagName("body")[0].style.background = colors[index++];
    if (index > colors.length - 1)  
        index = 0;
}
changeColors();
