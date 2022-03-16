class Validator{
constructor() {
    this.validations = [
        'data-min-length',

    ]
}

//iniciar validação de tods os campos 
validate(form){
    //pegar os inputs
    let inputs = form.getElementsByTagName("input");


    //HTMLcollection -> array transformar propiedades em array 
    let inputsArray = [...inputs];

    inputsArray.forEach(function(input){
        for(let i= 0; this.validations.length > i; i++){
            if(input.getAttribute(this.validations[i]) != null){

                // data-min=length
                let method = this.validations[i].replace('data-', '').replace('-','');
                //valor do input
                let value = input.getAttribute(this.validations[i]);

                //invocar metodo
                this[method](input,value);
            }
        }
    },this);

}
//verifica se um input tem um numero minimo de caracteres
minlength(input, minValue) {
    let inputLength = input.value.length;

    let errorMessage = `o campo precisa ter pelo menos ${minValue} caracteres`;

    if(inputLength<minValue){
    this.printMessage(input, errorMessage);

    }

}
//metodo para imprimir error na tela
pintMessage(input,msg){
let template = document.querySelector('.error-validation').cloneNode(true);

template.textContent = msg;

let inputParent = input.parentNode;

template.classList.Remove('template');

inputParent.appendChild(template);

}
}



let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new Validator();


submit.addEventListener("click", function(e){

    e.preventDefault();

    validator.validate(form);

});