import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  arr = [1,2,3,4,5,6,7,8,9,10];
  array = [
    {
      Name: 'John',
      ID: 123456,
      Skills: 'ReactJS,AngularJs',
      Project: 'Cognizant Internal',
      HCM: 'Alex',
      gender: 'Male'
    },
    {
      "Name": "Amalkar",
      "ID": 123456,
      "Skills": "ReactJS,AngularJs",
      "Project": "Cognizant Internal",
      "HCM": "Alex",
      "gender": "Male"
    },
    {
      "Name": "Girl",
      "ID": 123456,
      "Skills": "ReactJS,AngularJs",
      "Project": "Cognizant Internal",
      "HCM": "Alex",
      "gender": "Female"
    },
    {
      "Name": "Aravind",
      "ID": 123456,
      "Skills": "ReactJS,AngularJs",
      "Project": "Cognizant Internal",
      "HCM": "Alex",
      "gender": "Male"
    },
    {
      "Name": "Priya",
      "ID": 123456,
      "Skills": "ReactJS,AngularJs",
      "Project": "Cognizant Internal",
      "HCM": "Alex",
      "gender": "Female"
    },
    {
      "Name": "John",
      "ID": 123456,
      "Skills": "ReactJS,AngularJs",
      "Project": "Cognizant Internal",
      "HCM": "Alex",
      "gender": "Male"
    },
    {
      "Name": "John",
      "ID": 123456,
      "Skills": "ReactJS,AngularJs",
      "Project": "Cognizant Internal",
      "HCM": "Alex",
      "gender": "Male"
    },
    {
      "Name": "John",
      "ID": 123456,
      "Skills": "ReactJS,AngularJs",
      "Project": "Cognizant Internal",
      "HCM": "Alex",
      "gender": "Male"
    },
    {
      "Name": "Nazriya",
      "ID": 123456,
      "Skills": "ReactJS,AngularJs",
      "Project": "Cognizant Internal",
      "HCM": "Alex",
      "gender": "Female"
    },
    {
      "Name": "John",
      "ID": 123456,
      "Skills": "ReactJS,AngularJs",
      "Project": "Cognizant Internal",
      "HCM": "Alex",
      "gender": "Male"
    }
  ]
  ngOnInit(){
  }

}
