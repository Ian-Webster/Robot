"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const direction_1 = require("./direction");
const location_1 = require("./location");
class PlayArea {
    constructor(xLength, yLength) {
        this.xLength = xLength;
        this.yLength = yLength;
    }
    placeIsValid(location) {
        if (location.x < 0 || location.x > this.xLength || location.y < 0 || location.y > this.yLength) {
            return false;
        }
        return true;
    }
    moveIsValid(currentLocation) {
        var newLocation = new location_1.Location(currentLocation.x, currentLocation.y, currentLocation.direction);
        switch (currentLocation.direction) {
            case direction_1.Direction.North:
                newLocation.x++;
                break;
            case direction_1.Direction.East:
                newLocation.y++;
                break;
            case direction_1.Direction.South:
                newLocation.x--;
                break;
            case direction_1.Direction.West:
                newLocation.y--;
                break;
        }
        if (newLocation.x < 0 || newLocation.x > this.xLength || newLocation.y < 0 || newLocation.y > this.yLength) {
            return false;
        }
        return true;
    }
}
exports.PlayArea = PlayArea;
//# sourceMappingURL=play-area.js.map