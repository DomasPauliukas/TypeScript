
const numbers: number[] = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];
const words: string[] = ["pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis", "sekmadienis"];

console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  function getLastElementsIndex (arr: string [] | number []) {
    console.log(arr.length - 1)
  }
  getLastElementsIndex(numbers)
  getLastElementsIndex(words)

}
console.groupEnd();

console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  function task2 (arr: any []) {
    for ( let i = 0 ; i < arr.length ; i++){
      console.log(i)
    }
  }

  task2(numbers)
  task2(words)
}
console.groupEnd();

console.group('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  function task3 (arr: any []) {
    for ( let i = 0 ; i < arr.length ; i++){
      console.log(arr[i])
    }
  }

  task3(numbers)
  task3(words)
}
console.groupEnd();

console.group('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  function task4 (arr: any []) {
    for ( let i = 0 ; i < arr.length ; i++){
      console.log(`${i} => ${arr[i]}`)
    }
  }

  task4(numbers)
  task4(words)
}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  function task5 (arr: any []) {
    for ( let i = arr.length -1 ; i >= 0 ; i--){
      console.log(arr[i])
    }
  }

  task5(numbers)
  task5(words)
}
console.groupEnd();

console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  function task6 (arr: any[]) {
    let indexString = ''
    for (let i = 0 ; i < arr.length ; i++){
      indexString += ` ${i}`
    }
    console.log(indexString)
  }

  task6(numbers)
  task6(words)
}
console.groupEnd();

console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
  function task7 (arr: any[]) {
    let indexString = ''
    for (let i = 0 ; i < arr.length ; i++){
      indexString += ` ${arr[i]}`
    }
    console.log(indexString)
  }

  task7(numbers)
  task7(words)
}
console.groupEnd();

console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17, [1]=>8, [2]=>88 ..
{
  function task8 (arr: string [] | number []) {
    let answer = ''
    for (let i = 0 ; i < arr.length ; i++){
      answer += `[${i}]=>${arr[i]}, `
    }
    console.log(answer)
  }
  task8(numbers)
  task8(words)
}
console.groupEnd();

console.group('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
  function task9 (arr: number[]) {
    let newArray = arr.map(element => element * 2)
    console.log(newArray)
  }
  task9(numbers)
}
console.groupEnd();

console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
  function task10 (arr: number[]) {
    let newArray = arr.map(element => element ** 2)
    console.log(newArray)
  }
  task10(numbers)
}
console.groupEnd();

console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
  function task11 (arr: number[]) {
    let newArray = arr.map((element, index) => element * index)
    console.log(newArray)
  }
  task11(numbers)
}
console.groupEnd();

console.group('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
  function task12 (arr: number[]) {

    let newArray: number[] = []
    arr.forEach((element) => {
      if (element > 0){
        newArray.push(element)
      }
    })
    console.log(newArray)
  }
  task12(numbers)
}
console.groupEnd();

console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
  function task13 (arr: number[]) {

    let newArray: number[] = []
    arr.forEach((element) => {
      if (element < 0){
        newArray.push(element)
      }
    })
    console.log(newArray)
  }
  task13(numbers)

}
console.groupEnd();

console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
  function task14 (arr: number[]) {

    let newArray: number[] = []
    arr.forEach((element) => {
      if (element % 2 === 0){
        newArray.push(element)
      }
    })
    console.log(newArray)
  }
  task14(numbers)
}
console.groupEnd();

console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
  function task15 (arr: number[]) {

    let newArray: number[] = []
    arr.forEach((element) => {
      if (element % 2 !== 0){
        newArray.push(element)
      }
    })
    console.log(newArray)
  }
  task15(numbers)
}
console.groupEnd();

console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
  function task16 (arr: number[]) {
    console.log(arr)

    let newArray: number[] = []
    arr.forEach((element) => {
      if (element < 0){
        newArray.push(-element)
      } else {
        newArray.push(element)
      }
    })
    console.log(newArray)
  }
  task16(numbers)
}
console.groupEnd();
