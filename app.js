"use strict";
var StatusCode;

(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
})(StatusCode || (StatusCode = {}));
const res = {
    message: 'Платеж успешен',
    statusCode: StatusCode.SUCCESS,
};
if (res.statusCode === StatusCode.SUCCESS) {
}
