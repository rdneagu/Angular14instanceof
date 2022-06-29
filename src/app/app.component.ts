import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FreshAngular2';

  static someFunc(): void {
    const control: AbstractControl = new FormGroup({});

    // This works
    // if (control instanceof AbstractControl) {
    //   const controlKeys = Object.keys(control.value);
    // }

    // This doesn't work
    // if (control instanceof FormGroup) {
    //   const controlKeys = Object.keys(control.controls);
    // }

    // Neither do this
    // if (control instanceof FormControl) {
    //   const value = control.value;
    // }

    // Neither do this
    // if (control instanceof FormArray) {
    //   const controlKeys = Object.keys(control.value);
    // }
  }
}
