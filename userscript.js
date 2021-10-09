window.onload = () => {
    const button = document.querySelector("#load-trigger");
    button.onclick = loadData;
  };
  // 数据列表数据请求地址：https://run.mocky.io/v3/887f1d0f-049d-4036-9bc2-7e3a80c4a172
  // 联动列表数据请求地址：https://run.mocky.io/v3/74a21553-906c-4b8c-9168-ea6f0de0323b
  var mySelect = document.getElementById("#my-select");
  const loadData = () => {
    // 请在此函数编写相关逻辑
    fetch("https://run.mocky.io/v3/887f1d0f-049d-4036-9bc2-7e3a80c4a172")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        var mySelect = document.querySelector("#my-select");
        let html = "";
        data.forEach((item) => {
          html += `<option value="${item.value}">${item.label}</option>`;
        });
        mySelect.innerHTML = html;
      });
  };
  
  function changeProvince() {
    fetch("https://run.mocky.io/v3/74a21553-906c-4b8c-9168-ea6f0de0323b")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        var linkSelect = document.querySelector("#link-select");
        let html = "";
        data.forEach((item) => {
          html += `<option value="${item.value}">${item.label}</option>`;
        });
        linkSelect.innerHTML = html;
      });
  }