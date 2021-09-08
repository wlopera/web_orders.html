// Variables
let open = document.getElementById("open");
let data = [
  {
    id: 8,
    ruc: "22222222",
    name: "Gonzalo Marquez",
    date: "08/09/2021",
    microService: "banca-api",
    api: "Banca asegurada",
    successfull: 10,
    failed: 0,
  },
  {
    id: 10,
    ruc: "22222222",
    name: "Gonzalo Marquez",
    date: "08/09/2021",
    microService: "banca-api",
    api: "Panaderia asegurada",
    successfull: 10,
    failed: 0,
  },
  {
    id: 1,
    ruc: "8-579-357",
    name: "Leonel Messi",
    date: "09/08/2021",
    microService: "clients-api",
    api: "GET /clients-api/api/v1/black-list",
    successfull: 3,
    failed: 0,
  },
  {
    id: 3,
    ruc: "8-579-357",
    name: "Leonel Messi",
    date: "09/08/2021",
    microService: "apertura-api",
    api: "POST /clients-api/api/v1/black-list",
    successfull: 9,
    failed: 0,
  },
  {
    id: 4,
    ruc: "8-579-357",
    name: "Leonel Messi",
    date: "10/08/2021",
    microService: "clients-api",
    api: "POST /clients-api/api/v1/black-list",
    successfull: 3,
    failed: 0,
  },
  {
    id: 5,
    ruc: "8-579-357",
    name: "Leonel Messi",
    date: "12/08/2021",
    microService: "apertura-api",
    api: "GET /clients-api/api/v1/black-list",
    successfull: 6,
    failed: 0,
  },

  {
    id: 6,
    ruc: "8-564-657",
    name: "Cristiano Ronaldo",
    date: "12/08/2021",
    microService: "clients-api",
    api: "POST /clients-api/api/v1/black-list",
    successfull: 15,
    failed: 0,
  },
  {
    id: 7,
    ruc: "11111111111",
    name: "Luis Aparicio",
    date: "08/09/2021",
    microService: "service-api",
    api: "servicio de telecompra",
    successfull: 10,
    failed: 0,
  },
  {
    id: 9,
    ruc: "11111111111",
    name: "Luis Aparicio",
    date: "08/09/2021",
    microService: "service-api",
    api: "Abastos de telecompra",
    successfull: 10,
    failed: 0,
  },
  {
    id: 2,
    ruc: "8-564-657",
    name: "Cristiano Ronaldo",
    date: "04/08/2021",
    microService: "clients-api",
    api: "POST /clients-api/api/v1/black-list",
    successfull: 2,
    failed: 0,
  },
];

const orderDataByItem = (data, item) => {
  return data.sort((a, b) => (a[item] > b[item] ? 1 : -1));
};

const groupDataByKey = (data, key) => {
  return data.reduce(function (acc, item) {
    (acc[item[key]] = acc[item[key]] || []).push(item);
    return acc;
  }, {});
};

const opening = () => {
  console.log("data", [...data]);

  const names = orderDataByItem(data, "name");
  console.log("names", names);

  const groupNames = groupDataByKey(data, "name");

  console.log("groupNames", groupNames);

  let dates = [];
  for (item in groupNames) {
    // console.log(123, groupNames[item]);
    dates.push(orderDataByItem(groupNames[item], "date"));
  }

  console.log("dates", dates);

  const groupDates = dates.map((item) => groupDataByKey(item, "date"));

  console.log("groupDates", groupDates);

  let microServices = [];
  groupDates.map((item) => {
    for (value in item) {
      // console.log(123, value, item[value]);
      microServices.push(orderDataByItem(item[value], "date"));
    }
  });

  console.log("microServices", microServices);

  const groupMicroServices = microServices.map((item) =>
    groupDataByKey(item, "microService")
  );

  console.log("groupMicroServices", groupMicroServices);

  let apis = [];
  groupMicroServices.map((item) => {
    for (value in item) {
      console.log(123, value, item[value]);
      apis.push(orderDataByItem(item[value], "api"));
    }
  });

  console.log("apis", apis);

  let response = [];
  apis.forEach((item) => item.forEach((value) => response.push(value)));

  console.log("response", response);

  return response;
};

open.addEventListener("click", () => {
  const response = opening();
});

const genera_tabla = () => {
  // Obtener la referencia del elemento body
  var body = document.getElementsByTagName("body")[0];

  // Crea un elemento <table> y un elemento <tbody>
  var tabla = document.createElement("table");
  var tblBody = document.createElement("tbody");

  const response = opening();
  console.log(12345, response);
  // Crea las celdas
  for (var i = 0; i < response.length; i++) {
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");

    // Crea un elemento <td> y un nodo de texto, haz que el nodo de
    // texto sea el contenido de <td>, ubica el elemento <td> al final
    // de la hilera de la tabla
    var celda = document.createElement("td");
    var textoCelda = document.createTextNode(response[i].id);
    celda.appendChild(textoCelda);
    hilera.appendChild(celda);

    var celda = document.createElement("td");
    var textoCelda = document.createTextNode(response[i].ruc);
    celda.appendChild(textoCelda);
    hilera.appendChild(celda);

    var celda = document.createElement("td");
    var textoCelda = document.createTextNode(response[i].name);
    celda.appendChild(textoCelda);
    hilera.appendChild(celda);

    var celda = document.createElement("td");
    var textoCelda = document.createTextNode(response[i].date);
    celda.appendChild(textoCelda);
    hilera.appendChild(celda);

    var celda = document.createElement("td");
    var textoCelda = document.createTextNode(response[i].microService);
    celda.appendChild(textoCelda);
    hilera.appendChild(celda);

    var celda = document.createElement("td");
    var textoCelda = document.createTextNode(response[i].api);
    celda.appendChild(textoCelda);
    hilera.appendChild(celda);

    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
  }

  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "2");
};
