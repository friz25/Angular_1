import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
//Отвечает за - Область видимости модалки (окна)
export class ModalService {

  isVisible$ = new BehaviorSubject<boolean>(true)

  open() {
    this.isVisible$.next(true)
  }

  close() {
    this.isVisible$.next(false)
  }
}
