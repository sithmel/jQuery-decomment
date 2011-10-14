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


doWhenMinWidth
===============
Do something when the width of the window became bigger than x.

    $.doWhenMinWidth(minwidth, callback);

The calback run only once when the minwidth is exceeded.

