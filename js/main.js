//DataPicker

$( function() {
    var dateFormat = "mm/dd/yy",
        from = $( "#from" )
            .datepicker({
                defaultDate: "+1w",
                numberOfMonths: 1,
                showOn: "button",
                buttonImage: "img/bx_bx-calendar.png",
                buttonImageOnly: true,
                buttonText: "Select date"
            })
            .on( "change", function() {
                to.datepicker( "option", "minDate", getDate( this ) );
            }),
        to = $( "#to" ).datepicker({
            defaultDate: "+1w",
            numberOfMonths: 1,
            showOn: "button",
            buttonImage: "img/bx_bx-calendar.png",
            buttonImageOnly: true,
            buttonText: "Select date"
        })
            .on( "change", function() {
                from.datepicker( "option", "maxDate", getDate( this ) );
            });

    function getDate( element ) {
        var date;
        try {
            date = $.datepicker.parseDate( dateFormat, element.value );
        } catch( error ) {
            date = null;
        }
        return date;
    }
} );





// SWITCH THEME

let switch_grid = document.querySelector('#grid')
let switch_row = document.querySelector('#row')
let grid_active = document.querySelector('#grid_active')
let grid_dis = document.querySelector('#grid_dis')
let row_active = document.querySelector('#row_active')
let row_dis = document.querySelector('#row_dis')

let main_wrap =  document.querySelectorAll('.main_wrap')
let card = document.querySelectorAll('.card')
let ci_block = document.querySelectorAll('.ci_block')
let card_img = document.querySelectorAll('.card_img')
let act = document.querySelectorAll('.act')
let card_bot = document.querySelectorAll('.card_bot')
let sub_wrap = document.querySelectorAll('.sub_wrap')

switch_grid.addEventListener('click', function(){

    grid_active.style.display = 'none'
    grid_dis.style.display = 'flex'
    row_active.style.display = 'flex'
    row_dis.style.display = 'none'
    for (let i = 0; i < main_wrap.length; i++){
        main_wrap[i].classList.add('main_wrap_row')
    }
    for (let i = 0; i < card.length; i++){
        card[i].classList.add('row')
    }
    for (let i = 0; i < ci_block.length; i++){
        ci_block[i].classList.add('ci_block_row')
    }
    for (let i = 0; i < card_img.length; i++){
        card_img[i].classList.add('ci_row')
    }
    for (let i = 0; i < act.length; i++){
        act[i].classList.add('act_row')
    }
    for (let i = 0; i < card_bot.length; i++){
        card_bot[i].classList.add('cb_row')
    }
    for (let i = 0; i < sub_wrap.length; i++){
        sub_wrap[i].classList.add('sub_wrap_row')
    }
})

switch_row.addEventListener('click', function(){
    grid_active.style.display = 'flex'
    grid_dis.style.display = 'none'
    row_active.style.display = 'none'
    row_dis.style.display = 'flex'
    for (let i = 0; i < main_wrap.length; i++){
        main_wrap[i].classList.remove('main_wrap_row')
    }
    for (let i = 0; i < card.length; i++){
        card[i].classList.remove('row')
    }
    for (let i = 0; i < ci_block.length; i++){
        ci_block[i].classList.remove('ci_block_row')
    }
    for (let i = 0; i < card_img.length; i++){
        card_img[i].classList.remove('ci_row')
    }
    for (let i = 0; i < act.length; i++){
        act[i].classList.remove('act_row')
    }
    for (let i = 0; i < card_bot.length; i++){
        card_bot[i].classList.remove('cb_row')
    }
    for (let i = 0; i < sub_wrap.length; i++){
        sub_wrap[i].classList.remove('sub_wrap_row')
    }
})


// SWITCH THEME Решение на jQuery
/*

$(function () {
    $('#row_dis').click(function () {
        $(this).css({'display' : 'none'})
        $('#row_active').css({'display' : 'block'})
        $('#grid_active').css({'display' : 'none'})
        $('#grid_dis').css({'display' : 'block'})
        $('.main_wrap').addClass('main_wrap_row')
        $('.card').addClass('row')
        $('.ci_block').addClass('ci_block_row')
        $('.card_img').addClass('ci_row')
        $('.act').addClass('act_row')
        $('.card_bot').addClass('cb_row')
        $('.sub_wrap').addClass('sub_wrap_row')
    });
});

$(function () {
    $('#grid_dis').click(function () {
        $(this).css({'display' : 'none'})
        $('#grid_active').css({'display' : 'block'})
        $('#row_active').css({'display' : 'none'})
        $('#row_dis').css({'display' : 'block'})
        $('.main_wrap').removeClass('main_wrap_row')
        $('.card').removeClass('row')
        $('.ci_block').removeClass('ci_block_row')
        $('.card_img').removeClass('ci_row')
        $('.act').removeClass('act_row')
        $('.card_bot').removeClass('cb_row')
        $('.sub_wrap').removeClass('sub_wrap_row')
    });
});

*/
