"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mission_1 = require("./mission");
class webMission extends mission_1.Mission {
    constructor(startDate, endDate, teatchers, students, patron) {
        super(startDate, endDate, teatchers, students);
        this.startDate = startDate;
        this.endDate = endDate;
        this.teatchers = teatchers;
        this.students = students;
        this.patron = patron;
    }
}
exports.webMission = webMission;
//# sourceMappingURL=webMission.js.map