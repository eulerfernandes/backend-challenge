"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const up = async (queryInterface) => {
    await queryInterface.bulkInsert("users", [
        {
            id: "123e4567-e89b-12d3-a456-426614174000",
            name: "Admin User",
            email: "admin@example.com",
            password: "hashed_password", // Insira um hash de senha aqui
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: "223e4567-e89b-12d3-a456-426614174000",
            name: "Test User",
            email: "test@example.com",
            password: "hashed_password",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ]);
};
exports.up = up;
const down = async (queryInterface) => {
    await queryInterface.bulkDelete("users", {});
};
exports.down = down;
