function getAdmin(map) {
    let admins = [];
    for ([key, value] of map ) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Tiago', 'Admin');
usuarios.set('Fernando', 'User');
usuarios.set('Maria', 'Admin');

console.log(getAdmin(usuarios));