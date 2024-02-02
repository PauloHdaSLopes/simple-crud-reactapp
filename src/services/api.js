const BASE_URL = 'http://localhost:5016/api/'

export async function request(){
    const resp = await fetch(BASE_URL + 'persons')
    const data = await resp.json()
    return data
}

export async function post(data) {
    console.log(data)
    
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    const resp = await fetch(BASE_URL + 'persons', options)

    console.log("Status Code: " + resp.status)
}