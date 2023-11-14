//mostrar lista de amigos 
const respuestaHandler = (respuesta) => {
    const [lista] = $("#lista") // esto lo usamos para llamar al elemento en este caso ver amigo con el id correspondiente 

    respuesta.forEach(user  => {
        const newList = document.createElement("li")
        newList.innerHTML = user.name;
        lista.appendChild(newList)
    });
}

const [boton] = $("#boton")

const fetchUser = () => {
    $.get("http://localhost:5000/amigos", respuestaHandler)
    lista.innerHTML = ""
}

boton.addEventListener("click",fetchUser)

//buscar amigo 
const url = "http://localhost:5000/amigos"// renombramos el url 

const search = document.getElementById("search")// selecionamos por id 

const friendSearch = () => {
    let id = document.getElementById("input").value// esto nos sirve para sacar el id de la persona para uqe lo muestre 

    let amigo = $("#amigo")// llamamos por Jquery el id amigo 
    amigo.empty();
    $.get(`${url}/${id}`, (res) => {
    amigo.text(res.name)// esto es para imprimir el texto en pantalla
    })
}

search.addEventListener("click", friendSearch)// esto es para darle vida al boton 


//borrar amigo 
