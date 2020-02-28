function closeSideMenu() {
    $('#menu-button').removeClass('is-active');
    $('#side-menu').removeClass('menu-open');
    $('#modal').removeClass('block-display');
}

function openSideMenu() {
    $('#modal').addClass('block-display');
    $('#menu-button').addClass('is-active');
    $('#side-menu').addClass('menu-open');
}

function closeOptions() {
    $('#bot-options').removeClass('options-open');
    $('#modal').removeClass('block-display');
}

function addOptions() {
    $('#modal').addClass('block-display');
    $('#bot-options').addClass('options-open');
}

$('#menu-button').on('click', function(e) {
    if ($(this).hasClass('is-active')) {
        closeSideMenu();
    } else {
        openSideMenu()
    }
})


$('.time-table').on('click', function(e) {
    if ($(e.target).hasClass('interactable') && !$('#side-menu').hasClass('menu-open')) {
        if (!$('#bot-options').hasClass('options-open')) {
            addOptions();
        } else {
            closeOptions();
        }
    }
});

$('#close').on('click', function(e) {
    closeOptions();
})

$(document).on('click', function(event){
    if ($('#side-menu').hasClass('menu-open') && !$(event.target).closest('.is-active').length) {
        if(!$(event.target).closest('#side-menu').length){
            closeSideMenu();
        }
    }
});
