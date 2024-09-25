import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  result:any

  getResult(value:string) {

    this.result = value

  }

  getResult2() {

    return this.result

  }

}
