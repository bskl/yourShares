<?php

namespace App\Http\Controllers\API\Auth;

use App\Models\User;
use GuzzleHttp\Client;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

trait LoginUsers
{
    use AuthenticatesUsers;

    /**
     * The http instance.
     *
     * @var \GuzzleHttp\Client
     */
    protected $http;

    /**
     * Login a request to the OAuth server.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return json $response
     */
    public function loginUser(Request $request)
    {
        if ($this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);

            return $this->sendLockoutResponse($request);
        }

        if ($this->attemptLogin($request)) {
            return $this->passportLogin($request);
        }

        // If the login attempt was unsuccessful we will increment the number of attempts
        // to login and redirect the user back to the login form. Of course, when this
        // user surpasses their maximum number of attempts they will get locked out.
        $this->incrementLoginAttempts($request);

        return $this->sendFailedLoginResponse($request);
    }

    /**
     * Make passport login to authenticate a user using the given credentials.
     *
     * @param array $credentials
     * @param bool  $remember
     *
     * @return json $response
     */
    public function passportLogin(Request $request)
    {
        $url = config('app.url').'/oauth/token';
        $credentials = $this->credentials($request);

        $response = $this->getHttp()->post($url, [
            'form_params' => [
                'grant_type'    => 'password',
                'client_id'     => config('auth.client.id'),
                'client_secret' => config('auth.client.secret'),
                'username'      => $credentials[$this->username()],
                'password'      => $credentials['password'],
                'scope'         => '*',
                ],
            ]);

        $this->clearLoginAttempts($request);

        return json_decode((string) $response->getBody(), true);
    }

    /**
     * Return the http implementation.
     *
     * @return \GuzzleHttp\Client
     */
    public function getHttp()
    {
        return new Client();
    }
}
