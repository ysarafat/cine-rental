 const movies = [
    {
    id: crypto.randomUUID(),
    cover: "../assets/movie-covers/avatar.png",
    title: "Avatar",
    genre: "Action",
    rating: 9.3,
    price: 89,
    description: "A paraplegic former Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
    },
    {
    id: crypto.randomUUID(),
    cover: "../assets/movie-covers/iron-man.png",
    title: "Iron Man",
    genre: "Action",
    rating: 7.9,
    price: 139,
    description: "When an American military engineer is captured in Afghanistan, he builds a high-tech suit of armor to escape."
    }, 
    {
    id: crypto.randomUUID(),
    cover: "../assets/movie-covers/once-in-ho.jpg",
    title: "Once in a Lifetime",
    genre: "Comedy/Drama",
    rating: 8.0,
    price: 120,
    description: "A group of friends navigates the complexities of life, love, and relationships in this heartwarming comedy-drama."
    },
    {
    id: crypto.randomUUID(),
    cover: "../assets/movie-covers/pain-and-gain.jpg",
    title: "Pain and Gain",
    genre: "Action/Comedy",
    rating: 7.0,
    price: 99,
    description: "A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong."
    }, {
        id: crypto.randomUUID(),
        cover: "../assets/movie-covers/parasite.jpg",
        title: "Parasite",
        genre: "Thriller/Drama",
        rating: 8.6,
        price: 70,
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan."
    }
] 

function getMovies() {
    return movies;
}
export { getMovies };

