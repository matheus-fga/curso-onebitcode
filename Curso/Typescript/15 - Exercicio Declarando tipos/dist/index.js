var SPACESHIPS = [];
function showMenu() {
    var option;
    while (option != '1' && option != '2' && option != '3' && option != '4' && option != '5') {
        option = prompt("O que deseja fazer?\n\n1 - Cadastrar uma nave\n2 - Cadastrar um tripulante\n3 - Enviar uma nave \u00E0 miss\u00E3o\n4 - Listar as Naves\n5 - Sair do programa");
    }
    return option;
}
function createSpaceship(name, pilot, crewLimit) {
    var spaceship = {
        name: name,
        pilot: pilot,
        crewLimit: crewLimit,
        crew: [],
        inMission: false
    };
    SPACESHIPS.push(spaceship);
    alert("Nave ".concat(spaceship.name, " cadastrada."));
}
function addNewCrewMember(spaceshipName, crewMember) {
    var shipFound;
    SPACESHIPS.forEach(function (ship) {
        if (ship.name === spaceshipName) {
            shipFound = true;
            if (ship.crew.length < ship.crewLimit) {
                ship.crew.push(crewMember);
                alert('Tripulante Adicionado.');
            }
            else {
                alert('Número máximo de tripulantes excedido!');
            }
        }
    });
    !shipFound ? alert('Nave não encontrada!') : '';
}
function sendSpaceship(spaceshipName) {
    var shipFound;
    SPACESHIPS.forEach(function (ship) {
        var minCrewNumber = Math.floor(ship.crewLimit / 3);
        if (ship.name === spaceshipName) {
            shipFound = true;
            if (ship.inMission == true) {
                alert("Nave ".concat(ship.name, " j\u00E1 em miss\u00E3o."));
            }
            else if ((ship.inMission == false) && (ship.crew.length >= minCrewNumber)) {
                ship.inMission = true;
                alert("Nave ".concat(ship.name, " enviada."));
            }
            else {
                alert("N\u00FAmero m\u00EDnimo de tripulantes n\u00E3o atingido!");
            }
        }
    });
    !shipFound ? alert('Nave não encontrada!') : '';
}
function printSpaceships() {
    var message = '';
    SPACESHIPS.forEach(function (ship) {
        message += "Nome da Nave: ".concat(ship.name, " | Piloto: ").concat(ship.pilot, " | N\u00BA m\u00E1ximo de tripulantes: ").concat(ship.crewLimit, " | Em miss\u00E3o: ").concat(ship.inMission ? 'Sim' : 'Não', "\n");
        if (ship.crew.length > 0) {
            message += 'Tripulantes:\n';
            ship.crew.forEach(function (crew) {
                message += "Nome: ".concat(crew, "\n");
            });
        }
        message += '\n';
    });
    alert(message);
}
var option;
do {
    option = showMenu();
    switch (option) {
        case '1':
            var shipName = prompt('Insira o nome da nave.');
            var shipPilot = prompt('Insira o nome do piloto.');
            var shipCrewLimit = Number(prompt('Insira o número máximo de tripulantes.'));
            createSpaceship(shipName, shipPilot, shipCrewLimit);
            break;
        case '2':
            var shipToAddCrewMember = prompt('Insira o nome da nave onde o tripulante será adicionado.');
            var crewMember = prompt('Insira o nome do tripulante.');
            addNewCrewMember(shipToAddCrewMember, crewMember);
            break;
        case '3':
            var shipToBeSend = prompt('Insira o nome da nave que será enviada à missão.');
            sendSpaceship(shipToBeSend);
            break;
        case '4':
            printSpaceships();
            break;
    }
} while (option != '5');
