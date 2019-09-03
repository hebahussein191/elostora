$(document).ready(() => {
    const halfParent = $('.header-overlay').width() / 2;
    const halfHeight = $('.header-overlay').height() / 2;

    const elemWidth = $('.header-content').width() / 2;
    const elemHeight = $('.header-content').height() / 2;

    $('.header-content').css({
        "left": (halfParent - elemWidth),
        "top": (halfHeight - elemHeight),
    });

    /***** Range Slider For Sell ******/
    let slider1 = document.getElementById('slider1'),
        slider1Output = document.getElementById('value1'),
        slider2 = document.getElementById('slider2'),
        slider2Val = document.getElementById('value2');


    slider1Output.innerHTML = slider1.value;
    slider1.oninput = function () {
        slider1Output.innerHTML = this.value;
    }


    slider2Val.innerHTML = slider2.value;
    slider2.oninput = function () {
        slider2Val.innerHTML = this.value;
    }


})