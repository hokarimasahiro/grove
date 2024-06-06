grove.onGesture(GroveGesture.Right, function () {
    basic.showArrow(ArrowNames.South)
    basic.pause(1000)
    basic.clearScreen()
})
grove.onGesture(GroveGesture.Left, function () {
    basic.showArrow(ArrowNames.North)
    basic.pause(1000)
    basic.clearScreen()
})
grove.onGesture(GroveGesture.Forward, function () {
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    basic.pause(100)
    basic.showIcon(IconNames.Diamond)
    basic.pause(100)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
grove.onGesture(GroveGesture.Anticlockwise, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # . # . #
        . # # . #
        # # # . .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
grove.onGesture(GroveGesture.Backward, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(100)
    basic.showIcon(IconNames.Diamond)
    basic.pause(100)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    _4digit.clear()
    basic.clearScreen()
})
grove.onGesture(GroveGesture.Clockwise, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # . # . #
        # . # # .
        . . # # #
        `)
    basic.pause(1000)
    basic.clearScreen()
})
grove.onGesture(GroveGesture.Up, function () {
    basic.showArrow(ArrowNames.East)
    basic.pause(1000)
    basic.clearScreen()
})
grove.onGesture(GroveGesture.Down, function () {
    basic.showArrow(ArrowNames.West)
    basic.pause(1000)
    basic.clearScreen()
})
let _4digit: grove.TM1637 = null
_4digit = grove.createDisplay(DigitalPin.P0, DigitalPin.P14)
grove.initGesture()
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
pins.setPull(DigitalPin.P9, PinPullMode.PullUp)
pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        _4digit.bit(8, 0)
        basic.showNumber(8)
    } else if (pins.digitalReadPin(DigitalPin.P9) == 0) {
        _4digit.bit(9, 1)
        basic.showNumber(9)
    } else if (pins.digitalReadPin(DigitalPin.P12) == 0) {
        _4digit.bit(2, 2)
        watchfont.showNumber2(12)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        _4digit.bit(3, 3)
        watchfont.showNumber2(13)
    } else {
    	
    }
})
