**Robot Toy Simulator**
Written in TypeScript and Angular, using Mocha and Chai for unit testing.
Rules of the game can be found in [rules.md](https://github.com/Ian-Webster/Robot/blob/master/rules.md) file in the root of the solution.
The solution was written in Visual Studio 2017 and uses WebPack for module building.

**Installation**
Software required;
- [Node.js](https://nodejs.org/en/download/)
- MS Visual Studio 2017 (VS code will most likely also be sufficient but I haven't any instructions for this).
- Plugs ins for Visual Studio
	- [Package Installer](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.PackageInstaller)
	- [NPM Task Runner](https://github.com/madskristensen/NpmTaskRunner)
	- [WebPack Task Runner](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.WebPackTaskRunner)

Once you have the above installed you should be able to run the solution.
There are several WebPack build options available in the Task Runner Explorer window
 - Packages.json;
	 - test_console - runs the unit tests and outputs the result to the Task Runner Explorer console
	 - test_Mochawesome - as above but also outputs a nicely formatted html file to "< solution root folder >\mochawesome-report\mochawesome.html"
 - Webpack.config.js
	 - Run - Development - runs the solution in dev mode
	 - Run - Production - runs the solution in production mode

To run the solution you'll need to "Run - Development" in the Task Runner Explorer, then do a build of the solution (F5), this should option the home page on http://localhost:63996/

Once you have the solution running there are three main parts;

 1. Commands (found top left) - the commands section holds a set of buttons that allow you to control the robot
 2. Command List (found top right) - a list of current commands that will be issued to the robot when you click the "Execute" button
 3. Report List (bottom) - list of reports from the robot (you can request a report on the robots current location and heading by issuing a "report" command).

You can issue commands in any order you want but at least one of your commands must be a valid place command (try x = 0, Y = 0, direction = North), all commands before the first valid place command will be ignored.
Project structure;
 - /src/app/components - angular components for the solution
 - /src/app/core - hold TypeScript models and services for the solution
 - /src/app/css - currently unused
 - /src/app/images - currently unused
 - /src/app/tests - holds unit tests for the solution
