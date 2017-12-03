<!doctype html>

<!--  -->

<html class="no-js" lang="">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Dynamic Stock Ticker</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="manifest" href="site.webmanifest">
    <link rel="apple-touch-icon" href="icon.png">
    <!-- Place favicon.ico in the root directory -->

    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/main.css">
</head>

<body>
    <!--[if lte IE 9]>
        <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
        <![endif]-->

    <!-- Add your site or application content here -->

    <a id='header'>
        <h1 id='title'>DB Ticker</h1>
    </a>

    <div class="buttonHeader">
        <input type="button" onclick="location.href='index.php';" value="Exchange Info" />
        <input type="button" onclick="location.href='myStocks.html';" value="My Stocks" />
        <input type="button" onclick="location.href='ftcMode.html';" value="FTC Mode" />
    </div>

    <a class='section'>
        <a id='query'>
            <h3>I want to find... </h3>
            <br>

            <input type="button" onclick="executeSql()" value="Find" />
        </a>
        <a id='result'>
            <div id="exchangeTable">
                <table border="1">
                    <tr id='exchange-table-header'>
                        <th>Table Header</th>
                        <th>Table Header</th>
                    </tr>
                    <tr>
                        <td>Table cell 1</td>
                        <td>Table cell 2</td>
                    </tr>
                    <tr>
                        <td>Table cell 3</td>
                        <td>Table cell 4</td>
                    </tr>
                </table>

            </div>
        </a>
    </a>

    <!-- PHP FUNCTIONALITY TEST -->
    <?php
    echo "Page fetched at server time: " . date("h:i:sa");
    ?>

        <script src="js/vendor/modernizr-3.5.0.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
            crossorigin="anonymous"></script>
        <script>
            window.jQuery || document.write('<script src="js/vendor/jquery-3.2.1.min.js"><\/script>')

        </script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>

        <!-- Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
        <script>
            window.ga = function () {
                ga.q.push(arguments)
            };
            ga.q = [];
            ga.l = +new Date;
            ga('create', 'UA-XXXXX-Y', 'auto');
            ga('send', 'pageview')

        </script>
        <script src="https://www.google-analytics.com/analytics.js" async defer></script>
</body>

</html>