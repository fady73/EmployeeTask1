import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Service/employee.service';
import { Employee } from 'src/app/ViewModel/employee';
import swal from 'sweetalert2';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  names:any[]=[];
  loading = true; // Add this line
  selectedAll: any;
  constructor(private Emp:EmployeeService) {}

  ngOnInit() {
    this.names=[];
    this.loading = true; // Add this line
    this.fetchData();
    console.log("eee");
  }
  selectAll() {
    for (var i = 0; i < this.names.length; i++) {
      this.names[i].selected = this.selectedAll;
    }
  }

  checkIfAllSelected() {
    this.selectedAll = this.names.every(function(item:any) {
        return item.selected == true;
      })
  }

  changeStatus(id:number,IsActive:boolean)
  {
    this.Emp.ChangeStatus(id,IsActive).subscribe( (data) => {console.log(data)})
  }


  delete(ID:number){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true 

    })
    .then((willDelete) => {

      if(willDelete.value){
           swal("Success");
           this.Emp.Deleted(ID).subscribe( (data) => {
            this.names=[];
            this.loading = true; // Add this line
            this.fetchData();
             console.log(data)})
      }else{
        swal("Fail");
      }

    console.log(willDelete)
  });
  }

  fetchData() {
    this.Emp.GetAllEmployee().subscribe(
      (data) => {
        data.forEach(e=>{
          this.names.push({data:e, selected:false})
          console.log(this.names[0])
        })
        this.loading = false; // And this one

      },
      (err) => {
        console.log(err);
      });
    }
  }




