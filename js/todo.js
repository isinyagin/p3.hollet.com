$(document).ready(function() {

    $('#save').click(function(e) {
        localStorage.setItem('todoList', $('#list').html());
        $('#report').html("You items have been saved");
    });

    $('#clear').click(function(e) {
        localStorage.removeItem('todoList');
        location.reload();
    });

    (function() {
        if (localStorage.getItem('todoList'))
            $('#list').html(localStorage.getItem('todoList'));
    })();
});
