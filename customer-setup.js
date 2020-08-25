
function addPerson () {
  const customerProfile = document.querySelector('#customerInfo')
  for (let customer of customers) {
    const li = document.createElement('li')
    customerProfile.appendChild(li)
    li.setAttribute('class', 'person-li')
    const person = document.querySelector('.person-li')
    const img = document.createElement('img')
    img.src = customer.picture.large
    customerProfile.lastElementChild.appendChild(img)
    const h2 = document.createElement('h2')
    customerProfile.lastElementChild.appendChild(h2)
    h2.innerText = customer.name.first + ' ' + customer.name.last
    // need to capitalize first letters
    const p = document.createElement('p')
    customerProfile.lastElementChild.appendChild(p)
    p.innerText = customer.email
}
}
addPerson();
