let direction = 0
input.calibrateCompass()
basic.forever(function () {
    direction = input.compassHeading()
    if (direction < 45 || direction > 315) {
        basic.showString("N")
    } else if (direction < 135) {
        basic.showString("E")
    } else if (direction < 225) {
        basic.showString("S")
    } else {
        basic.showString("O")
    }
})
