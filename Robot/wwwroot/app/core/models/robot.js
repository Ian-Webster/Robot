"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const direction_1 = require("./direction");
class Robot {
    constructor(playArea) {
        this.playArea = playArea;
    }
    place(location) {
        if (this.playArea.placeIsValid(location)) {
            this.currentLocation = location;
            return true;
        }
        return false;
    }
    move() {
        if (this.playArea.moveIsValid(this.currentLocation)) {
            switch (this.currentLocation.direction) {
                case direction_1.Direction.North:
                    this.currentLocation.x++;
                    break;
                case direction_1.Direction.East:
                    this.currentLocation.y++;
                    break;
                case direction_1.Direction.South:
                    this.currentLocation.x--;
                    break;
                case direction_1.Direction.West:
                    this.currentLocation.y--;
                    break;
            }
            return true;
        }
        return false;
    }
    turnLeft() {
        this.setDireciton(false);
    }
    turnRight() {
        this.setDireciton(true);
    }
    report() {
        return `X: ${this.currentLocation.x}, Y: ${this.currentLocation.y}, Direction: ${direction_1.Direction[this.currentLocation.direction]}`;
    }
    setDireciton(incrementClockWise) {
        if (incrementClockWise) {
            if (this.currentLocation.direction == direction_1.Direction.West) {
                this.currentLocation.direction = direction_1.Direction.North;
            }
            else {
                this.currentLocation.direction++;
            }
        }
        else {
            if (this.currentLocation.direction == direction_1.Direction.North) {
                this.currentLocation.direction = direction_1.Direction.West;
            }
            else {
                this.currentLocation.direction--;
            }
        }
    }
}
exports.Robot = Robot;
//# sourceMappingURL=robot.js.map