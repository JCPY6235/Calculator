const H = document.getElementById("he")

const Bubble = () =>{
    
    const bubble  = document.createElement("span");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);
    
    const size = Math.random()*200 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;
    
    bubble.style.top = Math.random()*100 + 50 + "%";
    bubble.style.left = Math.random()*100 + "%";
    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    bubble.style.setProperty("--left", Math.random() * 100 * 
    plusMinus + "%");
    bubble.addEventListener("click", () =>{
        bubble.remove()
        H.textContent = Number(H.textContent) + 1
    })
    setTimeout(() =>bubble.remove(), 8000);
}

setInterval(Bubble, 300);