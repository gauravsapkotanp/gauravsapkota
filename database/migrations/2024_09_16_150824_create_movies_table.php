<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('movies', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('year');
            $table->string('country');
            $table->string('genre');
            $table->string('type');
            $table->string('views')->default(0);
            $table->string('rating');
            $table->string('actor');
            $table->string('director');
            $table->string('quality');
            $table->string('imdb');
            $table->string('duration');
            $table->longText('description');
            $table->string('link');
            $table->string('thumbnail');
            $table->string('images');
            $table->string('language');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('movies');
    }
};
