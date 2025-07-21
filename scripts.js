document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value.trim();
    const date = document.getElementById("date").value.trim();
    const message = document.getElementById("message").value.trim();
    const projet = document.getElementById("urgent").checked ? "Oui" : "Non";

    let text = `Bonjour, je souhaite réserver un service :%0A`;
    text += `👤 Nom : ${name}%0A`;
    text += `📧 Email : ${email}%0A`;
    if (phone) text += `📞 Téléphone : ${phone}%0A`;
    text += `🛠️ Service : ${service}%0A`;
    text += `📅 Date souhaitée : ${date}%0A`;
    text += `⚡ Projet urgent : ${projet}%0A`;
    text += `💬 Message : ${message}%0A`;

    const whatsappNumber = "22951563219";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  });
