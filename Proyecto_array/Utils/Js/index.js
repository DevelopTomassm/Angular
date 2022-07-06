let alumnos=[];
console.log(alumnos.length);
alumnos.push(1);//agrega el item al final del al array
alumnos.push(2);
alumnos-push(3);
alumnos.push(4,5,6,7,8);
console.log(alumnos);
alumnos.pop();//elimina el ultimo item del array
alumnos.unshift(0,3,4,56,2)//agrega el elemento al principio del array
alumnos.shift();//elimina el item del principio del array
alumnos.forEach((element,pos) => {
    if(pos%2==0){
        console.log('${pos} - ${element}');
    }
    
});