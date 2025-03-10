import { Injectable } from '@angular/core';

interface TaskDuration {
  time: number;
  unity: string;
}

@Injectable({
  providedIn: 'root'
})
export class TimeEvaluationService {

  constructor() { }

  calculateAutomationConvencience(
    taskTime: TaskDuration,
    frecuency: number,
    taskLifeSpan: TaskDuration
  ) {

  }

  


}
