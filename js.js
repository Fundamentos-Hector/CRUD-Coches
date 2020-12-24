const garage = [
    {    
        id: 1,   
        marca: 'BMW',
        model: 1990,
        color: 'Azul-Negro',
        año: 2000,        
        precio: 2000000         
    },
    {
        id: 2,
        marca: 'Audi',
        model: 2015,
        color: 'Rojo',
        año: 2018,        
        precio: 3000000
    },
    {
        id: 3,
        marca: 'Renault',
        model: 2000,
        color: 'Blanco',
        año: 2016,        
        precio: 432000000
    },
    {
        id: 4,
        marca: 'Ford',
        model: 1999,
        color: 'Verde',
        año: 2013,        
        precio: 23000
    },
    {
        id: 5,
        marca: 'Kia',
        model: 2019,
        color: 'Negro',
        año: 2020,        
        precio: 23000000
    },
];

function printCars() {
    
    const container = document.getElementById('container-cars');               
    let html = '';
    garage.forEach((garage) => {
        html += `<tr>
                    <td>${garage.marca}</td> 
                    <td>${garage.model}</td>
                    <td>${garage.color}</td> 
                    <td>${garage.año}</td>
                    <td>${garage.precio}</td>
                    <td>
                        <button onclick = "deleteCars(${garage.id})" class="btn btn-danger">Delete</button>
                    </td>
                </tr>`
    })
    container.innerHTML = html;    
}

function deleteCars(id) {
    
    const index = garage.findIndex((garage) => garage.id == id );
    garage.splice(index, 1);
    console.log(garage);
    printCars();
    alert(`Se va a eliminar el ususario en la posision ${id}`);
}

function addCars() {
    //Obtiene el valor de input
    //Agrega el usuario al arreglo
    //Imprimo nuevamente los ususarios
    const inputMarca = document.getElementById('marca');
    const inputModel = document.getElementById('model');
    const inputColor = document.getElementById('color');
    const inputAño = document.getElementById('año');
    const inputPrecio = document.getElementById('precio');
    const marca = inputMarca.value;
    const model = inputModel.value;
    const color = inputColor.value;
    const año = inputAño.value;
    const precio = inputPrecio.value;
    

    const id = garage[garage.length-1].id + 1;
    const newCard = {
        marca : marca,
        model,
        color,
        año,
        precio,
        id
    }
    garage.push(newCard);
    printCars();  
    
    document.getElementById("form-cars").reset();
}

// function updateCars() {
//     let marca = 
//     let inputMarca = document.getElementById('marca')    
// }
printCars();

