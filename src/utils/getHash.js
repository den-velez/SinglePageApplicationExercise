const getHash = () =>
  location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/";
//slide para eliminiar elementos (estamos tomando el dato de la ruta en el navegador)
//toLocateLowerCase() para siempre tomar minuscula en caso que el usuario coloque mayuscula
//split para dividir el string, crear un arreglo
//[1] porque la primera posicion es 0 y es un "/"

export default getHash;
