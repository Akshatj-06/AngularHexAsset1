export class AuditRequestModel {
    auditId: number;
    userId: 0;
    auditStatus: string;
    auditDate: Date

    constructor() {
        this.auditId = 0;
        this.userId = 0;
        this.auditStatus = "";
        this.auditDate = new Date();
    }
}