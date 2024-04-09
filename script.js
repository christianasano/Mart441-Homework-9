$.ajax({
    url: 'data.json',
    dataType: 'json',
    success: function(data) {
        console.log(data); // Log the data to console
        displayData(data);
    },
    error: function(xhr, status, error) {
        console.error(status + ': ' + error);
    }
});



function displayData(data) {
    var container = $('#dataContainer');
    var html = '<ul>';

    data.forEach(function(item) {
        html += '<li>Name: ' + item.name + ', Age: ' + item.age + ', City: ' + item.city + '</li>';
    });

    html += '</ul>';
    container.html(html);
}
$(document).ready(function() {
    $('#displayButton').click(function() {
        $.ajax({
            url: 'data2.json', // New JSON file URL
            dataType: 'json',
            success: function(data) {
                displayNewData(data);
            },
            error: function(xhr, status, error) {
                console.error(status + ': ' + error);
            }
        });
    });
});

function displayNewData(data) {
    var container = $('#dataContainer');
    var html = '<ul>';

    data.forEach(function(item) {
        html += '<li>Name: ' + item.name + ', Age: ' + item.age + ', City: ' + item.city + '</li>';
    });

    html += '</ul>';
    container.html(html); // Replace existing data with new data
}
