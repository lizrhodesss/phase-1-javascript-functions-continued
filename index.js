function saturdayFun(activity = 'roller-skate') {
    console.log(`This Saturday, I want to ${activity}!`)
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
    const innerFunction = function (support = 'special'){
        return `You are ${flair}${support}${flair}!`
    }
     return innerFunction
}










// function outer(greeting, msg = "It's a fine day to learn") {
//     // 2
//     const innerFunction = function (name, lang = "Python") {
//       // 3
//       return `${greeting}, ${name}! ${msg} ${lang}`; // 4
//     };
//     return innerFunction("student", "JavaScript"); // 5
//   }
  
//   outer("Hello"); // 1
//   //=> "Hello, student! It's a fine day to learn JavaScript"