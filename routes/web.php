<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function () use ($app) {
    return view('index');
});

$app->get('/tech', function () use ($app) {
    return view('index');
});

$app->get('/math', function () use ($app) {
    return view('index');
});

$app->get('/life', function () use ($app) {
    return view('index');
});

$app->group(['prefix' => 'api'], function () use ($app) {
    
    $app->get('/article', 'ArticleController@findAll');

    $app->get('/article/type/{type}', 'ArticleController@findType');

    $app->get('/article/id/{id}', 'ArticleController@findOne');

});


