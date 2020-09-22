$(document).ready(function () {
    $(".section-2-slider").owlCarousel(
        {
            autoplay: true,
            autoplayTimeout: 2000,
            loop:true,
            responsive: {
                0:{
                    items: 1,
                },
                1920: {
                    items: 7
                },
                1200: {
                    items: 5
                },
                960:{
                   items: 4
                },
                640: {
                    items: 3
                }
            }
        }
    );
});


/*Order*/


$('.catalog-order-btn').on('click', function () {
    let itemImage = $(this).parent('.catalog-item_content').parent('.catalog-item_main').find('.catalog-img').attr('style');
    let itemTitle = $(this).parent('.catalog-item_content').parent('.catalog-item_main').find('.catalog-item_title').text();
    $('.modal-img').attr('style', itemImage);
    $('.modal-title_block span').text(itemTitle)
});


/*Catalog tabs*/
let catalogRow = $('.catalog-row');

$('.catalog-tab_item').on('click', function () {
    $('.catalog-tab_item').removeClass('active-tab');
    catalogRow.each((i, e)=>{
        $(this).addClass('active-tab');
        $(e).removeClass('active-row');
        if ($(this).attr('name') === $(e).attr('name')){
            $(e).addClass('active-row');
        }
    });
});


$('.banner-inner_buttons a').on('click', function () {

    let btnLink = $(this).attr('href');
    catalogRow.each((i, el)=>{
        /*console.log($(el).offset().top);*/
        $(el).removeClass('active-row');
        if ($(this).attr('name') === $(el).attr('name')){
            $(el).addClass('active-row');
            $('.catalog-tab_item').each((i, e)=>{
                $(e).removeClass('active-tab')
                if ($(this).attr('name') === $(e).attr('name')){
                    $('html, body').animate({scrollTop: $(e).offset().top}, 1000);
                    $(e).addClass('active-tab')
                }
            })
        }
    })
})