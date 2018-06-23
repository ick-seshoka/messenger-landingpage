$(document).ready(function() {
    // click event for menu button
    $('#menu-trigger').click(function(e) {
        e.preventDefault();
        var logo = $('#logo');
        var menuButtonState = $(this).attr('data-state');
        var menuNav = $('header nav');
        var menuNavItems = $('nav a');
        var menuLogo = $('#menu-logo');
        var heroContent = $('.hero-content');
        var appStoreBadge = $('#app-store-badge');
        var animationEndEvenName = 'webkitAnimationEnd mozAnimationEnd oAnimationEnd animationend';

        if (menuButtonState === 'closed') {
            $(this).attr('data-state', 'open');
            logo.addClass('animated fadeOut').one(animationEndEvenName, function() {
                logo.removeClass('animated fadeOut');
            });
            heroContent.addClass('animated fadeOut').one(animationEndEvenName, function() {
                heroContent.removeClass('animated fadeOut');
            });
            menuNavItems.addClass('animated fadeIn').one(animationEndEvenName, function() {
                menuNavItems.removeClass('animated fadeIn');
            });
            menuNav.css({'opacity': '1', 'z-index': 1});
            menuLogo.addClass('animated fadeIn').one(animationEndEvenName, function() {
                menuLogo.removeClass('animated fadeIn');
            });
            // disable body from scrolling
            $('html,body').css('overflow', 'hidden');
            // hide app store badge ontop of navigation
            appStoreBadge.css('z-index', '0');

        } else {
            $(this).attr('data-state', 'closed');
            logo.addClass('animated fadeIn').one(animationEndEvenName, function() {
                logo.removeClass('animated fadeIn');
            });
            menuNav.css({'opacity': '0', 'z-index': 0});
            heroContent.addClass('animated fadeIn').one(animationEndEvenName, function() {
                heroContent.removeClass('animated fadeIn');
            });
            // enable body scroll
            $('html,body').css('overflow', 'auto');
            // reset z-index for app store badge
            appStoreBadge.css('z-index', '1');
        }
    });

    var userReviewsContainer = $('#user-reviews');
    var userReviewWidth = $('.active-review').width();
    var leftScrollBtn = $('#left-scroller');
    var rightScrollBtn = $('#right-scroller');

    // User reviews right scroll
    $('#right-scroller').click(function(e) {
        e.preventDefault();

        userReviewsContainer.animate(
            {
                scrollLeft: userReviewsContainer.scrollLeft() + userReviewWidth
             }
            , 'slow', function() {
                if (userReviewsContainer.scrollLeft() >= 0) {
                    leftScrollBtn.removeClass('inactive');
                    leftScrollBtn.addClass('active');
                }

                if (userReviewsContainer.scrollLeft() - userReviewWidth >= userReviewsContainer.width()) {
                    rightScrollBtn.removeClass('active');
                    rightScrollBtn.addClass('inactive');
                }
            }
        );

    });

    // User reviews left scroll
    $('#left-scroller').click(function(e) {
        e.preventDefault();

        userReviewsContainer.animate(
            {
                scrollLeft: userReviewsContainer.scrollLeft() - userReviewWidth
             }
            , 'slow', function() {
                if (userReviewsContainer.scrollLeft() - userReviewWidth <= 0) {
                    leftScrollBtn.removeClass('active');
                    leftScrollBtn.addClass('inactive');
                }

                if (userReviewsContainer.scrollLeft() - userReviewWidth <= userReviewsContainer.width()) {
                    rightScrollBtn.removeClass('inactive');
                    rightScrollBtn.addClass('active');
                }
            }
        );
    });
});
