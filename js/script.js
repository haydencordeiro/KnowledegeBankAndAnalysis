var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;

    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
// var s;
function toggle2() {
  var temp1 = document.getElementById("mySidenav");
  var temp2 = document.getElementById("flexArea");
  (style = window.getComputedStyle(temp1)),
    (width = style.getPropertyValue("width"));
  (style = window.getComputedStyle(temp2)),
    (ml = style.getPropertyValue("margin-left"));
  // console.log(ml);
  // console.log(width);
  if (width == "0px") {
    temp1.style.width = "250px";
  } else {
    temp1.style.width = "0px";
  }
  if (ml == "0px") {
    temp2.style.marginLeft = "250px";
  } else {
    temp2.style.marginLeft = "0px";
  }

  // if (s == 0) {
  //   openNav();
  //   s = 1;
  // } else {
  //   closeNav();
  //   s = 0;
  // }
}
// function openNav() {
//   document.getElementById("mySidenav").style.width = "250px";
//   document.getElementById("flexArea").style.marginLeft = "250px";
// }

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
//   document.getElementById("flexArea").style.marginLeft = "0";
// }
function toggleF() {
  try {
    var temp3 = document.getElementsByClassName("openbtn")[0];
    temp3.className = "openbtnhide";
  } catch {
    var temp3 = document.getElementsByClassName("openbtnhide")[0];
    temp3.className = "openbtn";
  }
  var temp1 = document.getElementById("mySidenav");
  var temp2 = document.getElementById("flexArea");
  (style = window.getComputedStyle(temp1)),
    (width = style.getPropertyValue("width"));
  (style = window.getComputedStyle(temp2)),
    (ml = style.getPropertyValue("margin-left"));
  // console.log(ml);
  // console.log(width);
  if (width == "0px") {
    temp1.style.width = "250px";
  } else {
    temp1.style.width = "0px";
  }
  if (ml == "0px") {
    temp2.style.marginLeft = "250px";
  } else {
    temp2.style.marginLeft = "0px";
  }
  var UserNav = document.getElementById("usernav");
  UserNav.classList.toggle("usernavhide");
  // if (s == 0) {
  //   openNav();
  //   s = 1;
  // } else {
  //   closeNav();
  //   s = 0;
  // }
}




//  make the iframe full height
var buffer = 75; //scroll bar buffer
var iframe = document.getElementById('ifm');

function pageY(elem) {
    return elem.offsetParent ? (elem.offsetTop + pageY(elem.offsetParent)) : elem.offsetTop;
}

function resizeIframe() {
    var height = document.documentElement.clientHeight;
    var width = document.documentElement.clientWidth;
    height -= pageY(document.getElementById('ifm')) + buffer;
    // width -= pageX(document.getElementById('ifm')) + buffer;
    height = (height < 0) ? 0 : height;
    width = (width < 0) ? 0 : width;
    document.getElementById('ifm').style.height = height + 'px';
    document.getElementById('ifm').style.width = width + 'px';
}

// .onload doesn't work with IE8 and older.
// if (iframe.attachEvent) {
//     iframe.attachEvent("onload", resizeIframe);
// } else {
//     iframe.onload = resizeIframe;
// }

// window.onresize = resizeIframe;


resizeIframe()


// end iframe resize


// start working with data

dataDict={
  'Home Office Industrial Automation':{
    'folder_names':['emails','folder2'],
    'sheet_names':[['HOA','media and entertainment'],['sheet1','sheet2']],
    'sheet_urls':[["https://docs.google.com/spreadsheets/d/12kH_20ogu-DSU2VK8ivOxyyYr9QN3dtdlf515wMbejM/edit#gid=236527807","https://docs.google.com/spreadsheets/d/12kH_20ogu-DSU2VK8ivOxyyYr9QN3dtdlf515wMbejM/edit#gid=220447353"],
    ["https://docs.google.com/spreadsheets/d/12kH_20ogu-DSU2VK8ivOxyyYr9QN3dtdlf515wMbejM/edit#gid=236527807","https://docs.google.com/spreadsheets/d/12kH_20ogu-DSU2VK8ivOxyyYr9QN3dtdlf515wMbejM/edit#gid=220447353"]]

  },
  'sector2':{
    'folder_names':['folder3','folder4'],
    'sheet_names':[['sheet3','sheet4'],['sheet3','sheet4']],
    'sheet_urls':[["https://docs.google.com/spreadsheets/d/12kH_20ogu-DSU2VK8ivOxyyYr9QN3dtdlf515wMbejM/edit#gid=236527807","https://docs.google.com/spreadsheets/d/12kH_20ogu-DSU2VK8ivOxyyYr9QN3dtdlf515wMbejM/edit#gid=220447353"],
    ["https://docs.google.com/spreadsheets/d/12kH_20ogu-DSU2VK8ivOxyyYr9QN3dtdlf515wMbejM/edit#gid=236527807","https://docs.google.com/spreadsheets/d/12kH_20ogu-DSU2VK8ivOxyyYr9QN3dtdlf515wMbejM/edit#gid=220447353"]]
  },
} 

// create navabar logic
const keys = Object.keys(dataDict);

var contentInNav=`<h3 class="logo">Company Name</h3>`;
const sideNav=document.getElementById('mySidenav');
console.log(sideNav)

function createSheetsList(fldrname,sectorName){
  var tempSheetListmain=dataDict[fldrname]['sheet_names']
  var tempSheetfldrmain=dataDict[fldrname]['folder_names']
  var tempSheetList2main=dataDict[fldrname]['sheet_urls']
  for(var j=0;j<tempSheetListmain.length;j++){
    
    var temp=""
    var tempSheetList=dataDict[fldrname]['sheet_names'][j]
    var tempSheetList2=dataDict[fldrname]['sheet_urls'][j]
    contentInNav+=`<a class="folder ${sectorName}" style="display:none"><h4 style="color:red;" onclick="onFolderClick('${tempSheetfldrmain[j]}')">${tempSheetfldrmain[j] }</h4></a>`
    for(var i=0;i<tempSheetList.length;i++){

    contentInNav+=`<a href="javascript:changeSheet('${tempSheetList2[i]}')" style="display:none" class="sheet ${tempSheetfldrmain[j]}"><button class=""><i class="fa fa-file"></i>
    ${tempSheetList[i]}</button></a>`;
  }
  
}
}

function createNavBar(){

  for(var i=0;i<keys.length;i++){
    contentInNav+=`<h4 style="color:white;text-align:center;" onclick="onSectorClick('${keys[i]}')">${keys[i]}</h4>`
    createSheetsList(keys[i],keys[i])
  }

  sideNav.innerHTML=contentInNav;

}

createNavBar()

function changeSheet(sheetLink) {

  var frame = document.getElementById('ifm');
  frame.src = sheetLink;

}


function onSectorClick(sectorName){
  var eles=document.getElementsByClassName(sectorName);
  // console.log(eles);
  var allTags=document.getElementsByClassName('folder');
  console.log(allTags);

  for(var i=0;i<allTags.length;i++){
    allTags[i].style.display="none";
  

}
var allTags=document.getElementsByClassName('sheet');

console.log(allTags);

for(var i=0;i<allTags.length;i++){
  allTags[i].style.display="none";


}
  for(var i=0;i<eles.length;i++){

      eles[i].style.display="block";

  }
}




function onFolderClick(fldrname){
  var eles=document.getElementsByClassName(fldrname);
  // console.log(eles);
  var allTags=document.getElementsByClassName('sheet');

  console.log(allTags);

  for(var i=0;i<allTags.length;i++){
    allTags[i].style.display="none";
  

}
  for(var i=0;i<eles.length;i++){

      eles[i].style.display="block";

  }
}
