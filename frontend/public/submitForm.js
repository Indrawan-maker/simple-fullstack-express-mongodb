const form = document.getElementById('post-form')

async function handleForm() {
    let name = document.getElementById('name').value
    let message = document.getElementById('message').value
    console.log(name, message)

    const res = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({name, message})
    })
    const result = await res.json()
    console.log(result)
    form.reset()
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    handleForm()
    alert('tolong reset browser unutk melihat perubahan')
})

