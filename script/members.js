$(document).load(() => {
    $('.members-title').css('letter-spacing', '0px');
})
$.ajax({
    url: '/script/members.json',
    dataType: 'json',
    success: (data) => {
        let cnt = 0;
        for(let i = data.length; i > 0; i--){
            $('.warp').append(`<div class="page just-members members-${i}">
            <div class="members-gi-title">JUST <div class="maincolor members-gi-title-cont">${i}기</div> MEMBERS</div>
            <div class="members-div members-div-${i}">
            </div></div>`);
            for(let j = 0; j < data[i-1].length; j++){
                $(`.members-div-${i}`).append(`
                        <div class="members-box members-box-${j} ${j == data[i - 1].length - 1 ? `members-box-end` : ``}">
                            <div class="members-inner">
                                <div class="members-name">${data[i - 1][j].name} | ${data[i - 1][j].part}</div>
                                <div class="members-img" style="
                                background: url('${data[i - 1][j].img}');
                                background-size: cover;
                                background-position: center;
                                background-repeat: no-repeat;
                                "></div>
                                <div class="members-cont">${data[i - 1][j].dec}</div>
                            </div>
                        </div>
                `);
                cnt++;
            }
        }
        // $('.members-title').html(`MEMBERS`);
    }
})