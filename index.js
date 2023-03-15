const sounds = [
  "BEAT1",
  "BEAT2",
  "BRASS",
  "WHISTLE",
  "PLUCKS",
  "STRINGS",
  "SYNTH",
  "VOX",
  "RIZZ",
];
//Changed sound
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;
  let flag = 1;
  btn.addEventListener("click", () => {
    const demo = document.getElementById(sound);
    if (flag == 1) {
      demo.play();
      demo.loop = true;
      flag = 2;
    } else {
      demo.loop = false;

      demo.currentTime = 0;
      demo.pause();

      flag = 1;
    }
    console.log(demo);
    console.log(sound);
  });
  document.getElementById("buttons").appendChild(btn);
});
