const message = `HAII NEYY!!, this is for my beautiful, gorgeous ex.\nI hope you do your best today i know you always do, but please don't put too much pressure on yourself, okeyy?? All i can do right now is give you my support, and that's what i want to do.\n\nI'm here just need you to know i still have feelings for you and i thinking about you all the time, I don't want to distrub your life, but on the other side i can't hold back how mush i miss you. I really really miss you...\n\ni know if somehow we repeat our story, the vibe and the way we love each other won't feel excalty the same. i'm also afraid i might become a burden or maybe stand in the way of your happiness. but if one day you'd ever want to try again with me, i'd love that... and if you've found someone better, someone who feels more right for you, then i hope you'll always be happy.\n\ni also just want to thank you... for letting me be part of your life, for loving me as best and as sincerely as you could. Falling in love with you was one of the happiest i've ever had. You were like a second home to me, maybe even my whole world.\n\nI just hope after reading this, you'll know that i still care, and i still have feelings for you. Even though i don't know if you still feel the same about me,I'm scared it's just me here waiting. I'm sorry if i'm hoping for too much...\n\n -I Love You`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}