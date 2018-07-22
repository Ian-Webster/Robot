"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const play_area_1 = require("../../core/models/play-area");
const location_1 = require("../../core/models/location");
const direction_1 = require("../../core/models/direction");
const chai_1 = require("chai");
require("mocha");
const mocha_1 = require("mocha");
mocha_1.describe("play area - place is vaid", () => {
    let playArea = new play_area_1.PlayArea(1, 1);
    it("should return true when location is valid", () => {
        //arrange/act
        const result = playArea.placeIsValid(new location_1.Location(1, 1, direction_1.Direction.North));
        //asert
        chai_1.expect(result).to.be.true;
    });
    it("should return false with x location greater than x in play area", () => {
        //arrange/act
        const result = playArea.placeIsValid(new location_1.Location(2, 1, direction_1.Direction.North));
        //assert
        chai_1.expect(result).to.be.false;
    });
    it("should return false with x location less than x in play area", () => {
        //arrange/act
        const result = playArea.placeIsValid(new location_1.Location(-1, 1, direction_1.Direction.North));
        //assert
        chai_1.expect(result).to.be.false;
    });
    it("should return false with y location greater than y in play area", () => {
        //arrange/act
        const result = playArea.placeIsValid(new location_1.Location(1, 2, direction_1.Direction.North));
        //assert
        chai_1.expect(result).to.be.false;
    });
    it("should return false with y location less than y in play area", () => {
        //arrange/act
        const result = playArea.placeIsValid(new location_1.Location(1, -1, direction_1.Direction.North));
        //assert
        chai_1.expect(result).to.be.false;
    });
});
//# sourceMappingURL=place-is-valid.spec.js.map