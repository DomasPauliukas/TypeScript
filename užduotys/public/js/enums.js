"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 1] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
    WeekDays[WeekDays["Friday"] = 5] = "Friday";
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 7] = "Sunday";
})(WeekDays || (WeekDays = {}));
;
var Answer;
(function (Answer) {
    Answer[Answer["No"] = 0] = "No";
    Answer[Answer["Yes"] = 1] = "Yes";
})(Answer || (Answer = {}));
;
var WeekDayNamesLT;
(function (WeekDayNamesLT) {
    WeekDayNamesLT["Monday"] = "pirmadienis";
    WeekDayNamesLT["Tuesday"] = "antradienis";
    WeekDayNamesLT["Wednesday"] = "tre\u010Diadienis";
    WeekDayNamesLT["Thursday"] = "ketvirtadienis";
    WeekDayNamesLT["Friday"] = "penktadienis";
    WeekDayNamesLT["Saturday"] = "\u0161e\u0161tadienis";
    WeekDayNamesLT["Sunday"] = "sekmadienis";
})(WeekDayNamesLT || (WeekDayNamesLT = {}));
;
console.group('Literal types - užduotys');
{
    let LithuanianCity;
    (function (LithuanianCity) {
        LithuanianCity["Kaunas"] = "Kaunas";
        LithuanianCity["Vilnius"] = "Vilnius";
        LithuanianCity["Klaipeda"] = "Klaipeda";
        LithuanianCity["Siauliai"] = "Siauliai";
        LithuanianCity["Panevezys"] = "Panevezys";
    })(LithuanianCity || (LithuanianCity = {}));
    ;
    let LargestCountries;
    (function (LargestCountries) {
        LargestCountries[LargestCountries["China"] = 0] = "China";
        LargestCountries[LargestCountries["India"] = 1] = "India";
        LargestCountries[LargestCountries["UnitedStates"] = 2] = "UnitedStates";
        LargestCountries[LargestCountries["Indonesia"] = 3] = "Indonesia";
        LargestCountries[LargestCountries["Pakistan"] = 4] = "Pakistan";
    })(LargestCountries || (LargestCountries = {}));
    ;
    let LargestBvp;
    (function (LargestBvp) {
        LargestBvp[LargestBvp["Lithuania"] = 1] = "Lithuania";
        LargestBvp[LargestBvp["Latvia"] = 2] = "Latvia";
        LargestBvp[LargestBvp["Estonia"] = 3] = "Estonia";
        LargestBvp[LargestBvp["Finland"] = 4] = "Finland";
        LargestBvp[LargestBvp["Sweden"] = 5] = "Sweden";
        LargestBvp[LargestBvp["Norway"] = 6] = "Norway";
    })(LargestBvp || (LargestBvp = {}));
    console.group("1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.");
    {
        const city1 = LithuanianCity.Kaunas;
        const city2 = LithuanianCity.Klaipeda;
        const city6 = LithuanianCity.Vilnius;
        console.log({ city1, city2, city6 });
    }
    console.groupEnd();
    console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
    {
        const largestCountries = [LargestCountries.China, LargestCountries.Pakistan];
        console.log(largestCountries);
    }
    console.groupEnd();
    console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
    {
        const largestBvp = [LargestBvp.Lithuania, LargestBvp.Finland];
        console.log(largestBvp);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=enums.js.map