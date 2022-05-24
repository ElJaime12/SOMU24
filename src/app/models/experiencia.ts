export class Experiencia {
    id_exp: number;
    empresa: string;
    puesto: string;
    pais: string;
    anio_ingreso_exp: string;
    anio_egreso_exp: string;
    descripcion: string;


    constructor(empresa: string, puesto: string, pais: string, anio_ingreso_exp: string, anio_egreso_exp:string, descripcion: string) {
        this.empresa = empresa;
        this.puesto = puesto;
        this.pais = pais;
        this.anio_ingreso_exp = anio_ingreso_exp;
        this.anio_egreso_exp = anio_egreso_exp;
        this.descripcion = descripcion;
       
    }
}

