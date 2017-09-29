(function ($) {
    $.fn.snake = function (options) {
        var conf = $.extend({}, options);

        this.css({
            width: "50%", margin: "0 auto",
            border: "1px solid black", height: "500px"
        });
        this.append('<div id="snakeHead"></div>');
        var root = this;
        $('#snakeHead').css({
            top: "100px",
            left: "100px",
        })
        $(document).keydown(function (e) {
            switch (e.keyCode) {
                case 38:
                    //fleche haut
                    root.attr('direction', 'top')
                    break;
                case 39:
                    //fleche droite
                    root.attr('direction', 'right')
                    break;
                case 40:
                    root.attr('direction', 'bottom')
                    break;
                case 37:
                    //vers la guauche
                    root.attr('direction', 'left')
                    break;
            }

        });
    }
})($)

function _moveTo(direction, SnakeHead) {
    var pas = 1;
    if (direction == "left" && parseFloat(SnakeHead.style.left) >=0) {
        SnakeHead.style.left = parseFloat(SnakeHead.style.left) - pas + 'px';
    }
    if (direction == "right" && parseFloat(SnakeHead.style.left) <= $('#snake').width()-10) {
        SnakeHead.style.left = parseFloat(SnakeHead.style.left) + pas + 'px';
    }
    if (direction == "top" && parseFloat(SnakeHead.style.top)>=0) {
        SnakeHead.style.top = parseFloat(SnakeHead.style.top) - pas + 'px';
    }
    if (direction == "bottom" && parseFloat(SnakeHead.style.top)<=$('#snake').height()-10 ) {
        SnakeHead.style.top = parseFloat(SnakeHead.style.top) + pas + 'px';
    }
    console.log(SnakeHead.style.left);
}

$(document).ready(function () {
    $('#snake').snake();
    setInterval(function () {
        _moveTo($('#snake').attr('direction'), $("#snakeHead")[0])
    }, 5);
})