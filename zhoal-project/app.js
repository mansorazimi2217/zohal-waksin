const calculate = () => {
  let gived = document.getElementById("gived").value;
  let acc = document.getElementById("acc").value;

  if (Number(acc) > Number(gived)) {
    alert("تعداد تصدیق شده نمی تواند از گرفته شده ها زیادتر باشد!");
    gived = document.getElementById("gived").value = "";
    acc = document.getElementById("acc").value = "";
    return;
  }

  if (gived == "" || acc == "") {
    alert("ورودی هارا وارد نمایید!");
  } else {
    let res = ((Number(gived) - Number(acc)) / Number(gived)) * 100;
    document.getElementById("res").innerHTML = Math.round(res) + "%";
    gived = document.getElementById("gived").value = "";
    acc = document.getElementById("acc").value = "";
  }
};
