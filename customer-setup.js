
function addPerson () {
  const customerProfile = document.querySelector('#customerInfo')
  for (let customer of customers) {
    const div = document.createElement('div')
    customerProfile.appendChild(div)
    const person = document.querySelector('.person-div')

    const img = document.createElement('img')
    img.src = customer.picture.large
    customerProfile.lastElementChild.appendChild(img)
    // use lastElementChild

    const h2 = document.createElement('h2')
    customerProfile.lastElementChild.appendChild(h2)
    h2.innerText = customer.name.first + ' ' + customer.name.last
    // need to capitalize first letters

    const email = document.createElement('p')
    customerProfile.lastElementChild.appendChild(email)
    email.innerText = customer.email

    const streetAddress = document.createElement('p')
    customerProfile.lastElementChild.appendChild(streetAddress)
    streetAddress.innerText = customer.location.street
    // need capitalization here too

    const cityStAddress = document.createElement('p')
    customerProfile.lastElementChild.appendChild(cityStAddress)
    cityStAddress.innerText = customer.location.city + ' ' + customer.location.state + ' ' + customer.location.postcode
    // capitalize again

    const phone = document.createElement('p')
    customerProfile.lastElementChild.appendChild(phone)
    phone.innerText = customer.phone

    const birthdate = document.createElement('p')
    customerProfile.lastElementChild.appendChild(birthdate)
    birthdate.innerText = customer.dob
    // need to format dob

    const registered = document.createElement('p')
    customerProfile.lastElementChild.appendChild(registered)
    registered.innerText = customer.registered
    // need to format this date too
}
}
addPerson();
