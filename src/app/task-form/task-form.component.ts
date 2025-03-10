import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      time: ['', Validators.required],
      repetitions: ['', [Validators.required, Validators.min(1)]],
      duration: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.taskForm.valid) {
      console.log(this.taskForm.value);
    }
  }
}
