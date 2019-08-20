import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JobsService } from 'src/app/Service/jobs.service';
import { Jobs } from 'src/app/ViewModel/jobs';
import { EmployeeService } from 'src/app/Service/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  genders:number;
  select:number;
  ngForm:FormGroup;
  jobs:Jobs[];
  constructor(private jobAll:JobsService, private employe:EmployeeService,private router: Router,private activatedRoute: ActivatedRoute
    ) { 
    jobAll.GetAllEmployee().subscribe(data=>{this.jobs=data;})
    this.ngForm = new FormGroup({
      'ID':new FormControl(null),
      'Name':new FormControl(null,[Validators.required]),
      'Email':new FormControl(null,[Validators.required,Validators.email]),
      'JobID':new FormControl(null,[Validators.required]),
      'Mobile':new FormControl(null,[Validators.required,Validators.pattern("^01[0-2][0-9]{8}$")]),
      'NationalID':new FormControl(null,[Validators.required,Validators.pattern("^[1-9][0-9]{13}$")]),
      'IsActive':new FormControl(null,[Validators.required]),
      'gender':new FormControl('female')
      });
      this.activatedRoute.params.subscribe(params => {
        console.log(params.ID);
        this.employe.Get(params.ID).subscribe(data=>{
          console.log(data.Name);
          this.select=data.JobID
          this.ngForm.setValue({
            'ID':data.ID,
            'Name':data.Name,
            'Email':data.Email,
            'JobID':data.JobID,
            'Mobile':data.Mobile,
            'NationalID':data.NationalID,
            'IsActive':data.IsActive,
            'gender':data.Gender   })
        })
      });
     
      
      

  }

  ngOnInit() {
  


  }

  onSubmit(){


     this.employe.Update(this.ngForm.value).subscribe(
        data=>{
          swal({
            title: "Done!",
            text: "Your Employee has been added.",
            type: "success",
            timer: 2000
            });
                    
           console.log(data);
          setTimeout(() => {
            this.router.navigate(['Home']);
        }, 3000);
        });
  }

}
