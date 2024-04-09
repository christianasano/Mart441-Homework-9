(function($) {
    $.fn.displayJSONData = function(data) {
        var container = this;
        var html = '<ul>';

        data.forEach(function(item) {
            html += '<li>Name: ' + item.name + ', Age: ' + item.age + ', City: ' + item.city + '</li>';
        });

        html += '</ul>';
        container.html(html);
    };
})(jQuery);
