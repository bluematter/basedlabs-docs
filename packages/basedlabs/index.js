"use strict";
// index.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const API_ENDPOINT = 'https://www.basedlabs.ai/api/v1';
class BasedLabs {
    constructor(config) {
        this.apiKey = config.apiKey;
    }
    createImage(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${API_ENDPOINT}/create/image`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + this.apiKey,
                },
                body: JSON.stringify(options),
            });
            return yield response.json();
        });
    }
    getImage(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${API_ENDPOINT}/read/image/${options.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + this.apiKey,
                },
                body: JSON.stringify(options),
            });
            return yield response.json();
        });
    }
}
exports.default = BasedLabs;
