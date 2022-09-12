const scrollEvent = () => {
    if($(window).scrollTop() + $(window).height() >= $(document).height()){
        location.href = '/members';
    }
}
$(document).on('scroll', () => {
    scrollEvent();
});