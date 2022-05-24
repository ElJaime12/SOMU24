export class Proyecto {
    id_proy: number;
    nombre_proyecto: string;
    fecha_proyecto: string;
    descripcion_proyecto: string;
    link_proyecto: string;
    imagen_proyecto: string;
    


    constructor(nombre_proyecto: string, fecha_proyecto: string, descripcion_proyecto: string, link_proyecto: string, imagen_proyecto: string) {
        this.nombre_proyecto = nombre_proyecto;
        this.fecha_proyecto = fecha_proyecto;
        this.descripcion_proyecto = descripcion_proyecto;
        this.link_proyecto = link_proyecto;
        this.imagen_proyecto = imagen_proyecto;
               
    }
}