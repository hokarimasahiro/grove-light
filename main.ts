grove.onGesture(GroveGesture.Right, function () {
    basic.showArrow(ArrowNames.South)
})
grove.onGesture(GroveGesture.Left, function () {
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
grove.onGesture(GroveGesture.Up, function () {
    basic.showArrow(ArrowNames.East)
})
grove.onGesture(GroveGesture.Down, function () {
    basic.showArrow(ArrowNames.West)
})
grove.initGesture()
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        basic.showNumber(8)
    } else if (pins.digitalReadPin(DigitalPin.P12) == 0) {
        watchfont.showNumber2(12)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        watchfont.showNumber2(13)
    }
})
