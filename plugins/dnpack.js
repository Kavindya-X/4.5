//RAVANA 2021 | SL RAVANA TEAM
//PLUGIN BY HACKER RAVANA AND HACKER MARAYA

const RAVANA = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const lol = "need some word\nπ‘π‘"
const dnpack = "dn logo pack";
    
RAVANA.useCmd({pattern: 'dnpack', fromMe: true, desc: dnpack}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/5ef70117be85971e9fe67.jpg";
    r_text[1] = "https://telegra.ph/file/bb79592cc07b546e36caf.jpg";
  
        
     var i = Math.floor(2*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `β‘βββββπ’DN Logo Packπ’ββββββ‘

============RAVANA(DNpack)============

 π₯ *LOGO PACK* π₯

π°πΎπ€π’π’ππ£πβ .dnwp <text>

π°πΎπ€π’π’ππ£πβ .dnz3d <text>

π°πΎπ€π’π’ππ£πβ .dnwg <text>

π°πΎπ€π’π’ππ£πβ .dnjuvs <text>

π°πΎπ€π’π’ππ£πβ .dnpals <text>

π°πΎπ€π’π’ππ£πβ .dndmb <text>

π°πΎπ€π’π’ππ£πβ .dnnm <text>

π°πΎπ€π’π’ππ£πβ .dnpf <text>

π°πΎπ€π’π’ππ£πβ .dnhad <img link>

π°πΎπ€π’π’ππ£πβ .dnh2ad <img link>

π°πΎπ€π’π’ππ£πβ .dnrb <text>

π°πΎπ€π’π’ππ£πβ .dnbt <text>

π°πΎπ€π’π’ππ£πβ .dnsn <text>

π°πΎπ€π’π’ππ£πβ .dnst <text>

π°πΎπ€π’π’ππ£πβ .dnad <img link>

π°πΎπ€π’π’ππ£πβ .dnbc <text>

π°πΎπ€π’π’ππ£πβ .dngb <text>

π°πΎπ€π’π’ππ£πβ .dnw3d <text>

π°πΎπ€π’π’ππ£πβ .dnglow <text>

π°πΎπ€π’π’ππ£πβ .dnpm <text>

π°πΎπ€π’π’ππ£πβ .dnc3d <text>

π°πΎπ€π’π’ππ£πβ .dngrb <text>

π°πΎπ€π’π’ππ£πβ .dnhm <text>

π°πΎπ€π’π’ππ£πβ .dnmb2 <text>

π°πΎπ€π’π’ππ£πβ .dncl <text>

π°πΎπ€π’π’ππ£πβ .dnwc <text>

βββββπ’RAVANAπ’βββββ

`}) 

}));


    RAVANA.useCmd({ pattern: 'dn3ds ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/3dshiny?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    RAVANA.useCmd({ pattern: 'dnwp ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/graffiticolor?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));
 
     RAVANA.useCmd({ pattern: 'dnz3d ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/zombie3d?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

        RAVANA.useCmd({ pattern: 'dnwg ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/wordgreen?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

        RAVANA.useCmd({ pattern: 'dnjuvs ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/juventus?text1=RAVANA&text2=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

        RAVANA.useCmd({ pattern: 'dnpals ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/paulscholes?text1=RAVANAa&text2=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));


        RAVANA.useCmd({ pattern: 'dndmb ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/photofunia/denimembroidery?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

         RAVANA.useCmd({ pattern: 'dnnm ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/photofunia/nightmare?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

         RAVANA.useCmd({ pattern: 'dnpf ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/photofunia/arrowsigns?text1=RAVANA&text2=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));
    
        RAVANA.useCmd({ pattern: 'dnhad ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/canvas/hacker?img=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

         RAVANA.useCmd({ pattern: 'dnh2ad ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/canvas/hacker2?img=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

         RAVANA.useCmd({ pattern: 'dnad ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/canvas/ad?img=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

           RAVANA.useCmd({ pattern: 'dnrb ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/photofunia/rugbyball?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

          RAVANA.useCmd({ pattern: 'dnbt ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/photooxy/butterfly?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));    


           RAVANA.useCmd({ pattern: 'dnsn ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/startsnight?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));  


          RAVANA.useCmd({ pattern: 'dnst ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/startsnight?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));  


         RAVANA.useCmd({ pattern: 'dnbc ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/birthdaycake?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));


       RAVANA.useCmd({ pattern: 'dngb ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/galaxybat?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

     RAVANA.useCmd({ pattern: 'dnw3d ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/wooden3d?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

     RAVANA.useCmd({ pattern: 'dnglow ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/glow?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

     RAVANA.useCmd({ pattern: 'dnpm ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/pubgmascot?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

     RAVANA.useCmd({ pattern: 'dnc3d ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/3dcrack?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

     RAVANA.useCmd({ pattern: 'dngrb ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/greenbrush?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

     RAVANA.useCmd({ pattern: 'dnhm ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/hotmetalic?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

     RAVANA.useCmd({ pattern: 'dnmb2 ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/summerbeach2?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

     RAVANA.useCmd({ pattern: 'dncl ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/clouds?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

     RAVANA.useCmd({ pattern: 'dnwc ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/writingchalk?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));                       


RAVANA.useCmd({pattern: 'dnpack', fromMe: false, desc: dnpack}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/5ef70117be85971e9fe67.jpg";
    r_text[1] = "https://telegra.ph/file/bb79592cc07b546e36caf.jpg";
  
        
     var i = Math.floor(2*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `β‘βββββπ’DN Logo Packπ’ββββββ‘

============RAVANA(DNpack)============

         π₯ *LOGO PACK* π₯

     π°πΎπ€π’π’ππ£πβ .dnwp <text>

     π°πΎπ€π’π’ππ£πβ .dnz3d <text>

     π°πΎπ€π’π’ππ£πβ .dnwg <text>

     π°πΎπ€π’π’ππ£πβ .dnjuvs <text>

     π°πΎπ€π’π’ππ£πβ .dnpals <text>

     π°πΎπ€π’π’ππ£πβ .dndmb <text>

     π°πΎπ€π’π’ππ£πβ .dnnm <text>

     π°πΎπ€π’π’ππ£πβ .dnpf <text>

     π°πΎπ€π’π’ππ£πβ .dnhad <img link>

     π°πΎπ€π’π’ππ£πβ .dnh2ad <img link>

     π°πΎπ€π’π’ππ£πβ .dnrb <text>

     π°πΎπ€π’π’ππ£πβ .dnbt <text>

     π°πΎπ€π’π’ππ£πβ .dnsn <text>

     π°πΎπ€π’π’ππ£πβ .dnst <text>

     π°πΎπ€π’π’ππ£πβ .dnad <img link>

     π°πΎπ€π’π’ππ£πβ .dnbc <text>

     π°πΎπ€π’π’ππ£πβ .dngb <text>

     π°πΎπ€π’π’ππ£πβ .dnw3d <text>

     π°πΎπ€π’π’ππ£πβ .dnglow <text>

     π°πΎπ€π’π’ππ£πβ .dnpm <text>

     π°πΎπ€π’π’ππ£πβ .dnc3d <text>

     π°πΎπ€π’π’ππ£πβ .dngrb <text>

     π°πΎπ€π’π’ππ£πβ .dnhm <text>

     π°πΎπ€π’π’ππ£πβ .dnmb2 <text>

     π°πΎπ€π’π’ππ£πβ .dncl <text>

     π°πΎπ€π’π’ππ£πβ .dnwc <text>

      βββββπ’RAVANAπ’βββββ

`}) 

}));


    RAVANA.useCmd({ pattern: 'dn3ds ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/3dshiny?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    RAVANA.useCmd({ pattern: 'dnwp ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/graffiticolor?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));
 
     RAVANA.useCmd({ pattern: 'dnz3d ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/zombie3d?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

        RAVANA.useCmd({ pattern: 'dnwg ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/wordgreen?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

        RAVANA.useCmd({ pattern: 'dnjuvs ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/juventus?text1=RAVANA&text2=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

        RAVANA.useCmd({ pattern: 'dnpals ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/paulscholes?text1=RAVANAa&text2=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));


        RAVANA.useCmd({ pattern: 'dndmb ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/photofunia/denimembroidery?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

         RAVANA.useCmd({ pattern: 'dnnm ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/photofunia/nightmare?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

         RAVANA.useCmd({ pattern: 'dnpf ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/photofunia/arrowsigns?text1=RAVANA&text2=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));
    
        RAVANA.useCmd({ pattern: 'dnhad ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/canvas/hacker?img=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

         RAVANA.useCmd({ pattern: 'dnh2ad ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/canvas/hacker2?img=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

         RAVANA.useCmd({ pattern: 'dnad ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/canvas/ad?img=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

           RAVANA.useCmd({ pattern: 'dnrb ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/photofunia/rugbyball?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

          RAVANA.useCmd({ pattern: 'dnbt ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/photooxy/butterfly?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));    


           RAVANA.useCmd({ pattern: 'dnsn ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/startsnight?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));  


          RAVANA.useCmd({ pattern: 'dnst ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/startsnight?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));  


         RAVANA.useCmd({ pattern: 'dnbc ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/birthdaycake?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));


       RAVANA.useCmd({ pattern: 'dngb ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/galaxybat?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

     RAVANA.useCmd({ pattern: 'dnw3d ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/wooden3d?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

     RAVANA.useCmd({ pattern: 'dnglow ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/glow?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

     RAVANA.useCmd({ pattern: 'dnpm ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/pubgmascot?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

     RAVANA.useCmd({ pattern: 'dnc3d ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/3dcrack?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

     RAVANA.useCmd({ pattern: 'dngrb ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/greenbrush?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

     RAVANA.useCmd({ pattern: 'dnhm ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/hotmetalic?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

     RAVANA.useCmd({ pattern: 'dnmb2 ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/summerbeach2?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

     RAVANA.useCmd({ pattern: 'dncl ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/clouds?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

     RAVANA.useCmd({ pattern: 'dnwc ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/writingchalk?text=${encodeURIComponent(match[1])}&apikey=oVJfX5of9OfSXH5`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));                       
