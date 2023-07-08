document.querySelector('main').remove()
const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.textContent = "Mutai is the champion"
document.querySelector('body').append(newHeader)