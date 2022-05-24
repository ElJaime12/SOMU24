export class Perfil {
    id_perf: number;
    nombre_perfil: string;
    apellido_perfil: string;
    email_perfil: string;
    ocupacion_perfil: string;
    telefono_perfil: string;
    url_perfil: string;
    url_banner: string;
    acerca_de: string;



    constructor(nombre_perfil: string, apellido_perfil: string, email_perfil: string, ocupacion_perfil: string, telefono_perfil: string, url_perfil: string, url_banner: string, acerca_de: string) {
        this.nombre_perfil = nombre_perfil;
        this.apellido_perfil = apellido_perfil;
        this.email_perfil = email_perfil;
        this.ocupacion_perfil = ocupacion_perfil;
        this.telefono_perfil = telefono_perfil;
        this.url_perfil = url_perfil;
        this.url_banner = url_banner;
        this.acerca_de = acerca_de;
       
    }
}