"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const command_type_1 = require("../models/command-type");
const play_area_1 = require("../models/play-area");
const robot_1 = require("../models/robot");
const _ = require("lodash");
let CommandService = class CommandService {
    constructor(playArea, robot) {
        this.playArea = playArea;
        this.robot = robot;
        this.commands = new Array();
        this.reports = new Array();
        this.robotPlaced = false;
    }
    executeCommands() {
        if (_.isEmpty(this.commands)) {
            return false;
        }
        //if the robot hasn't been placed we need to make sure the first command is a place command
        if (!this.robotPlaced) {
            if (_.head(this.commands).commandType != command_type_1.CommandType.Place) {
                return false;
            }
            let initialPlaceCommand = _.head(this.commands);
            if (!this.robot.place(initialPlaceCommand.location)) {
                return false;
            }
            //remove the intial place command - don't want to execute it twice
            this.commands.shift();
            this.robotPlaced = true;
        }
        //get a reference to the service for use in the foreach
        let self = this;
        if (this.commands) {
            this.commands.forEach(function (command) {
                self.executeCommand(command);
            });
        }
        //clear the commands now they have been executed 
        this.commands = new Array();
        return true;
    }
    executeCommand(command) {
        switch (command.commandType) {
            case command_type_1.CommandType.Place:
                let placeCommand = command;
                this.robot.place(placeCommand.location);
                break;
            case command_type_1.CommandType.Left:
                this.robot.turnLeft();
                break;
            case command_type_1.CommandType.Right:
                this.robot.turnRight();
                break;
            case command_type_1.CommandType.Move:
                this.robot.move();
                break;
            case command_type_1.CommandType.Report:
                this.reports.push(this.robot.report());
                break;
        }
    }
};
CommandService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [play_area_1.PlayArea, robot_1.Robot])
], CommandService);
exports.CommandService = CommandService;
//# sourceMappingURL=command.service.js.map