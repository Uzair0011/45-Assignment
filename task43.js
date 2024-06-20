// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
function show_Magician(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
function make_great2(magicians) {
    const greatMegicians = [];
    for (let i = 0; i < magicians.length; i++) { //i stand for index string
        greatMegicians.push(magicians[i] + ' the Great');
    }
    return greatMegicians;
}
const magicians3 = ["nadir", "amjad", "shariq"];
const greatMegicians2 = make_great2(magicians3);
show_Magician(magicians3);
show_Magician(greatMegicians2);
export {};
