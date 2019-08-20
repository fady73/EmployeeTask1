(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{LjXP:function(e,n){e.exports='<div class="container float-right">\n    <div class="row">\n       \n        <div class="col-10">\n            <button type="button" class="btn btn-primary"><a routerLink=\'/Home\' style="color: white">\u0639\u0631\u0636 \u0627\u0644\u0643\u0644 </a></button>\n          </div>\n        <div class="col-2">\n            <p>\u0627\u0636\u0627\u0641\u0647 \u0645\u0648\u0638\u0641 \u062c\u062f\u064a\u062f </p>\n           </div>\n    </div>\n    \n    <div class="row ">\n        <div class="col-12 ">\n          <form [formGroup]="ngForm" (ngSubmit)="onSubmit()">\n            <div  class="row">\n                <div class="form-group col-6 text-right" [hidden]=\'true\'>\n                    <label for="ID" class="text-right">\u0627\u0633\u0645 \u0627\u0644\u0645\u0648\u0638\u0641</label>\n                    <input type="text" class="form-control"\n                     id="ID" formControlName = "ID">  \n                 </div>\n\n\n                <div class="form-group col-6 text-right">\n                    <label for="JobID" > \u0627\u0644\u0648\u0638\u064a\u0641\u0647</label>\n                    <select class="form-control" formControlName="JobID" id="JobID"  [(ngModel)]="select">\n                      <option *ngFor="let job of jobs; let i = index" [value]="jobs[i].ID"  >\n                        {{jobs[i].Name}}\n                      </option>\n                    </select>\n                  \n                    <div class="alert  alert-danger" *ngIf="!ngForm.get(\'JobID\').valid&&ngForm.get(\'JobID\').touched">\n                      <span *ngIf = "ngForm.get(\'JobID\').errors[\'required\']">field is required</span>\n                    </div>\n                 </div>\n              <div class="form-group col-6 text-right">\n                 <label for="Name" class="text-right">\u0627\u0633\u0645 \u0627\u0644\u0645\u0648\u0638\u0641</label>\n                 <input type="text" class="form-control"\n                  id="Name" formControlName = "Name">\n                  <div class="alert  alert-danger"*ngIf="!ngForm.get(\'Name\').valid&&ngForm.get(\'Name\').touched">\n                   <span *ngIf = "ngForm.get(\'Name\').errors[\'required\']">field is required</span>\n                  </div>\n              </div>\n              <div class="form-group col-6 text-right">\n                  <label for="Mobile" class="text-right"> \u0631\u0642\u0645 \u0627\u0644\u062a\u0644\u064a\u0641\u0648\u0646</label>\n                  <input type="text" class="form-control"\n                   id="Mobile" formControlName = "Mobile">\n                   <div class="alert  alert-danger" *ngIf="!ngForm.get(\'Mobile\').valid&&ngForm.get(\'Mobile\').touched">\n                    <span *ngIf = "ngForm.get(\'Mobile\').errors[\'required\']">field is required</span>\n                    <span *ngIf = "ngForm.get(\'Mobile\').errors[\'pattern\']">enter correct number phone with start 012|010|011 only 11 number</span>\n    \n                   </div>\n               </div>\n              <div class="form-group col-6 text-right">\n                  <label for="Email" class="text-right"> \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u0649</label>\n                  <input type="text" class="form-control"\n                   id="Email" formControlName = "Email">\n             \n                   <div class="alert  alert-danger" *ngIf="!ngForm.get(\'Email\').valid && ngForm.get(\'Email\').touched">\n                      please enter a valid Email id \n                   </div>\n               </div>\n               <div class="form-group col-6 text-right">\n    \n                  <div class="radio" >\n                      <label for="gender" class="text-right"> \u0627\u0644\u0646\u0648\u0639</label>\n                     <div>  \n                    <label>\n                        <span class="text-left">\n                            \u0630\u0643\u0631\n                        <input  type="radio" [value]="1"\n                        formControlName = "gender"> </span>\n                        <br>\n                        <span class="text-left">\n                            \u0627\u0646\u062b\u0649\n                      <input type="radio" [value]="2"\n                      formControlName = "gender"></span>\n                    </label>\n                    </div>\n                  </div>\n              </div>           <div class="form-group col-6 text-right">\n                  <label for="NationalID" class="text-right">  \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0642\u0648\u0645\u0649</label>\n                  <input type="text" class="form-control"\n                   id="NationalID" formControlName = "NationalID">\n                  <span class="help-block" *ngIf="!ngForm.get(\'NationalID\').valid&&ngForm.get(\'NationalID\').touched">\n                    <div class="alert  alert-danger"  *ngIf = "ngForm.get(\'NationalID\').errors[\'required\']">field is required</div>\n                    <div class="alert  alert-danger"  *ngIf = "ngForm.get(\'NationalID\').errors[\'pattern\']">No national id with zero start or more than 14 number</div>\n    \n                  </span>\n               </div>\n    \n             \n            </div>\n           \n            <div class="col-12 text-right">\n    \n            <div class="checkbox text-right" >\n              <div >\n                <label for="IsActive" class="text-right"> \u0627\u0644\u062d\u0627\u0644\u0647</label></div>\n    \n                <label>\n                  <input type="checkbox" value="true"\n                  formControlName = "IsActive">\u0645\u0641\u0639\u0644\n                </label>\n              </div>\n              </div>\n    \n               <div class="col-12 text-right">\n            <button class="btn btn-primary" type="submit"  [disabled]="!ngForm.valid">\u062d\u0641\u0638</button>\n               </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    '},P8Ef:function(e,n){e.exports=""},zFnc:function(e,n,t){"use strict";t.r(n);var o=t("mrSG"),l=t("8Y7J"),r=t("SVse"),a=t("iInd"),i=t("s7LF"),s=t("X2D9"),d=t("bIMq"),c=t("PSD3"),m=t.n(c);let g=class{constructor(e,n,t,o){this.jobAll=e,this.employe=n,this.router=t,this.activatedRoute=o,e.GetAllEmployee().subscribe(e=>{this.jobs=e}),this.ngForm=new i.b({ID:new i.a(null),Name:new i.a(null,[i.e.required]),Email:new i.a(null,[i.e.required,i.e.email]),JobID:new i.a(null,[i.e.required]),Mobile:new i.a(null,[i.e.required,i.e.pattern("^01[0-2][0-9]{8}$")]),NationalID:new i.a(null,[i.e.required,i.e.pattern("^[1-9][0-9]{13}$")]),IsActive:new i.a(null,[i.e.required]),gender:new i.a("female")}),this.activatedRoute.params.subscribe(e=>{console.log(e.ID),this.employe.Get(e.ID).subscribe(e=>{console.log(e.Name),this.select=e.JobID,this.ngForm.setValue({ID:e.ID,Name:e.Name,Email:e.Email,JobID:e.JobID,Mobile:e.Mobile,NationalID:e.NationalID,IsActive:e.IsActive,gender:e.Gender})})})}ngOnInit(){}onSubmit(){this.employe.Update(this.ngForm.value).subscribe(e=>{m()({title:"Done!",text:"Your Employee has been added.",type:"success",timer:2e3}),console.log(e),setTimeout(()=>{this.router.navigate(["Home"])},3e3)})}};const b=[{path:"",component:g=o.a([Object(l.n)({selector:"app-edit-employee",template:t("LjXP"),styles:[t("P8Ef")]}),o.b("design:paramtypes",[s.a,d.a,a.b,a.a])],g)}];let u=class{};u=o.a([Object(l.I)({imports:[a.c.forChild(b)],exports:[a.c]})],u),t.d(n,"EditModule",function(){return p});let p=class{};p=o.a([Object(l.I)({declarations:[g],imports:[r.b,i.c,i.d,u]})],p)}}]);