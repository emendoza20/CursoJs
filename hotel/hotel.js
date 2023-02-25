export class Hotel {  
  #name
  #num_room
  #num_plantas
  #area_total
constructor(name,num_room,num_plantas,area_total) {

    this.#name = name;
    this.#num_room = num_room;
    this.#num_plantas =num_plantas;
    this.#area_total = area_total;
    }
  
    // getters
    getName() {
      return this.#name;
    }
  
    getNum_room() {
      return this.#num_room;
    }
  
    getNum_plantas() {
      return this.#num_plantas;
    }
  
    getarea_total() {
      return this.#area_total;
    }  
  
    // setters
    
  
    setName(name) {
      this.#name = name;
    }

    setNum_room(num_room) {
      this.#num_room =num_room;
    }

  
    setNum_plantas(num_plantas) {
      this.#num_plantas = num_plantas;
    }

    setarea_total(area_total) {
      this.#area_total = area_total;
    }
  
    //  y un método llamado CalcularMantenimiento (). Este método debe tener en cuenta que cada persona en el servicio puede asistir a 20 habitaciones y debe mostrar cuántas personas son necesarias para asistir al servicio de la habitación del hotel y cuál es el costo total asignado al servicio sabiendo que estas personas cobran 1.500 € por mes.
    calculaMantenimiento() {
        const numPersonas = Math.ceil(this.num_room / 20);
        const costeTotal = numPersonas * 1500;
        return `Para atender el servicio de habitaciones de ${this.name} se necesitan ${numPersonas} personas con un coste total de ${costeTotal} € al mes.`;
      }
    
  
   // método que devuelve una descripción completa del hotel
    toString() {
      return `Nombre: ${this.name}\n habitaciones: ${this.num_room}\nNum Plantas: ${this.num_plantas}\narea: ${this.area_total}\n`;
    }
  }
  
  // exportar la clase para que pueda ser utilizada en otros archivos
 // module.exports = Computer;
  