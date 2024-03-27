

const data = [
    {
        id: 1,
        title: "The Lord of the Rings",
        publicationDate: "1954-07-29",
        author: "J. R. R. Tolkien",
        genres: [
            "fantasy",
            "high-fantasy",
            "adventure",
            "fiction",
            "novels",
            "literature",
        ],
        hasMovieAdaptation: true,
        pages: 1216,
        translations: {
            spanish: "El señor de los anillos",
            chinese: "魔戒",
            french: "Le Seigneur des anneaux",
        },
        reviews: {
            goodreads: {
                rating: 4.52,
                ratingsCount: 630994,
                reviewsCount: 13417,
            },
            librarything: {
                rating: 4.53,
                ratingsCount: 47166,
                reviewsCount: 452,
            },
        },
    },
    {
        id: 2,
        title: "The Cyberiad",
        publicationDate: "1965-01-01",
        author: "Stanislaw Lem",
        genres: [
            "science fiction",
            "humor",
            "speculative fiction",
            "short stories",
            "fantasy",
        ],
        hasMovieAdaptation: false,
        pages: 295,
        translations: {},
        reviews: {
            goodreads: {
                rating: 4.16,
                ratingsCount: 11663,
                reviewsCount: 812,
            },
            librarything: {
                rating: 4.13,
                ratingsCount: 2434,
                reviewsCount: 0,
            },
        },
    },
    {
        id: 3,
        title: "Dune",
        publicationDate: "1965-01-01",
        author: "Frank Herbert",
        genres: ["science fiction", "novel", "adventure"],
        hasMovieAdaptation: true,
        pages: 658,
        translations: {
            spanish: "",
        },
        reviews: {
            goodreads: {
                rating: 4.25,
                ratingsCount: 1142893,
                reviewsCount: 49701,
            },
        },
    },
    {
        id: 4,
        title: "Harry Potter and the Philosopher's Stone",
        publicationDate: "1997-06-26",
        author: "J. K. Rowling",
        genres: ["fantasy", "adventure"],
        hasMovieAdaptation: true,
        pages: 223,
        translations: {
            spanish: "Harry Potter y la piedra filosofal",
            korean: "해리 포터와 마법사의 돌",
            bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
            portuguese: "Harry Potter e a Pedra Filosofal",
        },
        reviews: {
            goodreads: {
                rating: 4.47,
                ratingsCount: 8910059,
                reviewsCount: 140625,
            },
            librarything: {
                rating: 4.29,
                ratingsCount: 120941,
                reviewsCount: 1960,
            },
        },
    },
    {
        id: 5,
        title: "A Game of Thrones",
        publicationDate: "1996-08-01",
        author: "George R. R. Martin",
        genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
        hasMovieAdaptation: true,
        pages: 835,
        translations: {
            korean: "왕좌의 게임",
            polish: "Gra o tron",
            portuguese: "A Guerra dos Tronos",
            spanish: "Juego de tronos",
        },
        reviews: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 2295233,
                reviewsCount: 59058,
            },
            librarything: {
                rating: 4.36,
                ratingsCount: 38358,
                reviewsCount: 1095,
            },
        },
    },
];

function getBooks() {
    return data;
}
// console.log(getBooks()); //whole array of object get

function getBook(id) {
    return data.find((data) => data.id === id);
}
// console.log(getBook(2));


///----------------------------------23. Short-Circuiting And Logical Operators: &&, ||, ??------------------

// - in js some logical operator have a fetture of short-circuting

// - it  means logical operator in certain condition return a first value without looking at second value


const book = getBook(2)
book;

//in & Operator

console.log(true && "some string")

//short-circuting happen when in and oper.first value is false
console.log(false && "some string")

//so practise practically use take id no 2 book
console.log(hasMovieAdaptation && "this book")

//here is concept of truthy value and falsy value

// falsy value => 0,'',null,undefined

console.log(0 && "some string")
console.log("dip" && "jonas")


//in || Operator

console.log(false || "some string")

//here short-crcuit happen when first value is true
console.log(true || "some string")

//WHENEEVR SHORT-CRCUIT HAPPEN WE DO OTHER VALUE AS IF


//Now take example of book id 1
// console.log(book.translations.spanish)
// const spanishTrans = book.translations.spanish || "NOT TRANSLATED";
// spanishTrans

//Now take example of book id 2
// console.log(book.translations.spanish)
// const spanishTrans = book.translations.spanish || "NOT TRANSLATED";
// spanishTrans

//some time OR(||) OPERATOR GIVE WRONG ANSWER BECAUSE SHORT-CRUCITING IN OR(||) HAPPEN WHEN FIRST VALUE IS TRUE

console.log(book.reviews.librarything.reviewsCount); //0

const countWrong = book.reviews.librarything.reviewsCount || "no data";

countWrong; //no data

//to solve this js relaese new operator called nullish coalescing operator

const count = book.reviews.librarything.reviewsCount ?? "no data";
count;
console.log(count);

//only return second value  when first value is null or undefined