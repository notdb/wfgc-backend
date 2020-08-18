exports.seed = function(knex, Promise) {
  return knex("arcades").insert([
    {
      arcadename: "Esports Arena Orange County",
      arcadestreet: "120 W. 5th St",
      arcadetown: "Santa Ana",
      arcadestate: "CA",
      arcadezipcode: 92701,
      long: -117.868344,
      lat: 33.748706
    },
    {
      arcadename: "Esports Arena Oakland",
      arcadestreet: "255 2nd St",
      arcadetown: "Oakland",
      arcadestate: "CA",
      arcadezipcode: 94607,
      long: -122.27238,
      lat: 37.79407
    },
    {
      arcadename: "Super Arcade",
      arcadestreet: "123 East Foothill Blvd",
      arcadetown: "Azusa",
      arcadestate: "CA",
      arcadezipcode: 91702,
      long: -117.907196,
      lat: 34.133698
    },
    {
      arcadename: "Esports Arena Las Vegas",
      arcadestreet: "3900 South Las Vegas Blvd",
      arcadetown: "Las Vegas",
      arcadestate: "NV",
      arcadezipcode: 89119,
      long: -115.175861,
      lat: 36.095303
    },
    {
      arcadename: "Next Level Arcade",
      arcadestreet: "874 4th Ave",
      arcadetown: "Brooklyn",
      arcadestate: "NY",
      arcadezipcode: 11232,
      long: -74.00217,
      lat: 40.656876
    }
  ]);
};

//arcadename
//arcadestreet
//arcadetown
//arcadestate
//arcadezipcode
