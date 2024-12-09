
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuditRequestModel } from '../../models/AuditRequest';
import { AuditRequestService } from '../../services/audit-request.service';

@Component({
  selector: 'app-audit-request',
  imports: [FormsModule],
  templateUrl: './audit-request.component.html',
  styleUrl: './audit-request.component.scss'
})
export class AuditRequestComponent {

  auditRequestList: AuditRequestModel[]=[];
  auditRequestObj: AuditRequestModel = new AuditRequestModel
  auditRequestSrv= inject(AuditRequestService)

  ngOnInit(): void {
    this.getAuditRequest();
  }

  getAuditRequest(){
    this.auditRequestSrv.getAuditRequest().subscribe((result:any)=>{
      this.auditRequestList= result;
    })
  }

  onEdit(data: AuditRequestModel){
    this.auditRequestObj = data;
  }

  onSaveAuditRequest(){
    this.auditRequestSrv.onSaveAuditRequest(this.auditRequestObj).subscribe((result:any)=>{
      alert("Audit Saved Successfully");
      this.getAuditRequest();
    })
  }

  onUpdateAuditRequest(){
    this.auditRequestSrv.onUpdateAuditRequest(this.auditRequestObj).subscribe((result:any)=>{
      alert("Audit Updated Successfully");
      this.getAuditRequest();
    })
  }

  deleteAuditRequest(id:number){
    const isDelete = confirm("Are you sure you want to delete the Audit")
    if(isDelete) {
      this.auditRequestSrv.onDeleteAuditRequest(id).subscribe((result:any)=>{
        alert("Audit Deleted Successfully");
        this.getAuditRequest();
      })
    }
    
  }

  resetAudit() {
    this.auditRequestObj = new AuditRequestModel();
  }
}