/*
 * JS for insideCM generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return 'bde7dfdc-512d-4b9e-8c82-d8d87e3e9c86';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "startScreen",
    "location": "startScreen.html"
}, {
    "name": "insideCM",
    "location": "insideCM.html"
}, {
    "name": "mainGamePage",
    "location": "mainGamePage.html"
}, {
    "name": "mainGamePage_clone_1",
    "location": "mainGamePage_clone_1.html"
}];

function insideCM_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {

    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.datasources = Apperyio.datasources || {};

    Apperyio.CurrentScreen = 'insideCM';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var insideCM_onLoad = function() {
            insideCM_elementsExtraJS();

            insideCM_deviceEvents();
            insideCM_windowEvents();
            insideCM_elementsEvents();
        };

    // screen window events


    function insideCM_windowEvents() {

        $('#insideCM').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function insideCM_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function insideCM_elementsExtraJS() {
        // screen (insideCM) extra code

    };

    // screen elements handler


    function insideCM_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

    };

    $(document).off("pagebeforeshow", "#insideCM").on("pagebeforeshow", "#insideCM", function(event, ui) {
        Apperyio.CurrentScreen = "insideCM";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    insideCM_onLoad();
};

$(document).off("pagecreate", "#insideCM").on("pagecreate", "#insideCM", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    insideCM_js();
});