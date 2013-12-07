<!DOCTYPE html>
<html lang='en'>

<head>
    <title>CS15 Project 3 </title>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <link href='./css/bootstrap.css' rel='stylesheet' media='screen'>
    <link href='./css/base.css' rel='stylesheet' media='screen'>
    <link href='./css/todo.css' rel='stylesheet' media='screen'>
</head>

<body>
    <section class='container'>
        <div class='row'>
            <div class='col-md-4 icontainer'>
                <h1>Simplist</h1>

                <form role='form' name='todo' method='post' action=''>
                    <div class='form-group'>
                        <input class='form-control' type='text' name='todoItem' id='todoItem' autofocus>
                    </div>
                    <button class='btn' type='submit' name='addItem' id='addItem'>Add Item</button>
                    <button class='btn' id ='clear'>Clear</button>
                </form>

                <ul id='list' class='list-group sortable'></ul>

                <p id='clear'>
                </p>
            </div>
        </div>
    </section><!-- container -->

    <script src='//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js'></script>
    <script src='./js/jquery.sortable.js'></script>
    <script src='./js/bootstrap.js'></script>
    <script src='./js/todo.js'></script>
</body>

</html>
