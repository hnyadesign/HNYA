// Load Pages
hnyapw = 'poop'

var contactPageLoadAttempt
function loadPages() {
    hash = location.hash.substr(1).split('?')[0]
    if (hash == '') hash = 'home'
        if (hash != 'contact')
            contactPageLoadAttempt = 0
        else
            contactPageLoadAttempt++

    $(document)
        .ajaxStart(function() {
            if (contactPageLoadAttempt < 2) {
                $('main').hide()
                $('aside.loading').fadeIn()
            }
        })
        .ajaxStop(function() {
            $('main').show()
            setTimeout(() => {
                $('aside.loading').fadeOut()
            }, 1000 * .5)
        })

    pageInfo = {
        'home': ['whiteBG', ''],
        'collection': ['whiteBG', 'overflow'],
        'kamon': ['whiteBG', 'overflow'],
        'hnya': ['whiteBG', 'overflow'],
        'store': ['whiteBG', 'overflow'],
        'cart': ['whiteBG', ''],
        'about': ['whiteBG', ''],
        'contact': ['whiteBG', 'overflow']
    }

    $('body').attr('class', pageInfo[hash][0])
    $('main')
        .attr('class', `${hash} ${pageInfo[hash][1]}`)
        .load(`pages/${hash}.html`)

    $('#links-mobile a').removeClass('active')
    $(`#links-mobile a.${hash}`).addClass('active')
}
loadPages()
window.addEventListener('hashchange', loadPages)

// Scroll to Top on Page Link Click
$('nav a').click(() => {
    $('main').animate({scrollTop: 0})
})

// Links Mobile
$('#links-mobile').html(`
    ${$('#links-desktop').html()}
    <footer class="mobile">${$('footer.desktop').html()}</footer>
`)
$('#links-mobile-trigger').click(() => {
    $('body, #links-mobile, #links-mobile-trigger').toggleClass('opened')
})

// Social Links
$('.social a').each(function() {
    $(this).css({'background-image': `url('img/social/${$(this).attr('social')}.png')`})

    $(this).hover(() => {
        $(this).css({'background-image': `url('img/social/${$(this).attr('social')}_hover.png')`})
    }, () => {
        $(this).css({'background-image': `url('img/social/${$(this).attr('social')}.png')`})
    })
})

hnyapw = 'hhh'
