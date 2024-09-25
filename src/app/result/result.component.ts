import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent implements OnInit {

  constructor(private shared: SharedService) {}

  ngOnInit(): void {
      
    const result:any = document.getElementById('result')

    result.innerHTML = this.shared.getResult2()
    

  }

}
