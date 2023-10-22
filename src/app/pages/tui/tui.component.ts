import { Component, OnInit, VERSION } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, FormArray } from '@angular/forms';

export type RatingTitleFormGroup = FormGroup<{
  level: FormControl<number>;
  tags: FormArray<FormControl<string>>;
}>;

@Component({
  selector: 'tui',
  templateUrl: './tui.component.html',
  styleUrls: ['./tui.component.scss']
})
export class TuiComponent implements OnInit {

  readonly sliderControl = new FormControl(20);

  registerForm = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
  });

  skills = new FormArray<FormControl<string | null>>([]);
  addSkill() {
    this.skills.push(new FormControl(''));
  }

  prepend() {
    this.skills.insert(0, new FormControl(''));
  }

  replace() {
    this.skills.setControl(0, new FormControl(''));
  }

  getFirst() {
    // return this.skills.get(0);
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  clear() {
    this.skills.clear();
  }

  constructor(
    private fb: NonNullableFormBuilder,
  ) { }

  ngOnInit() {
  }

}
