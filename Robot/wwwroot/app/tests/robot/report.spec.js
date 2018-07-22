"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const robot_1 = require("../../core/models/robot");
const location_1 = require("../../core/models/location");
const direction_1 = require("../../core/models/direction");
const play_area_1 = require("../../core/models/play-area");
const chai_1 = require("chai");
require("mocha");
const mocha_1 = require("mocha");
mocha_1.describe("robot - report", () => {
    let playArea = new play_area_1.PlayArea(5, 8);
    let robot = new robot_1.Robot(playArea);
    it("should report correct location when robot first placed", () => {
        //arrange
        robot.place(new location_1.Location(0, 1, direction_1.Direction.East));
        //act
        let result = robot.report();
        //assert
        chai_1.expect(result).to.equal("X: 0, Y: 1, Direction: East");
    });
    it("should report correct location when robot moves", () => {
        //arrange
        robot.place(new location_1.Location(0, 1, direction_1.Direction.North));
        //act/assert
        robot.move();
        let result = robot.report();
        chai_1.expect(result).to.equal("X: 1, Y: 1, Direction: North");
        robot.move();
        result = robot.report();
        chai_1.expect(result).to.equal("X: 2, Y: 1, Direction: North");
    });
    it("should report correct location when robot turns right", () => {
        //arrange
        robot.place(new location_1.Location(0, 1, direction_1.Direction.North));
        //act/assert
        robot.turnRight();
        let result = robot.report();
        chai_1.expect(result).to.equal("X: 0, Y: 1, Direction: East");
        robot.turnRight();
        result = robot.report();
        chai_1.expect(result).to.equal("X: 0, Y: 1, Direction: South");
    });
    it("should report correct location when robot turns left", () => {
        //arrange
        robot.place(new location_1.Location(0, 1, direction_1.Direction.North));
        //act/assert
        robot.turnLeft();
        let result = robot.report();
        chai_1.expect(result).to.equal("X: 0, Y: 1, Direction: West");
        robot.turnLeft();
        result = robot.report();
        chai_1.expect(result).to.equal("X: 0, Y: 1, Direction: South");
    });
});
//# sourceMappingURL=report.spec.js.map