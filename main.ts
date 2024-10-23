/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Arsen Koshparenko
 * Created on: Oct 2024
 * This program turn servo to 0 and 180 degree
*/

//variables
const servoNumber1 = robotbit.Servos.S1

//setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

//button A is pressed
input.onButtonPressed(Button.A, function() {
    robotbit.Servo(servoNumber1, 0)
    basic.clearScreen()
    basic.showString("0")
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

//button B is pressed
input.onButtonPressed(Button.B, function () {
    robotbit.Servo(servoNumber1, 180)
    basic.clearScreen()
    basic.showString("180")
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
