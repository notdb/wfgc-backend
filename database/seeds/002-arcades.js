exports.seed = function(knex, Promise) {
  return knex("arcades").insert([
    {
      arcadename: "Esports Arena Orange County",
      arcadestreet: "120 W. 5th St",
      arcadetown: "Santa Ana",
      arcadestate: "CA",
      arcadezipcode: 92701
    },
    {
      arcadename: "Esports Arena Oakland",
      arcadestreet: "255 2nd St",
      arcadetown: "Oakland",
      arcadestate: "CA",
      arcadezipcode: 94607
    },
    {
      arcadename: "Super Arcade",
      arcadestreet: "123 East Foothill Blvd",
      arcadetown: "Azusa",
      arcadestate: "CA",
      arcadezipcode: 91702
    },
    {
      arcadename: "Esports Arena Las Vegas",
      arcadestreet: "3900 South Las Vegas Blvd",
      arcadetown: "Las Vegas",
      arcadestate: "NV",
      arcadezipcode: 89119
    },
    {
      arcadename: "Next Level Arcade",
      arcadestreet: "874 4th Ave",
      arcadetown: "Brooklyn",
      arcadestate: "NY",
      arcadezipcode: 11232
    }
  ]);
};

//arcadename
//arcadestreet
//arcadetown
//arcadestate
//arcadezipcode
