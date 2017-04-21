$(document).ready(function () {
    //is this working?
    $("h1").append(", I think");


    //initialize with 16 boxes
    init();
    
    //set random color on mouse enter
    changecolor();

    //change button color on hover
    $("#Redraw").hover(function () {
        $(this).css({
            backgroundColor: 'darkred'
        });
    }, function () {
        $(this).css({
            backgroundColor: 'indianred'
        });

    });

    //redraw the grid
    $("#Redraw").click(function () {
        redraw();
        changecolor();
    });


});


function changecolor() {
    $(".box").mouseenter(function () {
        var newColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);

        $(this).css({
            backgroundColor: newColor
        });
    });
}


function init() {

    for (var i = 0; i < 16; i++) {
        $(".container").append("<div class='box'></div>");
    }

}


function redraw() {
    var number = prompt("How many boxes in each row?"),
        h = 960 / (number),
        w = h;

    $(".box").remove();

    

    for (var i = 0; i < number *  number; i++) {
        $(".container").append("<div class='box'></div>");
    }
    $(".box").width(w);
    $(".box").height(h);
}
