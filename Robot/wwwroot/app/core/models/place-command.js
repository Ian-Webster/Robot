"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("./command");
const command_type_1 = require("./command-type");
class PlaceCommand extends command_1.Command {
    constructor(location) {
        super(command_type_1.CommandType.Place);
        this.location = location;
    }
}
exports.PlaceCommand = PlaceCommand;
//# sourceMappingURL=place-command.js.map