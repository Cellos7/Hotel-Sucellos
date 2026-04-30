import { Reserva } from './reserva.model';
import {Injectable} from '@angular/core';

@Injectable ({
  providedIn:'root'
})

export class ReservaService {
  private reservas: Reserva[]= [
    {id: 1, nomeHospede: 'Rafa Nadal', quarto: '101', checkIn: '2026-03-15', checkOut:'2026-03-22'},
    {id: 2, nomeHospede: 'Eduardo Vasconcellos', quarto: '201', checkIn: '2026-03-15', checkOut:'2026-03-22'},
    {id: 3, nomeHospede: 'Victor Suzuki', quarto: '301', checkIn: '2026-03-15', checkOut:'2026-03-22'},
  ];

  private nextId=4;

  getAll(): Reserva[] {
    return this.reservas;
  }

  getById(id: number): Reserva | undefined {
    return this.reservas.find(r => r.id === id);
  }

  create(reserva: Omit<Reserva, 'id'>): void {
    this.reservas.push({ id: this.nextId++, ...reserva });
  }

  update(reservaAtualizada: Reserva): void {
    const index = this.reservas.findIndex(r => r.id === reservaAtualizada.id);
    if (index !== -1) {
      this.reservas[index] = reservaAtualizada;
    }
  }

  deletar(id:number): void {
    this.reservas = this.reservas.filter(r => r.id !== id);
  }
}
