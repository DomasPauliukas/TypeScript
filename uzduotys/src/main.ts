type PrimitiveType = string | number | boolean;

/*
  Šių pratybų tikslas su išspręsti užduotis panaudojant bendrinius tipus. [1-6]
  Funkcijų parametrai turi būti bendrinio tipo/ų, pagal kurios būtų suformuojami atsakymai

  7 užduotis, skirta savarankiškai išmokti patikrinti tipus:
  https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
*/
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
const strings: string[] = ["pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis", "sekmadienis"];
const booleans: boolean[] = [true, true, true, true, false];


console.group('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  function getFirstElement <Type>(arr: Type[]): Type {
    return arr[0]
  }

  console.log({Masyvas: numbers, 'Pirmas elementas': getFirstElement(numbers)})

}
console.groupEnd();

console.group('2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  const getFirstElement = <Type>(arr: Type[]) => {
    return arr[arr.length - 1]
  }

  console.log(getFirstElement(strings))
  console.log(getFirstElement(numbers))
  console.log(getFirstElement(booleans))

}
console.groupEnd();

console.group('3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją');
{
  const getCopiedArray = <Type extends PrimitiveType>(arr: Type[]) => {
    let copy = [...arr]
    return copy
  }

  console.log(getCopiedArray(numbers))
  console.log(getCopiedArray(strings))
  console.log(getCopiedArray(booleans))


}
console.groupEnd();

console.group('4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru');
{
  // ('a', 2) -> ['a', 'a']
  // (77, 4) -> [77, 77, 77, 77]
  // (true, 1) -> [true]
  // Sprendimas ir rezultatų spausdinimas
}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri sujungia tokių pat tipų masyvus į vieną masyvą');
{
  type TwoArrays<Type> = [Type[], Type[]]

  const getArraysMerged = <Type>(arr1: Type[], arr2: Type[]) => {
    return [...arr1,...arr2]
  }

  const numberArr: TwoArrays <number> = [[1,2,3],[4,5,6]]
  const stringArr: TwoArrays <string> = [['labas', 'sveiki'],['ate', 'iki']]

  console.log(getArraysMerged(...numberArr))
  console.log(getArraysMerged(...stringArr))


}
console.groupEnd();

console.group('6. Parašykite funkciją, kuri priimtų bet kokią reikšmę ir grąžintų objektą su savybėmis-funkcijomis "setValue" - reikšmei nustatyti ir "getValue" tai reikšmei nustatyti. Funkcijai perduota reikšmė neturi būti pasiekiama tiesiogiai.');
{
  type ValueType<Type> = {
    setValue: (newValue: Type) => void,
    getValue: () => Type,
  }


  function valueFunction <Type>(initialValue: Type): ValueType<Type> {
    let value = initialValue

    return {
      setValue: (newValue) => {value = newValue},
      getValue: () => value,
    }
  }

const value1: number = 5
const value2: Array<string> = ['hey', 'hello']
const value3: {name: string, surname: string} = {name: 'Domas', surname: 'Pauliukas'}

const obj1 = valueFunction(value1)
const obj2 = valueFunction(value2)
const obj3 = valueFunction(value3)


console.log(obj1.getValue())
console.log(obj2.getValue())
console.log(obj3.getValue())

obj1.setValue(9)
obj2.setValue(['Bye Bye'])
obj3.setValue({name: 'Petras', surname: 'Petraitis'})

console.log(obj1.getValue())
console.log(obj2.getValue())
console.log(obj3.getValue())



}
console.groupEnd();

console.group(`
  7. Turite 2 tipus: Student ir Worker kurie pasižymi bendrais bruožais Person. 
  Parašykite 2 funkcijas <isStudent> ir <isWorker> skirtas atpažinti koks objektas buvo perduotas.
  Sukūrę tokias funkcijas iteruokite per žmonių masyvą, sugrupuodami elementus pagal tipą`
);
// Oficialus būdas patikrinti tipą
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
{
  type Person = {
    name: string,
    surname: string,
  };

  type Student = Person & {
    university: string,
    course: number,
  };

  type Worker = Person & {
    avgMonthlyPay: number,
  };

  type GroupedPeople = {
    people: Person[],
    students: Student[],
    workers: Worker[],
  }

  const people: (Person | Student | Worker)[] = [
    { name: 'Atstovė', surname: 'Galtokaitė', university: 'VU', course: 2 },
    { name: 'Kurpius', surname: 'Medainis' },
    { name: 'Varnas', surname: 'Akilaitis', avgMonthlyPay: 2000 },
    { name: 'Ferodijus', surname: 'Cilcius' },
    { name: 'Sobora', surname: 'Kupolaityė', avgMonthlyPay: 1000 },
    { name: 'Zubrius', surname: 'Sulindauskas', university: 'VU', course: 2 },
    { name: 'Šidelė', surname: 'Gyslovienė', avgMonthlyPay: 1500 },
    { name: 'Užuodauskas', surname: 'Perrašimauskas', university: 'VGTU', course: 1 },
  ];

  const isStudent = (people) => {
    
  }


}
