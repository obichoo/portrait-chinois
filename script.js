$(document).ready(function () {

    var i = 0;
    $("div[class^=partie]").one("click", function () {
        $("div.nombre").html(++i);
    });

    window.onresize = function (event) {
        if (window.innerWidth !== screen.availWidth && window.innerHeight !== screen.availHeight) {
            $('.lock').css("visibility", "visible");
        } else {
            $('.lock').css("visibility", "hidden");
        }
    };

    $(document).keydown(function (event) {
        if (event.keyCode == 27) {
            $('.echap').css('display', 'inherit');
        }
    });

    $('#annuler').click(function () {
        $('.echap').css('display', 'none');
    })

    $('#menu-principal').click(function () {
        location.reload(true);
    })

    function volet() {
        $('.bas').animate({
            "top": "0vh",
            "transition-duration": "1s"
        });
        $('.haut').animate({
            "top": "0vh",
            "transition-duration": "1s"
        });
        setTimeout(() => {
            $('.bas').animate({
                "top": "200vh",
                "transition-duration": "1s"
            });
            $('.haut').animate({
                "top": "-200vh",
                "transition-duration": "1s"
            });
        }, 1500);

    }

    $('#boutons').click(function () {
        $('#ecrantitre').css('display', 'none');
        setTimeout(() => {
            $('.menu-gameboy').css("opacity", "1");
        }, 500);
    });

    $('.informations').click(function () {
        $('.infos,.retour-info').css("display", "inherit");
        $('.menu-gameboy *').css("display", "none");
    });

    $('.retour-info').click(function () {
        $('.infos,.retour-info').css("display", "none");
        $('.regles').css({
            'opacity': '0',
            'z-index': '-2'
        })
        $('.menu-gameboy *').css("display", "inherit");
    });

    $('.how').click(function () {
        $('.menu-gameboy *').css("display", "none");
        $('.retour-info').css('display', 'inherit');
        $('.regles').css({
            'opacity': '1',
            'z-index': '100'
        });
    })

    $('.nouvelle-partie').click(function () {
        $('.menu-gameboy').css("display", "none");
        $('body').css("animation", "transition-ecran 5s ease");
        setTimeout(() => {
            $('body').css("background", "#f9fcdc");
            $('body').css("animation", "");
            $('#etape1').css('display', 'none');
        }, 2000);
        setTimeout(() => {
            $('#etape2,.avancee').css("display", "inherit");
        }, 2000);
    });

    $('div[class^=partie]').click(function () {
        $('.bas').css({
            "position": "absolute",
            "top": "0",
            "left": "0",
            "z-index": "5"
        });

        $('.haut').css({
            "position": "absolute",
            "top": "0",
            "left": "0",
            "z-index": "5"
        });

        $('.bas').animate({
            "top": "200vh",
            "transition-duration": "2s"
        });
        $('.haut').animate({
            "top": "-180vh",
            "transition-duration": "2s"
        });


    });

    const parties = [
        {name: "vue",color: "#70b050",width: "23vw",left: "20%",top: "20%",},
        {name: "cinema",color: "#371d0f",width: "17vw",left: "3%",top: "22%",},
        {name: "tommy",color: "#021223",width: "18vw",left: "30%",top: "30%",},
        {name: "gourmandise",color: "linear-gradient(to top right, #f4b8f0 50%, #68d8f3 50%)",width: "20vw",left: "20%",top: "20%",},
        {name: "fruit",color: "#e9a701",width: "21vw",left: "15%",top: "5%",},
        {name: "batterie",color: "#2173a1",width: "21vw",left: "40%",top: "2%",},
        {name: "top",color: "#df171d",width: "13vw",left: "60%",top: "0%",}
    ];

    $('[class^=partie-]').click(function () {
        let clicked = $(this).attr('class').split('-').slice(1);
        let idClicked = parties.map(function (e) {return e.name;}).indexOf(clicked[0]);

        let width = parties[idClicked]['width'];
        let left = parties[idClicked]['left'];
        let top = parties[idClicked]['top'];
        let couleur = parties[idClicked]['color'];
        let nom = parties[idClicked]['name'];

        if (nom == "gourmandise") {
            $('body').css("background-image", couleur);
            $('.out-partie-gourmandise .partie-gourmandise').css("background-image", couleur);
        } else {
            $('body').css("background", couleur);
            $(`.out-partie-${nom} *`).css("background", couleur);
        }

        $(`.${nom}`).css("display", "inherit");
        $(`.boule-${nom} img[src*=mystere]`).remove();
        setTimeout(() => {
            $(`.partie-${nom} img`).attr(`src`, `img/themes/dessins/${nom}-dessin.png`);
            $(`.interrogation-${nom}`).css({'width': width,'left': left,'top': top})
        }, 1000);
    })

    // Répétition des mêmes lignes en changeant seulement les valeurs à chaque fois (et ce 7 fois)
    // $('.partie-vue').click(function () {
    //     $('body').css("background", "#70b050");
    //     $('.out-partie-vue *').css("background", "#70b050");
    //     $('.vue').css("display", "inherit");
    //     $('.boule-vue img[src*=mystere]').remove();
    //     setTimeout(() => {
    //         $('.partie-vue img').attr('src', 'img/themes/dessins/vue-dessin.png');
    //         $('.interrogation-vue').css({
    //             'width': '23vw',
    //             'left': '20%',
    //             'top': '20%'
    //         })
    //     }, 1000);
    // });

    // $('.partie-cinema').click(function () {
    //     $('body').css("background", "#371d0f");
    //     $('.out-partie-cinema *').css("background", "#371d0f");
    //     $('.cinema').css("display", "inherit");
    //     $('.boule-cinema img[src*=mystere]').remove();
    //     setTimeout(() => {
    //         $('.partie-cinema img').attr('src', 'img/themes/dessins/cinema-dessin.png');
    //         $('.interrogation-cinema').css({
    //             'width': '17vw',
    //             'left': '3%',
    //             'top': '22%'
    //         })
    //     }, 1000);
    // });

    // $('.partie-tommy').click(function () {
    //     $('body').css("background", "#021223");
    //     $('.out-partie-tommy *').css("background", "#021223");
    //     $('.tommy').css("display", "inherit");
    //     $('.boule-tommy img[src*=mystere]').remove();
    //     setTimeout(() => {
    //         $('.partie-tommy img').attr('src', 'img/themes/dessins/tommy-dessin.png');
    //         $('.interrogation-tommy').css({
    //             'width': '18vw',
    //             'left': '30%',
    //             'top': '30%'
    //         })
    //     }, 1000);
    // });

    // $('.partie-gourmandise').click(function () {
    //     $('body').css(
    //         "background-image", "linear-gradient(to top right, #f4b8f0 50%, #68d8f3 50%)"
    //     );
    //     $('.out-partie-gourmandise .partie-gourmandise').css(
    //         "background-image", "linear-gradient(to top right, #f4b8f0 50%, #68d8f3 50%)");
    //     $('.interrogation-gourmandise').css('background', "transparent");
    //     $('.gourmandise').css("display", "inherit");
    //     $('.boule-gourmandise img[src*=mystere]').remove();
    //     setTimeout(() => {
    //         $('.partie-gourmandise img').attr('src', 'img/themes/dessins/gourmandise-dessin.png');
    //         $('.interrogation-gourmandise').css({
    //             'width': '20vw',
    //             'left': '20%',
    //             'top': '20%'
    //         })
    //     }, 1000);
    // });

    // $('.partie-fruit').click(function () {
    //     $('body').css("background", "#e9a701");
    //     $('.out-partie-fruit *').css("background", "#e9a701");
    //     $('.fruit').css("display", "inherit");
    //     $('.boule-fruit img[src*=mystere]').remove();
    //     setTimeout(() => {
    //         $('.partie-fruit img').attr('src', 'img/themes/dessins/fruit-dessin.png');
    //         $('.interrogation-fruit').css({
    //             'width': '21vw',
    //             'left': '15%',
    //             'top': '5%'
    //         })
    //     }, 1000);
    // });

    // $('.partie-batterie').click(function () {
    //     $('body').css("background", "#2173a1");
    //     $('.out-partie-batterie *').css("background", "#2173a1");
    //     $('.batterie').css("display", "inherit");
    //     $('.boule-batterie img[src*=mystere]').remove();
    //     setTimeout(() => {
    //         $('.partie-batterie img').attr('src', 'img/themes/dessins/batterie-dessin.png');
    //         $('.interrogation-batterie').css({
    //             'width': '21vw',
    //             'left': '40%',
    //             'top': '2%'
    //         })
    //     }, 1000);
    // });

    // $('.partie-top').click(function () {
    //     $('body').css("background", "#df171d");
    //     $('.out-partie-top *').css("background", "#df171d");
    //     $('.top').css("display", "inherit");
    //     $('.boule-top img[src*=mystere]').remove();
    //     setTimeout(() => {
    //         $('.partie-top img').attr('src', 'img/themes/dessins/top-dessin.png');
    //         $('.interrogation-top').css({
    //             'width': '13vw',
    //             'left': '60%',
    //             'top': '0%'
    //         })
    //     }, 1000);
    // });

    $('.revenir').click(function volet() {
        $('.bas').animate({
            "top": "0vh",
            "transition-duration": "1s"
        });
        $('.haut').animate({
            "top": "0vh",
            "transition-duration": "1s"
        });
        setTimeout(() => {
            $('.vue,.cinema,.tommy,.gourmandise,.fruit,.batterie,.top').css("display", "none");
        }, 1300);
    });


    $('[class*=boule] img').click(function () {
        if ($(this).attr('id').length > 0) {
            let nom = $(this).attr('id');
            volet();
            setTimeout(() => {
                $(`.themes>*:not(.avancee):not(.${nom})`).css('display', 'none');
                $(`.${nom}`).css('display', 'initial');
            }, 1300);
        }
    })

    // Répétition des mêmes lignes en changeant seulement 2 termes à chaque fois (et ce 7 fois)
    // $('#vue').click(function () {
    //     volet();
    //     setTimeout(() => {
    //         $('.vue,.cinema,.tommy,.gourmandise,.fruit,.batterie,.top').css("display", "none");
    //         $('.vue').css("display", "inherit");
    //     }, 1300);
    // });
    // $('#cinema').click(function () {
    //     volet();
    //     setTimeout(() => {
    //         $('.vue,.cinema,.tommy,.gourmandise,.fruit,.batterie,.top').css("display", "none");
    //         $('.cinema').css("display", "inherit");
    //     }, 1300);
    // });
    // $('#tommy').click(function () {
    //     volet();
    //     setTimeout(() => {
    //         $('.vue,.cinema,.tommy,.gourmandise,.fruit,.batterie,.top').css("display", "none");
    //         $('.tommy').css("display", "inherit");
    //     }, 1300);
    // });
    // $('#gourmandise').click(function () {
    //     volet();
    //     setTimeout(() => {
    //         $('.vue,.cinema,.tommy,.gourmandise,.fruit,.batterie,.top').css("display", "none");
    //         $('.gourmandise').css("display", "inherit");
    //     }, 1300);
    // });
    // $('#fruit').click(function () {
    //     volet();
    //     setTimeout(() => {
    //         $('.vue,.cinema,.tommy,.gourmandise,.fruit,.batterie,.top').css("display", "none");
    //         $('.fruit').css("display", "inherit");
    //     }, 1300);
    // });
    // $('#batterie').click(function () {
    //     volet();
    //     setTimeout(() => {
    //         $('.vue,.cinema,.tommy,.gourmandise,.fruit,.batterie,.top').css("display", "none");
    //         $('.batterie').css("display", "inherit");
    //     }, 1300);
    // });
    // $('#top').click(function () {
    //     volet();
    //     setTimeout(() => {
    //         $('.vue,.cinema,.tommy,.gourmandise,.fruit,.batterie,.top').css("display", "none");
    //         $('.top').css("display", "inherit");
    //     }, 1300);
    // });
});