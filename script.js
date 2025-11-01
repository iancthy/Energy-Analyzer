const inputs = document.querySelectorAll("input");
inputs.forEach(input => input.addEventListener("input", calculateEnergy));

function calculateEnergy() {
    const m = parseFloat(document.getElementById("mass").value);
    const v = parseFloat(document.getElementById("velocity").value);
    const h = parseFloat(document.getElementById("height").value);
    const d = parseFloat(document.getElementById("distance").value);
    const t = parseFloat(document.getElementById("time").value);
    const g = 9.81;

    if (isNaN(m) || isNaN(v) || isNaN(h) || isNaN(d) || isNaN(t) || t <= 0) {
        document.getElementById("energyMsg").textContent = "⚡ Enter all values to analyze energy";
        return;
    }

    const ke = 0.5 * m * v * v;
    const pe = m * g * h;
    const work = m * g * d;
    const total = ke + pe;
    const power = work / t;

    document.getElementById("ke").textContent = ke.toFixed(2);
    document.getElementById("pe").textContent = pe.toFixed(2);
    document.getElementById("work").textContent = work.toFixed(2);
    document.getElementById("total").textContent = total.toFixed(2);
    document.getElementById("power").textContent = power.toFixed(2);

    const max = Math.max(work, ke, pe, total, power);
    document.getElementById("workBar").style.width = (work / max * 100) + "%";
    document.getElementById("keBar").style.width = (ke / max * 100) + "%";
    document.getElementById("peBar").style.width = (pe / max * 100) + "%";
    document.getElementById("totalBar").style.width = (total / max * 100) + "%";
    document.getElementById("powerBar").style.width = (power / max * 100) + "%";

    const msg = document.getElementById("energyMsg");
    if (total < 50) msg.textContent = "💤 Low Energy System";
    else if (total < 500) msg.textContent = "⚙️ Moderate Energy Detected";
    else msg.textContent = "🚀 High Energy System!";
}

function resetForm() {
    document.querySelectorAll("input").forEach(i => i.value = "");
    document.querySelectorAll(".bar").forEach(b => b.style.width = "0%");
    document.getElementById("work").textContent =
    document.getElementById("ke").textContent =
    document.getElementById("pe").textContent =
    document.getElementById("total").textContent =
    document.getElementById("power").textContent = "0";
    document.getElementById("energyMsg").textContent = "⚡ Enter values to analyze energy";
}
