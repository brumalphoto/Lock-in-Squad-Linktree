document.addEventListener('DOMContentLoaded', function () {
  const introScreen = document.getElementById('intro-screen'),
      bootSequence = document.getElementById('boot-sequence'),
      bootTextEl = document.getElementById('boot-text'),
      mainContent = document.getElementById('main-content'),
      bootImage = document.getElementById('boot-image');

  const bootLines = [
    "[    0.000000] leaked by luarea",
    "[    0.000000] Booting PhantomOS v0.9.3 (x86_64)",
    "[    0.000002] Initializing kernel...",
    "[    0.000006] Command line: quiet splash root=/dev/sda1",
    "[    0.000008] x86/fpu: FPU detected, using FXSAVE/FXRSTOR",
    "[    0.000012] BIOS-e820: [mem 0x00000000-0x0009ffff] usable",
    "[    0.000320] AGESA: initializing fabric interconnects...",
    "[    0.000431] CPU0: PhantomCore 8X v3.7 GHz (id 0x1fa304)",
    "[    0.001005] CPU1: Detected, syncing APIC...",
    "[    0.001029] smpboot: Node 0, Core 0, Thread 1 initialized",
    "[    0.002211] ACPI: PM-Timer IO Port: 0x408",
    "[    0.002431] ACPI: LAPIC_NMI (acpi_id[0x01] high edge lint[0x1])",
    "[    0.003002] Initializing hardware abstraction layer...",
    "[    0.003300] IOMMU: Enabled on PhantomX Chipset 9200",
    "[    0.004521] Detecting CPU cores...",
    "[    0.005421] Found 8 cores, 16 threads (HT enabled)",
    "[    0.006777] Checking CPU cache... OK",
    "[    0.007032] Performing memory check... /",
    "[    1.502938] Memory check passed (16384MB usable)",
    "[    1.503210] Loading kernel modules... (yea right)",
    "[    1.620003] ehci_hcd: USB 2.0 'Enhanced' Host Controller",
    "[    1.622001] Initializing USB subsystem...",
    "[    1.720192] Activating network interfaces...",
    "[    1.810392] Why u read this?",
    "[    1.850222] eth0: Link is up at 1Gbps full-duplex",
    "[    2.001312] Negotiating DHCP lease...",
    "[    2.402999] Assigned IP address: 192.168.1.42",
    "[    2.500000] toenail8866 >.>",
    "[    2.601124] Checking disk integrity...",
    "[    2.721421] fsck.ext4: clean, 98412/305760 files, 192832/1220608 blocks",
    "[    3.002312] Performing system stability check... /",
    "[    4.402123] System stability confirmed. lol",
    "[    4.420002] Initializing graphical target...",
    "[    4.610210] DRM: PhantomX Vega 905X loaded",
    "[    4.730012] Loaded profiles for users.",
    "[    4.830002] Applying user settings... (probably)",
    "[    4.900531] Starting background services... maybe",
    "[    5.000000] Finalizing boot sequence..."];

  const floodLines = [
    "[    5.100000] [drm] fb0: Phantom framebuffer at 0x90000000, size 1920x1080",
    "[    5.100012] systemd[1]: Starting Network Manager...",
    "[    5.100023] systemd[1]: Starting Authorization Manager...",
    "[    5.100035] systemd[1]: Started Session c1 of user root.",
    "[    5.100049] dbus-daemon[331]: [system] Activating service 'org.freedesktop.Accounts'...",
    "[    5.100061] acpid: client 1623[0:0] connected",
    "[    5.100077] systemd[1]: Reached target Multi-User System.",
    "[    5.100083] audit: type=1130 audit(5.1:1): pid=1 uid=0 auid=4294967295 msg='unit=systemd-logind'",
    "[    5.100092] phantom-audio: registered fake codec (vibe97)",
    "[    5.100105] phantom-audio: jack plugged into 'VIRTUAL_FRONT_HEADPHONE'",
    "[    5.100120] phantom-net: registered device phantom0 (no real MAC, lol)",
    "[    5.100133] phantom-bluetooth: firmware blob loaded (size: 32KB)",
    "[    5.100147] phantom-thermal: system temperature: 42.7°C",
    "[    5.100161] systemd[1]: Starting Restore Sound Card State...",
    "[    5.100174] phantom-led: found 6 RGB channels, setting to 'boot-pulse'",
    "[    5.100185] kworker/0:1: phantom-irq-handler invoked",
    "[    5.100192] kworker/0:1: phantom-irq-handler done",
    "[    5.100205] phantomfs: mounting /dev/phantom0 on /mnt/ghost",
    "[    5.100218] phantomfs: journal replay complete",
    "[    5.100229] phantomfs: clean shutdown detected",
    "[    5.100239] phantom-bootd: All systems nominal ✨",
    "[    OK   ] Done. booted? idk"];

  introScreen.addEventListener('click', () => {
    introScreen.classList.add('hidden');
    bootSequence.classList.remove('hidden');
    bootImage.classList.remove('hidden'); 
    
    let i = 0;
    (function showLine() {
    if (i >= bootLines.length) {
    let j = 0;
    const floodInterval = setInterval(() => {
      if (j >= floodLines.length) {
        clearInterval(floodInterval);
         setTimeout(() => {
          bootSequence.classList.add('hidden');
          mainContent.classList.remove('opacity-0', 'pointer-events-none');
          bootImage.classList.add('hidden');  
      initSnow();
    initAudio();
  }, 50);
        return;
        }
            bootTextEl.textContent += floodLines[j++] + '\n';
               bootTextEl.scrollTop = bootTextEl.scrollHeight;
        }, 10);
        return;
      }

          bootTextEl.textContent += bootLines[i++] + '\n';
          bootTextEl.scrollTop = bootTextEl.scrollHeight;
          const delay = 10 + Math.random() * 20;
          setTimeout(showLine, delay);
       })();
      });

  function initSnow() {
  const c = document.getElementById('snow-canvas');
  const ctx = c.getContext('2d');
  let w = c.width = window.innerWidth,
  h = c.height = window.innerHeight;

  const flakes = new Array(100).fill().map(() => ({
  x: Math.random() * w,
 y: Math.random() * h,
  r: Math.random() * 3 + 1,
  d: Math.random() + 0.7
}));

  function draw() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.beginPath();
  flakes.forEach(f => {
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
  });
    ctx.fill();
  move();
}

function move() {
flakes.forEach(f => {
  f.y += f.d * f.d;
  f.x += Math.sin(f.y * 0.01);
if (f.y > h) {
  f.y = 0;
  f.x = Math.random() * w;
}
  });
}

    function loop() {
      draw();
      requestAnimationFrame(loop);
    }

    window.addEventListener('resize', () => {
      w = c.width = window.innerWidth;
      h = c.height = window.innerHeight;
    });

    loop();
  }

  function initAudio() {
    const audio = document.getElementById('audio-player'),
          btn = document.getElementById('play-pause-btn'),
          iconPlay = document.getElementById('icon-play'),
          iconPause = document.getElementById('icon-pause'),
          muteBtn = document.getElementById('mute-btn'),
          seekBar = document.getElementById('seek-bar'),
          volumeBar = document.getElementById('volume-bar'),
          timeNow = document.getElementById('current-time'),
          timeTotal = document.getElementById('duration'),
          trackName = document.getElementById('track-info'),
          list = document.getElementById('playlist');

    const format = s => {
      let m = Math.floor(s / 60).toString().padStart(2, '0'),
          sec = Math.floor(s % 60).toString().padStart(2, '0');
      return `${m}:${sec}`;
    };

    function load(start = 0) {
      const src = list.value;
      trackName.textContent = list.selectedOptions[0].text;
      audio.src = src;
      audio.load();
      audio.currentTime = start;
      audio.play().catch(() => {});
      iconPlay.classList.add('hidden');
      iconPause.classList.remove('hidden');
    }

    btn.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        iconPlay.classList.add('hidden');
        iconPause.classList.remove('hidden');
      } else {
        audio.pause();
        iconPlay.classList.remove('hidden');
        iconPause.classList.add('hidden');
      }
    });

    muteBtn.addEventListener('click', () => {
      audio.muted = !audio.muted;
      muteBtn.textContent = audio.muted ? '🔇' : '🔊';
    });

    volumeBar.addEventListener('input', () => {
      audio.volume = volumeBar.value;
    });

    seekBar.addEventListener('input', () => {
      audio.currentTime = seekBar.value;
    });

    audio.addEventListener('timeupdate', () => {
      seekBar.value = Math.floor(audio.currentTime);
      timeNow.textContent = format(audio.currentTime);
    });

    audio.addEventListener('loadedmetadata', () => {
      seekBar.max = Math.floor(audio.duration);
      timeTotal.textContent = format(audio.duration);
    });

    list.addEventListener('change', () => load());
    load();
  }

});

const canvas = document.getElementById('trail-canvas');
const ctx = canvas.getContext('2d');

let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
});

const colors = ['#E0BBE4', '#957DAD', '#D291BC', '#F3C5FF', '#FFFFFF'];

const trail = [];

document.addEventListener('mousemove', (e) => {
for (let i = 0; i < 3; i++) {
    trail.push({
    x: e.clientX,
    y: e.clientY,
      radius: Math.random() * 2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
    dx: (Math.random() - 0.5) * 2,
    dy: (Math.random() - 0.5) * 2,
  });
}
});

function animate() {
    ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < trail.length; i++) {
  const p = trail[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.closePath();
    p.x += p.dx;
    p.y += p.dy;
    p.alpha -= 0.02;
  if (p.alpha <= 0) {
      trail.splice(i, 1);
      i--;
    }
}

  ctx.globalAlpha = 1;
  requestAnimationFrame(animate);
}

animate();
