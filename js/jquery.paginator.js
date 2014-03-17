/*
    plugin:     jquery paginator
    version:    0.1
    author:     Asil Balaban
    year:       2014
    github:     https://github.com/asilbalaban/jquery-paginator
*/
(function($){

    $.fn.paginator = function(settings){
        var defaultSettings = {
                perpage       : 5,
                activeClass   : 'active',
                addAnyway     : false
            };

            settings = $.extend({}, defaultSettings, settings);

            this.each(function() {
                

                base = this;

                totalChildren = $('li', base).size();
                totalPage = Math.ceil(totalChildren / settings.perpage);

                $('li:gt('+(settings.perpage-1)+')', base).hide();
                $(base).after($('<ul />', {
                    'html': function() {

                        if (settings.addAnyway == true || totalPage != 1) {
                            for(i=1; i<=totalPage; i++) {
                                if (i == 1) {
                                    $(this).append('<li class="'+settings.activeClass+'">'+i+'</li>');
                                } else {
                                    $(this).append('<li>'+i+'</li>');
                                }
                            }
                        }
                    }
                }).attr('data-paginator', ''));

                $(base).next('ul[data-paginator]').children('li').click(function(){
                    $list = $(this).parent().prev('ul');
                    
                    activePage = $(this).index() + 1;
                    start = (settings.perpage * activePage) - settings.perpage;
                    
                    $(this).siblings().removeClass(settings.activeClass);
                    $(this).addClass(settings.activeClass);

                    $list.children('li', $list).show();
                    $list.children('li:lt('+(start)+')', $list).hide();
                    $list.children('li:gt('+(start+(settings.perpage-1))+')', $list).hide();

                });

                return this;
            });


    }


})(jQuery);