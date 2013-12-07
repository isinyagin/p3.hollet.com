$(document).ready(function() {
	var newList = true;

	$('#addItem').on('click', function(e) {
		e.preventDefault();
        var newListItem;
		if (newList == true) {
			var theValue = $('#todoItem').val();
			newListItem = '<li><span class="handle"> :: </span> <input class="listItem" value="' + 
                            theValue + 
                            '"><a class="removeListItem" style="display: none;" href="#"> X </a> </li>';
			newList = false;	
		} else {
			var theValue = $("#todoItem").val();
		    newListItem = $('#list li:last').clone();
			newListItem.find('input').attr('value', theValue); 
		}

		var theCount = $("#list li").length + 1;
		if (theCount > 1)
            $('#clear').css('display','block');

		$('#list').append(newListItem);


		$('#todoItem').val('');
		$('#todoItem').focus();
		$('.sortable').sortable('destroy');
		$('.sortable').sortable({
			handle: '.handle'
		});
        
        localStorage.setItem('todoList', $('#list').html());
	});
		
    $('input[type="text"]').keydown(function(e) {
        var key = e.charCode ? e.charCode : (e.keyCode ? e.keyCode : 0);
        if (key === 13) {
            e.preventDefault();
            var inputs = $(this).closest('form').find(':input:visible');
            inputs.eq(inputs.index(this) + 1).focus();
        }
    });

    $('#list').change('.listItem', function(e) {
        var current = $(this).val();
        $(this).attr('value', current);
        localStorage.setItem('todoList', $('#list').html());
    });

    $('.sortable').sortable().bind('sortupdate', function() {
        localStorage.setItem('todoList', $('#list').html());
    });
    
    $('#list').mouseover('li', function() {
        $(this).find('a').css('display', 'block');
    });
    
    $('#list').mouseout('li', function() {
        $(this).find('a').css('display', 'none');
    });

    $('#list').click('.removeListItem', function(e) {
        e.preventDefault();
        $(this).parent().remove();
        localStorage.setItem('todoList', $('#list').html());
    });

    $('#clear').click(function(e) {
        e.preventDefault();
        $('#list').children().remove();
        newList = true;
        $('#dotoItem').val('');
        $('#clear').css('display','none');
        $('#todoItem').focus();
        localStorage.removeItem('todoList');
    });

    function load() {
        if (localStorage.getItem('todoList')) {
            $('#list').html(localStorage.getItem('todoList'));
            $('.sortable').sortable('destroy');
            $('.sortable').sortable({
                handle: '.handle'
            });

            var theCount = $("#list li").length + 1;
            if (theCount > 1)
                $('#clear').css('display','block');
        }
    };

    load();    
    
}); /* end of document.ready */
