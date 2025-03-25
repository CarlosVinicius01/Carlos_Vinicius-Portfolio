export default function form() {
    document.getElementById("form").addEventListener("submit", async function (event) {
        event.preventDefault();
    
        let formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            tel: document.getElementById("tel").value,
            message: document.getElementById("message").value
        };
    
        fetch("http://localhost:3000/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => console.error("Erro:", error));
    });
}