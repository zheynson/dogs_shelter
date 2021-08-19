class User {
    constructor(name,pas) {
        this.pas = pas
        this.name = name
    }


    voice(){
        console.log('ты вызвал консоль!');
    }
}

const Stas = new User('Stanislav',112211);
