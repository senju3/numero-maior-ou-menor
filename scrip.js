const form = document.querySelector('#form')
const um = document.querySelector('#primeiro')
const dois = document.querySelector('#segundo')
const button = document.querySelector('#button')
button.addEventListener('click', () => {
    const uno = um.value
    const duo = dois.value
    if (uno > duo) {
        alert(`${uno} é maior do que ${duo}`)
    } else {
        alert(`${duo} é maior do que ${uno}`)
    }
})