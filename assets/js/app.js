const baseEndpoint = "https://api.github.com";
const usersEndpoint = `${baseEndpoint}/users`;
// Se corrigieron los querySelectors ya que estaban con identificadores erróneos
const $n = document.querySelector("name");
const $b = document.querySelector("blog");
const $l = document.querySelector("location");
// esta función tiene que llamar a otras para recuperar los datos, por tiempo no se termino de realizar
// tratando de usar la función async y await
async function displayUser(username) {
  $n.textContent = "cargando...";
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = async () => {
    await response.json();
    return movies;
  };
}

function handleError(err) {
  console.log("OH NO!");
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`;
}

//Este llamado de función solo debe pasar parámetro y no devolver una promesa, idealmente
displayUser("stolinski");
