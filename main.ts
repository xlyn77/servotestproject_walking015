function ServoForward2 () {
    robotbit.Servo(robotbit.Servos.S4, 45)
    robotbit.Servo(robotbit.Servos.S3, 135)
    robotbit.Servo(robotbit.Servos.S2, 135)
    robotbit.Servo(robotbit.Servos.S1, 45)
}
function ServoForward3 () {
    robotbit.Servo(robotbit.Servos.S4, 135)
    robotbit.Servo(robotbit.Servos.S3, 135)
    robotbit.Servo(robotbit.Servos.S2, 135)
    robotbit.Servo(robotbit.Servos.S1, 135)
}
input.onButtonPressed(Button.A, function () {
    ServoRest()
    for (let index = 0; index < 60; index++) {
        ServoForward4()
        basic.pause(500)
        ServoForward3()
        basic.pause(500)
        ServoForward2()
        basic.pause(500)
        ServoForward()
        basic.pause(500)
    }
})
function Backward_Walk2 () {
    robotbit.Servo(robotbit.Servos.S1, 90)
    robotbit.Servo(robotbit.Servos.S2, 45)
    robotbit.Servo(robotbit.Servos.S3, 45)
    robotbit.Servo(robotbit.Servos.S4, 90)
}
function Backward_Walk3 () {
    robotbit.Servo(robotbit.Servos.S1, 45)
    robotbit.Servo(robotbit.Servos.S2, 90)
    robotbit.Servo(robotbit.Servos.S3, 90)
    robotbit.Servo(robotbit.Servos.S4, 45)
}
function ServoForward () {
    robotbit.Servo(robotbit.Servos.S4, 45)
    robotbit.Servo(robotbit.Servos.S3, 90)
    robotbit.Servo(robotbit.Servos.S2, 90)
    robotbit.Servo(robotbit.Servos.S1, 45)
}
input.onButtonPressed(Button.B, function () {
    ServoRest()
    for (let index = 0; index < 60; index++) {
        basic.pause(500)
        Backward_Walk()
        basic.pause(500)
        Backward_Walk2()
        basic.pause(500)
        Backward_Walk3()
    }
})
function Backward_Walk () {
    robotbit.Servo(robotbit.Servos.S1, 135)
    robotbit.Servo(robotbit.Servos.S2, 90)
    robotbit.Servo(robotbit.Servos.S3, 90)
    robotbit.Servo(robotbit.Servos.S4, 135)
}
function ServoForward4 () {
    robotbit.Servo(robotbit.Servos.S4, 135)
    robotbit.Servo(robotbit.Servos.S3, 45)
}
function ServoRest () {
    robotbit.Servo(robotbit.Servos.S4, 90)
    robotbit.Servo(robotbit.Servos.S3, 90)
    robotbit.Servo(robotbit.Servos.S2, 90)
    robotbit.Servo(robotbit.Servos.S1, 90)
}
