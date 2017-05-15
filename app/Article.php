<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $table = 'article_tb';

    protected $primaryKey = 'article_id';
    public $incrementing = true;

    public $timestamps = true;
    const CREATED_AT = 'article_created_time';
    const UPDATED_AT = 'article_updated_time';

    protected $fillable = [
        'article_id',
        'article_title',
        'article_type',
        'article_editor',
        'article_abstract',
        'article_thumbnail',
        'article_content',
        'article_created_time',
        'article_updated_time'
    ];
}