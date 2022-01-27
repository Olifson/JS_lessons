
"use strict";

const numberofFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних прсмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних прсмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;

    console.log(personalMovieDB);

  
