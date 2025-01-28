"use strict";
const someNumber = 17;
const title = "Grace";
console.group('Assertions - užduotys');
{
    console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
    {
        const button = document.createElement('button');
        document.body.append(button);
        button.addEventListener('click', () => {
            console.log('paspausta!');
        });
    }
    console.groupEnd();
    console.group('2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas');
    {
        const divElement = document.createElement('div');
        document.body.append(divElement);
        const paragraph = document.createElement('p');
        divElement.append(paragraph);
        let count = 0;
        function createSquare() {
            const squareElement = document.createElement('span');
            squareElement.style.width = '25px';
            squareElement.style.height = '25px';
            squareElement.style.display = 'inline-block';
            squareElement.style.backgroundColor = 'red';
            divElement.append(squareElement);
            count++;
            paragraph.textContent = count.toString();
        }
        const squareButton = document.createElement('button');
        document.body.append(squareButton);
        squareButton.addEventListener('click', createSquare);
    }
    console.groupEnd();
    console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
    {
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=assertions.js.map