input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
grove.initGesture()
pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
pins.setPull(DigitalPin.P11, PinPullMode.PullUp)
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
    } else if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        basic.showString("A")
    } else if (pins.digitalReadPin(DigitalPin.P11) == 0) {
        basic.showString("B")
    }
})
