import { amf } from './mock/data_note.js';

var sizeMon = Object.keys(amf.severs).length;

var btnVis;

var servers = 
    {
        serverName: "My local PC", 
        serverIp: "localhost", 
        serverPort: "1212"
    }
;

var obtTest = [];

for(let i=1; i < sizeMon + 1; i++){
    cxmain.innerHTML += '<div class="well"><div class="main-header"><h3 class="page-header" id="server-' + i + '">' + servers.serverName + "-" + i + '</h3><button target="_top" class="visualizar" id="' + i + '"> V </button></div><h4 class="uptime bold">Uptime:<span id="uptime-server-' + i + '" class="text-warning">Warning for data..</span></h4><h4 class="cpuload bold">CPU Load:<span id="cpuload-server-' + i + '" class="text-warning">Warning for data..</span></h4><h4 class="ramusage bold">RAM Usage:<span id="ramusage-server-' + i + '" class="text-warning">Warning for data..</span></h4><p id="status-server-' + i + '" class="status text-warning">Connecting</p></div>';  
}

Object.keys(amf.severs).forEach(function(item) {
    setTimeout(function () {
        document.querySelector('#uptime-' + amf.severs[item].nome).innerHTML = " " + nowTime();
        document.querySelector('#uptime-' + amf.severs[item].nome).className = "text-info";
        document.querySelector('#cpuload-' + amf.severs[item].nome).innerHTML = " " + amf.severs[item].cpu;
        document.querySelector('#ramusage-' + amf.severs[item].nome).innerHTML = " " + amf.severs[item].ram;
        document.querySelector('#status-' + amf.severs[item].nome).innerHTML = "Connected";
        document.querySelector('#status-' + amf.severs[item].nome).className = "status text-success";
    }, 2000);
});

console.log(amf.severs[0]);

btnnewMon.addEventListener('click', function () {
    sizeMon++;
    cxmain.innerHTML += '<div class="well"><div class="main-header"><h3 class="page-header" id="server-' + sizeMon + '">My local PC-' + sizeMon + '</h3><button class="visualizar" id="' + sizeMon + '"> V </button></div><h4 class="uptime bold">Uptime:<span id="uptime-server-' + sizeMon + '" class="text-warning">Warning for data..</span></h4><h4 class="cpuload bold">CPU Load:<span id="cpuload-server-' + sizeMon + '" class="text-warning">Warning for data..</span></h4><h4 class="ramusage bold">RAM Usage:<span id="ramusage-server-' + sizeMon + '" class="text-warning">Warning for data..</span></h4><p id="status-server-' + sizeMon + '" class="status text-warning">Connecting</p></div>';
    
    NewMonitor();
});

var newcpu = amf.severs;
function NewMonitor() {
    var servN = prompt('SeverName', '');
    if(servN == "") {
        servN = `server-${sizeMon}`
    }
    var valcpu = Math.floor(Math.random()*10) + 1 +"%";
    var valram = "6.73 / 11.88GB";
    // obtTest.push({server: {"cpu":valcpu, "ram":valram, "serverName":servN}});
    newcpu.push ({"nome" : "server-" + sizeMon, "cpu":valcpu, "ram":valram, "serverName":servN}) ;

    console.log(newcpu);

    setTimeout(function () {
        document.querySelector('#server-' + sizeMon).innerHTML = " " + newcpu[sizeMon-1].serverName;
        document.querySelector('#uptime-server-' + sizeMon).innerHTML = " " + nowTime();
        document.querySelector('#uptime-server-' + sizeMon).className = "text-info";
        document.querySelector('#cpuload-server-' + sizeMon).innerHTML = " " + newcpu[sizeMon-1].cpu;
        document.querySelector('#ramusage-server-' + sizeMon).innerHTML = " " + newcpu[sizeMon-1].ram;
        document.querySelector('#status-server-' + sizeMon).innerHTML = "Connected";
        document.querySelector('#status-server-' + sizeMon).className = "status text-success";
    }, 2000);
}

// btnVis = document.body.querySelector('.visualizar');
document.body.addEventListener('click', function (item) {
    // console.log(newcpu[item].cpu);
    const elem = item.target;
    if (elem.className == 'visualizar') {
        console.log(item.path[0].id);
        console.log(newcpu[item.path[0].id-1]);
    }
});

function nowTime() {
    var nowtimes = new Date().getHours() + ' : ' + new Date().getMinutes() + ' : ' + new Date().getSeconds();
    return nowtimes;
}

// function RequestData(requestname, serverIp, serverPort, callback, index) {
//     $.post("https://" + serverIp + ":" + serverPort + "/",
//     {
//         request: requestname
//     }, function(data, status) {
//         callback(data, status, index);
//     }).fail(function() {
//         callback("", "", index);
//     });
// }

//Verificar essa parte depois
    // RequestData("uptime", servers[0].serverIp, servers[0].serverPort, function(data, status, index)
    // {
    //     if(data.length > 0) {
    //         upTimeValue.className = "text-info";
    //         upTimeValue.innerHTML = data;
    //         status.className = "status text-success";
    //         status.innerHTML = "Connected";
    //     } else {
    //         upTimeValue.className = "text-warning";
    //         upTimeValue.innerHTML = "Waiting for data..";
    //         status.className = "status text-danger";
    //         status.innerHTML = "No Connection";
    //     }
    // }); 

//UptimeData
// servers[0].uptimeElement = upTimeValue;
