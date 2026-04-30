import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Cliente {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
}

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro {

  clientes: Cliente[] = [];
  mostrarFormulario: boolean = false;
  editandoId: number = -1;

  formulario: Cliente = {
    id: 0,
    nome: '',
    email: '',
    telefone: '',
    cidade: ''
  };

  abrirFormularioNovo() {
    this.editandoId = -1;
    this.formulario = { id: 0, nome: '', email: '', telefone: '', cidade: '' };
    this.mostrarFormulario = true;
  }

  salvarCliente() {
    if (this.editandoId === -1) {
      this.formulario.id = Date.now();
      this.clientes.push({ ...this.formulario });
    } else {
      const index = this.clientes.findIndex(c => c.id === this.editandoId);
      this.clientes[index] = { ...this.formulario };
    }
    this.mostrarFormulario = false;
  }

  editarCliente(cliente: Cliente) {
    this.editandoId = cliente.id;
    this.formulario = { ...cliente };
    this.mostrarFormulario = true;
  }

  deletarCliente(id: number) {
    this.clientes = this.clientes.filter(c => c.id !== id);
  }

  cancelar() {
    this.mostrarFormulario = false;
  }
}
