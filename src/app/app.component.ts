import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FreshAngular2';

  private _getControlValues(control: AbstractControl): string[] {
    const values = [];

    // If it's a FormGroup, get all the values from the group
    // if (control instanceof FormGroup) {
    //   const controlKeys = Object.keys(control.controls);
    // }
    if (control instanceof Object) {
      const controlKeys = Object.keys(control.value);
    }

    return values;
  }
}
