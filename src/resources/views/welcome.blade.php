<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="サイト説明">
    <link rel="stylesheet" href="css/app.css">
    <title>Laravel</title>
</head>
<body>
    <div id="root"></div>
</body>
<script src="{{ mix('js/index.js') }}" defer></script>
</html>