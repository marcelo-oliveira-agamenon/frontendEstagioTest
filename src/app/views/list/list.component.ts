import { Component, OnInit } from '@angular/core';
import { ContatoService } from 'src/app/service/contato.service';

import { Contact } from '../../model/contact.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  listaContatos: Array<Contact>;
  listaHeaders: Array<String>;

  constructor(private service: ContatoService) {}

  ngOnInit(): void {
    this.listaHeaders = ['name', 'phone', 'age'];
    this.listar();
  }

  listar() {
    return this.service.listar().subscribe((resp) => {
      this.listaContatos = resp;
    });
  }
}
