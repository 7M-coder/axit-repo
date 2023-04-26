$(function() {

    $('.tab-switch li').click(function() {

        //add & remove [selected class]
        $(this).addClass('selected').siblings().removeClass('selected');

        //hide the first div
        $('.tabs .content > div').hide();

        //show the clicked one
        $($(this).data('class')).show();

    })
})