import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [NgFor],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  questions = [
    { id: 'q1', text: 'Do you feel tired or have little energy?' },
    { id: 'q2', text: 'Do you have little interest or pleasure in doing things?' },
    { id: 'q3', text: 'Do you feel bad about yourself?' }
  ];
}
