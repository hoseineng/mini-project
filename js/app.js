let $ = document
const inputFieldElem =$.getElementById('input-field')
const colorsBoxElem =$.querySelectorAll('.color-box')
const btnSaveElem =$.querySelector('#btn-save')
const btnDeleteElem =$.querySelector('#btn-delete')
const notesCountainer = $.querySelector('#listed')

colorsBoxElem.forEach(function(colorbox){
colorbox.addEventListener('click' ,function(event){
    let mainColor = event.target.style.backgroundColor
inputFieldElem.style.backgroundColor=mainColor
})
})

function generateNewNote(){
    let newNoteElem =$.createElement('div')
newNoteElem.className = 'card shadow-sm rounded'
newNoteElem.style.backgroundColor = inputFieldElem.style.backgroundColor

let newNotetextElem = $.createElement('p')
newNotetextElem.className = 'card-text p-3'
newNotetextElem.innerHTML =inputFieldElem.value

newNoteElem.append(newNotetextElem)
notesCountainer.append(newNoteElem)

    inputFieldElem.value = ' '
    inputFieldElem.style.backgroundColor = '#fff'
 if(inputFieldElem.value){
            generateNewNote()
        }
    newNoteElem.addEventListener('click' , removeNoteElem)
}


function removeNoteElem(event){
    event.target.parentElement.remove()
}

btnDeleteElem.addEventListener('click' , function(){
    inputFieldElem.value = ' '
    inputFieldElem.style.backgroundColor = '#fff'
})

inputFieldElem.addEventListener('keydown' , function(event){
    if(event.key === 'Enter'){
        if(inputFieldElem.value){
            generateNewNote()
        }


    }
})

btnSaveElem.addEventListener('click' , generateNewNote)
