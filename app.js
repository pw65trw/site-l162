let count = 0;
let toggleWebSite = false;
document.querySelector(".app").addEventListener("click", () => {
  document.querySelector(".app").classList.add("active");
  document.querySelector(".webSite").classList.remove("active");
  count = 0;
  const table = document.querySelector(".table");
  table.innerHTML = "";
  toggleWebSite = false;
  fetch("./data/data.json")
    .then((data) => data.json())
    .then((data) => {
      const avaBackgroud = [
        "background:linear-gradient(" +
          Math.floor(Math.random() * 180) +
          "deg,#693007,#c4590c)",
        "background:linear-gradient(" +
          Math.floor(Math.random() * 180) +
          "deg,#05abe3,#00706e)",
        "background:linear-gradient(" +
          Math.floor(Math.random() * 180) +
          "deg,#53B893,#095E3F)",
        "background:linear-gradient(" +
          Math.floor(Math.random() * 180) +
          "deg,#9C204E,#D32A68)",
        "background:linear-gradient(" +
          Math.floor(Math.random() * 180) +
          "deg,#B67C78,#D15950)",
        "background:linear-gradient(" +
          Math.floor(Math.random() * 180) +
          "deg,#ca2222,#f98989)",
        // trop claire
        // "background:linear-gradient(" +
        //   Math.floor(Math.random() * 180) +
        //   "deg,#84fab0,#8fd3f4)",
      ];
      if (!toggleWebSite) {
        data.forEach((element) => {
          if (element.name != "Web") {
            table.innerHTML += `
                <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><h2>${element.name}</h2></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
                `;
            element[element.name].forEach((ele) => {
              if (ele.Google) {
                ele.Google.forEach((eleg) => {
                  count++;
                  table.innerHTML += `
                  <tr>
                      <td data-label="User">
                          <div class="ct-01__avatar">
                              <div class="ct-01__ava" style=${avaBackgroud[Math.floor(Math.random() * avaBackgroud.length).toString(16)]}>${eleg.name.charAt(0)}</div>
                                  <div>
                                      <div class="ct-01__name">${eleg.name}</div>
                                  </div>
                              </div>
                      </td>
                              <td data-label="Role"><span class="ct-01__role">${eleg.type}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${eleg.havePos ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${eleg.havePos ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${eleg.haveCamera ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${eleg.haveCamera ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${eleg.haveMike ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${eleg.haveMike ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${eleg.havePicture ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${eleg.havePicture ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${eleg.haveMusic ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${eleg.haveMusic ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${eleg.haveNotification ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${eleg.haveNotification ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${eleg.haveProximityDevice ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${eleg.haveProximityDevice ? "Oui" : "Non"}</span></td>
                  </tr>
              `;
                });
              } else {
                count++;
                table.innerHTML += `
                  <tr>
                      <td data-label="User">
                          <div class="ct-01__avatar">
                              <div class="ct-01__ava" style=${avaBackgroud[Math.floor(Math.random() * avaBackgroud.length).toString(16)]}>${ele.name.charAt(0)}</div>
                                  <div>
                                      <div class="ct-01__name">${ele.name}</div>
                                  </div>
                              </div>
                      </td>
                              <td data-label="Role"><span class="ct-01__role">${ele.type}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.havePos ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.havePos ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.haveCamera ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.haveCamera ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.haveMike ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.haveMike ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.havePicture ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.havePicture ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.haveMusic ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.haveMusic ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.haveNotification ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.haveNotification ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.haveProximityDevice ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.haveProximityDevice ? "Oui" : "Non"}</span></td>
                  </tr>
          `;
              }
            });
          }
        });
      } else {
        data[9]["Web"].forEach((ele) => {
          count++;
          table.innerHTML += `
                  <tr>
                      <td data-label="User">
                          <div class="ct-01__avatar">
                              <div class="ct-01__ava" style=${avaBackgroud[Math.floor(Math.random() * avaBackgroud.length).toString(16)]}>${ele.name.charAt(0)}</div>
                                  <div>
                                      <div class="ct-01__name">${ele.name}</div>
                                  </div>
                              </div>
                      </td>
                              <td data-label="Role"><span class="ct-01__role">${ele.type}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.havePos ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.havePos ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.haveCamera ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.haveCamera ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.haveMike ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.haveMike ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.havePicture ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.havePicture ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.haveMusic ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.haveMusic ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.haveNotification ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.haveNotification ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.haveProximityDevice ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.haveProximityDevice ? "Oui" : "Non"}</span></td>
                  </tr>
          `;
        });
      }

      table.innerHTML += `
                <tr>
              <td><h2>Lenght: ${count * 9}</h2></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
                `;
    });
});
document.querySelector(".webSite").addEventListener("click", () => {
  document.querySelector(".app").classList.remove("active");
  document.querySelector(".webSite").classList.add("active");
  count = 0;
  const table = document.querySelector(".table");
  table.innerHTML = "";
  toggleWebSite = true;
  fetch("./data/data.json")
    .then((data) => data.json())
    .then((data) => {
      const avaBackgroud = [
        "background:linear-gradient(" +
          Math.floor(Math.random() * 180) +
          "deg,#693007,#c4590c)",
        "background:linear-gradient(" +
          Math.floor(Math.random() * 180) +
          "deg,#05abe3,#00706e)",
        "background:linear-gradient(" +
          Math.floor(Math.random() * 180) +
          "deg,#53B893,#095E3F)",
        "background:linear-gradient(" +
          Math.floor(Math.random() * 180) +
          "deg,#9C204E,#D32A68)",
        "background:linear-gradient(" +
          Math.floor(Math.random() * 180) +
          "deg,#B67C78,#D15950)",
        "background:linear-gradient(" +
          Math.floor(Math.random() * 180) +
          "deg,#ca2222,#f98989)",
        // trop claire
        // "background:linear-gradient(" +
        //   Math.floor(Math.random() * 180) +
        //   "deg,#84fab0,#8fd3f4)",
      ];
      if (!toggleWebSite) {
        data.forEach((element) => {
          if (element.name != "Web") {
            table.innerHTML += `
                <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><h2>${element.name}</h2></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
                `;
            element[element.name].forEach((ele) => {
              if (ele.Google) {
                ele.Google.forEach((eleg) => {
                  count++;
                  table.innerHTML += `
                  <tr>
                      <td data-label="User">
                          <div class="ct-01__avatar">
                              <div class="ct-01__ava" style=${avaBackgroud[Math.floor(Math.random() * avaBackgroud.length).toString(16)]}>${eleg.name.charAt(0)}</div>
                                  <div>
                                      <div class="ct-01__name">${eleg.name}</div>
                                  </div>
                              </div>
                      </td>
                              <td data-label="Role"><span class="ct-01__role">${eleg.type}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${eleg.havePos ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${eleg.havePos ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${eleg.haveCamera ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${eleg.haveCamera ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${eleg.haveMike ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${eleg.haveMike ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${eleg.havePicture ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${eleg.havePicture ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${eleg.haveMusic ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${eleg.haveMusic ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${eleg.haveNotification ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${eleg.haveNotification ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${eleg.haveProximityDevice ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${eleg.haveProximityDevice ? "Oui" : "Non"}</span></td>
                  </tr>
              `;
                });
              } else {
                count++;
                table.innerHTML += `
                  <tr>
                      <td data-label="User">
                          <div class="ct-01__avatar">
                              <div class="ct-01__ava" style=${avaBackgroud[Math.floor(Math.random() * avaBackgroud.length).toString(16)]}>${ele.name.charAt(0)}</div>
                                  <div>
                                      <div class="ct-01__name">${ele.name}</div>
                                  </div>
                              </div>
                      </td>
                              <td data-label="Role"><span class="ct-01__role">${ele.type}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.havePos ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.havePos ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.haveCamera ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.haveCamera ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.haveMike ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.haveMike ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.havePicture ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.havePicture ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.haveMusic ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.haveMusic ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.haveNotification ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.haveNotification ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.haveProximityDevice ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.haveProximityDevice ? "Oui" : "Non"}</span></td>
                  </tr>
          `;
              }
            });
          }
        });
      } else {
        table.innerHTML += `
                <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><h2>Site web</h2></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
                `;
        data[9]["Web"].forEach((ele) => {
          count++;
          table.innerHTML += `
                  <tr>
                      <td data-label="User">
                          <div class="ct-01__avatar">
                              <div class="ct-01__ava" style=${avaBackgroud[Math.floor(Math.random() * avaBackgroud.length).toString(16)]}>${ele.name.charAt(0)}</div>
                                  <div>
                                      <div class="ct-01__name">${ele.name}</div>
                                  </div>
                              </div>
                      </td>
                              <td data-label="Role"><span class="ct-01__role">${ele.type}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.havePos ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.havePos ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.haveCamera ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.haveCamera ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.haveMike ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.haveMike ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.havePicture ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.havePicture ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.haveMusic ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.haveMusic ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.haveNotification ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.haveNotification ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.haveProximityDevice ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.haveProximityDevice ? "Oui" : "Non"}</span></td>
                  </tr>
          `;
        });
      }

      table.innerHTML += `
                <tr>
              <td><h2>Lenght: ${count * 9}</h2></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
                `;
    });
});
fetch("./data/data.json")
  .then((data) => data.json())
  .then((data) => {
    const avaBackgroud = [
      "background:linear-gradient(" +
        Math.floor(Math.random() * 180) +
        "deg,#693007,#c4590c)",
      "background:linear-gradient(" +
        Math.floor(Math.random() * 180) +
        "deg,#05abe3,#00706e)",
      "background:linear-gradient(" +
        Math.floor(Math.random() * 180) +
        "deg,#53B893,#095E3F)",
      "background:linear-gradient(" +
        Math.floor(Math.random() * 180) +
        "deg,#9C204E,#D32A68)",
      "background:linear-gradient(" +
        Math.floor(Math.random() * 180) +
        "deg,#B67C78,#D15950)",
      "background:linear-gradient(" +
        Math.floor(Math.random() * 180) +
        "deg,#ca2222,#f98989)",
      // trop claire
      // "background:linear-gradient(" +
      //   Math.floor(Math.random() * 180) +
      //   "deg,#84fab0,#8fd3f4)",
    ];
    const table = document.querySelector(".table");
    if (!toggleWebSite) {
      data.forEach((element) => {
        if (element.name != "Web") {
          table.innerHTML += `
                <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><h2>${element.name}</h2></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
                `;
          element[element.name].forEach((ele) => {
            if (ele.Google) {
              ele.Google.forEach((eleg) => {
                count++;
                table.innerHTML += `
                  <tr>
                      <td data-label="User">
                          <div class="ct-01__avatar">
                              <div class="ct-01__ava" style=${avaBackgroud[Math.floor(Math.random() * avaBackgroud.length).toString(16)]}>${eleg.name.charAt(0)}</div>
                                  <div>
                                      <div class="ct-01__name">${eleg.name}</div>
                                  </div>
                              </div>
                      </td>
                              <td data-label="Role"><span class="ct-01__role">${eleg.type}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${eleg.havePos ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${eleg.havePos ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${eleg.haveCamera ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${eleg.haveCamera ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${eleg.haveMike ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${eleg.haveMike ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${eleg.havePicture ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${eleg.havePicture ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${eleg.haveMusic ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${eleg.haveMusic ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${eleg.haveNotification ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${eleg.haveNotification ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${eleg.haveProximityDevice ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${eleg.haveProximityDevice ? "Oui" : "Non"}</span></td>
                  </tr>
              `;
              });
            } else {
              count++;
              table.innerHTML += `
                  <tr>
                      <td data-label="User">
                          <div class="ct-01__avatar">
                              <div class="ct-01__ava" style=${avaBackgroud[Math.floor(Math.random() * avaBackgroud.length).toString(16)]}>${ele.name.charAt(0)}</div>
                                  <div>
                                      <div class="ct-01__name">${ele.name}</div>
                                  </div>
                              </div>
                      </td>
                              <td data-label="Role"><span class="ct-01__role">${ele.type}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.havePos ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.havePos ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.haveCamera ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.haveCamera ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.haveMike ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.haveMike ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.havePicture ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.havePicture ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.haveMusic ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.haveMusic ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.haveNotification ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.haveNotification ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.haveProximityDevice ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.haveProximityDevice ? "Oui" : "Non"}</span></td>
                  </tr>
          `;
            }
          });
        }
      });
    } else {
      data[9]["Web"].forEach((ele) => {
        count++;
        table.innerHTML += `
                  <tr>
                      <td data-label="User">
                          <div class="ct-01__avatar">
                              <div class="ct-01__ava" style=${avaBackgroud[Math.floor(Math.random() * avaBackgroud.length).toString(16)]}>${ele.name.charAt(0)}</div>
                                  <div>
                                      <div class="ct-01__name">${ele.name}</div>
                                  </div>
                              </div>
                      </td>
                              <td data-label="Role"><span class="ct-01__role">${ele.type}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.havePos ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.havePos ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.haveCamera ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.haveCamera ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.haveMike ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.haveMike ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.havePicture ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.havePicture ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.haveMusic ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.haveMusic ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.haveNotification ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.haveNotification ? "Oui" : "Non"}</span></td>
                              <td data-label="Status"><span class="ct-01__badge ${ele.haveProximityDevice ? "ct-01__badge--active" : "ct-01__badge--danger"}"><span class="ct-01__dot"></span>${ele.haveProximityDevice ? "Oui" : "Non"}</span></td>
                  </tr>
          `;
      });
    }

    table.innerHTML += `
                <tr>
              <td><h2>Lenght: ${count * 9}</h2></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
                `;
  });
