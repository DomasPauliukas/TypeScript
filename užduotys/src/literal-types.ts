/*
  literal-types(konkretūs tipai) - tai tipai sudaryti iš konkrečių reikšmių
*/

type Latvia = 'Latvia';
type Lithuania = 'Lithuania';
type Estonia = 'Estonia';
const country: Latvia = 'Latvia';

type BalticCountry = Latvia | Lithuania | Estonia;
const country2: BalticCountry = 'Estonia';

type HttpType = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

type HttpRequest = {
  url: string,
  headers?: {
    [key: string]: string,
  },
  body?: {
    [key: string]: string,
  }
  method: HttpType,
};

const req1 = {
  url: 'https://tavo-veidas.lt',
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'GET',
};

const req2 = {
  url: 'https://tavo-veidas.lt/api/',
  headers: {
    'Authorization': 'Bearer fhdguisdf8g76sdf89ghf5..?sfg',
    'Content-Type': 'application/json',
  },
  body: {
    image: 'https://i.pinimg.com/474x/67/0a/1d/670a1d06e7bff426ec343e8c06c93ca5--crazy-faces-strange-people.jpg',
  },
  method: 'POST',
};

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Literal types - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius apraškite čia ↓↓↓↓
  type Munchen = 'Miunchenas'
  type Wacken = 'Wackenas'
  type Duseldorf = 'Duseldorfas'
  type Bayern = 'Bayernas'
  type Hamburg = 'Hamburgas'

  type GermanCity = Munchen | Wacken | Duseldorf | Bayern | Hamburg


  type Doberman = 'Doberman';
  type ChowChow = 'ChowChow';
  type Dalmantin = 'Dalmantin';
  type Buldog = 'Buldog';
  type Mops = 'Mops';

  type Breed = Doberman | ChowChow | Dalmantin | Buldog | Mops;


  type Engine = 'Engine';
  type Trasmission = 'Trasmission';
  type Wheel = 'Wheel';
  type FuelTank = 'FuelTank';
  type FuelFilter = 'FuelFilter';

  type CarPart = Engine | Trasmission | Wheel | FuelTank | FuelFilter;
  // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius apraškite čia ↑↑↑↑

  console.group('1. Sukurkite konkrečius 5 dižiausių Vokietijos miestų tipus. Sukurkite tipą, kurio reikšmė būtų viena iš miestų.');
  {
    const city1: GermanCity = 'Miunchenas'
    const city2: GermanCity = 'Wackenas'

    console.log({city1, city2})
  }
  console.groupEnd();

  console.group('2. Sukurkite konkrečias 5 šunų veisles. Sukurkite tipą, kurio reikšmė būtų viena iš veislių.');
  {
    const dog1: Breed = 'Mops'
    const dog2: Breed = 'Buldog'

    console.log({dog1, dog2})
  }
  console.groupEnd();

  console.group('3. Sukurkite konkrečias 5 mašinos dalių tipus. Sukurkite tipą, kurio reikšmė būtų viena iš dalių.');
  {
    const carParts: CarPart []= ['Engine', 'Wheel', 'FuelTank']
    
    console.log(carParts)
  }
  console.groupEnd();

}
console.groupEnd();



