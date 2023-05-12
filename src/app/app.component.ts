import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { PeopleService } from './services/people.service';
import { People } from './model/people';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  $list: People[] = [];

  ngOnInit() {
    this.$list = this.peopleSvc.personas;
  }

  private readonly fb = inject(FormBuilder);
  private readonly peopleSvc = inject(PeopleService);

  peopleForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    lastname: ['', [Validators.required, Validators.minLength(5)]],
    cellphone: ['', [Validators.required, Validators.minLength(8)]],
    description: ['', [Validators.required, Validators.minLength(20)]],
  });

  onSave() {
    if (this.peopleForm.valid) {
      const body = this.peopleForm.getRawValue();
      this.peopleSvc.createRegister(body);
    }
  }

  onInformation() {
    // console.log(this.peopleSvc.$listPeople);
  }
}
