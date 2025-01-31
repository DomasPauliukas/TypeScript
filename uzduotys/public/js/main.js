"use strict";
const numbers = [1, 2, 3, 4, 5, 6, 7];
const strings = ["pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis", "sekmadienis"];
const booleans = [true, true, true, true, false];
console.group('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
    function getFirstElement(arr) {
        return arr[0];
    }
    console.log({ Masyvas: numbers, 'Pirmas elementas': getFirstElement(numbers) });
}
console.groupEnd();
console.group('2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
    const getFirstElement = (arr) => {
        return arr[arr.length - 1];
    };
    console.log(getFirstElement(strings));
    console.log(getFirstElement(numbers));
    console.log(getFirstElement(booleans));
}
console.groupEnd();
console.group('3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją');
{
    const getCopiedArray = (arr) => {
        let copy = [...arr];
        return copy;
    };
    console.log(getCopiedArray(numbers));
    console.log(getCopiedArray(strings));
    console.log(getCopiedArray(booleans));
}
console.groupEnd();
console.group('4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru');
{
}
console.groupEnd();
console.group('5. Parašykite funkciją, kuri sujungia tokių pat tipų masyvus į vieną masyvą');
{
    const getArraysMerged = (arr1, arr2) => {
        return [...arr1, ...arr2];
    };
    const numberArr = [[1, 2, 3], [4, 5, 6]];
    const stringArr = [['labas', 'sveiki'], ['ate', 'iki']];
    console.log(getArraysMerged(...numberArr));
    console.log(getArraysMerged(...stringArr));
}
console.groupEnd();
console.group('6. Parašykite funkciją, kuri priimtų bet kokią reikšmę ir grąžintų objektą su savybėmis-funkcijomis "setValue" - reikšmei nustatyti ir "getValue" tai reikšmei nustatyti. Funkcijai perduota reikšmė neturi būti pasiekiama tiesiogiai.');
{
    function valueFunction(initialValue) {
        let value = initialValue;
        return {
            setValue: (newValue) => { value = newValue; },
            getValue: () => value,
        };
    }
    const value1 = 5;
    const value2 = ['hey', 'hello'];
    const value3 = { name: 'Domas', surname: 'Pauliukas' };
    const obj1 = valueFunction(value1);
    const obj2 = valueFunction(value2);
    const obj3 = valueFunction(value3);
    console.log(obj1.getValue());
    console.log(obj2.getValue());
    console.log(obj3.getValue());
    obj1.setValue(9);
    obj2.setValue(['Bye Bye']);
    obj3.setValue({ name: 'Petras', surname: 'Petraitis' });
    console.log(obj1.getValue());
    console.log(obj2.getValue());
    console.log(obj3.getValue());
}
console.groupEnd();
console.group(`
  7. Turite 2 tipus: Student ir Worker kurie pasižymi bendrais bruožais Person. 
  Parašykite 2 funkcijas <isStudent> ir <isWorker> skirtas atpažinti koks objektas buvo perduotas.
  Sukūrę tokias funkcijas iteruokite per žmonių masyvą, sugrupuodami elementus pagal tipą`);
{
    const people = [
        { name: 'Atstovė', surname: 'Galtokaitė', university: 'VU', course: 2 },
        { name: 'Kurpius', surname: 'Medainis' },
        { name: 'Varnas', surname: 'Akilaitis', avgMonthlyPay: 2000 },
        { name: 'Ferodijus', surname: 'Cilcius' },
        { name: 'Sobora', surname: 'Kupolaityė', avgMonthlyPay: 1000 },
        { name: 'Zubrius', surname: 'Sulindauskas', university: 'VU', course: 2 },
        { name: 'Šidelė', surname: 'Gyslovienė', avgMonthlyPay: 1500 },
        { name: 'Užuodauskas', surname: 'Perrašimauskas', university: 'VGTU', course: 1 },
    ];
    const isWorker = (person) => {
        return person.avgMonthlyPay !== undefined;
    };
    const isStudent = (person) => {
        return person.university !== undefined && person.course !== undefined;
    };
    const solution = (people) => {
        const groupedPeople = {
            people: [],
            students: [],
            workers: [],
        };
        people.forEach(person => {
            if (isWorker(person)) {
                groupedPeople.workers.push(person);
            }
            else if (isStudent(person)) {
                groupedPeople.students.push(person);
            }
            else {
                groupedPeople.people.push(person);
            }
        });
        return groupedPeople;
    };
    const workingPeople = people.filter(isWorker);
    const studentPeople = people.filter(isStudent);
    const groupedPeople = solution(people);
    console.log(workingPeople);
    console.log(studentPeople);
    console.log(people);
    console.log(groupedPeople);
}
//# sourceMappingURL=main.js.map