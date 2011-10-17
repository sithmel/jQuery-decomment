(function ($){
$.fn.decomment = function (){
    return this.each(function (){
        $(this).find('*')
        .andSelf()
        .contents()
        .each(function (){
            if(this.nodeType == 8){
                $(this).replaceWith(this.data);
            }
        });
    });
};

//$.doWhenMinWidth = function(minwidth,callback){
//    var onResizeDo = function (){
//        var w = $(window).width();
//        if (w > minwidth){
//            callback(w);
//            callback = function (){};
//        }
//    };
//    onResizeDo();
//    $(window).resize(onResizeDo);
//};

// launch only once when it found the selector
$.decommentWhenVisible = function (selector,callback){
    var onResizeDo = function (){
        var $node = $(selector + ":visible");
        if ($node.length){
            $node.decomment();
            if (callback){
                callback();
            }
            $(window).unbind('resize',onResizeDo);
        }
    };
    onResizeDo();
    $(window).resize(onResizeDo);
};

}(jQuery));
