import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
@Component({
  selector: 'app-milestone4',
  templateUrl: './milestone4.component.html',
  styleUrls: ['./milestone4.component.css']
})
export class Milestone4Component implements OnInit {
  form = new FormGroup({
    associatename: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.pattern('[A-Za-z]+')
    ]),
    associateid: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6),
      Validators.pattern('[0-9]+')
    ]),
    projectid: new FormControl('', [
      Validators.required,
      Validators.minLength(12),
      Validators.maxLength(12),
      Validators.pattern('[A-Za-z0-9]+')
    ]),
    radiolocation: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    checkskills: new FormControl(),
    profileupload: new FormControl('', Validators.required),
    comments: new FormControl('', Validators.required),
    submit: new FormControl(),
    reset: new FormControl()
  });
  get associatename() {
    return this.form.get('associatename');
  }
  get associateid() {
    return this.form.get('associateid');
  }
  get projectid() {
    return this.form.get('projectid');
  }
  get comments() {
    return this.form.get('comments');
  }
  get profileupload() {
    return this.form.get('profileupload');
  }

  ngOnInit() {
  }
}
