"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var nodefetch = require('node-fetch');
function getIp(link, callback) {
    return __awaiter(this, void 0, void 0, function () {
        var request, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, nodefetch(link)];
                case 1:
                    request = _a.sent();
                    return [4 /*yield*/, request.json()];
                case 2:
                    response = _a.sent();
                    callback(returnIp(response));
                    return [2 /*return*/, response];
            }
        });
    });
}
function returnIp(data) {
    return data.ip;
}
getIp('https://api.ipify.org/?format=json', (function (ip) {
    console.log("Result: ".concat(ip));
}));
function getRandNameAsyncAwait(link) {
    return __awaiter(this, void 0, void 0, function () {
        var request, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, nodefetch(link)];
                case 1:
                    request = _a.sent();
                    return [4 /*yield*/, request.json()];
                case 2:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
var arrOfUsers = [];
arrOfUsers[0] = getRandNameAsyncAwait('https://random-data-api.com/api/name/random_name');
arrOfUsers[1] = getRandNameAsyncAwait('https://random-data-api.com/api/name/random_name');
arrOfUsers[2] = getRandNameAsyncAwait('https://random-data-api.com/api/name/random_name');
//Async await and Promise.all
Promise.all(arrOfUsers).then(function (res) {
    res.forEach(function (item) {
        console.log("With Promise.all and AsyncAwait - ".concat(item.name));
    });
});
//Async await without Promise.all
function displayNames() {
    return __awaiter(this, void 0, void 0, function () {
        var i, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < arrOfUsers.length)) return [3 /*break*/, 4];
                    return [4 /*yield*/, arrOfUsers[i]];
                case 2:
                    user = _a.sent();
                    console.log("Without Promise.all but with AsyncAwait - ".concat(user.name));
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
displayNames();
//Only promises
for (var i = 0; i < arrOfUsers.length; i++) {
    arrOfUsers[i].then(function (res) {
        console.log("Only promises - ".concat(res.name));
    });
}
function genderChecker(human) {
    return human.gender == 'Female';
}
function getGenderOnlyPromise(url) {
    nodefetch(url).then(function (request) { return request.json(); }).then(function (response) {
        var temp = genderChecker(response);
        if (temp) {
            console.log('======OnlyPromise======');
            console.log("First Name: ".concat(response.first_name, "\nLast name: ").concat(response.last_name, "\nGender: ").concat(response.gender));
        }
        else {
            console.log('Fail');
            getGenderOnlyPromise(url);
        }
    });
}
function getGenderAsyncAwait(url) {
    return __awaiter(this, void 0, void 0, function () {
        var request, response, temp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, nodefetch(url)];
                case 1:
                    request = _a.sent();
                    return [4 /*yield*/, request.json()];
                case 2:
                    response = _a.sent();
                    temp = genderChecker(response);
                    if (temp) {
                        console.log('======AsyncAwait======');
                        console.log("First Name: ".concat(response.first_name, "\nLast name: ").concat(response.last_name, "\nGender: ").concat(response.gender));
                    }
                    else {
                        console.log('Fail');
                        getGenderAsyncAwait(url);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
getGenderOnlyPromise('https://random-data-api.com/api/users/random_user');
getGenderAsyncAwait('https://random-data-api.com/api/users/random_user');
//5
function callback1(ip, callback) {
    callback("Task 5: ".concat(ip));
}
function getIpTask5(link) {
    return __awaiter(this, void 0, void 0, function () {
        var request, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, nodefetch(link)];
                case 1:
                    request = _a.sent();
                    return [4 /*yield*/, request.json()];
                case 2:
                    response = _a.sent();
                    callback1(response.ip, function (ip) { console.log(ip); });
                    return [2 /*return*/];
            }
        });
    });
}
getIpTask5('https://api.ipify.org/?format=json');
//6
function returnip(ip) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, ip];
        });
    });
}
function doSth(callback) {
    return __awaiter(this, void 0, void 0, function () {
        var request, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, nodefetch('https://api.ipify.org/?format=json')];
                case 1:
                    request = _a.sent();
                    return [4 /*yield*/, request.json()];
                case 2:
                    response = _a.sent();
                    console.log("Task 6: ".concat(response.ip));
                    return [4 /*yield*/, callback(response.ip)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
doSth(function (ip) {
    return returnip(ip);
});
