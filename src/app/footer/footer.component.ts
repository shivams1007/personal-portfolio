import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year: number = new Date().getFullYear();

  Facebook: string = environment.FACEBOOK;
  Instagram: string = environment.INSTAGRAM;
  Twitter: string = environment.TWITTER;
  GitHub: string = environment.GITHUB;
  constructor() { }

  ngOnInit(): void {
  }

}
