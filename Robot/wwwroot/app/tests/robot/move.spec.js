"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const robot_1 = require("../../core/models/robot");
const location_1 = require("../../core/models/location");
const direction_1 = require("../../core/models/direction");
const play_area_1 = require("../../core/models/play-area");
const chai_1 = require("chai");
require("mocha");
const mocha_1 = require("mocha");
mocha_1.describe("robot - move", () => {
    let playArea = new play_area_1.PlayArea(1, 1);
    let robot = new robot_1.Robot(playArea);
    it("should return true when move is valid", () => {
        //arrange
        robot.place(new location_1.Location(0, 0, direction_1.Direction.North));
        //act
        let result = robot.move();
        //assert
        chai_1.expect(result).to.be.true;
    });
    it("should return false when move is invalid", () => {
        //arrange
        robot.place(new location_1.Location(1, 1, direction_1.Direction.North));
        //act
        let result = robot.move();
        //assert
        chai_1.expect(result).to.be.false;
    });
    it("should update current location when move is valid", () => {
        //arrange
        robot.place(new location_1.Location(0, 0, direction_1.Direction.North));
        //act
        robot.move();
        //assert
        chai_1.expect(robot.currentLocation.x).to.equal(1);
        chai_1.expect(robot.currentLocation.y).to.equal(0);
        chai_1.expect(robot.currentLocation.direction).to.equal(direction_1.Direction.North);
    });
    it("should not update current location when move is invalid", () => {
        //arrange
        robot.place(new location_1.Location(1, 0, direction_1.Direction.North));
        //act
        robot.move();
        //assert
        chai_1.expect(robot.currentLocation.x).to.equal(1);
        chai_1.expect(robot.currentLocation.y).to.equal(0);
        chai_1.expect(robot.currentLocation.direction).to.equal(direction_1.Direction.North);
    });
});
//# sourceMappingURL=move.spec.js.map