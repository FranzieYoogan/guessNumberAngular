import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
      
    const guess:any = document.getElementById('guess')
    const the:any = document.getElementById('the')
    const number:any = document.getElementById('number')

    
      number.style.transition = "1s" 
      number.style.left = "0.8em"
      

      the.style.transition = "1s"
      the.style.left = "0.5em"
      

      guess.style.transition = "1s"
      guess.style.left = "0.3em"
      

  

  }

}
