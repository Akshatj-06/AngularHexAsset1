import { Component, inject } from '@angular/core';
import { ServiceRequestModel } from '../../models/ServiceRequest';
import { ServiceRequestService } from '../../services/service-request.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-service-request',
  imports: [FormsModule],
  templateUrl: './service-request.component.html',
  styleUrl: './service-request.component.scss'
})
export class ServiceRequestComponent {

  serviceRequestList: ServiceRequestModel[]=[];
  serviceRequestObj: ServiceRequestModel= new ServiceRequestModel
  serviceRequestSrv = inject(ServiceRequestService)

  ngOnInit(): void {
    this.getServiceRequest();
   }

  getServiceRequest(){
    this.serviceRequestSrv.getServiceRequest().subscribe((result:any)=>{
      this.serviceRequestList= result;
    })
  }

  onEdit(data:ServiceRequestModel){
    this.serviceRequestObj =data;
  }

  onSaveServiceRequest(){
    this.serviceRequestSrv.onSaveServiceRequest(this.serviceRequestObj).subscribe((result:any)=>{
      alert("Service Request Saved Successfully")
      this.getServiceRequest();
    })
  }

  onUpdateServiceRequest(){
    this.serviceRequestSrv.onUpdateServiceRequest(this.serviceRequestObj).subscribe((result:any)=>{
      alert("Service Request Updated Successfully");
      this.getServiceRequest();
    })
  }

  deleteServiceRequest(id:number){
    const isDelete = confirm("Are you sure you want to delete the Service Request")
    if(isDelete) {
      this.serviceRequestSrv.onDeleteServiceRequest(id).subscribe((result:any)=>{
        alert("Service Request Deleted Successfully");
        this.getServiceRequest();
      })
    }
    
  }

  resetServiceRequest() {
    this.serviceRequestObj = new ServiceRequestModel();
  }
}
