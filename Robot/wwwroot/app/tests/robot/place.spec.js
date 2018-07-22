"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const robot_1 = require("../../core/models/robot");
const location_1 = require("../../core/models/location");
const direction_1 = require("../../core/models/direction");
const play_area_1 = require("../../core/models/play-area");
const chai_1 = require("chai");
require("mocha");
const mocha_1 = require("mocha");
mocha_1.describe("robot - place", () => {
    let playArea = new play_area_1.PlayArea(1, 1);
    let robot = new robot_1.Robot(playArea);
    it("should return true when location is valid", () => {
        //arrange/act
        var result = robot.place(new location_1.Location(1, 1, direction_1.Direction.North));
        //assert
        chai_1.expect(result).to.be.true;
    });
    it("should return false when place invalid", () => {
        //arrange/act
        let result = robot.place(new location_1.Location(-1, -1, direction_1.Direction.North));
        //assert
        chai_1.expect(result).to.be.false;
    });
    it("should set current location", () => {
        //arrange
        playArea = new play_area_1.PlayArea(5, 5);
        robot = new robot_1.Robot(playArea);
        //act
        robot.place(new location_1.Location(2, 3, direction_1.Direction.West));
        //assert
        chai_1.expect(robot.currentLocation.x).to.equal(2);
        chai_1.expect(robot.currentLocation.y).to.equal(3);
        chai_1.expect(robot.currentLocation.direction).to.equal(direction_1.Direction.West);
    });
});
//# sourceMappingURL=place.spec.js.map