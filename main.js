let raceNumber = Math.floor(Math.random() * 1000);
let registerEarly = null;
let runnersAge = 16;

if (runnersAge >= 18 && registerEarly === true) {
    runnerNumber = raceNumber * 1000;
    console.log(`Your race time is at 9:30am and your race number is ${raceNumber * 1000}.`);
} else if (runnersAge >= 18 && registerEarly === null) {
    console.log(`Late adults run at 11am.  Your number is ${raceNumber * 1000}.`);
} else if (runnersAge >=0 && runnersAge <=17) {
    console.log(`Youth registrants run at 12:30 pm (regardless of registration) Your number is ${raceNumber * 1000}.`);
}
