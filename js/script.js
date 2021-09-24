let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы смотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null ||
        isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы смотрели?', '');
    }
}
start();



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilm() {
    for (let i = 0; i < 2; ++i) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}
rememberMyFilm();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотренно слишком мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр по порядку ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres();