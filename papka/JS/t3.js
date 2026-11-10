let players = [
    {
        name: "Кирилл",
        online: false,
        level: 21,
        class: "mage"
    },
     {
        name: "Роман",
        online: true,
        level: 47,
        class: "archer"
    },
     {
        name: "Кирилл",
        online: true,
        level: 130,
        class: "warrior"
    },

     {
        name: "Саша",
        online: false,
        level: 77,
        class: "archer"
    },
]

FindPlayer("Кирилл");

OnlinePlayers(players);

ProPlayers(players);

function ProPlayers(players){
    let pro = players.filter(function(players){
        return players.level >=50;
    })
    let result = pro.map(function(pro){
        return pro.name
    })
    console.log("Про-игроки: "+ result);
}

function OnlinePlayers(players){
    let online = players.filter(function(players){
        return players.online === true;
    })
     let onlineName = online.map(function(online){
        return online.name;
    })
    console.log("Игроки онлайн: "+ onlineName);
}

function FindPlayer(player) {
    let result = players.find(function(players){
        return players.name === player;
    })
    console.log(result);
}