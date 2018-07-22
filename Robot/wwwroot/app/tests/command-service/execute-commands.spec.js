"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_service_1 = require("../../core/services/command.service");
const play_area_1 = require("../../core/models/play-area");
const robot_1 = require("../../core/models/robot");
const location_1 = require("../../core/models/location");
const direction_1 = require("../../core/models/direction");
const place_command_1 = require("../../core/models/place-command");
const chai_1 = require("chai");
require("mocha");
const mocha_1 = require("mocha");
mocha_1.describe("command service - execute commands", () => {
    let playArea = new play_area_1.PlayArea(5, 5);
    let robot = new robot_1.Robot(playArea);
    let commandService = new command_service_1.CommandService(playArea, robot);
    mocha_1.beforeEach(() => {
        commandService = new command_service_1.CommandService(playArea, robot);
        commandService.commands = new Array();
        commandService.commands.push(new place_command_1.PlaceCommand(new location_1.Location(1, 1, direction_1.Direction.North)));
    });
    it("should return false if there aren't any commands", () => {
        //arrange
        commandService.commands = null;
        //act/assert
        let result = commandService.executeCommands();
        chai_1.expect(result).to.equal(false);
        commandService.commands = new Array();
        result = commandService.executeCommands();
        chai_1.expect(result).to.be.false;
    });
    //it("should return false if the first command isn't place", () => {
    //    //arrange
    //    commandService.commands = new Array<Command>();
    //    commandService.commands.push(new Command(CommandType.Report));
    //    commandService.commands.push(new Command(CommandType.Place));
    //    //act
    //    let result = commandService.executeCommands();
    //    //assert
    //    expect(result).to.be.false;
    //});
    //it("should return false if the first command isn't a valid place", () => {
    //    //arrange
    //    commandService.commands = new Array<Command>();
    //    commandService.commands.push(new PlaceCommand(new Location(8, 8, Direction.North)));
    //    //act
    //    let result = commandService.executeCommands();
    //    //assert
    //    expect(result).to.be.false;
    //});
    //it("should ignore all commands if the first command isn't a valid place", () => {
    //    //arrange
    //    commandService.commands = new Array<Command>();
    //    commandService.commands.push(new PlaceCommand(new Location(8, 8, Direction.North)));
    //    commandService.commands.push(new Command(CommandType.Left));
    //    commandService.commands.push(new Command(CommandType.Move));
    //    //act
    //    commandService.executeCommands();
    //    //assert
    //    expect(commandService.robot.currentLocation).to.;
    //});
    //it("should execute place commands", () => {
    //    //arrange/act assert
    //    commandService.executeCommands();
    //    expect(commandService.robot.currentLocation.x).to.equal(1);
    //    expect(commandService.robot.currentLocation.y).to.equal(1);
    //    expect(commandService.robot.currentLocation.direction).to.equal(Direction.North);
    //    commandService.commands.push(new PlaceCommand(new Location(2, 2, Direction.West)));
    //    commandService.executeCommands();
    //    expect(commandService.robot.currentLocation.x).to.equal(2);
    //    expect(commandService.robot.currentLocation.y).to.equal(2);
    //    expect(commandService.robot.currentLocation.direction).to.equal(Direction.West);
    //    commandService.commands.push(new PlaceCommand(new Location(1, 1, Direction.North)));
    //    commandService.commands.push(new PlaceCommand(new Location(3, 2, Direction.South)));
    //    commandService.executeCommands();
    //    expect(commandService.robot.currentLocation.x).to.equal(3);
    //    expect(commandService.robot.currentLocation.y).to.equal(2);
    //    expect(commandService.robot.currentLocation.direction).to.equal(Direction.South);
    //});
    //it("should execute move commands", () => {
    //    //arrange/act/assert
    //    commandService.commands.push(new Command(CommandType.Move));
    //    commandService.executeCommands();
    //    expect(robot.currentLocation.x).to.equal(2);
    //    expect(robot.currentLocation.y).to.equal(1);
    //    expect(robot.currentLocation.direction).to.equal(Direction.North);
    //    commandService.commands.push(new Command(CommandType.Move));
    //    expect(commandService.commands.length).to.equal(1);
    //    commandService.executeCommands();
    //    expect(robot.currentLocation.x).to.equal(3);
    //    expect(robot.currentLocation.y).to.equal(1);
    //    expect(robot.currentLocation.direction).to.equal(Direction.North);
    //    commandService.commands = new Array<Command>();
    //    commandService.commands.push(new PlaceCommand(new Location(1, 1, Direction.North)));
    //    commandService.commands.push(new Command(CommandType.Move));
    //    commandService.commands.push(new Command(CommandType.Move));
    //    commandService.executeCommands();
    //    expect(robot.currentLocation.x).to.equal(3);
    //    expect(robot.currentLocation.y).to.equal(1);
    //    expect(robot.currentLocation.direction).to.equal(Direction.North);
    //});
    //it("should execute left commands", () => {
    //    //arrange/act/assert
    //    commandService.commands.push(new Command(CommandType.Left));
    //    commandService.executeCommands();
    //    expect(robot.currentLocation.x).to.equal(1);
    //    expect(robot.currentLocation.y).to.equal(1);
    //    expect(robot.currentLocation.direction).to.equal(Direction.West);
    //    commandService.commands.push(new Command(CommandType.Left));
    //    commandService.executeCommands();
    //    expect(robot.currentLocation.x).to.equal(1);
    //    expect(robot.currentLocation.y).to.equal(1);
    //    expect(robot.currentLocation.direction).to.equal(Direction.South);
    //    commandService.commands = new Array<Command>();
    //    commandService.commands.push(new PlaceCommand(new Location(1, 1, Direction.North)));
    //    commandService.commands.push(new Command(CommandType.Left));
    //    commandService.commands.push(new Command(CommandType.Left));
    //    commandService.executeCommands();
    //    expect(robot.currentLocation.x).to.equal(1);
    //    expect(robot.currentLocation.y).to.equal(1);
    //    expect(robot.currentLocation.direction).to.equal(Direction.South);
    //});
    //it("should execute left commands", () => {
    //    //arrange/act/assert
    //    commandService.commands.push(new Command(CommandType.Right));
    //    commandService.executeCommands();
    //    expect(robot.currentLocation.x).to.equal(1);
    //    expect(robot.currentLocation.y).to.equal(1);
    //    expect(robot.currentLocation.direction).to.equal(Direction.East);
    //    commandService.commands.push(new Command(CommandType.Right));
    //    commandService.executeCommands();
    //    expect(robot.currentLocation.x).to.equal(1);
    //    expect(robot.currentLocation.y).to.equal(1);
    //    expect(robot.currentLocation.direction).to.equal(Direction.South);
    //    commandService.commands = new Array<Command>();
    //    commandService.commands.push(new PlaceCommand(new Location(1, 1, Direction.South)));
    //    commandService.commands.push(new Command(CommandType.Right));
    //    commandService.commands.push(new Command(CommandType.Right));
    //    commandService.executeCommands();
    //    expect(robot.currentLocation.x).to.equal(1);
    //    expect(robot.currentLocation.y).to.equal(1);
    //    expect(robot.currentLocation.direction).to.equal(Direction.North);
    //});
    //it("should execute report commands", () => {
    //    //arrange/act/asert
    //    commandService.commands.push(new Command(CommandType.Report));
    //    commandService.executeCommands();
    //    expect(commandService.reports.length).to.equal(1);
    //    expect(commandService.reports[0]).to.equal("X: 1, Y: 1, Direction: North");
    //    commandService.commands.push(new Command(CommandType.Move));
    //    commandService.commands.push(new Command(CommandType.Left));
    //    commandService.commands.push(new Command(CommandType.Move));
    //    commandService.commands.push(new Command(CommandType.Report));
    //    commandService.executeCommands();
    //    expect(commandService.reports.length).to.equal(2);
    //    expect(commandService.reports[1]).to.equal("X: 2, Y: 0, Direction: West");
    //});
    //it("should return true with single valid place command", () => {
    //    //arrange/act
    //    let result = commandService.executeCommands();
    //    //assert
    //    expect(result).to.be.true;
    //});
    //it("should return true with multiple comamnds when starting with a valid place command", () => {
    //    //arrange/act
    //    commandService.commands.push(new Command(CommandType.Left));
    //    commandService.commands.push(new Command(CommandType.Report));
    //    commandService.commands.push(new Command(CommandType.Right));
    //    commandService.commands.push(new Command(CommandType.Move));
    //    let result = commandService.executeCommands();
    //    //assert
    //    expect(result).to.be.true;
    //});
});
//# sourceMappingURL=execute-commands.spec.js.map