<!DOCTYPE html>
<html lang='en'>

<head>
    <title>CS15 Project 1 -- Info</title>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <link href='./css/bootstrap.css' rel='stylesheet' media='screen'>
</head>

<body>
    <section class='container'>
        <div class='row'>
            <section class='col-md-4'>
                <h1>Simple to-do list</h1>

                <ul id='list' class='list-group' contenteditable>
                    <li class='list-group-item'>Enter an item</li>
                </ul>

                <p>
                    <button class='btn' id ='save'>Save</button>
                    <button class='btn' id ='clear'>Clear</button>
                    <div id='report'></div>
                </p>
            </section>
        </div>
    </section><!-- container -->

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src='./js/bootstrap.js'></script>
    <script src='./js/todo.js'></script>
</body>

</html>
