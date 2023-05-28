// Declared variables limited to the scope of a block statement by retrieving element by its DOM ID.
let serverNameInput = document.getElementById('serverName');
let serverForm = document.getElementById('serverForm');
// Declared a variable limited to the scope of a block statement by retrieving an elent using CSS selector query.
let serverTbody = document.querySelector('#serverTable tbody');
// Declared variables limited to the scope of a block statement by equal to {}/0.
let allServers = {};
let serverId = 0;
// Implement serverForm to eventlistener with submit to serverinfo function.
serverForm.addEventListener('submit', submitServerInfo);

// create server object and add to allServers, update html and reset input.
function submitServerInfo(evt) {
  // when running tests there is no event.
  if (evt) evt.preventDefault(); 
// Value input with serverName variable.
  let serverName = serverNameInput.value;

  if (serverName !== '') {
    serverId++;
    allServers['server' + serverId] = { serverName };

    updateServerTable();

    serverNameInput.value = '';
  }
}

// Create table row element and pass to appendTd function with input value
function updateServerTable() {
  serverTbody.innerHTML = '';

  for (let key in allServers) {
    let curServer = allServers[key];

    let newTr = document.createElement('tr');
    newTr.setAttribute('id', key);

    let tipAverage = sumPaymentTotal('tipAmt') / Object.keys(allServers).length;

    appendTd(newTr, curServer.serverName);
    appendTd(newTr, '$' + tipAverage.toFixed(2));
    appendDeleteBtn(newTr);

    serverTbody.append(newTr);
  }
}
