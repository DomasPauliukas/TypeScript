/*
  Assertion(Teigimas) - tai papildoma direktyva tiksliau aprašyti tipui, kuomet programuotojui žinoma daugiau 
  informacijos nei gali žinoti TypeScript transpiliatorius.

  Įmanoma 'teigti' tik tuos tipus, kurie priklauso potencialių tipų aibei
*/

type PossibleType = string | number;

const someNumber: PossibleType = 17 as number;
const title: PossibleType = "Grace" as string;

// Šiuo atveju 'teigiame' kad rastas elementas bus būtent form'os elementas.
// const formAddUser: HTMLFormElement = document.querySelector('#form-add-user') as HTMLFormElement;
// formAddUser.onsubmit = (e) => {
//   e.preventDefault();
//   console.log('Ateityje pridėsiu vartotoją');
// };

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Assertions - užduotys');
{
  // type EventHandler = (e: MouseEvent) => void


  console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
  {
    const button: HTMLButtonElement = document.createElement('button')
    document.body.append(button)

    button.addEventListener('click', () => {
      console.log('paspausta!')
    })
  }
  console.groupEnd();

  console.group('2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas');
  {
    const divElement: HTMLDivElement = document.createElement('div')
    document.body.append(divElement)
    
    const paragraph: HTMLParagraphElement = document.createElement('p')
    divElement.append(paragraph)
    
    let count = 0
    // const createSquare: EventHandler = () => {
    //   const squareElement: HTMLSpanElement = document.createElement('span')
    //   squareElement.style.width = '25px'
    //   squareElement.style.height = '25px'
    //   squareElement.style.display = 'inline-block'
    //   squareElement.style.backgroundColor = 'green'
    //   divElement.append(squareElement)
    // }

    function createSquare () {
      const squareElement: HTMLSpanElement = document.createElement('span')
      squareElement.style.width = '25px'
      squareElement.style.height = '25px'
      squareElement.style.display = 'inline-block'
      squareElement.style.backgroundColor = 'red'
      divElement.append(squareElement)

      count++
      paragraph.textContent = count.toString()
    }

    const squareButton: HTMLButtonElement = document.createElement('button')
    document.body.append(squareButton)

    squareButton.addEventListener('click', createSquare)

  }
  console.groupEnd();

  console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
  {

  }
  console.groupEnd();

}
console.groupEnd();