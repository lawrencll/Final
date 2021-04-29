var display = document.body.querySelector(".display");
var nav = document.body.querySelector(".nav");
var pages = [
  {
    name:"Grade View",
    content:"Grade View"
  },
  {
    name:"Add Grade",
    content:"none"
  
  },
]

var list = [];

function validate(){
  var display = document.body.querySelector(".display");
  var messEle=document.body.querySelector(".valMess");
  var username=document.body.querySelector(".username").value;
  var password=document.body.querySelector(".password").value;
  
  if(username==="cool"&&password==="password"){
   messEle.innerHTML="";
   var userremove = document.getElementById("username");
   userremove.remove();
   var passremove = document.getElementById("password");
   passremove.remove();
   var valremove = document.getElementById("validate");
   valremove.remove();
   for(var i = 0; i<pages.length; i++){
     createPage(pages[i]);
    }
    contentWrite(pages[0].content);
  }
  else{
    messEle.innerHTML="Incorrect Login!"
  }
}
document.body.querySelector(".validate").addEventListener("click", function(){
  validate();
})



function createPage(pg){
  
  var display = document.body.querySelector(".display");
  var button = document.createElement("button");
  button.addEventListener("click", function(){
    contentWrite(pg.content, pg.name)
  })
  button.innerHTML=pg.name;
  nav.appendChild(button);
}

function contentWrite(wd,pg){
  var header = document.createElement("h1");
  
  display.innerHTML="";
  if(pg!=="Add Grade"){
    header.innerHTML=wd;
    
    display.appendChild(header);
    
    
    renderItems();
  }
  else {
    header.innerHTML=wd;
    viewPage();
    
  }
  
}


function viewPage(){
  var h1 = document.createElement("h1");
  h1.innerHTML="Add Grade";
  var add = document.createElement("button");
  
  add.innerHTML="Submit Grade";
  var student = document.createElement("input");
  student.setAttribute("type", "text");
  student.setAttribute("name", "student");
  student.setAttribute("class", "student")
  student.setAttribute("placeholder", "Enter Students Name");
 
  var grade = document.createElement("input");
  grade.setAttribute("type", "text");
  grade.setAttribute("name", "grade");
  grade.setAttribute("class", "grade")
  grade.setAttribute("placeholder", "Enter Grade(0-100)");
  
  display.appendChild(h1);
  display.appendChild(student);
  display.appendChild(grade);
  display.appendChild(add);
  
  add.addEventListener("click", function(){
    submit(student, grade);
  })
  
 
}


function submit(student, grade){
  var student=document.body.querySelector(".student").value;
  var grade=document.body.querySelector(".grade").value;
  
  if(student==""||grade==""){
      document.body.querySelector(".subMess").innerHTML="Enter values before submitting";
    }
  
  else if(!isNaN(student)|| isNaN(grade)){
    document.body.querySelector(".subMess").innerHTML="Enter the correct values please";
    
    
  }
  
  else{
    document.body.querySelector(".subMess").innerHTML="";
    list.push({student:student, 
               grade:grade});
    contentWrite(pages[0].content)
  }
  
  
}

function renderItems(student, grade){
  
  //document.body.querySelector(".display").innerHTML="";
  for(var  i = 0; i<list.length; i++){
    var ele=document.createElement("div");
    ele.innerHTML="Student Name: "+ list[i].student +" and Student Grade: "+ list[i].grade;
    
    document.body.querySelector(".display").appendChild(ele);
  }
}