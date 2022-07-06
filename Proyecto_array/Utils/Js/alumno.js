 class alumno{
    nombre;
    apellido;
    edad;
    sexo;
    nacionalidad;
    constructor(nombre,apellido,edad,sexo,nacionalidad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.sexo=sexo;
        this.nacionalidad=nacionalidad;
}
mostrarDatos(){
    console.log(`Nombre ${this.nombre}
    Apellido ${this.apellido}
    Edad ${this.edad}
    Sexo ${this.sexo}
    Nacionalidad ${this.nacionalidad}`)
}
get getNombre(){
    return this.nombre;
}
set setNombre (nombre){
    this.nombre=nombre;
}

}