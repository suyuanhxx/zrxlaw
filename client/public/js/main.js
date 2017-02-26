;(function () {

    'use strict';


    // iPad and iPod detection
    var isiPad = function () {
        return (navigator.platform.indexOf("iPad") != -1);
    };

    var isiPhone = function () {
        return (
            (navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPod") != -1)
        );
    };

    // Parallax
    var parallax = function () {
        $(window).stellar();
    };


    // Burger Menu
    var burgerMenu = function () {

        $('body').on('click', '.js-home-nav-toggle', function (event) {

            event.preventDefault();

            if ($('#navbar').is(':visible')) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }


        });

    };


    var testimonialCarousel = function () {
        var owl = $('.owl-carousel-fullwidth');
        owl.owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            dots: true,
            smartSpeed: 500,
            autoHeight: true
        });
    };

    // Page Nav
    var clickMenu = function () {

        $('#navbar a:not([class="external"])').click(function (event) {
            var section = $(this).data('nav-section'),
                navbar = $('#navbar');

            if ($('[data-section="' + section + '"]').length) {
                $('html, body').animate({
                    scrollTop: $('[data-section="' + section + '"]').offset().top - 55
                }, 500);
            }

            if (navbar.is(':visible')) {
                navbar.removeClass('in');
                navbar.attr('aria-expanded', 'false');
                $('.js-home-nav-toggle').removeClass('active');
            }

            event.preventDefault();
            return false;
        });


    };

    // Reflect scrolling in navigation
    var navActive = function (section) {

        var $el = $('#navbar > ul');
        $el.find('li').removeClass('active');
        $el.each(function () {
            $(this).find('a[data-nav-section="' + section + '"]').closest('li').addClass('active');
        });

    };

    var navigationSection = function () {

        var $section = $('section[data-section]');

        $section.waypoint(function (direction) {

            if (direction === 'down') {
                navActive($(this.element).data('section'));
            }
        }, {
            offset: '150px'
        });

        $section.waypoint(function (direction) {
            if (direction === 'up') {
                navActive($(this.element).data('section'));
            }
        }, {
            offset: function () {
                return -$(this.element).height() + 155;
            }
        });

    };

    // Window Scroll
    var windowScroll = function () {
        var lastScrollTop = 0;

        $(window).scroll(function (event) {

            var header = $('#home-header'),
                scrlTop = $(this).scrollTop();

            if (scrlTop > 500 && scrlTop <= 2000) {
                header.addClass('navbar-fixed-top home-animated slideInDown');
            } else if (scrlTop <= 500) {
                if (header.hasClass('navbar-fixed-top')) {
                    header.addClass('navbar-fixed-top home-animated slideOutUp');
                    setTimeout(function () {
                        header.removeClass('navbar-fixed-top home-animated slideInDown slideOutUp');
                    }, 100);
                }
            }

        });
    };


    // Animations
    // Home
    var homeAnimate = function () {
        if ($('#home-home').length > 0) {

            $('#home-home').waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {


                    setTimeout(function () {
                        $('#home-home .to-animate').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);


                    $(this.element).addClass('animated');

                }
            }, {offset: '80%'});

        }
    };

    var exploreAnimate = function () {

        var explore = $('#home-explore');
        if (explore.length > 0) {

            explore.waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {


                    setTimeout(function () {
                        explore.find('.to-animate').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);

                    setTimeout(function () {
                        explore.find('.to-animate-2').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInLeft animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 700);

                    setTimeout(function () {
                        explore.find('.to-animate-3').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInRight animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 1000);


                    $(this.element).addClass('animated');

                }
            }, {offset: '80%'});

        }
    };

    var testimonyAnimate = function () {
        var testimony = $('#home-testimony');
        if (testimony.length > 0) {

            testimony.waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {


                    setTimeout(function () {
                        testimony.find('.to-animate').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);


                    $(this.element).addClass('animated');

                }
            }, {offset: '80%'});

        }
    };

    var gettingStartedAnimate = function () {
        var started = $('.getting-started-1');
        if (started.length > 0) {

            started.waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {


                    setTimeout(function () {
                        started.find('.to-animate').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);

                    setTimeout(function () {
                        started.find('.to-animate-2').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInRight animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);


                    $(this.element).addClass('animated');

                }
            }, {offset: '80%'});

        }
    };


    var servicesAnimate = function () {
        var services = $('#home-services');
        if (services.length > 0) {

            services.waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {


                    var sec = services.find('.to-animate').length,
                        sec = parseInt((sec * 200) + 400);

                    setTimeout(function () {
                        services.find('.to-animate').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);

                    setTimeout(function () {
                        services.find('.to-animate-2').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('bounceIn animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, sec);


                    $(this.element).addClass('animated');

                }
            }, {offset: '80%'});

        }
    };


    var teamAnimate = function () {
        var team = $('#home-team');
        if (team.length > 0) {

            team.waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {

                    var sec = team.find('.to-animate').length,
                        sec = parseInt((sec * 200) + 400);

                    setTimeout(function () {
                        team.find('.to-animate').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeIn animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);

                    setTimeout(function () {
                        team.find('.to-animate-2').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, sec);


                    $(this.element).addClass('animated');

                }
            }, {offset: '80%'});

        }
    };


    var footerAnimate = function () {
        var footer = $('#home-footer');
        if (footer.length > 0) {

            footer.waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {

                    setTimeout(function () {
                        footer.find('.to-animate').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeIn animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);


                    $(this.element).addClass('animated');

                }
            }, {offset: '80%'});

        }
    };

    var footerAnimate = function () {
        var footer = $('#home-footer');
        if (footer.length > 0) {

            footer.waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {

                    setTimeout(function () {
                        footer.find('.to-animate').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeIn animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);


                    $(this.element).addClass('animated');

                }
            }, {offset: '80%'});

        }
    };


    // Document on load.
    $(function () {

        parallax();
        burgerMenu();
        clickMenu();
        windowScroll();
        navigationSection();
        testimonialCarousel();

        // Animations
        homeAnimate();
        exploreAnimate();
        testimonyAnimate();
        gettingStartedAnimate();
        servicesAnimate();
        teamAnimate();
        footerAnimate();


    });


}());