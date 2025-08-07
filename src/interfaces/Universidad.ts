
export interface Universidad {
    name_university: string;
    descripcion:     string;
    logo:            string;
    Carreras:        Carrera[];
}

export interface Carrera {
    nombre_carrera:      string;
    url:                 string;
    informacion_carrera: InformacionCarrera;
    planEstudios?:       PlanEstudio[];
}

export interface InformacionCarrera {
    nombre_carrera:        string;
    Sobre_carrera:         string[];
    "Perfil profesional"?: string;
    "Perfil ocupacional"?: string[];
}

export interface PlanEstudio {
    numeroSemestre: string;
    materias:       Materia[];
}

export interface Materia {
    nombre:   String;
    creditos: string;
}


