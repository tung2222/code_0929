let score = 0
input.onGesture(Gesture.Shake, function () {
    score = randint(80, 100)
    basic.showNumber(score)
    if (score >= 90 && score <= 100) {
        basic.showString("A+")
    } else if (score >= 85 && score <= 89) {
        basic.showString("A")
    } else if (score >= 80 && score <= 84) {
        basic.showString("A-")
    }
})
basic.forever(function () {
	
})
