<?php
/**
 * Created by PhpStorm.
 * User: Shay
 * Date: 2017/5/4
 * Time: 2:04
 */

namespace App\Http\Controllers;

use App\Article;


class ArticleController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * @return json
     */
    public function findAll()
    {
        return Article::all()->toJson();
    }

    /**
     * @param type
     * @return json
     */
    public function findType($type)
    {
        return Article::where('article_type', $type)
            ->get()->toJson();
    }

    /**
     * @param id
     * @return json
     */
    public function findOne($id)
    {
        return Article::find($id)->toJson();
    }

}
