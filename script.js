// Typing effect for hero text
document.addEventListener('DOMContentLoaded', () => {
    const typedEl = document.getElementById('typed-text');
    if (!typedEl) return;
    
    const phrases = [
        'Data Science Student',
        'Machine Learning Enthusiast',
        'Python • SQL • Pandas'
    ];
    let partIndex = 0;
    let charIndex = 0;
    let typing = true;

    function tick(){
        const current = phrases[partIndex];
        if(typing){
            charIndex++;
            typedEl.textContent = current.slice(0, charIndex);
            if(charIndex === current.length){
                typing = false;
                setTimeout(tick, 2000);
                return;
            }
            setTimeout(tick, 60);
        } else {
            charIndex--;
            typedEl.textContent = current.slice(0, charIndex);
            if(charIndex === 0){
                typing = true;
                partIndex = (partIndex + 1) % phrases.length;
            }
            setTimeout(tick, 40);
        }
    }

    tick();
});
