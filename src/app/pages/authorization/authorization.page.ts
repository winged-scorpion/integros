import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthorizationService } from "./authorization.service";
import { User } from "../../user";
import { SafeLocalUser } from "../../safe.Local.User";
import { Router} from '@angular/router';
import { GetProjectService } from "../home/get.Project.service";
import { ProjectArr } from "../../projectArr";

const textError = {
  logPasErr: 'Не верный логин или пароль',
  logErr: 'Не верный логин'
}
let version: number = 0;

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.page.html',
  styleUrls: ['./authorization.page.scss'],
})

export class AuthorizationPage implements OnInit {
  public regForm: FormGroup;
  public passwordEnable = true;

  validateError: boolean = false;
  user: User = new User(); // данные вводимого пользователя
  receivedUser: User; // полученный пользователь

  constructor(
    private router: Router,
    private safeUser: SafeLocalUser,
    private formBuilder: FormBuilder,
    private auHttp: AuthorizationService,
    private getProjectList: GetProjectService,
    private projectArr: ProjectArr

  ){}


  ngOnInit() {
    this.regForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      safeUser: false
    })
  }

  textErrOutput: string = textError.logPasErr;

  newPassword(){
    this.passwordEnable = false;
    this.textErrOutput = textError.logErr
    this.validateError = false
    this.regForm.controls['password'].disable();
  }
  back(){
    this.passwordEnable = true;
    this.textErrOutput = textError.logPasErr
    this.validateError = false
    this.regForm.controls['password'].enable();
  }

  onSubmit(form){
    this.auHttp.getAu(this.regForm.value.name,this.regForm.value.password,this.passwordEnable).subscribe((data: User) => {
      this.user = data;
      if(this.user.status){
        this.safeUser.login(this.user.login,this.regForm.value.safeUser);
        const redirect = this.safeUser.redirectUrl ? this.safeUser.redirectUrl : '/home';
        this.router.navigate([redirect]);
      }else{
        this.validateError = true
      }
    })
  }
}
