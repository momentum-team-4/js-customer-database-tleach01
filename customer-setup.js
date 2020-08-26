
function addPerson () {
  const customerProfile = document.querySelector('#customerInfo')
  for (let customer of customers) {
    const div = document.createElement('div')
    customerProfile.appendChild(div)

    const img = document.createElement('img')
    img.src = customer.picture.large
    customerProfile.lastElementChild.appendChild(img)
    // use lastElementChild

    const h2 = document.createElement('h2')
    customerProfile.lastElementChild.appendChild(h2)
    h2.innerText = customer.name.first + ' ' + customer.name.last

    const email = document.createElement('p')
    customerProfile.lastElementChild.appendChild(email)
    email.innerText = customer.email

    const streetAddress = document.createElement('p')
    customerProfile.lastElementChild.appendChild(streetAddress)
    streetAddress.innerText = customer.location.street

    const cityStAddress = document.createElement('p')
    customerProfile.lastElementChild.appendChild(cityStAddress)
    cityStAddress.innerText = customer.location.city + ' ' + nameToAbbr(customer.location.state) + ' ' + customer.location.postcode

    const phone = document.createElement('p')
    customerProfile.lastElementChild.appendChild(phone)
    phone.innerText = 'Phone:' + customer.phone

    const birthdate = document.createElement('p')
    customerProfile.lastElementChild.appendChild(birthdate)
    birthdate.innerText = 'DOB:' + (customer.dob)
    // need to format dob

    const registered = document.createElement('p')
    customerProfile.lastElementChild.appendChild(registered)
    registered.innerText = 'Joined: ' + customer.registered
    // need to format this date too
}
}
addPerson()


// state abb

