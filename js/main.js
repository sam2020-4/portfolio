/*global $, jQuery, alert*/
$(document).ready(function() {

    'use strict';
    // ========================================================================= //
    //  Typed Js
    // ========================================================================= //

    var typed = $(".typed");

    $(function() {
    typed.typed({
        strings: ["Matata Samuel.", "FullStack Web Developer", "IT Technician.", "Freelancer.", "Photographer"],
        typeSpeed: 100,
        loop: true,
    });
    });
    


});