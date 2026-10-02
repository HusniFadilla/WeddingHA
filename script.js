const CONFIG={whatsappNumber:"6281234567890",weddingDate:"2026-08-15T09:00:00+07:00",eventEndDate:"2026-08-15T12:00:00+07:00",sheetsApiUrl:""};
const q=new URLSearchParams(location.search),guest=q.get("to");
if(guest)document.getElementById("guest").textContent="Kepada Yth. "+guest;
function openInvitation(){
	document.getElementById("cover").classList.add("hidden");
	document.body.style.overflow="auto"
	
}
	
	document.body.style.overflow="hidden";
const target=new Date(CONFIG.weddingDate);
function tick(){let x=target-new Date();
if(x<0)x=0;
document.getElementById("d").textContent=Math.floor(x/864e5);
document.getElementById("h").textContent=Math.floor(x/36e5)%24;
document.getElementById("m").textContent=Math.floor(x/6e4)%60;
document.getElementById("s").textContent=Math.floor(x/1e3)%60}tick();
setInterval(tick,1000);
const a=new Date(CONFIG.weddingDate).toISOString().replace(/[-:]/g,"").replace(".000",""),b=new Date(CONFIG.eventEndDate).toISOString().replace(/[-:]/g,"").replace(".000","");
document.getElementById("calendar").href=`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Akad Nikah Amel & Husni")}&dates=${a}/${b}&location=${encodeURIComponent("Masjid Bluemosque, Bandung, Jawa Barat")}`;
async function save(data){
	if(!CONFIG.sheetsApiUrl)return false;
	try{return (await fetch(CONFIG.sheetsApiUrl,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(data)})).ok}catch(e){return false}
}

async function sendRSVP(e){e.preventDefault();
 let n=name.value,t=attendance.value,g=guests.value,msg=message.value;
 let ok=await save({type:"rsvp",name:n,attendance:t,guests:g,message:msg,guest:guest||""});window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent("Assalamu'alaikum, saya "+n+". Konfirmasi: "+t+". Jumlah tamu: "+g+". "+msg)}`,"_blank");
 rsvpStatus.textContent=ok?"Tersimpan di Google Sheets & WhatsApp dibuka.":"WhatsApp dibuka. Hubungkan Google Sheets untuk penyimpanan otomatis."
 }
 
async function sendWish(e){e.preventDefault();
let n=wishName.value,w=wish.value;
let ok=await save({type:"wish",name:n,wish:w,guest:guest||""});window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent("Ucapan untuk Amel & Husni\nDari: "+n+"\n"+w)}`,"_blank");wishStatus.textContent=ok?"Ucapan tersimpan.":"Ucapan dikirim lewat WhatsApp. Hubungkan Google Sheets untuk guestbook."}
function toggleMusic(){
	let x=document.getElementById("music");
	if(x.paused)x.play().then(()=>musicBtn.textContent="❚❚").catch(()=>alert("Tambahkan assets/music.mp3 terlebih dahulu."));
	else{x.pause();musicBtn.textContent="♫"}
	}
