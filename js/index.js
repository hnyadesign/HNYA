// Main
function adjustMainHeight() {
    $('main').css({
        'min-height':
            $(window).height() - $('header').height() - $('footer').height()
    })
}
adjustMainHeight()
$(window).resize(adjustMainHeight)

// Main Content
function renderMainContent() {
    hash = location.hash.substr(1)
        if (hash == '') hash = 'home'
        title = hash.toUpperCase()

    $(document)
        .ajaxStart(function() {
            $('aside#loading').show()
        })
        .ajaxStop(function() {
            setTimeout(() => {
                $('aside#loading').fadeOut()
            }, 1000 * .5)
        })

    $('title').html(`HNYA | ${title}`)
    $('main')
        .attr('id', hash)
        .load(`pages/${hash}.html`)
    $('#nav-trigger, #hdr-logo, #hdr-nav, main').removeClass('opened')
    // Footer
    $('footer aside#ftr-right a').attr('class', hash)
    if (hash == 'about')
        $('footer aside#ftr-right a').attr({
            'href': 'https://nuotsu.github.io/'
        })
    else
        $('footer aside#ftr-right a').removeAttr('href')
}
renderMainContent()
$(window).on('hashchange', renderMainContent)

// Disable :hover on Mobile


// Header Shadow onScroll
$(window).scroll(() => {
    if ($(window).scrollTop() > 0)
        $('header').addClass('scrolled')
    else
        $('header').removeClass('scrolled')
})

// Mobile Nav
$('#nav-trigger').click(() => {
    $('header, #nav-trigger, #hdr-logo, #hdr-nav, main').toggleClass('opened')
})
$('header #hdr-mobile').html(`
    <hr>
    ${$('footer aside#ftr-nav').html()}
`)

hnya = 'hhh'
