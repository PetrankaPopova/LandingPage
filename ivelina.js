

function submitData() {

    let formData = [];
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let companyName = document.getElementById("company-name").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phone-number").value;
    let errorMessage = "Please fill all fields!"

    /*event.preventDefault();*/

    if(firstName === "" || lastName === "" || companyName === "" || email === "" || phoneNumber === "" ){
        let node = document.createElement("p");
        let textnode = document.createTextNode(errorMessage);
        node.appendChild(textnode);
        document.getElementById("error").appendChild(node);
    }else {
        formData.push(firstName);
        formData.push(lastName);
        formData.push(companyName);
        formData.push(email);
        formData.push(phoneNumber);
        console.log(formData);
    }

   /* var node = document.createElement("LI");
    var textnode = document.createTextNode(errorArr);
    node.appendChild(textnode);
    document.getElementById("errors").appendChild(node);*/

}
