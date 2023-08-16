
const Data = [
    {
        origin: "Netflix",
        id: 1,
        title: "Asur- Welcome to your dark side",
        imgsrc: "https://www.infodea.in/wp-content/uploads/2020/06/Asur-1.jpg",
        details: "2020 . Mystery . 2 seasons",
        link: "https://www.jiocinema.com/tv-shows/asur/2/the-dance-of-death/3757231?utm_source=google_web&utm_medium=search_google&utm_campaign=Avod_PM_JioCinema_Web_Search_Asur2_23May23&gclid=Cj0KCQjwj_ajBhCqARIsAA37s0wL0qGw8dACEKOMuBsQ5SGOrvm-nvcY9fhNsTbm-poeZBNAasHIh4kaAl-3EALw_wcB"
    },
    {
        id: 2,
        origin: "Netflix",
        imgsrc: "https://m.media-amazon.com/images/M/MV5BMzRjZWVmMzItNTdmYS00OWEzLTgyOGUtNThiNTU2ZThlYjY0XkEyXkFqcGdeQXVyMTIxMDk2NDE4._V1_.jpg",
        title: "The Family Man",
        details: "2019 . Suspense·Comedy·Drama . 2 seasons",
        link: "https://www.amazon.com/The-Family-Man-Season-1/dp/B086HVMNT2"
    },
    {
      id: 7,
      origin: "Apple TV+",
      title: "Lord of The Rings: Return of the King",
      details:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      year: 2003,
      rated: "PG-13",
      imgsrc:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
      score: 8.9
    },
    {
      id: 8,
      origin: "Apple TV+",
      title: "Pulp Fiction",
      details:
        "The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      year: 1994,
      rated: "R",
      imgsrc:
        "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg",
      score: 8.9
    },
    {
      id: 9,
      origin: "Apple TV+",
      title: "The Good, The Bad, and The Ugly",
      details:
        "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
      year: 1966,
      rated: "R",
      imgsrc:
        "https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
      score: 8.8
    },
    {
        id: 3,
        origin: "Amazon Prime",
        imgsrc: "https://m.media-amazon.com/images/M/MV5BYTMzYTQ1NzAtOGY4OC00ZGM5LThiMmUtMzgzZjgzNzNjZjJmXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg",
        title: "Sacred Games",
        details: "2018 . Drama . 2 Seasons",
        link: "https://www.netflix.com/in/title/80115328"
    },


    
    {
        id: 6,
        origin: "Netflix",
        imgsrc: "https://m.media-amazon.com/images/M/MV5BYTMzYTQ1NzAtOGY4OC00ZGM5LThiMmUtMzgzZjgzNzNjZjJmXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg",
        title: "Sacred Games",
        details: "2018 . Drama . 2 Seasons",
        link: "https://www.netflix.com/in/title/80115328"
    },


    {
        id: 7,
        origin: "Netflix",
        title: "Asur- Welcome to your dark side",
        imgsrc: "https://www.infodea.in/wp-content/uploads/2020/06/Asur-1.jpg",
        details: "2020 . Mystery . 2 seasons",
        link: "https://www.jiocinema.com/tv-shows/asur/2/the-dance-of-death/3757231?utm_source=google_web&utm_medium=search_google&utm_campaign=Avod_PM_JioCinema_Web_Search_Asur2_23May23&gclid=Cj0KCQjwj_ajBhCqARIsAA37s0wL0qGw8dACEKOMuBsQ5SGOrvm-nvcY9fhNsTbm-poeZBNAasHIh4kaAl-3EALw_wcB"
    },
    {
        id: 8,
        origin: "Netflix",
        imgsrc: "https://m.media-amazon.com/images/M/MV5BMzRjZWVmMzItNTdmYS00OWEzLTgyOGUtNThiNTU2ZThlYjY0XkEyXkFqcGdeQXVyMTIxMDk2NDE4._V1_.jpg",
        title: "The Family Man",
        details: "2019 . Suspense·Comedy·Drama . 2 seasons",
        link: "https://www.amazon.com/The-Family-Man-Season-1/dp/B086HVMNT2"
    },
    {
        id: 9,
        origin: "Netflix",

        imgsrc: "https://m.media-amazon.com/images/M/MV5BYTMzYTQ1NzAtOGY4OC00ZGM5LThiMmUtMzgzZjgzNzNjZjJmXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg",
        title: "Sacred Games",
        details: "2018 . Drama . 2 Seasons",
        link: "https://www.netflix.com/in/title/80115328"
    },


    {
        id: 10,
        origin: "Netflix",
        title: "Asur- Welcome to your dark side",
        imgsrc: "https://www.infodea.in/wp-content/uploads/2020/06/Asur-1.jpg",
        details: "2020 . Mystery . 2 seasons",
        link: "https://www.jiocinema.com/tv-shows/asur/2/the-dance-of-death/3757231?utm_source=google_web&utm_medium=search_google&utm_campaign=Avod_PM_JioCinema_Web_Search_Asur2_23May23&gclid=Cj0KCQjwj_ajBhCqARIsAA37s0wL0qGw8dACEKOMuBsQ5SGOrvm-nvcY9fhNsTbm-poeZBNAasHIh4kaAl-3EALw_wcB"
    },
    {
        id: 11,
        origin: "Netflix",
        imgsrc: "https://m.media-amazon.com/images/M/MV5BMzRjZWVmMzItNTdmYS00OWEzLTgyOGUtNThiNTU2ZThlYjY0XkEyXkFqcGdeQXVyMTIxMDk2NDE4._V1_.jpg",
        title: "The Family Man",
        details: "2019 . Suspense·Comedy·Drama . 2 seasons",
        link: "https://www.amazon.com/The-Family-Man-Season-1/dp/B086HVMNT2"
    },
    {
        id: 12,
        origin: "Netflix",
        imgsrc: "https://m.media-amazon.com/images/M/MV5BYTMzYTQ1NzAtOGY4OC00ZGM5LThiMmUtMzgzZjgzNzNjZjJmXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg",
        title: "Sacred Games",
        details: "2018 . Drama . 2 Seasons",
        link: "https://www.netflix.com/in/title/80115328"
    },


    {
        id: 13,
        origin: "Netflix",
        title: "Asur- Welcome to your dark side",
        imgsrc: "https://www.infodea.in/wp-content/uploads/2020/06/Asur-1.jpg",
        details: "2020 . Mystery . 2 seasons",
        link: "https://www.jiocinema.com/tv-shows/asur/2/the-dance-of-death/3757231?utm_source=google_web&utm_medium=search_google&utm_campaign=Avod_PM_JioCinema_Web_Search_Asur2_23May23&gclid=Cj0KCQjwj_ajBhCqARIsAA37s0wL0qGw8dACEKOMuBsQ5SGOrvm-nvcY9fhNsTbm-poeZBNAasHIh4kaAl-3EALw_wcB"
    },
    {
        id: 14,
        origin: "Netflix",

        imgsrc: "https://m.media-amazon.com/images/M/MV5BMzRjZWVmMzItNTdmYS00OWEzLTgyOGUtNThiNTU2ZThlYjY0XkEyXkFqcGdeQXVyMTIxMDk2NDE4._V1_.jpg",
        title: "The Family Man",
        details: "2019 . Suspense·Comedy·Drama . 2 seasons",
        link: "https://www.amazon.com/The-Family-Man-Season-1/dp/B086HVMNT2"
    },
    {
        id: 15,
        origin: "Netflix",

        imgsrc: "https://m.media-amazon.com/images/M/MV5BYTMzYTQ1NzAtOGY4OC00ZGM5LThiMmUtMzgzZjgzNzNjZjJmXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg",
        title: "Sacred Games",
        details: "2018 . Drama . 2 Seasons",
        link: "https://www.netflix.com/in/title/80115328"
    },
    {
        id: 1,
        origin: "Netflix",
        title: "Stranger Things",
        imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPhUo7Q9Rcp-uOVLrDEFlz6qrXTEBo5NdWQNr_7jJZLfWFcT9yhlivv2sEqWyKjZJKo4Q&usqp=CAU",
        details: "A group of friends in the 1980s encounter strange occurrences in their small town.",
        link: "https://www.netflix.com/title/80057281"
    },
    {
        id: 2,
        origin: "Disney+",
        title: "The Mandalorian",
        imgsrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHwrrSob091SJmhl1wAEJGxGBz5ODB9sSgp1748Y1l2YXfOmRxbPvMlFuCkBIZuCpplc&usqp=CAU',
        details: "Bounty hunter Din Djarin navigates the galaxy while avoiding the New Republic.",
        link: "https://www.disneyplus.com/series/the-mandalorian/3jLIGMDYINqD"
    },
    {
        id: 3,
        origin: "Amazon Prime",
        title: "The Boys",
        imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK0nNkMMZbcQrr4XKMj0fIW33jcJAYfyUHdpChiLZauvNqdJvZ-EBwne_POpBEuC4x8rA&usqp=CAU",
        details: "A group of vigilantes takes on superpowered individuals who abuse their abilities.",
        link: "https://www.amazon.com/The-Boys-Season-1/dp/B07QNSVKQ6"
    },
    // ... Continue adding more series objects
    {
        id: 48,
        origin: "Hulu",
        title: "The Handmaid's Tale",
        imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2iaWmnRJwK9bJiwHXslq0drYYq-XNhqG5kqWunXdoJ6cpmP6IsgvgNOzs6mB2UFquB5g&usqp=CAU",
        details: "In a dystopian society, women are forced into servitude for the ruling class.",
        link: "https://www.hulu.com/series/the-handmaids-tale-565d3f12-2f3d-4d4f-8420-d96e0e99287b"
    },
    {
      id: 4,
      origin: "Netflix",
      title: "Asur- Welcome to your dark side",
      imgsrc: "https://www.infodea.in/wp-content/uploads/2020/06/Asur-1.jpg",
      details: "2020 . Mystery . 2 seasons",
      link: "https://www.jiocinema.com/tv-shows/asur/2/the-dance-of-death/3757231?utm_source=google_web&utm_medium=search_google&utm_campaign=Avod_PM_JioCinema_Web_Search_Asur2_23May23&gclid=Cj0KCQjwj_ajBhCqARIsAA37s0wL0qGw8dACEKOMuBsQ5SGOrvm-nvcY9fhNsTbm-poeZBNAasHIh4kaAl-3EALw_wcB"
  },
  {
      id: 5,
      origin: "Netflix",
      imgsrc: "https://m.media-amazon.com/images/M/MV5BMzRjZWVmMzItNTdmYS00OWEzLTgyOGUtNThiNTU2ZThlYjY0XkEyXkFqcGdeQXVyMTIxMDk2NDE4._V1_.jpg",
      title: "The Family Man",
      details: "2019 . Suspense·Comedy·Drama . 2 seasons",
      link: "https://www.amazon.com/The-Family-Man-Season-1/dp/B086HVMNT2"
  },
    {
        id: 49,
        origin: "Apple TV+",
        title: "Ted Lasso",
        imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQraaKqyCjiDeEWzrH29E_8202oA2HbMSiGd4fB6WXN9btbex_F3YPmZOp49jcQdpb3HAQ&usqp=CAU",
        details: "An American football coach is hired to manage a British soccer team.",
        link: "https://tv.apple.com/us/show/ted-lasso/umc.cmc.vtoh0mn0xn7t3c643xqonfzy"
    },

    {
        id: 50,
        origin: "Netflix",
        title: "Black Mirror",
        imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqkM43Gf9WccXgTuWQpKEtHg5rjE2bLkqcrpQ2gpNWG42uu67uzIZmooprK652wx-ST64&usqp=CAU",
        details: "Anthology series exploring dark and satirical themes that examine modern society.",
        link: "https://www.netflix.com/title/70264888"
    },

{
    id: 1,
    origin: "Amazon Prime",
    title: "Shawshank Redemption",
    details:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    year: 1994,
    rated: "R",
    imgsrc:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    score: 9.2
  },
  {
    id: 2,
    title: "The Godfather",
    origin: "Amazon Prime",
    details:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    year: 1972,
    rated: "R",
    imgsrc:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
    score: 9.2
  },
  {
    id: 3,
    title: "The Godfather: Part II",
    origin: "Apple TV+",
    details:
      "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    year: 1974,
    rated: "R",
    imgsrc:
      "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
    score: 9.0
  },
  {
    id: 4,
    origin: "Apple TV+",
    title: "The Dark Knight",
    details:
      "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    year: 2014,
    rated: "PG-13",
    imgsrc:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    score: 9.0
  },
  {
    id: 5,
    origin: "Apple TV+",
    title: "12 Angry Men",
    details:
      "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    year: 1957,
    rated: "NR",
    imgsrc:
      "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg",
    score: 8.9
  },
  {
    id: 6,
    origin: "Apple TV+",
    title: "Schindler's List",
    details:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    year: 1993,
    rated: "R",
    imgsrc:
      "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    score: 8.9
  },
  
  {
    id: 10,
    title: "Fight Club",
    origin: "Apple TV+",
    details:
      "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    year: 1999,
    rated: "R",
    imgsrc:
      "https://m.media-amazon.com/images/M/MV5BMjJmYTNkNmItYjYyZC00MGUxLWJhNWMtZDY4Nzc1MDAwMzU5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    score: 8.8
  }


];
export default Data;