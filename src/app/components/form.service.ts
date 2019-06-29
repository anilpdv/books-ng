import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormService {
  private formSource = new BehaviorSubject('node.js');
  currentFormQuery = this.formSource.asObservable();
  constructor() {}

  changeFormQuery(query: string) {
    this.formSource.next(query);
  }
}
