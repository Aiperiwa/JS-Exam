const pics = [
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80',
    'https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
    'https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    
  ]

  const boxImg = document.querySelector('.box-img')

  for (let i = 0; i < pics.length; i++) {
    const imgWrapper = document.createElement('div')
    imgWrapper.classList.add('imgWrapper')
    const img = document.createElement('img') 
    img.classList.add('img-box')
    img.setAttribute('src', pics[i])
    imgWrapper.appendChild(img)
    boxImg.appendChild(imgWrapper)
}


const imgBoxes = document.querySelectorAll('.img-box')

for (let i = 0; i < imgBoxes.length; i++) {
  imgBoxes[i].addEventListener('click', function() {
    const modal = document.createElement('div')
    modal.classList.add('modal')
    
    const modalImg = document.createElement('img')
    modalImg.setAttribute('src', this.getAttribute('src'))
    modalImg.classList.add('modal-img')


    
    const closeBtn = document.createElement('button')
    closeBtn.classList.add('close-btn')
    closeBtn.textContent = 'close';
    closeBtn.addEventListener('click', function() {
      modal.remove()
   
    })
    modal.onclick = function() {
         modal.remove()
       } 
    
    modal.appendChild(closeBtn)
    modal.appendChild(modalImg)

    document.body.appendChild(modal)
  });
  
}


const button = document.querySelector('.contactMe')
const blueContact = document.querySelector('.blueContact')
const closeXX = document.querySelector('.closeXX')
const contact = document.querySelector('.contact')
const form = document.querySelector('form')
const btnMessage = document.querySelector('.message')


button.addEventListener('click', () => {
    blueContact.style.display = 'flex'
    contact.style.display = 'block'
})

closeXX.addEventListener('click', function() {
    blueContact.style.display = 'none'
    contact.style.display = 'none'
})

blueContact.onclick = function() {
        blueContact.style.display = 'none'
        contact.style.display = 'none'

}

btnMessage.addEventListener('click', (e) => {
    e.preventDefault()
    const name = form.elements.name.value
    const email = form.elements.email.value
    const text = form.elements.text.value

    console.log(`Name: ${name}`)
    console.log(`Email: ${email}`)
    console.log(`Message: ${text}`)
    form.reset()

})

    


