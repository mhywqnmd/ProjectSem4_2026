namespace RobotCar {
    // 小车前进
    export function forward(speed: number) {
        pins.analogWritePin(AnalogPin.P0, speed)
        pins.analogWritePin(AnalogPin.P1, speed)
    }
    // 小车后退
    export function back(speed: number) {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, 0)
    }
    // 小车左转
    export function left(speed: number) {
        pins.analogWritePin(AnalogPin.P0, speed)
        pins.analogWritePin(AnalogPin.P1, 0)
    }
    // 小车右转
    export function right(speed: number) {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, speed)
    }
}