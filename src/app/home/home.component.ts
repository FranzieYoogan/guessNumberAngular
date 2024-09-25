import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private shared:SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {

    const value:any = document.getElementById('value')
    

    addEventListener('keyup',(event) => {

      if(event.key == "Enter" && value.value > 0) {

        const number:any  = Math.floor(Math.random() * 10)

        if(number == value.value) {

          this.shared.getResult(`you did it ${value.value}`)
  
          this.router.navigate(['/result'])
  
        } else {
  
          this.shared.getResult(`you've failed ${number}`)
          this.router.navigate(['/result'])
        }

      } else if(value.value < 0) {

        value.style.border = "2px solid red"
      }

      

    })

  }


}
