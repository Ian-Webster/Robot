"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const robot_1 = require("../../core/models/robot");
const location_1 = require("../../core/models/location");
const direction_1 = require("../../core/models/direction");
const play_area_1 = require("../../core/models/play-area");
const chai_1 = require("chai");
require("mocha");
const mocha_1 = require("mocha");
mocha_1.describe("robot - turn", () => {
    let playArea = new play_area_1.PlayArea(1, 1);
    let robot = new robot_1.Robot(playArea);
    beforeEach(() => {
        robot.place(new location_1.Location(1, 1, direction_1.Direction.North));
    });
    it("should change current location direction one position clockwise when turning right", () => {
        //act/assert
        robot.turnRight();
        chai_1.expect(robot.currentLocation.direction).to.equal(direction_1.Direction.East);
        robot.turnRight();
        chai_1.expect(robot.currentLocation.direction).to.equal(direction_1.Direction.South);
        robot.turnRight();
        chai_1.expect(robot.currentLocation.direction).to.equal(direction_1.Direction.West);
        robot.turnRight();
        chai_1.expect(robot.currentLocation.direction).to.equal(direction_1.Direction.North);
    });
    it("should change current location direction one position anti-clockwise when turning left", () => {
        //act/assert
        robot.turnLeft();
        chai_1.expect(robot.currentLocation.direction).to.equal(direction_1.Direction.West);
        robot.turnLeft();
        chai_1.expect(robot.currentLocation.direction).to.equal(direction_1.Direction.South);
        robot.turnLeft();
        chai_1.expect(robot.currentLocation.direction).to.equal(direction_1.Direction.East);
        robot.turnLeft();
        chai_1.expect(robot.currentLocation.direction).to.equal(direction_1.Direction.North);
    });
});
//# sourceMappingURL=turn.spec.js.map