const ifInWindow = (e) => {
    const scroll = {
        "top": $(this).scrollTop(),
        "bottom": $(this).scrollTop() + $(window).height()
    };
    const element = {
        "top": document.querySelector(e).offsetTop,
        "bottom": document.querySelector(e).offsetTop + $(e).height()
    };

    if(scroll.bottom >= element.top && scroll.top <= element.bottom) return {
        "stat": true,
        "percent": 1 - (element.bottom - scroll.top) / element.bottom
    };
    return {
        "stat": false
    };
};

let information = {
    visible: {}
};
$(document).ready(() => {
    information.blackBoxWidth = $('.black-box').width();
    scrollEvent();
    const start = 500;
    anime({
        targets: '.title-div',
        translateY: ["30%", 0],
        translateZ: 0,
        opacity: [0, 1],
        duration: 1000,
        delay: 0 + start,
    });
})
const scrollEvent = () => {
    if(ifInWindow(".mumo-text").stat) {
        const win = ifInWindow(".mumo-text");
        $('.black-box').width(information.blackBoxWidth * (0.85 - win.percent));
        // console.log(1 - win.percent, information.blackBoxWidth);
    }
    if(ifInWindow(".mumu-text").stat && !information.visible.mumu) {
        anime({
            targets: '.mumu-text',
            opacity: [0,1],
            duration: 3000,
            delay: 100
        });
        anime({
            targets: '.mumu',
            opacity: [0,1],
            duration: 3000,
            delay: 100
        });
        information.visible.mumu = true;
    }
    if($(window).scrollTop() + $(window).height() >= $(document).height()){
        location.href = '/projects';
    }
}
$(document).on('scroll', () => {
    scrollEvent();
});