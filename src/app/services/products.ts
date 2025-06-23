import { Injectable } from '@angular/core';

export interface Product{
  id: number;
  nombre:string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})

export class Products {
  
  private products:Product[] = [
    {
      id: 1,
      nombre: 'Asus Zephyrus G14 2025',
      descripcion : 'La portatil mas potente',
      precio: 65000,
      imagen: '/img/zephyrusg14.jpg'
    },
    {
      id: 2,
      nombre: 'Alienware Area 51',
      descripcion: 'El regreso del gigante',
      precio: 72000,
      imagen: '/img/area51.jpg'
    },
    {
      id: 3,
      nombre: 'Legion Slim 5',
      descripcion: 'La confiable y potente',
      precio: 43000,
      imagen: '/img/LegionSlim5.jpg'
    },
   {
      id: 4,
      nombre: 'Asus Rog Strix G16',
      descripcion: 'Potencia portatil',
      precio: 60900,
      imagen: '/img/StrixG16.jpg'
   }
  ]
  constructor(){}
  getProducts():Product[]{
    return this.products;
  }
}
