import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReservaService } from './reserva.service';
import { Reserva } from './reserva.model';

@Component({
  selector: 'app-reservas',
  standalone : true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})

export class ReservasComponent implements OnInit {
  reservas: Reserva[] = [];
  mostrarFormulario = false;
  modoEdicao = false;

  formulario: Omit <Reserva, 'id'> & { id?: number } = {
    nomeHospede: '',
    quarto: '',
    checkIn: '',
    checkOut: ''
  }

  constructor(private reservaService: ReservaService){}

  ngOnInit(): void {
    this.carregarReservas();
  }

  carregarReservas(){
    this.reservas = this.reservaService.getAll();
  }

  abrirFormularioNovo(): void {
    this.modoEdicao = false;
    this.formulario = {nomeHospede: '', quarto: '', checkIn: '', checkOut: ''};
    this.mostrarFormulario = true;
  }

  editarReserva(reserva: Reserva): void {
    this.modoEdicao = true;
    this.formulario = {...reserva};
    this.mostrarFormulario = true;
  }

  salvar(): void {
    if(!this.formulario.nomeHospede || !this.formulario.quarto || !this.formulario.checkIn || !this.formulario.checkOut){
      alert('Preencha todos os campos!');
      return;
    }

    if (this.modoEdicao && this.formulario.id !== undefined) {
      this.reservaService.update(this.formulario as Reserva);
    }else {
      this.reservaService.create(this.formulario);
    }
    this.cancelar();
    this.carregarReservas();
  }


  deletar(id:number): void {
    if(confirm('Deseja excluir a reserva?')) {
      this.reservaService.deletar(id);
      this.carregarReservas();
    }
  }


  cancelar(): void {
    this.mostrarFormulario = false;
    this.modoEdicao = false;
    this.formulario = {nomeHospede: '', quarto: '', checkIn: '', checkOut: ''};
  }







}



