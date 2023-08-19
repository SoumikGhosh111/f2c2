//onsubmit action listner
let selectedRow = null; 
let isSubmit = 1; 
let submitButton = document.querySelector(".submit-button-button"); 
function formSubmit(){ 
    event.preventDefault(); 
    var formData = readData(); 
    if(selectedRow === null){ 
        insertData(formData); 
    }else{ 
        updateRec(formData);
    }
    isSubmit++; 
    resetForm(); 
    
}



// function for reading the data
var formData = {}; 
function readData(){ 
    let Name = document.getElementById("Name").value; 
    let Email = document.getElementById("email").value; 
    let GPA = document.getElementById("gpa").value; 
    let Age = document.getElementById("age").value; 
    let Degree = document.getElementById("Degree").value; 
    // console.log(formData[0].length); 
    // formData["ID"] = 
    formData["Name"] = Name; 
    formData["Email"] = Email; 
    formData["gpa"] = GPA; 
    formData["Age"] = Age; 
    formData["Degree"] = Degree; 
    return formData; 
}; 


// inserting Data
function insertData(data){ 
    let table = document.getElementById("table"); 
    let tbody = table.getElementsByTagName("tbody")[0];
    let newCreatedRow = tbody.insertRow(tbody.length); 

    let indx = isSubmit; 
       

    let cell0 = newCreatedRow.insertCell(0); 
    cell0.innerHTML = indx;  
    let cell1 = newCreatedRow.insertCell(1); 
    cell1.innerHTML = data.Name; 
    
    let cell2 = newCreatedRow.insertCell(2); 
    cell2.innerHTML = data.Email;
    
    let cell3 = newCreatedRow.insertCell(3); 
    cell3.innerHTML = data.gpa;

    let cell4 = newCreatedRow.insertCell(4); 
    cell4.innerHTML = data.Age;

    let cell5 = newCreatedRow.insertCell(5); 
    cell5.innerHTML = data.Degree;

    let cell6 = newCreatedRow.insertCell(6); 
    cell6.innerHTML = `<i class="material-icons" style="cursor: pointer;font-size: 15px;" onclick="onEdit(this)">edit</i>  <i class="material-icons" style="cursor: pointer;font-size: 15px;" onclick="onDelete(this)">delete</i>`
}


// function for editing the data
function onEdit(td){ 
    selectedRow = td.parentElement.parentElement; 
    document.getElementById("Name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("gpa").value = selectedRow.cells[3].innerHTML;
    document.getElementById("age").value = selectedRow.cells[4].innerHTML;
    document.getElementById("Degree").value = selectedRow.cells[5].innerHTML;
    submitButton.classList.toggle("submit-button-after-edit"); 
    submitButton.innerHTML = "Edit Student"; 
}

function updateRec(formData){ 
    selectedRow.cells[1].innerHTML = formData.Name; 
    selectedRow.cells[2].innerHTML = formData.Email; 
    selectedRow.cells[3].innerHTML = formData.gpa; 
    selectedRow.cells[4].innerHTML = formData.Age; 
    selectedRow.cells[5].innerHTML = formData.Degree; 
}
// Delete button/
function onDelete(td){ 
    if(confirm("Do you Want Delete the recod !!!")){ 
        row = td.parentElement.parentElement; 
        document.getElementById("table").deleteRow(row.rowIndex);
    }
}
function resetForm(){ 
    document.getElementById("Name").value = ""; 
    document.getElementById("email").value = "";
    document.getElementById("gpa").value = "";
    document.getElementById("age").value = "";
    document.getElementById("Degree").value = "";
}


let searchBAr = document.getElementById("myInput"); 

searchBAr.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {

        let query = searchBAr.value.toLowerCase(); 
        
        if(query == formData["Name"].toLowerCase() || query == formData["Email"].toLowerCase() || query == formData["Degree"].toLowerCase()){ 


            if( query == formData["Degree"].toLowerCase()){ 
                alert("There Could be Multiple Students in the List, For bettter experience search by Name or Email Adress !!!"); 
            }
           let result1 = document.querySelector(".result-1"); 
           let result2 = document.querySelector(".result-2"); 
           let result3 = document.querySelector(".result-3"); 
           let result4 = document.querySelector(".result-4"); 
           let result5 = document.querySelector(".result-5"); 
            result1.innerHTML = `Name: ${formData["Name"]}`; 
            result2.innerHTML = `Email: ${formData["Email"]}`; 
            result3.innerHTML = `GPA: ${formData["gpa"]}`; 
            result4.innerHTML = `Age: ${formData["Age"]}`; 
            result5.innerHTML = `Degree: ${formData["Degree"]}`; 
        }else{ 
            alert("the stdent has no exsisted record")
        }

    }
  });
