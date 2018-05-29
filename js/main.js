function loadPages() {
    hash = location.hash.substr(1)
    if (hash == '') hash = 'home'

    if (hash == 'about')
        $('footer#desktop #footer-right').attr({
            'href': 'https://nuotsu.github.io',
            'target': '_blank',
            'class': 'nuotsu'
        })
    else if (hash == 'collection' || hash == 'hnya' || hash == 'kamon' || hash == 'store')
        $('footer#desktop #footer-right')
            .attr('class', 'paypal')
            .removeAttr('href target')
    else
        $('footer#desktop #footer-right')
            .attr('class', '')
            .removeAttr('href target')

    $(document)
        .ajaxStart(function() {
            $('aside.loading').show()
        })
        .ajaxStop(function() {
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
window.addEventListener('hashchange', loadPages)

// Nav Mobile
$('#nav-trigger').click(() => {
    $('body').toggleClass('nav-opened')
})
// Append Footer Info
function appendFooter() {
    $('nav#mobile')
        .html($('nav#desktop').html())
        .append(`<footer id="mobile"></footer>`)
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
    $('footer#mobile').html($('footer#desktop').html())
    $('footer .social a i').hover(function() {
        $(this).css('background-image', `url('img/social/${$(this).attr('s-img')}_hover.png')`)
    }, function() {
        $(this).css('background-image', `url('img/social/${$(this).attr('s-img')}.png')`)
    })

    // Close Nav-Mobile onClick
    $('#nav-mobile nav#mobile a, #footer-links .left a').click(() => {
        $('body').removeClass('nav-opened')
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
