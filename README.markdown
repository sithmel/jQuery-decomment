JQuery.decomment
================

Very easy: remove the comment node and substitute it with the comment content.
Example:
from:


    <div id="removethis"><!-- <img src="http://very.big/image.png" /> --></div>

to:

    <div id="removethis"><img src="http://very.big/image.png" /></div>

using

    $('#removethis').decomment();


doWhenVisible
===============
Call a function when an element is visible (checking every time the window is resized).

    $.doWhenVisible(selector,callback);

The calback run only once.
Very useful using media queries for mobile. See index.html for an example.
