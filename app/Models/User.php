<?php

namespace App\Models;

use App\Enums\UserType;
use App\Notifications\ResetPassword as PasswordResetNotification;
use BenSampo\Enum\Traits\CastsEnums;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use CastsEnums, HasFactory, Notifiable;

    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = [
        'id', 'confirmed', 'confirmation_code', 'remember_token',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'confirmed', 'confirmation_code', 'remember_token', 'created_at', 'updated_at',
    ];

    /**
     * The attributes that should be mutated to enum class.
     *
     * @var array
     */
    protected $enumCasts = [
        'role' => UserType::class,
    ];

    /**
     * Get the portfolios for the user.
     */
    public function portfolios()
    {
        return $this->hasMany('App\Models\Portfolio');
    }

    /**
     * Get the audits for the user.
     */
    public function audits()
    {
        return $this->hasMany('App\Models\Audit');
    }

    /**
     * Send the password reset notification.
     *
     * @param string $token
     *
     * @return void
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new PasswordResetNotification($token));
    }

    /**
     * Check if user is admin.
     *
     * @return bool
     */
    public function isAdmin()
    {
        return $this->role->is(UserType::Admin);
    }
}
