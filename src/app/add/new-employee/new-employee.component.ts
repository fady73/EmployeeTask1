import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Jobs } from '../../ViewModel/jobs';
import { JobsService } from '../../Service/jobs.service';
import { EmployeeService } from '../../Service/employee.service';
import { Employee } from '../../ViewModel/employee';
import { Gender } from '../../ViewModel/gender.enum';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  genders:number;
  select:number;
  ngForm:FormGroup;
  jobs:Jobs[];
  constructor(private jobAll:JobsService, private employe:EmployeeService,private router: Router) { 
    jobAll.GetAllEmployee().subscribe(data=>{this.jobs=data; this.select=this.jobs[0].ID})
  }

  ngOnInit() {
    this.ngForm = new FormGroup({
          'Name':new FormControl(null,[Validators.required]),
          'Email':new FormControl(null,[Validators.required,Validators.email]),
          'JobID':new FormControl(null,[Validators.required]),
          'Mobile':new FormControl(null,[Validators.required,Validators.pattern("^01[0-2][0-9]{8}$")]),
          'NationalID':new FormControl(null,[Validators.required,Validators.pattern("^[1-9][0-9]{13}$")]),

          'IsActive':new FormControl(null,[Validators.required]),
      'gender':new FormControl('female')
    });

    this.ngForm.setValue({
        'Name':'',
        'Email':'',
        'JobID':'',
        'Mobile':'',
        'NationalID':'',
        'IsActive':'true',
      
      'gender':2    })
  }

  onSubmit(){


     this.employe.AddNew(this.ngForm.value).subscribe(
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
