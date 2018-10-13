import { Student } from './student.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  //inputs
})
export class StudentComponent implements OnInit {

  @Input() student: Student // input permite a propriedade de um componente receber valores externos

  constructor() { }

  ngOnInit() {
  }

  clicked() {
    console.log(`Student: ${this.student.name}`)
  }

}
