<?php
require_once('_func.php');

$page = 'index';
$pageTitle = 'Title';

$content = render('views/pages/'.$page.'');

include('views/layout.php');