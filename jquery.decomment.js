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

$.doWhenMinWidth = function(minwidth,callback){
    var onResizeDo = function (){
        var w = $(window).width();
        if (w > minwidth){
            callback(w);
            callback = function (){};
        }
    };
    onResizeDo();
    $(window).resize(onResizeDo);
};

}(jQuery));
