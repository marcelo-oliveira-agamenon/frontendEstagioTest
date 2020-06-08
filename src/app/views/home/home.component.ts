import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../../service/contato.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  contato: any;

  constructor(private service: ContatoService) {}

  ngOnInit(): void {
    this.contato = {};
  }

  cadastrar(frm) {
    this.service.cadastrar(this.contato).subscribe((resp) => {
      console.log('Success!');
      frm.reset();
    });
  }
}
