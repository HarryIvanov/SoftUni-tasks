function solve() {
  document.getElementById("add").addEventListener("click", createMail);
  document.getElementById("reset").addEventListener("click", onReset);
  const nameInput = document.getElementById("recipientName");
  const titleInput = document.getElementById("title");
  const messageInput = document.getElementById("message");
  const list = document.getElementById("list");
  const deleted = document.querySelector(".delete-list");
  const sent = document.querySelector(".sent-list");

  function createMail(event) {
    event.preventDefault();
    const name = nameInput.value;
    const title = titleInput.value;
    const message = messageInput.value;
    if (name == "" || title == "" || message == "") {
      return;
    }

    const element = document.createElement("li");
    element.innerHTML = `
    <h4>Title: ${title}</h4>
    <h4>Recipient Name: ${name}</h4>
    <span>${message}</span>
    <div id="list-action">
        <button type="submit" id="send">Send</button>
        <button type="submit" id="delete">Delete</button>
    </div>`;
    list.appendChild(element);
    resetInput();

    element.querySelector("#delete").addEventListener("click", deleteMail);
    element.querySelector("#send").addEventListener("click", sendMail);

    function deleteMail() {
      const deletedMailElement = document.createElement("li");

      deletedMailElement.innerHTML = `
        <span>To: ${name}</span>
        <span>Title: ${title}</span>`;
      deleted.appendChild(deletedMailElement);
      element.remove();
    }
    function sendMail(event) {
      const sendMailelement = document.createElement("li");
      sendMailelement.innerHTML = `<span>To: John@abv.bg</span>
        <span>Title: ${title}</span>
        <div class="btn">
            <button type="submit" class="delete">Delete</button>
        </div>`;
      sendMailelement.querySelector(".delete").addEventListener("click", () => {
        const deletedMailElement = document.createElement("li");

        deletedMailElement.innerHTML = `
        <span>To: ${name}</span>
        <span>Title: ${title}</span>`;
        deleted.appendChild(deletedMailElement);
        sendMailelement.remove();
      });
      sent.appendChild(sendMailelement);
      element.remove();

    }
  }
  function onReset(event) {
    event.preventDefault();
    resetInput();
  }

  function resetInput() {
    nameInput.value = "";
    titleInput.value = "";
    messageInput.value = "";
  }
}
solve();
