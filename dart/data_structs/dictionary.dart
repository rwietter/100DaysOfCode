void main() {
  var movies = {
    "Marvel": {
      "Avengers: infinity war": 2017,
      "Avengers: end game": 2018
    },
    "DC": {
      "Batman vs Superman": 2017,
      "Justice Ligue": 2021
    }
  };

  var marvel = movies["Marvel"]?["Avengers: end game"];
  print(marvel);
}