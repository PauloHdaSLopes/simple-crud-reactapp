const BASE_URL = 'http://localhost:5016/api/'

export async function request(){
    const resp = await fetch(BASE_URL + 'persons')

    if(resp.status !== 200)
        throw new Error("Houve erro na requisição")

    const data = await resp.json()

    data.forEach(element => {
        element.nascimento = new Date(element.nascimento).toLocaleDateString("pt-br")
    });

    return data
}

export async function post(data) {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    const resp = await fetch(BASE_URL + 'persons', options)

    console.log("Status Code: " + resp.status)
    if(resp.status !== 200)
        throw new Error("Houve erro na requisição")
}

export async function put(data) {
    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    const resp = await fetch(BASE_URL + 'persons/' + data.id, options)

    console.log("Status Code: " + resp.status)

    if(resp.status !== 200)
        throw new Error("Houve erro na requisição")
}

export async function del(id){
    const resp = await fetch(BASE_URL + 'persons/' + id,{method: "DELETE"})

    console.log("Status Code: " + resp.status)

    if(resp.status !== 200)
        throw new Error("Houve erro na requisição")
}