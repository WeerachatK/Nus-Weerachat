let url = "https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("data :", data);
    let container = document.getElementById("container");
    // let container = document.getElementsByClassName("container");

    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      console.log("element :", element);
      //   container.innerHTML += element;
      let div1 = document.createElement("div")
      div1.innerHTML += `<h2> จังหวัด: ${element.province} </h2> 
      <dd> รายใหม่: ${element.new_case} 
      <dd> ยอดรวม: ${element.total_case} 
      <dd> ยอดผู้เสียชีวิต: ${element.total_death}
      <dd> ณ วันที่: ${element.txn_date} 
      <br>`;
      //                              data[i].id
      container.appendChild(div1).style.boxShadow = "0 6px 6px rgba(0, 0, 0, 0.3), 0 6px 6px rgba(0, 0, 0, 0.22)"; //เงา
      container.appendChild(div1).style.borderRadius = "20px"; //ลบมุม
      container.appendChild(div1).style.margin =  "15px auto"; //ขอบไรไม่รู้
      container.appendChild(div1).style.width= "300px"; //ขนาดกล่อง
      container.appendChild(div1).style.height = "190px"; //ขนาดกล่อง
    //   container.setAttribute(div1).style
      container.style.display = "flex"; //วางเต็มแนวนอน
      container.style.flexWrap = "wrap"; //ขึ้นบรรทัดใหม่ถถ้าเต็มบรรทัด
      container.style.margin = "15px"; //ขอบไรบุ
    }
  });