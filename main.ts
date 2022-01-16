input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Angry)
    basic.showIcon(IconNames.StickFigure)
    basic.showIcon(IconNames.StickFigure)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.Asleep)
})
basic.showIcon(IconNames.Angry)
basic.forever(function () {
	
})
