$(document).ready(() => {
    $('.open').on('click', (e) => {
        $(e.currentTarget).slideToggle()
        $('.close').slideToggle()
        $('nav').slideToggle()
    })

    $('.close').on('click', (e) => {
        $(e.currentTarget).slideToggle()
        $('.open').slideToggle()
        $('nav').slideToggle()
    })
})