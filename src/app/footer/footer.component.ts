import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
myName = "EREKLE RATIANI";
myGh="https://github.com/eratiani";
githubImgUrl = "../../assets/github.png";
rssAppLink = "https://app.rs.school/";
rssLogo = "../../assets/rs-school.png";
}
