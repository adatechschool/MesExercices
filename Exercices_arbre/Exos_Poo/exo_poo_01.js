class movies {
  constructor(title, year, category, firstname, lastname, birth_year) {
    this.title = title;
    this.year = year;
    this.category = category;
    this.director = {
      firstname: firstname,
      lastname: lastname,
      birth_year: birth_year,
      age: this.calculateAge(birth_year),
    };
  }
  calculateAge(birth_year) {
    return 2025 - birth_year;
  }
}
let greatfather = new movies(
  "Le Parrain",
  1972,
  "Drame",
  "Quentin",
  "Tarantino",
  "1963"
);
let terminator2 = new movies(
  "Terminator 2",
  1991,
  "Action",
  "James",
  "Cameron",
  "1954"
);
let usualsuspects = new movies(
  "usualsuspects",
  1995,
  "Action",
  "Bryan",
  "Singer",
  "1965"
);
