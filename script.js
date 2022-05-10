
// const canvas=document.getElementById('canvas');
// const context=canvas.getContext('2d');

// const katakana='234566fcnvmn vhbv sbdiwjsd mxnv;e;itfudvn czdk;fa;fh ksdjsa;dn';
// const latin='ASDFGHJKLMNBVCXZQWERTYUIOP';
// const nums='1234567890';

// const alphabet=katakana+latin+nums;
// const fontSize=16;
// const columns=canvas.width/fontSize;

// const rainDrops=[];
// for(let x=0;x<columns;x++){
//     rainDrops[x]=1;
// };

// const draw=()=>{
//     context.fillStyle='#0F0';
//     context.font=fontSize +'px monospace';

//     for(let i=0;i<rainDrops.length;i++){

//         const text =alphabet.charAt(Math.floor(Math.random()*alphabet.length));
//         context.fillText(text,i*fontSize,rainDrops[i]*fontSize);

//         if(rainDrops[i]*fontSize>canvas.height && Math.random()>0.975){
//             rainDrops[i]=0;
//         }
//         rainDrops[i]++;
//     }
// };
// setInterval(draw,30);





const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰ';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';
const alphabet = katakana + latin + nums;
const fontSize = 20;
const columns = canvas.width/fontSize;
const rainDrops = [];
for( let x = 0; x < columns; x++ ) {
	rainDrops[x] = 1;
}
const draw = () => {
	context.fillStyle = 'rgba(0, 0, 0, 0.05)';
	context.fillRect(1, 10, canvas.width, canvas.height);
	
	context.fillStyle = '#0F0';
	context.font = fontSize + 'px monospace';
	for(let i = 0; i < rainDrops.length; i++)
	{
		const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
		
		if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
			rainDrops[i] = 0;
        }
		rainDrops[i]++;
    }
};

setInterval(draw, 30);

window.onresize = () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
} 