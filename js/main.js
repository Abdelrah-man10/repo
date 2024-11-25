var arr = [];
var WebsiteName = document.getElementById("webName");
var WebsiteLink = document.getElementById("webLink");
function add() {
  if (validationWebName() && validationWebLink()) {
    var obj = {
      WebsiteName: WebsiteName.value,
      WebsiteLink: WebsiteLink.value,
    };
    arr.push(obj);
    display();
  }
}
function display() {
  var cartona = "";
  for (var i = 0; i < arr.length; i++) {
    cartona += `

                <tr>
                    <th scope="col" id="CCC">${i + 1}</th>
                    <th scope="col" id="DDD">${arr[i].WebsiteName}</th>
                    <th scope="col ">
                        <a href="${
                          arr[i].WebsiteLink
                        }" class="btn btn-success" onclick="visit(${i})"
                        target="_blank" >
                            <i class="fa-solid fa-eye bg-transparent me-2"></i><span class="bg-transparent">visit</span>
                        </a>
                    </th>

                    <th scope="col">
                        <button class="btn btn-danger" onclick="theDelete(${i})">
                            <i class="fa-solid fa-trash-can bg-transparent me-2"></i><span
                                class="bg-transparent">delete</span>
                        </button>
                    </th>
                </tr>

   `;
  }
  document.getElementById("tbody").innerHTML = cartona;
}

function theDelete(i) {
  arr.splice(i, 1);
  console.log(arr);
  display();
}
function visit(i) {
  console.log(i);
}
//validation web name
function validationWebName() {
  let val = WebsiteName.value;
  let regex = /^[a-zA-Z0-9]{3,20}$/;
  if (regex.test(val)) {
    WebsiteName.classList.add("is-valid");
    WebsiteName.classList.remove("is-invalid");
    document.getElementById("nameMessage").classList.add("d-none");
    return true;
  } else {
    WebsiteName.classList.remove("is-valid");
    WebsiteName.classList.add("is-invalid");
    document.getElementById("nameMessage").classList.remove("d-none");
    return false;
  }
}
WebsiteName.addEventListener("input", validationWebName);
//validation web link
function validationWebLink() {
  let val = WebsiteLink.value;
  let regex =
    /^(https?:\/\/)(www\.)[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}(:\d+)?(\/[^\s])?(\?[^\s])?(#[^\s]*)?$/;
  if (regex.test(val)) {
    WebsiteLink.classList.add("is-valid");
    WebsiteLink.classList.remove("is-invalid");
    document.getElementById("linkMessage").classList.add("d-none");
    return true;
  } else {
    WebsiteLink.classList.remove("is-valid");
    WebsiteLink.classList.add("is-invalid");
    document.getElementById("linkMessage").classList.remove("d-none");
    return false;
  }
}
WebsiteLink.addEventListener("input", validationWebLink);
