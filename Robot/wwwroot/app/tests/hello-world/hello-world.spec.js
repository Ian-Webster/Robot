"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_world_1 = require("../../core/models/hello-world");
const chai_1 = require("chai");
require("mocha");
describe("hello world test", () => {
    it("should return hello world!", () => {
        const result = hello_world_1.hello();
        chai_1.expect(result).to.equal("hello world");
    });
});
//# sourceMappingURL=hello-world.spec.js.map