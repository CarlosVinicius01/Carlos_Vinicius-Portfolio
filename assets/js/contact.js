export default function contact() {
    const form = document.getElementById("form");
    const nameInput = document.getElementById("name");
    const messageInput = document.getElementById("message");

    if (!form) return;

    function showError(input) {
        input.classList.add("input-error");

        let error = input.parentNode.querySelector(".error-message");
        if (!error) {
            error = document.createElement("div");
            error.className = "error-message";
            input.parentNode.appendChild(error);
        }
        error.textContent = "Preenchimento obrigatório";
    }

    function clearError(input) {
        input.classList.remove("input-error");

        const error = input.parentNode.querySelector(".error-message");
        if (error) {
            error.remove();
        }
    }

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const message = messageInput.value.trim();

        let hasError = false;

        if (!name) {
            showError(nameInput);
            hasError = true;
        } else {
            clearError(nameInput);
        }

        if (!message) {
            showError(messageInput);
            hasError = true;
        } else {
            clearError(messageInput);
        }

        if (hasError) return;

        // backend
        try {
            const formData = { name, message };

            const response = await fetch("http://localhost:3000/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.text();
            alert(data);
        } catch (error) {
            console.error("Erro ao enviar e-mail:", error);
        }

        // WhatsApp
        const tel = '5583988543645';
        const text = `Olá, me chamo ${name}, ${message}.`;
        const msgformatted = encodeURIComponent(text);
        const url = `https://wa.me/${tel}?text=${msgformatted}`;
        window.open(url, '_blank');
    });
}
