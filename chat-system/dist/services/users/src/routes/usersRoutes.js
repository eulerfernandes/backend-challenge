"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsersController_1 = __importDefault(require("../controllers/UsersController"));
const router = (0, express_1.Router)();
router.get("/", UsersController_1.default.getAllUsers);
router.get("/:id", UsersController_1.default.getUserById);
router.post("/", UsersController_1.default.createUser);
router.put("/:id", UsersController_1.default.updateUser);
router.delete("/:id", UsersController_1.default.deleteUser);
exports.default = router;
