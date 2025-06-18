export interface Universidad {
    name_university: string;
    descripcion:     string;
    logo:            string;
    Carreras:        Carrera[];
}

export interface Carrera {
    nombre_carrera:       string;
    url:                  string;
    informacion_carrera?: InformacionCarrera;
}

export interface InformacionCarrera {
    nombre_carrera: string;
    Sobre_carrera:  string;
}
