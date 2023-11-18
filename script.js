//navbar selection
const harmburger = document.querySelector('.harmburger')
const navMenu = document.querySelector('.nav__content')

harmburger.addEventListener('click', () =>{
    harmburger.classList.toggle('show')
    navMenu.classList.toggle('active')
})

const navItems = document.querySelectorAll('.fw-bold')
Array.from(navItems).forEach(item =>{
    item.addEventListener('click', function(){
        //Removing navitems
        navMenu.classList.remove('active')
        harmburger.classList.remove('show')
    })
})


//form validation
const myName = document.querySelector('#name')
const myLastname = document.querySelector('#lastname')
const myEmail = document.querySelector('#email')
const myForm = document.querySelector('#form')
const form = document.querySelector('form')
const message = document.querySelector('#alert')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    if (myEmail.value === ''|| myLastname.value === ''|| myName === ''){
     message.textContent = 'Please fill all fields'
     message.style.color = '#ff5f00'
     message.classList.add('error')
     
     setTimeout(() =>{
        message.remove()
     }, 3000)
    }
    else{
        message.textContent = 'Success!'
        message.style.color = '#ff5f00'
        message.classList.add('error')

        setTimeout(() =>{
            message.remove()
         }, 3000)
        myLastname.value = ''
        myEmail.value = ''
        myName.value = ''
    }
})