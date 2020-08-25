
function addPerson () {
  const customerProfile = document.querySelector('#customerInfo')
  for (let customer of customers) {
    const div = document.createElement('div')
    customerProfile.appendChild(div)
    const person = document.querySelector('.person-div')

    const img = document.createElement('img')
    img.src = customer.picture.large
    customerProfile.lastElementChild.appendChild(img)

    const h2 = document.createElement('h2')
    customerProfile.lastElementChild.appendChild(h2)
    h2.innerText = customer.name.first + ' ' + customer.name.last
    // need to capitalize first letters

    const email = document.createElement('p')
    customerProfile.lastElementChild.appendChild(email)
    email.innerText = customer.email
}
}
addPerson();
