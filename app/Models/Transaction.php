<?php

namespace App\Models;

use Carbon\Carbon;
use Money\Money;

class Transaction extends BaseModel
{
    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = [
        'id',
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'share_id', 'type', 'date_at', 'lot', 'remaining', 'commission', 'bonus_issue',
    ];

    /**
     * The attributes that are money object.
     *
     * @var array
     */
    protected $money = [
        'price', 'amount', 'commission_price', 'sale_average', 'sale_average_amount', 'sale_gain', 'dividend', 'dividend_gain',
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [
        'date_at', 'created_at', 'updated_at',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'created_at', 'updated_at',
    ];

    /**
     * Get the portfolio symbol.
     */
    public function share()
    {
        return $this->belongsTo('App\Models\Share');
    }

    /**
     * Set the date_at attribute with Carbon object.
     */
    public function setDateAtAttribute($value)
    {
        if ($value) {
            $this->attributes['date_at'] = Carbon::createFromFormat('Y-m-d', $value)->toDateTimeString();
        }
    }

    /**
     * Get the date_at attribute with Carbon object.
     */
    public function getDateAtAttribute($value)
    {
        if ($value) {
            return Carbon::createFromFormat('Y-m-d H:i:s', $value)->format('Y-m-d');
        }
    }

    /**
     * Set the bonus_issue attribute with divided 100.
     */
    public function setBonusIssueAttribute($value)
    {
        if ($value) {
            return (float) $this->attributes['bonus_issue'] = ($value / 100);
        }
    }
}
