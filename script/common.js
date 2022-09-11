$.ajax({
    url: '/header',
    type: 'GET',
    dataType: 'html',
    success: res => {
        $(document).ready(() => {
            $('header').html(res);
        });
    }
})