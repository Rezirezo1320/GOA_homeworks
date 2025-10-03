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
        listItem.textContent = `${email.subject}: ${email.content} (${email.receivedDate})`;
        emailList.appendChild(listItem);
      }
    }
  }