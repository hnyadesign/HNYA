function loadPages() {
    hash = location.hash.substr(1)
    if (hash == '') hash = 'home'

    $(document)
        .ajaxStart(function() {
            $('main').hide()
            $('aside.loading').fadeIn()
        })
        .ajaxStop(function() {
            $('main').show()
            setTimeout(() => {
                $('aside.loading').fadeOut()
            }, 1000 * .5)
        })

    $('main#pages').attr('class', hash)
    $('main#pages #content')
        .html('')
        .load(`pages/${hash}.html`)
}
loadPages()
window.addEventListener('hashchange', () => {
    loadPages()
})

// Nav Mobile
$('#nav-trigger').click(() => {
    $('body').toggleClass('nav-opened')
})

// Append Footer Info
function appendFooter() {
    $('nav#mobile')
        .html($('nav#desktop').html())
        .append(`<footer id="mobile"></footer>`)
    $('footer#mobile').html($('footer#desktop').html())
    social = [
        ["tw", "@HNYAunofficial", "https://twitter.com/HNYAunofficial"],
        ["insta", "@HNYA.vip", "https://www.instagram.com/hnya.vip/"],
        ["fb", "@", ""],
        ["tw", "@HNYAofficial", "https://twitter.com/HNYAofficial"]
    ]

    $('footer .social').html('')
    for (i in social)
        $('footer .social')
            .append(`
                <a href="${social[i][2]}" target="_blank">
                    <i
                        s-img="${social[i][0]}"
                        style="background-image:url('img/social/${social[i][0]}.png')"
                    ></i>
                </a>
            `)
    $('footer .social a i').hover(function() {
        $(this).css('background-image', `url('img/social/${$(this).attr('s-img')}_hover.png')`)
    }, function() {
        $(this).css('background-image', `url('img/social/${$(this).attr('s-img')}.png')`)
    })
}

// Header Shadow onScroll
$('main#pages').scroll(() => {
    if ($('main#pages').scrollTop() > 0)
        $('header').addClass('scrolled')
    else
        $('header').removeClass('scrolled')
})

hnyapw = 'hhh'
