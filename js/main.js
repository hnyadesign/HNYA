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
        ["insta", "@hannya_design", "https://www.instagram.com/hannya_design/"],
        ["fb", "@", ""],
        ["tw", "@HNYAofficial", "https://twitter.com/HNYAofficial"]
    ]

    $('footer .social').html('')
    for (i in social)
        $('footer .social')
            .append(`
                <a href="${social[i][2]}" target="_blank">
                    <img s-img="${social[i][0]}" src="img/social/${social[i][0]}.png">
                </a>
            `)
    $('footer .social a img').hover(function() {
        $(this).attr('src', `img/social/${$(this).attr('s-img')}_hover.png`)
    }, function() {
        $(this).attr('src', `img/social/${$(this).attr('s-img')}.png`)
    })
}

hnyapw = 'hhh'
