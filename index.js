
let tic = async () => {
    let ticket = new Promise((resolve, reject) => {
        setTimeout(() => resolve("ticket"),3000);
    });

    let getPopcorn = new Promise((resolve, reject) => resolve("Popcorn"));
    let getButter = new Promise((resolve, reject) => resolve("Butter"));
    let getColdDrinks = new Promise((resolve, reject) => resolve("Cold Drink"));

    let [Popcorn,Butter,ColdDrink] = await Promise.all([getPopcorn,getButter,getColdDrinks]);
    console.log(`${Popcorn}, ${Butter}, ${ColdDrink}`);
    return ticket;
}
console.log(tic());