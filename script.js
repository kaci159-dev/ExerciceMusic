/****************Scales*******************/

var keyArr = ["A", "B", "Bb", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
var modesArr = ["1", "2", "3", "4", "5", "6", "7"]

const shuffledKeys = keyArr.sort((a, b) => 0.5 - Math.random());
const shuffledModes = modesArr.sort((a, b) => 0.5 - Math.random());

const scalesCompletion = document.querySelector('.scalesCompletion')

const scalesKey = document.querySelector(".scalesKey")
scalesKey.innerText = shuffledKeys[0]

const scalesModes = document.querySelector(".scalesModes")
scalesModes.innerText = shuffledModes.join(" ")

const next = document.querySelector('.next')
const previous = document.querySelector('.previous')

i = 1
next.addEventListener("click", function () {

    if (i < shuffledKeys.length) {

        scalesKey.innerText = shuffledKeys[i]
        scalesCompletion.innerText = `${i + 1}/12`
        i++

    } else {
        i = 0
        scalesKey.innerText = shuffledKeys[i]
        scalesCompletion.innerText = `${i + 1}/12`
        i++
    }
})

previous.addEventListener("click", function () {

    scalesKey.innerText = shuffledKeys[i - 2]
    i--
    scalesCompletion.innerText = `${i}/12`

    if (i <= 0) {
        i = 12
        scalesKey.innerText = shuffledKeys[i - 1]
        scalesCompletion.innerText = `${i}/12`
    }

})

/****************Inversions*******************/

var inversionskeyArr = ["A", "B", "Bb", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
var inversionsArr = ["1", "2", "3"]

const inversionsKeys = inversionskeyArr.sort((a, b) => 0.5 - Math.random());
const inversionsPositionShuffled = inversionsArr.sort((a, b) => 0.5 - Math.random());

const inversionsCompletion = document.querySelector('.inversionsCompletion')

const inversionKey = document.querySelector(".inversionsKey")
scalesKey.innerText = shuffledKeys[0]

const inversionsPosition = document.querySelector(".inversionsPosition")
inversionsPosition.innerText = inversionsPositionShuffled.join(" ")

const inversionsnext = document.querySelector('.inversionsnext')


l = 0
inversionsnext.addEventListener("click", function () {

    if (l < inversionsKeys.length) {

        inversionKey.innerText = inversionsKeys[l]
        inversionsCompletion.innerText = `${l + 1}/12`
        l++

    } else {
        l = 0
        inversionKey.innerText = inversionsKeys[l]
        inversionsCompletion.innerText = `${l + 1}/12`
        l++
    }
})


/****************Exotic*******************/

var exoticKeyArr = ["A", "B", "C", "D", "E", "F", "G"]
var exoticAccidentalArr = ["", "#", "b"]
var exoticScaleArr = ["DHm", "DHM", "SP", "MM", "HM", "Hm"]
var exoticModesArr = ["1", "2", "3", "4", "5", "6", "7"]
var exoticContainer = []

const line = document.querySelector("#line")
const exoticNext = document.querySelector(".exoticNext")
const exoticPrevious = document.querySelector(".exoticPrevious")

const exoticCompletion = document.querySelector(".exoticCompletion")

j = 0
function exoticRandom(j) {

    const shuffledexoticKey = exoticKeyArr.sort((a, b) => 0.5 - Math.random());
    const shuffledexoticAccidental = exoticAccidentalArr.sort((a, b) => 0.5 - Math.random());
    const shuffledexoticScale = exoticScaleArr.sort((a, b) => 0.5 - Math.random());
    const shuffledexoticModes = exoticModesArr.sort((a, b) => 0.5 - Math.random());

    const liners = `${shuffledexoticKey[0]}${shuffledexoticAccidental[0]} / ${shuffledexoticScale[0]} / ${shuffledexoticModes[0]} `

    if (j < 14) {
        exoticContainer.push(liners)
        line.innerText = exoticContainer[j]
        exoticCompletion.innerText = `${j + 1}/14`
    } else {
        exoticCompletion.innerText = "DONE!"
        return
    }
}

exoticNext.addEventListener("click", function () {
    exoticRandom(j)
    j++
})


/**********************Play********************/

function loadCombination() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'combinations.json', true);
    xhr.onload = function () {
        if (this.status === 200) {
            const combination = JSON.parse(this.responseText);

            var playExoticScaleArr = ["SP", "MM", "HM", "Hm"]
            var playAbsoluteArr = ["1", "2", "3", "4", "5", "6", "7"]
            var playRelativeArr = ["1", "3", "5", "6"]


            const playKey = document.querySelector('.key')
            const playExoticScale = document.querySelector('.exoticScale')
            const playMode = document.querySelector('.mode')
            const playAbsolute = document.querySelector('.absolute')
            const playRelative = document.querySelector('.relative')
            const playRandomButton = document.querySelector('.playRandomButton')


            function playRandom() {

                const shuffledplayExoticScale = playExoticScaleArr.sort((a, b) => 0.5 - Math.random());
                const shuffledeplayAbsoluteArr = playAbsoluteArr.sort((a, b) => 0.5 - Math.random());
                var relativeRandomArr = []
                var combinationArr = []

                playExoticScale.innerText = shuffledplayExoticScale[0]
                playAbsolute.innerText = shuffledeplayAbsoluteArr.join(" ")

                var randI = Math.floor(Math.random() * 3);
                for (z = 1; z <= 4; z++) {
                    var randJ = Math.floor(Math.random() * 7);
                    combinationArr.push(combination[randI][z][randJ])
                    playKey.innerText = combinationArr.join("-")
                }

                for (k = 0; k < 7; k++) {
                    var rand = Math.floor(Math.random() * 4);
                    relativeRandomArr.push(playRelativeArr[rand])
                    playRelative.innerText = relativeRandomArr.join(" ")
                }
            }

            playRandomButton.addEventListener("click", function () {
                playRandom()
            })
        }
    }
    xhr.send();
}
loadCombination()




/****************Progressions*******************/

// var progressionArr = ["A", "B", "Bb", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
// var intervalArr = ["1", "2", "3", "4", "5", "6", "7"]

// const progressionshuffledKeys = progressionArr.sort((a, b) => 0.5 - Math.random());
// const progressionshuffledIntervals = intervalArr.sort((a, b) => 0.5 - Math.random());

// const ProgressionsCompletion = document.querySelector('.ProgressionsCompletion')

// const ProgressionsKey = document.querySelector(".ProgressionsKey")
// ProgressionsKey.innerText = progressionshuffledKeys[0]

// const ProgressionsInterval = document.querySelector(".ProgressionsInterval")
// ProgressionsInterval.innerText = progressionshuffledIntervals.join(" ")

// const progressionnext = document.querySelector('.progressionnext')

// v = 1
// progressionnext.addEventListener("click", function () {

//     if (v < progressionshuffledKeys.length) {

//         ProgressionsKey.innerText = `${progressionshuffledKeys[v]} ${progressionshuffledIntervals[0]}`
//         ProgressionsCompletion.innerText = `${v + 1}/12`
//         v++

//     } else {
//         v = 0
//         ProgressionsKey.innerText = progressionshuffledKeys[v]
//         ProgressionsCompletion.innerText = `${v + 1}/12`
//         v++
//     }
// })





