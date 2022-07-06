
let alumnos=[
    new alumno("tomi","sal",21,"masculino","arg"),
    {nombre:"Tomas",apellido:"Salcedo",edad:20,sexo:"Masculino"},
    {nombre:"Julian",apellido:"Fernandez",edad:22,sexo:"Masculino"},
    {nombre:"Marcos",apellido:"Dadamo",edad:45,sexo:"Masculino"},
    {nombre:"Gerardo",apellido:"Dominguez",edad:34,sexo:"Masculino"},
    {nombre:"Gema",apellido:"Rodriguez",edad:45,sexo:"Femenino"},
    {nombre:"Araceli",apellido:"Sanchez",edad:22,sexo:"Femenino"},
    {nombre:"Andrea",apellido:"Perez",edad:25,sexo:"Femenino"},
    {nombre:"Miriam",apellido:"Martin",edad:42,sexo:"Femenino"}
    
];
console.log(alumnos);
let alumnoFiltrado=[];

/* alumnos.forEach(element => {
    if(element.sexo=="Masculino"){
        alumnoFiltrado.push(element)
    }

}); */

function filtrarDatos(sexo) {
    alumnoFiltrado= alumnos.filter((Element)=>{return Element.sexo==sexo});

return alumnoFiltrado;
    
}
alumnoFiltrado=filtrarDatos("Masculino");
alumnos[0].mostrarDatos();
alumnos[0].setNombre="Nuevo";
alumnos[0].getNombre;