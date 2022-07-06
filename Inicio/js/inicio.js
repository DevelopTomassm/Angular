let boton = document.querySelector("#btn_pulsar");
let inputNombre = document.querySelector("#input_nombre");
let inputTelefono = document.querySelector("#input_telefono");
let selectTipo= document.querySelector("#select_tipo");
let lis=document.querySelectorAll("#listaBuscado li");
let lista = document.querySelector("ul");
let h1 = document.querySelectorAll("h1");
console.log(h1);
//liBuscado.classList.add("#elemento_profesor");
//liBuscado.classList.remove("list-group-item");
/*for (let index = 0; index < h1.length; index++) {
    h1[index].innerText="Modificacion del DOM de h1"
    
}*/
h1.forEach((element, index) => {
  if (index % 2 == 0) {
    element.innerText = "Elemento par";
  } else {
    element.innerText = "Elemento impar";
  }
  console.log(index);
  console.log(element);
});

boton.addEventListener("click", (element, event) => {
    if(inputNombre.value.length!=0 && inputTelefono.value.length==9){
        //console.log(selectTipo.value);
        //console.log(inputNombre.value);
        lista.innerHTML += ` <li class='list-group-item '> ${inputNombre.value} -${inputTelefono.value} </li>`;
        lis=document.querySelectorAll("#listaBuscado li");
        lis.forEach((element,index)=>{
            element.addEventListener("click",(e)=>{
                console.log(list.innerHTML.value);
            })
        })

    }else {
        alert('No has introducido datos')
        

    }

 
});



//h1[0].innerText="Modificacion del DOM de h1"
