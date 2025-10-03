const emails = [
    { subject: "მოგზაურობა", content: "ნუ დაგავიწყდებათ თქვენი ბილეთები", receivedDate: "2024-12-15" },
    { subject: "მოხსენება", content: "გთხოვთ, წაიკითხოთ ბოლო ანგარიში", receivedDate: "2024-12-12" },
    { subject: "მოგზაურობა", content: "ძალიან კარგი შეთავაზება მაქვს", receivedDate: "2024-12-13" },
    { subject: "გაცნობიერება", content: "შესაძლებელია მცირე შეცდომები", receivedDate: "2024-12-10" }
  ];
  
  function filterEmails() {
    const subjectFilter = document.getElementById("subjectFilter").value.trim().toLowerCase();
    const emailList = document.getElementById("emailList");
  
    emailList.innerHTML = ""; 
  
    for (const email of emails) {
      if (email.subject.toLowerCase().startsWith(subjectFilter)) {
        const listItem = document.createElement("li");
  
        const subjectElem = document.createElement("strong");
        subjectElem.textContent = "თემა: ";
        listItem.appendChild(subjectElem);
        listItem.appendChild(document.createTextNode(email.subject));
  

        listItem.appendChild(document.createElement("br"));
  
        const contentElem = document.createElement("strong");
        contentElem.textContent = "შინაარსი: ";
        listItem.appendChild(contentElem);
        listItem.appendChild(document.createTextNode(email.content));
  
        listItem.appendChild(document.createElement("br"));
  
        const dateElem = document.createElement("strong");
        dateElem.textContent = "თარიღი: ";
        listItem.appendChild(dateElem);
        listItem.appendChild(document.createTextNode(email.receivedDate));
  
        emailList.appendChild(listItem);
      }
    }
  }
  
  
  function addEmail() {
    const newSubject = document.getElementById("newSubject").value.trim();
    const newContent = document.getElementById("newContent").value.trim();
  
    if (newSubject && newContent) {
      const newEmail = {
        subject: newSubject,
        content: newContent,
        receivedDate: new Date().toISOString().split("T")[0]
      };
      emails.push(newEmail);
      alert("წერილი წარმატებით დაემატა!");
      document.getElementById("newSubject").value = "";
      document.getElementById("newContent").value = "";
    } else {
      alert("გთხოვთ, შეავსოთ ორივე ველი!");
    }
  }
  