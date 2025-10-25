
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
    <button onclick="handleEdit('${messageObj._id}', '${messageObj.name}', '${messageObj.message}')">Edit</button>
    <button onclick="handleDelete('${messageObj._id}')">hapus</button>
    </table>
    `
})
}

handleGetForm()


async function handleEdit(id, oldName, oldMessage) {
    const name = prompt('silahkan masukan nama baru', oldName)
    const message = prompt('silahkan masukan nama baru', oldMessage)
    console.log(id)
    if(!name || !message) return alert('tidak boleh kosong')
    const res = await fetch(`http://localhost:8000/api/messages/${id}`, {
        method: 'PUT',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({name, message})
    })
    const result = await res.json()
    console.log(result)
    alert('berhasil terubah')
}

async function handleDelete(id) {
    const res = await fetch(`http://localhost:8000/api/messages/${id}`,{
        method: 'DELETE'
    }
)
const result = await res.json()
console.log(result)
alert(`data dengan id ${result._id} dan nama ${result.name}berhasil dihapus`)
}