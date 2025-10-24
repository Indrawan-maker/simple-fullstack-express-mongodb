
async function handleGetForm() {
    const container = document.getElementById('container')
const res = await fetch('http://localhost:8000/api/messages')
const messages = await res.json()
if(!res.ok) {
    console.error('unable fetch')
}

let id = 0
messages.forEach(messageObj => {
    container.innerHTML += `
    <table>
    <tr>
    <td>${id += 1}</td>
    </tr>
    <tr>
    <td>nama: ${messageObj.name}</td><br>
    </tr>
    <tr>
    <td>message:${messageObj.message}</td><br>
    </tr>
    <tr>
    <td>dibuat saat: ${messageObj.createdAt}</td><br>
    </tr>
    <td>di update saat: ${messageObj.updatedAt}</td><br>
    </table>
    `
})
}

handleGetForm()

