import { Injectable } from '@angular/core';
import { Command } from "../models/command";
import { PlaceCommand } from "../models/place-command";
import { CommandType } from "../models/command-type";
import { PlayArea } from "../models/play-area";
import { Robot } from "../models/robot";
import * as _ from "lodash";

@Injectable()
export class CommandService {

    public commands: Array<Command>;
    public reports: Array<string>;

    private robotPlaced: boolean;

    constructor(public playArea: PlayArea, public robot: Robot) {
        this.commands = new Array<Command>();
        this.reports = new Array<string>();
        this.robotPlaced = false;
    }

    test(): string {
        return `${this.playArea.xLength}`;
    }

    executeCommands(): boolean {
        if (_.isEmpty(this.commands)) {
            return false;
        }

        //if the robot hasn't been placed we need to make sure the first command is a place command
        if (!this.robotPlaced) {
            if (_.head(this.commands).commandType != CommandType.Place) {
                return false;
            }        

            let initialPlaceCommand = _.head(this.commands) as PlaceCommand;

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
        this.commands = new Array<Command>();

        return true;
    }

    private executeCommand(command: Command): void {
        switch (command.commandType) {
            case CommandType.Place:
                let placeCommand = command as PlaceCommand;
                this.robot.place(placeCommand.location);
                break;
            case CommandType.Left:
                this.robot.turnLeft();
                break;
            case CommandType.Right:
                this.robot.turnRight();
                break;
            case CommandType.Move:
                this.robot.move();
                break;
            case CommandType.Report:
                this.reports.push(this.robot.report());
                break;
        }
    }

}