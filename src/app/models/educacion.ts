export class Educacion {
    id?: number;
    centro: string;
    titulo: string;
    tipo_estudio: string;
    anio_ingreso: string;
    anio_egreso: string;


    constructor(centro: string, titulo: string, tipo_estudio: string, anio_ingreso: string, anio_egreso:string) {
        this.centro = centro;
        this.titulo = titulo;
        this.tipo_estudio = tipo_estudio;
        this.anio_ingreso = anio_ingreso;
        this.anio_egreso = anio_egreso;
       
    }
}


