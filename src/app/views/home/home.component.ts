import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../../service/contato.service';
import { Router } from '@angular/router';

import { Contact } from '../../model/contact.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  contato: Contact;

  constructor(private service: ContatoService, private route: Router) {}

  ngOnInit(): void {
    this.contato = {
      name: '',
      phone: null,
      age: null,
    };
  }

  cadastrar(frm) {
    this.service.cadastrar(this.contato).subscribe((resp) => {
      frm.reset();
      this.route.navigateByUrl('/');
    });
  }
}
