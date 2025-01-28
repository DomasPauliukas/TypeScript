console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    type Task1 = {
        name: string,
        price: number,
    }
    
    function sortDrinkByPrice (drinks: Task1[]) {
        const sortedDrinks = drinks.sort((a,b) => a.price - b.price)
    
        return sortedDrinks
    }
    
    const sortedDrinks = sortDrinkByPrice ([{name: "lemonade", price:50},{name: "lime", price:10}, {name: "orange", price: 185}, {name: "apple", price: 4}])
    
    console.log(sortedDrinks)
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{

}
console.groupEnd();

