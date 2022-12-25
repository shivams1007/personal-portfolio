import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  resumeLink = 'https://firebasestorage.googleapis.com/v0/b/shivam-singh-e8c32.appspot.com/o/Shivam-Fullstack.pdf?alt=media&token=52ca5614-8dbf-43d5-b94b-195b296872a9';
  constructor() { }

  ngOnInit(): void {
  }

}
