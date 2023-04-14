const app = document.getElementById('app')
let templateHTML = '';
let ArrayCard = []
let Arrayanimal = []
const btn = document.getElementById('btn')
let listanimal = ['leon', 'buho', 'Perro', 'gato', 'elefante','leon', 'buho', 'Perro', 'gato', 'elefante', ]
let count=0;
console.log(ArrayCard.length)
listanimal.forEach(fruit=>(
    templateHTML+=`
    <div class="card">
        <div class="sides front"></div>
        <div class="sides back">${animal}</div>
    </div>
    `
))

app.innerHTML=templateHTML

app.addEventListener('click',(e)=>{
    let value = e.target.matches('.front')

    if(value && ArrayCard.length<=2){
      console.log(ArrayCard)
       if(count<=1){
          let ElementCard = e.target.parentElement
        let fruit = ElementCard.children[1].textContent
        
        ElementCard.classList.add('rotate')
        ArrayCard=[...ArrayCard,ElementCard]
        Arrayanimal=[...Arrayanimal,animal]

        VerificationsCards();
       }
    }
})

const VerificationsCards = ()=>{
    if(ArrayCard.length>1){
        if( Arrayanimal[0] ===  Arrayanimal[1]){
            ArrayCard=""
            Arrayanimal=""
        }else{
            setTimeout(() => {
                ArrayCard[0].classList.remove('rotate')
                ArrayCard[1].classList.remove('rotate')
                ArrayCard=""
                Arrayanimal=""
            }, 800);
        }
    }
}


const ramdon = () => {
    for (let index = app.children.length; index >= 0; index--) {
      app.appendChild(app.children[(Math.random() * index) | 0]);
    }
  };

const cards = document.querySelectorAll('.card')

  btn.addEventListener('click',()=>{
    ramdon();

    for(let index of cards){
        index.classList.remove('rotate')
    }
  })