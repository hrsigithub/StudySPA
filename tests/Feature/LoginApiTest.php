<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

use App\Models\User;


class LoginApiTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        // テストユーザー作成
        // $this->user = factory(User::class)->create();
        $this->user = User::factory(1)->create();
    }

    /**
     * @test
     */
    public function should_登録済みのユーザーを認証して返却する()
    {
        return;
        //dd($this->user->first()->email);

        $response = $this->json('POST', route('login'), [
//            'email' => $this->user->email,
            'email' => $this->user->first()->email,
            'password' => 'password',
        ]);

        $response
            ->assertStatus(200)
            ->assertJson(['name' => $this->user->name]);

        $this->assertAuthenticatedAs($this->user);
    }
}
