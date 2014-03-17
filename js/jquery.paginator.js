/*
    plugin:     jquery paginator
    version:    0.1
    author:     Asil Balaban
    year:       2014
    github:     https://github.com/asilbalaban/jquery-paginator

*/


$.fn.paginator = function(settings){
    var defaultSettings = {
            perpage   : 5,
        };
        var settings = $.extend(defaultSettings, settings);

        return this.each(function() {
            $mainUl = $(this);
            totalChildren = $mainUl.children('li').size();
            totalPage = Math.ceil(totalChildren / settings.perpage);

            $mainUl.children('li:gt('+(settings.perpage-1)+')').hide();
            $mainUl.after($('<ul />', {
                'id': $mainUl.attr('id')+'-paginator',
                'html': function() {
                    for(i=1; i<=totalPage; i++) {
                        $(this).append('<li>'+i+'</li>');
                    }
                }
            }));

            $('#'+$mainUl.attr('id')+'-paginator li').click(function(){
                activePage = $(this).index() + 1;

                start = (settings.perpage * activePage) - settings.perpage;

                $mainUl.children('li').show();
                $mainUl.children('li:lt('+(start)+')').hide();
                $mainUl.children('li:gt('+(start+(settings.perpage-1))+')').hide();


            });
        });


}