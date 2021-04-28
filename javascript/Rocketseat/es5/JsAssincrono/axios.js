const api = () => {
  axios
    .get('https://api.github.com/users/euiciowr')
    .then((response) => {})
    .catch((error) => {});
};

api();
