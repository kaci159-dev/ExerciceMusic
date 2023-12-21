/****************Scales*******************/

const scalesCompletion = document.querySelector('.scalesCompletion')
const scalesKey = document.querySelector(".scalesKey")
const scalesModes = document.querySelector(".scalesModes")
const next = document.querySelector('.next')
const previous = document.querySelector('.previous')

var keyArr = ["A", "B", "Bb", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
var modesArr = ["1", "2", "3", "4", "5", "6", "7"]

const shuffledKeys = keyArr.sort((a, b) => 0.5 - Math.random());
const shuffledModes = modesArr.sort((a, b) => 0.5 - Math.random());

scalesKey.innerText = shuffledKeys[0]

scalesModes.innerText = shuffledModes.join(" ")

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

const inversionline = document.querySelector(".inversionline")
const inversionsCompletion = document.querySelector('.inversionsCompletion')
const inversionsnext = document.querySelector('.inversionsnext')

var inversionskeyArr = ["A", "B", "Bb", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
var inversionTonalityArr = ["m", ""]
var inversionsArr = ["1", "2", "3"]
var inversionsContainer = []
const inversionsKeys = inversionskeyArr.sort((a, b) => 0.5 - Math.random());
const inversionsPositionShuffled = inversionsArr.sort((a, b) => 0.5 - Math.random());

l = 0
function inversionRandom(l) {

    const shuffledInversionKey = inversionskeyArr.sort((a, b) => 0.5 - Math.random());
    const shuffledInversionTonality = inversionTonalityArr.sort((a, b) => 0.5 - Math.random());
    const shuffleInversions = inversionsArr.sort((a, b) => 0.5 - Math.random());

    const inversionliner = `${shuffledInversionKey[0]}${shuffledInversionTonality[0]} ${shuffleInversions[0]} `

    if (l < 72) {
        inversionsContainer.push(inversionliner)
        inversionline.innerText = inversionsContainer[l]
        inversionsCompletion.innerText = `${l + 1}/72`
    } else {
        inversionsCompletion.innerText = "DONE!"
        return
    }
}

inversionsnext.addEventListener("click", function () {
    inversionRandom(l)
    l++
})


/****************Exotic*******************/
const line = document.querySelector("#line")
const exoticCompletion = document.querySelector(".exoticCompletion")
const exoticNext = document.querySelector(".exoticNext")

var exoticKeyArr = ["A", "B", "C", "D", "E", "F", "G"]
var exoticAccidentalArr = ["", "#", "b"]
var exoticScaleArr = ["DHm", "DHM", "SP", "MM", "HM", "Hm"]
var exoticModesArr = ["1", "2", "3", "4", "5", "6", "7"]
var exoticContainer = []

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

            const playKey = document.querySelector('.key')
            const playExoticScale = document.querySelector('.exoticScale')
            const playMode = document.querySelector('.mode')
            const playAbsolute = document.querySelector('.absolute')
            const playRelative = document.querySelector('.relative')
            const playRandomButton = document.querySelector('.playRandomButton')

            var playExoticScaleArr = ["SP", "MM", "HM", "Hm"]
            var playAbsoluteArr = ["1", "2", "3", "4", "5", "6", "7"]
            var playRelativeArr = ["1", "3", "5", "6"]

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

const ProgressionsCompletion = document.querySelector('.ProgressionsCompletion')
const ProgressionsLine = document.querySelector(".ProgressionsLine")
const ProgressionsInterval = document.querySelector(".ProgressionsInterval")
const progressionnext = document.querySelector('.progressionnext')

var progressionsKeys = ["A", "B", "Bb", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
var modeBegin = ["1", "2", "3", "4", "5", "6", "7"]
var modeEnd = ["1", "2", "3", "4", "5", "6", "7"]
var intervalsArr = ["1", "2", "3", "4", "5", "6", "7"]

const progressionshuffledKeys = progressionsKeys.sort((a, b) => 0.5 - Math.random());
const modeBeginshuffled = modeBegin.sort((a, b) => 0.5 - Math.random());
const modeEndshuffled = modeEnd.sort((a, b) => 0.5 - Math.random());
const intervalsshuffled = intervalsArr.sort((a, b) => 0.5 - Math.random());

var intervalsSliced = intervalsshuffled.slice(0, 4)
ProgressionsInterval.innerText = intervalsSliced.join(" ")

v = 0
progressionnext.addEventListener("click", function () {

    if (v < modeBegin.length) {

        ProgressionsCompletion.innerText = `${v + 1}/7`
        ProgressionsLine.innerText = `${progressionshuffledKeys[v]}${modeBeginshuffled[v]} => ${modeEndshuffled[v]}`

        v++

    } else {
        v = 0
        ProgressionsCompletion.innerText = `${v + 1}/7`
        ProgressionsLine.innerText = `${progressionshuffledKeys[v]}${modeBeginshuffled[v]} => ${modeEndshuffled[v]}`
        v++
    }
})





