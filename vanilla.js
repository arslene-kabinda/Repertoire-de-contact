let nom = document.querySelector("#nom");
let prenom =document.querySelector("#prenom");
let groupe = document.querySelector("#groupe");
let bio = document.querySelector("#bio");
let fichier = document.querySelector("#file");
let image_preview=document.querySelector('#avatar')
let form2 = document.querySelector('.card')

let form2_body=document.querySelector('.form2_body')

let submitContact = document.querySelector("#contactForm input[type='submit']");
let btnréinit = document.querySelector("#btn_réinit")

let contact = {}
let button = {}
fichier.addEventListener('change',function(e){
    e.preventDefault()
    if (this.files[0]) {
        
        image_preview.src=URL.createObjectURL(this.files[0]);
        //imagePreview.onload=imgLoaded;
        console.log(URL.createObjectURL(this.files[0]))
    }
})


function addCard(item){
    let carBody = document.createElement('div')
    let imgCard = document.createElement('div')
    let image = document.createElement('img')
    let contactDiv = document.createElement('div')
    let firstPararagraph = document.createElement('p')
    let secondPararagraph = document.createElement('p')
    let thirdPararagraph = document.createElement('p')
    let buttonDiv = document.createElement('div')
    let closeButton = document.createElement('p')

    imgCard.classList.add('img-card')
    contactDiv.classList.add('contact-info')
    buttonDiv.classList.add('button-delete')
    carBody.classList.add('form2_body')

    form2.appendChild(carBody)
    carBody.appendChild(imgCard)
    carBody.appendChild(contactDiv)
    carBody.appendChild(buttonDiv)
    imgCard.appendChild(image)
    contactDiv.appendChild(firstPararagraph)
    contactDiv.appendChild(secondPararagraph)
    contactDiv.appendChild(thirdPararagraph)
    buttonDiv.appendChild(closeButton)
    image.src=image_preview.src;
    firstPararagraph.innerText = item.prenom + ' '+item.nom
    secondPararagraph.innerText = item.groupe
    thirdPararagraph.innerText = item.bio
    closeButton.innerText = 'X'
    closeButton.addEventListener('click',function(e){
        e.preventDefault();
        form2.removeChild(carBody)
    })
}

submitContact.addEventListener('click',function(e){
    e.preventDefault();
    contact ={
        'nom' : nom.value,
        'prenom' : prenom.value,
        'groupe' : groupe.value,
        'bio' : bio.value
    }
    console.log(contact)

    addCard(contact);


})



