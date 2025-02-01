"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatResponse = (data, message = "Success") => {
    return { message, data };
};
exports.default = formatResponse;
