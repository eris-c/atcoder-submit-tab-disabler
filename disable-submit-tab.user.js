// ==UserScript==
// @name         AtCoder Submit Tab Disabler
// @namespace    https://github.com/eris-c
// @version      1.0
// @description  disable "Submit" tab (force to submit from each task's form)
// @author       Eris C.
// @include      https://*.atcoder.jp/*
// @include      https://beta.atcoder.jp/*
// ==/UserScript==

(function() {
    'use strict';
    var e = document.querySelector('.nav-tabs i.icon-upload');
    if (e == null) e = document.querySelector('.nav-tabs span.glyphicon-send'); // beta
    if (e != null) {
        e.parentNode.setAttribute('href', '#');
        e.parentNode.style.color = '#CCC';
    }
})();
