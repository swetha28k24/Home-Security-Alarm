let status = document.getElementById("status");
let alertMessage = document.getElementById("alert-message");

function armAlarm() {
    status.textContent = "Armed";
    alertMessage.textContent = "⚠️ Alarm is armed! Security active.";
}

function disarmAlarm() {
    status.textContent = "Disarmed";
    alertMessage.textContent = "✅ Alarm is disarmed. Security off.";
}
