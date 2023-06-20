import { Component, OnInit } from '@angular/core';
import { getCurrentDateTime } from '../../assets/Ts/dateHour';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  ngOnInit() {
    getCurrentDateTime();
    setInterval(getCurrentDateTime, 1000);
  }
}
