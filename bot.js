
const {Telegraf} = require('telegraf');

const axios = require('axios');

const bot = new Telegraf('1814899158:AAE-wekx_kt0GP0yPt4gWhNE7V5UjcEDjtQ');

const schedule = require('node-schedule');

url = `https://api.pancakeswap.info/api/v2/tokens/0xA244Ef3f07699b4b929C17e99DDB39BeC238465B`;
url1 = `https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c&address=0x02Fe6DBEEfC6AA4b3ec86E7eF2574b060EA64127&tag=latest&apikey=2YUNZATXSANNFQ991XWTACZTEUBQ3776H7`;
url2 = `https://api.bscscan.com/api?module=stats&action=bnbprice&apikey=2YUNZATXSANNFQ991XWTACZTEUBQ3776H7`;
var oldPrice; 
var precioEggc;
var bnb;
var oldBalance;
var liquidez
var liquidezEggcBnb;
var diferencia;
var precioBnbReal;

axios.get(url2)
    .then( function(res){
precioBnbReal = res.data.result.ethusd;

axios.get(url1)
    .then( function(res) {
   liquidezEggcBnb = res.data.result;
   liquidezReal = liquidezEggcBnb / 1000000000000000000;
   liquidezReal = parseFloat(liquidezReal.toFixed(2));
   

bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Welcome' + ' ' + ctx.from.first_name + ' ' + 'please do /help', {
    })
}) 
let a = schedule.scheduleJob('*/1 * * * *', ctx => {
   axios.get(url1)
    .then( function(res) {
   liquidezEggcBnb = res.data.result;
   liquidez = liquidezEggcBnb / 1000000000000000000;
   liquidez = parseFloat(liquidez.toFixed(4));
   console.log(liquidez);
   console.log(oldBalance);
   /*  
   console.log(liquidez);
   console.log(precioBnb);
   console.log(liquidezUsd);
   console.log(oldBalance);*/
/*if(liquidez < oldBalance){ 
   axios.get(url2)
    .then( function(res){
precioBnb = res.data.result.ethusd;
diferencia = oldBalance - liquidez;
diferencia1 = diferencia*precioBnb;
diferencia1 = parseFloat(diferencia1.toFixed(2))
    bot.telegram.sendPhoto(-1001250652205, 
        { url: `https://gateway.pinata.cloud/ipfs/QmUkZoZ3JsdwWM4drst967DASHQEJoqmvMsMSJJPgjmumk`}, 
        { 
          caption: "a sell worth $" + diferencia1 + "usd in EGGC has just been registered on eggchainswap! HOLD\u{1FA82}\u{1FA82}\u{1FA82}!!!!"
          
        },
        {
          parse_mode: 'HTML'
        } );
        
    })
    
}*/
if(liquidez > oldBalance){
    axios.get(url2)
    .then( function(res){
precioBnb = res.data.result.ethusd;
diferencia = liquidez - oldBalance;
diferencia1 = diferencia*precioBnb;
diferencia1 = parseFloat(diferencia1.toFixed(2))
    bot.telegram.sendVideo(-1001250652205, 
        { url: `https://media.giphy.com/media/mD3yCfwwjT7fb9my6o/giphy.gif?cid=ecf05e47j4svd4mltgzag4bvs7aamk5n2jkfaeuf1znyjy2a&rid=giphy.gif&ct=g`}, 
        { 
          caption: "a purchase worth $" + diferencia1 + "usd in EGGC has just been registered on eggchainswap! To the Moon\u{1F680}\u{1F680}\u{1F680}!!"
          
        },
        {
          parse_mode: 'HTML'
        } );
        
})
}
else{
    console.log("sin movimiento");
}
 
})
oldBalance = liquidez;
})

let j = schedule.scheduleJob('0 */12 * * *', ctx => {
    
    bot.telegram.sendPhoto(-1001250652205, 
        { url: `https://gateway.pinata.cloud/ipfs/QmSMKCnpMjN6zQa5AKg2MuxsUZWaAMshiJUKytocXuMCp7/ticket%20race.PNG`}, 
        { 
          caption: `Our community is happy to announce that the Chicken Casino\u{1F3B0}\u{1F3B2} has officially opened: Chicken Race\u{1F3C1} on the Blockchain.\u{1F413}\n     BET 100 $EGGC\u{1F95A} AND WIN DOUBLE\u{1F4B0}\u{1F4B0} !!!!!\n 1-Connect your wallet\n 2-Buy $ EGGC\u{1F95A}\n 3-Approve and BET for your best chicken\n 4-Claim your prize\n    PLAY NOW HERE:\u{1F447}\n https://www.eggchainproject.com/teams`,
          
        })
    })
let k = schedule.scheduleJob('0 */6 * * *', ctx => {
    bot.telegram.sendVideo(-1001250652205, 
       { url: `https://gateway.pinata.cloud/ipfs/QmdSZnkxZtvoGZoutA8Ct3QtwmtSuyCi5GXgbZEL3V6kYX`}, 
        { 
          caption: `New Games ables at the Chicken casino\u{1F3B0}. Game: Come and Gigante Chicken Machine\u{1F413}\u{1F413}\u{1F413}\u{1F413}\u{1F413}\n WIN - WIN  50$EGGC\u{1F95A} OR 50,000\u{1F4B0}!   JOIN THE ROOM HERE:\u{1F447}\n https://www.eggchainproject.com/GigantEatTokens`,
          
        })
    })
//let k = schedule.scheduleJob('0 */5 * * *', ctx => {
  // 
    //bot.telegram.sendVideo(-1001250652205,
      //      { url: `https://gateway.pinata.cloud/ipfs/QmVP1g6h41nGazc2Fv4oGQjNnzayAh1UiyxSGWpJAyQrrm`}, 
        //    { 
          //    caption: `HEY! GET THE 50% OFF IN ALL OUR NFCs(Non Fungible Chickens) AND INCREASE YOUR \u{2694} STATS.\n NOW able in our store, just Burning EVos each\u{1F95A} or EGGC   GO HERE AND SCROLL DOWN TO FIND THEM:\u{1F447}\n https://www.eggchainproject.com/store`,
            //  
           // })
       // })

bot.hears(/sell|Sell|selling/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing')
    ctx.replyWithHTML("<strong>!Alert!</strong>" + " " + ctx.from.first_name + " " +  "is a know spammer and is <ins>CAS_banned</ins>. Ban is strongly recommended.")
})
bot.hears("where I can sell EGGC?", (ctx) => ctx.replyWithHTML("<strong>Alert!</strong> " + ctx.from.first_name + " " +  "is a know spammer and is <ins>CAS_banned</ins>. Ban is strongly recommended."))
bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('modern', (ctx) => ctx.reply('Yo'))
bot.command('hipster', Telegraf.reply('λ'))

bot.command('price', (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing')
    axios.get(url1)
    .then( function(res) {
   liquidezEggcBnb = res.data.result;
   liquidezReal = liquidezEggcBnb / 1000000000000000000;
   liquidezReal = parseFloat(liquidezReal.toFixed(2));
    axios.get(url)
    .then( function(res) {
     
      precio = res.data.data.price;
      precioEggc = res.data.data.price.substring(0,9);
      result2 = res.data.data.price_BNB;
      bnb = precio/result2;
      bnbRedondo = parseFloat(bnb.toFixed(1));

      axios.get(url2)
    .then( function(res){
      precioBnbReal = res.data.result.ethusd;
    
     if (precio >= oldPrice) {
    bot.telegram.sendMessage(ctx.chat.id, "Token: <strong>EggChain (EGGC)</strong>\n" + "Price: $"+ "<strong>"+ precioEggc +"\u{1F7E2}</strong>\n" + "Total Supply: <strong>600,000,000</strong>\n" + "BNB Price: $"+ "<strong>"+ precioBnbReal +"</strong>\n" + "EGGC/BNB LP Holding: " + "<strong>"+ liquidezReal +" BNB</strong>\n\n" + "<a href = 'https://eggchainswap.netlify.app/#/add/0xA244Ef3f07699b4b929C17e99DDB39BeC238465B/ETH'>BUY NOW IN EGGCHAINSWAP</a>\n\n" + "💰 Liquidity Pool: Locked 🔒🚀🚀🚀\n Just listed on " + "<a href = 'https://bscscan.com/token/0xa244ef3f07699b4b929c17e99ddb39bec238465b'>BSCScan</a>, " + "<a href = 'https://playtoearn.net/blockchaingame/eggchain'>Play to Earn</a>, " + "<a href = 'https://dappradar.com/binance-smart-chain/games/eggchain-project'>DappRadar</a>, " + "<a href = 'https://watcher.guru/coin/eggchain'>WatcherGuru</a>" + ", <a href = 'https://nomics.com/assets/eggc-eggchain'>Nomics </a>" + " and <a href = 'https://www.dextools.io/app/bsc/pair-explorer/0x02fe6dbeefc6aa4b3ec86e7ef2574b060ea64127'>Dextools.</a>\n\n" + "⚠️ Our team will not PM you directly. Click our name directly in chat if you need to contact us.\n" + "<a href ='https://t.me/ScientificChickenSanders'>Dr.Sanders|Blockchain</a>\n" + "<a href='https://t.me/CZ_Chicken'>CZ Chicken|Marketing</a>\n" + "<a href ='https://t.me/MrChickenSecurity'>Mr. Chicken|Security Blockchain</a>\n" + "<a href='https://t.me/Coco_Chiken'>Coco Chicken|Designs</a>\n" + "Melon Chicken|Designs", {
     reply_markup: {
         inline_keyboard: [
             [{
                 text: "View PooCoin Chart",
                 url: "https://poocoin.app/tokens/0xa244ef3f07699b4b929c17e99ddb39bec238465b"
             },
             {
                 text: "View Nomics Chart",
                 url: "https://nomics.com/assets/eggc-eggchain"
             }
             ]
                  
                         ]
        },
        parse_mode: 'HTML'
     })
    }
    else{
    bot.telegram.sendMessage(ctx.chat.id, "Token: <strong>EggChain (EGGC)</strong>\n" + "Price: $"+ "<strong>"+ precioEggc +"\u{1F534}</strong>\n" + "Total Supply: <strong>600,000,000</strong>\n" + "BNB Price: $"+ "<strong>"+ precioBnbReal +"</strong>\n" + "EGGC/BNB LP Holding: " + "<strong>"+ liquidezReal +" BNB</strong>\n\n" + "<a href = 'https://eggchainswap.netlify.app/#/add/0xA244Ef3f07699b4b929C17e99DDB39BeC238465B/ETH'>BUY NOW IN EGGCHAINSWAP</a>\n\n" + "💰 Liquidity Pool: Locked 🔒🚀🚀🚀\n Just listed on " + "<a href = 'https://bscscan.com/token/0xa244ef3f07699b4b929c17e99ddb39bec238465b'>BSCScan</a>, " + "<a href = 'https://playtoearn.net/blockchaingame/eggchain'>Play to Earn</a>, " + "<a href = 'https://dappradar.com/binance-smart-chain/games/eggchain-project'>DappRadar</a>, " + "<a href = 'https://watcher.guru/coin/eggchain'>WatcherGuru</a>" + ", <a href = 'https://nomics.com/assets/eggc-eggchain'>Nomics </a>" + " and <a href = 'https://www.dextools.io/app/bsc/pair-explorer/0x02fe6dbeefc6aa4b3ec86e7ef2574b060ea64127'>Dextools.</a>\n\n" + "⚠️ Our team will not PM you directly. Click our name directly in chat if you need to contact us.\n" + "<a href ='https://t.me/ScientificChickenSanders'>Dr.Sanders|Blockchain</a>\n" + "<a href='https://t.me/CZ_Chicken'>CZ Chicken|Marketing</a>\n" + "<a href ='https://t.me/MrChickenSecurity'>Mr. Chicken|Security Blockchain</a>\n" + "<a href='https://t.me/Coco_Chiken'>Coco Chicken|Designs</a>\n" + "Melon Chicken|Designs", {
     reply_markup: {
         inline_keyboard: [
             [{
                 text: "View PooCoin Chart",
                 url: "https://poocoin.app/tokens/0xa244ef3f07699b4b929c17e99ddb39bec238465b"
             },
             {
                 text: "View Nomics Chart",
                 url: "https://nomics.com/assets/eggc-eggchain"
             }
             ]
                  
                         ]
        },
        parse_mode: 'HTML'

        })
    }
    oldPrice = precioEggc;    
console.log(oldPrice);
})
})
})
})

bot.hears(/scam|scammer|scammers/, (ctx) => ctx.replyWithHTML("\u{203C}<strong>BEWARE OF SCAMMERS</strong>\u{203C}\n \n-This is <strong>EggChain Project</strong> official group, any other affiliated groups will be announced here. Report any other non affiliated groups using EggChain Project name on it.\n \n-EggChain Project admins will never send you a dm first, or never offer you help in dm first.\n \n-EggChain Project does not have any airdrop group or support group or IDO/NFT bots.\n \n-NEVER SHARE YOUR WALLET PHRASE.\n \nReport those scammers by forwarding their messages to @CZ_Chicken and type THIS IS SCAM.\n \nThank You for your support, we'll keep buidling...Stay Tuned for more amazing things from EggChain Project."))
//bot.hears(/bot|Bot|bots/, (ctx) => ctx.replyWithHTML('<strong>Im NOT a Bot!</strong> <strong>/links</strong>'))
bot.hears(/lambo|Lambo|LAMBO/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_photo')
    ctx.replyWithPhoto({ url: "https://gateway.pinata.cloud/ipfs/QmfUmPxBhYJkxPxLyCU7k3Bzzc38VAH9myuHNjceaeMmXy/lambo.jpg"}, 
    { caption: "Lamboregghini"
   })
})
bot.hears(/bullish|bull market|bull/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_photo')
    ctx.replyWithPhoto({ url: "https://gateway.pinata.cloud/ipfs/QmYhqFxEGtgDYa1kK6g63RVQZaFhttbkWhXAcPzL9o4ZR5/ChickenMoon.PNG"}, 
    { caption: "Chicken to the Moon!"
   })
})
bot.hears(/how to stake?|how to start staking?/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing')
    ctx.reply("TUTORIAL about how Start Playing and Earning! Hatching some $EGGC\n https://youtu.be/768UBT_3ySQ")
})
bot.hears(/how to unstake?|Unstake|unstake/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing')
    ctx.reply("TUTORIAL about how to Unstake your EVos or your EGGC\n https://youtu.be/eCmC_M-565M\n If you want to unstake from Farmagaeddon pool or any other partner pool please put your gas fee up at 600,000. This can fix and make the tx.")
})
bot.hears(/where I can read?|Where I can read?/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing')
    ctx.reply("We have a Medium page with a lot of info about it, please follow this link:\n https://eggchainproject-sol.medium.com/\n Check also our GitBook:\n https://eggchainproject.gitbook.io/eggchain-project/untitled")
})
bot.hears(/where I can look my NFT?|how to display my NFT?/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing')
    ctx.reply( "TUTORIAL How to add and display NFTs to your Metamask Wallet Mobile Add and display your purchase NFTs on your metamask wallet mobile. Is good to mention that only wallets mobiles can display NFTs\n https://youtu.be/VGfnMdyWv2E")
})
bot.hears(/what is the value of goldenevo?|value of goldenevo|liquidity of goldenevo|can I sell goldenevo?/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing')
    ctx.reply( "Stake GoldenEVo, Earn $EGGC\n or swap GoldenEVos for any other EVoChicken in our game visit: https://eggchainswap.netlify.app")
})
bot.hears("good morning", (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing')
    ctx.reply("Good morning for you too rooster\u{1F505}!", {"reply_to_message_id": ctx.message.message_id})
})
bot.hears(/any admin|admin|Admin/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing')
    ctx.reply("Sending message to @CZ_Chicken \u{1F47E}!", {"reply_to_message_id": ctx.message.message_id})
})
bot.hears(/Propusal|propusal/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing')
    ctx.reply("Please Send message to @CZ_Chicken \u{1F47E}!", {"reply_to_message_id": ctx.message.message_id})
})
bot.hears(/bubblegum|Bubblegum|bubbe gum/, (ctx) => {
    ctx.replyWithVideo({ url: "https://gateway.pinata.cloud/ipfs/QmcSZ7zHNTirc6fXzqWCzssKMzUTqM9h1ACP2SXPrnKQxQ/bubbleevo.gif"}, 
    { caption: "You can still buy bubblegum´s LL´ NFT investing 900 EGGC\u{1F95A} or 20,000,000 BUBBLEGUM Token HERE:\u{1F447}\n https://www.eggchainproject.com/collab Get this Legit and Legend Non Fungible Chicken\u{1F447} $5 NFT card"
   })
})
bot.hears(/Olive|olive|OLIVE/, (ctx) => {
    ctx.replyWithVideo({ url: "https://gateway.pinata.cloud/ipfs/QmRefGBcbPcFcicXqahRmaaSE8rcvFvcPC2Ref1sfY1AqH/oliveevo2.gif"}, 
    { caption: "Buy OLIVE´s NFT just investing 900 EGGC\u{1F95A} or 25 OLIVE Token HERE:\u{1F447}\n https://www.eggchainproject.com/collab\n Enjoy the EGGC-OLIVE Farm HERE:\u{1F447} https://olive.cash/farms Scard Machingun Non Fungible Chicken $5 NFT card"
   })
})
bot.hears(/Farmageddon|farmageddon|FG/, (ctx) => {
    ctx.replyWithVideo({ url: "https://gateway.pinata.cloud/ipfs/QmYhcJcycNoASDkETiXiMusydRFmiMwptd87ggDi8KzTeb/farmageddoncard.gif"}, 
    { caption: "New NFC able NOW EVoFarmageddon NFT approve 900 EGGC\u{1F95A} or use 35,000,000,000 FG Token HERE:\u{1F447}\n https://www.eggchainproject.com/collab\n And Get the Farmer of the Chickfarmers $5 NFT card"
   })
})
bot.hears(/WOLF|Wolf|wolf|WSPP/, (ctx) => {
    ctx.replyWithVideo({ url: "https://gateway.pinata.cloud/ipfs/QmP6ZvisN3dYf8nJ2nWsmfoMeDCcBEyBNbJz5prkqsVrRz"}, 
    { caption: "Support and get your WSPP´s NFWC just approve 900 EGGC\u{1F95A} or 90M WSPP Token HERE:\u{1F447}\n https://www.eggchainproject.com/collab\n Crypto Help Non Fungible Wolf Chicken $5 NFT card"
   })
})
bot.hears(/Infinite|InfiniteOne|IF1/, (ctx) => {
    ctx.replyWithVideo({ url: "https://gateway.pinata.cloud/ipfs/QmXJtBBy92JuhiunSCARHQHHXG6SDH933rh989nM9VV3oE"}, 
    { caption: "Get Your IF1´s NFC just approve 900 EGGC\u{1F95A} or 400M IF1 Token HERE:\u{1F447}\n https://www.eggchainproject.com/collab\n Crypto infinite Chicken $5 NFT card"
   })
})
bot.hears("Good morning", (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing')
    ctx.reply("Fuck. Im alive again!. Good Morning Everyone\u{1F305}!", {"reply_to_message_id": ctx.message.message_id})
})
bot.hears("Good evening", (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing')
    ctx.reply("Hey! Hope you are having a great day so far rooster! :)", {"reply_to_message_id": ctx.message.message_id})
})
bot.hears("good evening", (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing')
    ctx.reply("Good evening too !", {"reply_to_message_id": ctx.message.message_id})
})
bot.hears("fuck", (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing')
    ctx.reply("Hallelujah !", {"reply_to_message_id": ctx.message.message_id})
})
bot.command("roadmap", (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing')
    ctx.reply('Please go visit our website to see the roadmap complete https://eggchain.netlify.app', {"reply_to_message_id": ctx.message.message_id})
   })
bot.command("airdrop", (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing')
    ctx.reply('one last airdrop? what the community say?');
   }) 
bot.command("contract", (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing')
    ctx.reply('0xA244Ef3f07699b4b929C17e99DDB39BeC238465B');   
    ctx.reply('Token Name: EggChain\u{00AE}'); 
    ctx.reply('Token Symbol: $EGGC'); 
    ctx.reply('Token Decimals: 18');
    ctx.reply('Binance Smart Chain/BSC');
    ctx.deleteMessage(ctx.chatId, ctx.messageId);
   })
bot.command("launch", (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing')
    ctx.reply('Please go visit our website to see all the roadmap and dates https://eggchain.netlify.app', {"reply_to_message_id": ctx.message.message_id})    
   }) 
bot.command('report', (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing')
    ctx.reply("Hey! Be nice with the community! No bad words! No Spam! if you want advertise your project send a DM to @CZ_Chicken Marketing Manager.")    
   }) 
//bot.on('sticker', (ctx) => {
//   ctx.reply('Nice Sticker' + ' ' + ctx.from.first_name)    
// }) 
bot.hears('.gif', (ctx) => {
    ctx.reply('Nice GIF dude!  Share a DOPE Chicken GIF to the community and I will give you 2 $EGGC')    
   }) 
bot.hears(/rug pull|Rug pull|rugpull|Rug|Rugpull/, (ctx) => {
     ctx.deleteMessage(ctx.chatId, ctx.messageId);    
   }) 
bot.hears(/pirate|Pirate/, (ctx) => {
     ctx.deleteMessage(ctx.message.id);    
   }) 
bot.hears(/Fairlaunch|fairlaunch|FAIRLAUNCH/, (ctx) => {
    ctx.deleteMessage(ctx.message.id);    
  }) 
bot.hears(/Roadmap|roadmap|ROADMAP/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing')
    ctx.reply('See our roadmap here https://eggchain.netlify.app');    
   })
bot.hears("when airdrop?", (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing')
    ctx.reply('one last airdrop? what the community say?');    
   })  
bot.hears("wen airdrop?", (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing')
    ctx.reply('one last airdrop? what the community say?');    
   })  
bot.hears("when airdrop sr?", (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing')
    ctx.reply('one last airdrop? what the community say?');    
   })  
bot.hears(/HI|Hi/, ctx => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing')
    return ctx.reply("Hello, Its good to see you here" + ' ' + ctx.from.first_name + ' ' + '/help', {"reply_to_message_id": ctx.message.message_id});
})
bot.hears(/hello|Hello|HELLO/, ctx => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing')
    return ctx.reply("Hi" + ' ' + ctx.from.first_name + ' ' + 'we´re glad to have you here! /help', {"reply_to_message_id": ctx.message.message_id});
})
/*bot.hears(/Yo|YO/, ctx => {
    return ctx.reply("What up dude! Awesome to see you around" + ' ' + ctx.from.first_name + ' ' + '/help ');
}) */
bot.hears(/Alola|alola|ALOLA/, ctx => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing')
    return ctx.reply("Alolaaa!" + ' ' + ctx.from.first_name + ' ' + '/help', {"reply_to_message_id": ctx.message.message_id});
})
bot.hears(/Hola|hola|HOLA/, ctx => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing')
    return ctx.reply("Hola Chicken sin cola!  /help", {"reply_to_message_id": ctx.message.message_id});
}) 
bot.hears(/Launch|launch|LAUNCH/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing')
    ctx.reply('See our dates and the compleate roadmap here: https://eggchain.netlify.app', {"reply_to_message_id": ctx.message.message_id});    
   })
bot.hears("when to the moon?", (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_video')
    ctx.replyWithVideo({ url: `https://gateway.pinata.cloud/ipfs/QmZqYG73jSyioF5Kp5jrqxmTF9XxRdSPZDo7c7a8J95vcj`},
        { caption: '¿Why people are so obsessed with the moon? Roosters sing to the SUN!! SUN IS BEYOND OF MOON!! '
    })
    })   
bot.hears("wen to the moon?", (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_video')
    ctx.replyWithVideo({ url: `https://gateway.pinata.cloud/ipfs/QmZqYG73jSyioF5Kp5jrqxmTF9XxRdSPZDo7c7a8J95vcj`}, 
        { caption: '¿Why people are so obsessed with the moon? Roosters sing to the SUN!! SUN IS BEYOND OF MOON!! ' 
        })
    })   
bot.hears("next to the moon!", (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_video')
    ctx.replyWithVideo({ url: `https://gateway.pinata.cloud/ipfs/QmZqYG73jSyioF5Kp5jrqxmTF9XxRdSPZDo7c7a8J95vcj`}, 
        { caption: '¿Why people are so obsessed with the moon? Roosters sing to the SUN!! SUN IS BEYOND OF MOON!! ' 
        })
    })   
bot.hears("Eggc to the moon", (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_video')
    ctx.replyWithVideo({ url: `https://gateway.pinata.cloud/ipfs/QmZqYG73jSyioF5Kp5jrqxmTF9XxRdSPZDo7c7a8J95vcj`}, 
        { caption: '¿Why people are so obsessed with the moon? Roosters sing to the SUN!! SUN IS BEYOND OF MOON!! ' 
        })
    }) 
bot.hears(/received|Received|recived/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing')
    ctx.reply('we will check this process as soon one of the team check this message. Please be patient', {"reply_to_message_id": ctx.message.message_id});    
   }) 
bot.hears(/thanks|tks|Tks|thk|Thk|Thanks|thank you|Thank you/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_video')
    ctx.replyWithVideo({ url: "https://media.giphy.com/media/i7a0frOsDmw5a/giphy.mp4"},
    { caption: "Thanks to you <3"
   })
})     
bot.hears(/Crazy|crazy/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_video')
    ctx.replyWithVideo({ url: "https://media.giphy.com/media/Wa53IkRmsmn4s/giphy-downsized-large.gif?cid=790b76113c4512e38520ff36f5592977842f05b0daa23eaa&rid=giphy-downsized-large.gif&ct=g"},
    { caption: "Chickens!!!"
   })
})
bot.hears(/Pink Chicken|pink chicken|pinkevo|PinkEvo|pink|Pink/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_photo')
    ctx.replyWithPhoto({ url: "https://gateway.pinata.cloud/ipfs/QmXPjXATQesoQnbMo4t9CS1E81m1DRHnLiwvjUo5Gf28wk"},
    { caption: "WHAT?"
   })
})
bot.hears(/chickens|crazy/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_video')
    ctx.replyWithVideo({ url: "https://media.giphy.com/media/ILF08TFzPUcNy/giphy-downsized-large.gif?cid=790b7611837366c3230788c22381aed5c505ffc1d49ee07b&rid=giphy-downsized-large.gif&ct=g"},
    { caption: "Chickens!!!"
   })
})
bot.hears(/blockchain|escape|scape/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_video')
    ctx.replyWithVideo({ url: "https://media.giphy.com/media/gKm89M79WdYIpAu1p4/giphy.mp4"},
    { caption: "HashPower Helps the chickens escape from the blockchain"
   })
})
bot.hears(/evochickens|evos|Evos|Evochickens/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_video')
    ctx.replyWithVideo({ url: "https://media.giphy.com/media/e7ILCZyu2QyJDh2aDO/giphy.mp4"},
    {"reply_to_message_id": ctx.message.message_id})
})
bot.hears(/Black|black|BlackEvo|black evochicken/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_video')
    ctx.replyWithVideo({ url: "https://media.giphy.com/media/15bv9QaQgogfjsZXQx/giphy.gif?cid=790b7611488874614f9e35c2058325741bb15077bcc728df&rid=giphy.gif&ct=g"},
    {"reply_to_message_id": ctx.message.message_id})
})
bot.hears(/paper|hands/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_video')
    ctx.replyWithVideo({ url: "https://media.giphy.com/media/3269qHKjAEwt0f0tps/giphy.mp4"},
    { caption: "paper hands!!!!!"
   })
})
bot.hears(/cool|beautiful/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_video')
    ctx.replyWithVideo({ url: "https://media.giphy.com/media/3d0bbUl1Vyzb5aE41y/giphy.gif?cid=790b7611ac5f2ca079c79b2902c2d019008284a01681f8eb&rid=giphy.gif&ct=g"},
    { caption: "WOW"
   })
})
bot.hears(/announcements|ads|news|ADS/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_video')
    ctx.replyWithVideo({ url: "https://media.giphy.com/media/SUR9Xst1zEzVpHRDPb/giphy.gif?cid=790b7611a77d889dc2fb412c0834cc7d563c5b39c74b5c28&rid=giphy.gif&ct=g"},
    { caption: "WOW"
   })
})
bot.hears(/Link|Links/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_video')
    ctx.replyWithVideo({ url: "https://media.giphy.com/media/dG3aeAFruXtja/giphy.gif?cid=790b7611a9bc07f4e5f831de7f04cb28092c42779308d12e&rid=giphy.gif&ct=g"},
    { caption: "Sending links Sr. please use /links command Sr."
   })
})
bot.hears(/Let's Go|let's goo|war/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_video')
    ctx.replyWithVideo({ url: "https://media.giphy.com/media/3269qHKjAEwt0f0tps/giphy.mp4"},
    { caption: "Let's CLOCKKK!!!!!"
   })
})
bot.hears(/player vs player|PVP|pvp mode/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_video')
    ctx.replyWithVideo({ url: "https://gateway.pinata.cloud/ipfs/QmUHKNMgRLxw2E4UgYoPuxkYR2u3qJE6YUM6GaS1VwmwpT"},
    { caption: "Let's the battle begin!!!!!"
   })
})
bot.hears("how is yours chicks going?", (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_video')
    ctx.replyWithVideo({ url: "https://media.giphy.com/media/xT5LMM7QqElPWhpLgs/giphy.mp4"},
    {"reply_to_message_id": ctx.message.message_id})
})
bot.hears(/awesome|Awesome/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_video')
    ctx.replyWithVideo({ url: "https://media.giphy.com/media/mEalzVXtAzr0KwWqRR/giphy.mp4"},
    {"reply_to_message_id": ctx.message.message_id})
})
bot.hears(/game|Game/, (ctx) => {
      ctx.telegram.sendChatAction(ctx.chat.id, 'upload_video')
      ctx.replyWithVideo({ url: "https://media.giphy.com/media/9AooPIXbwxI40/giphy.mp4"},
      { caption: ""
    })
})
bot.hears(/chicken game|Chicken game/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_video')
  ctx.replyWithVideo({ url: "https://gateway.pinata.cloud/ipfs/QmSYUWvdH8ppPPGxdd5tu3mv8LARXWkGPa6dksRgYzCfgS/flygamechick1.mp4"},
{ caption: ""
   })
})
bot.hears(/buy|Buy|buy now/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_video')
    ctx.replyWithVideo({ url: "https://media.giphy.com/media/l0JMaNj0xZ6cDFLvq/giphy.mp4"},
    { caption: "BUY NOW HERE!\u{1F447}\n https://eggchainswap.netlify.app/#/swap"
   })
})
bot.hears(/eggs|Eggs|EGGC/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_video')
    ctx.replyWithVideo({ url: "https://media.giphy.com/media/KHoepBlQVHOknP1ubz/giphy-downsized-large.gif?cid=790b76110954bee1309e9c849a3f738a0779ec60c846bcd5&rid=giphy-downsized-large.gif&ct=g"},
    { caption: "BUY NOW HERE!\u{1F447}\n https://eggchainswap.netlify.app/#/swap"
   })
})
bot.hears(/eggc|Eggc|EGGs/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_video')
    ctx.replyWithVideo({ url: "https://media.giphy.com/media/WoQgqvom3DK6uyl4xb/giphy.gif?cid=790b7611a4272628929d2810dea76fd090e23aa83e656671&rid=giphy.gif&ct=g"},
    { caption: "BUY NOW HERE!\u{1F447}\n https://eggchainswap.netlify.app/#/swap"
   })
})
bot.hears(/hatch|Hatch|HATCH/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_video')
    ctx.replyWithVideo({ url: "https://media.giphy.com/media/12Kbpf9xCbQcjC/giphy.gif?cid=790b7611489ef7429ddd8d4fc3f60aef03b141e1d25de35d&rid=giphy.gif&ct=g"},
    { caption: "Hatch Them But save some EGGC to recieve more!\u{1F447}\n Check this video tutorial for first steps: https://youtu.be/768UBT_3ySQ"
   })
})
bot.hears(/excellent|Excellent|Eggcellent/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_video')
    ctx.replyWithVideo({ url: "https://media.giphy.com/media/LMQvDk7epozTtIIIMB/giphy.gif?cid=790b76110744d84f47995aa96580efe733bf8005b39ccbe8&rid=giphy.gif&ct=g"},
    { caption: "BUY NOW HERE!\u{1F447}\n https://eggchainswap.netlify.app/#/swap"
   })
})
bot.hears(/extreme|Extreme|Eggstreme/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_video')
    ctx.replyWithVideo({ url: "https://media.giphy.com/media/kI8iaVqQVH4OQZVfjg/giphy.gif?cid=790b76114781cb4208ee51aae7cf90f84097eba3491ca284&rid=giphy.gif&ct=g"},
    { caption: "BUY NOW HERE!\u{1F447}\n https://eggchainswap.netlify.app/#/swap"
   })
})
bot.hears(/LOVE|love|Love/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_video')
    ctx.replyWithPhoto({ url: "https://gateway.pinata.cloud/ipfs/QmXzrpvUDmyNyNfsCD1qZ4mx1WcQRFn4t7NMmF8SBFgNCR/lovechicken.jpg"},
    { caption: "True Love <3"
   })
})
bot.hears(/lost|lost it|Lost/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_photo')
    ctx.replyWithPhoto({ url: "https://gateway.pinata.cloud/ipfs/QmZefAfFb5WLc36MuPwnUUF62r7B226sQ7bGskxRdr3cA4/chickenlost.PNG"},
    { caption: "-.-"
   })
})
bot.hears(/delivery|Delivery|DELIVERY/, (ctx) => {
    ctx.reply("");
   })
bot.hears(/raid|Raid|PvP|pvp/, (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_video')
    ctx.replyWithVideo({ url: "https://media.giphy.com/media/fQSdbBHHSQUo08wr5Z/giphy.gif?cid=790b7611583f1871e42fb7baa9c721c223628cd9f0c9b688&rid=giphy.gif&ct=g"},
    { caption: "Are you Ready MotherClocker?"
   })
})
bot.command('/race', (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_photo')
    ctx.replyWithPhoto({ url: "https://gateway.pinata.cloud/ipfs/QmSMKCnpMjN6zQa5AKg2MuxsUZWaAMshiJUKytocXuMCp7/ticket%20race.PNG"}, 
    { caption: "Our community is happy to announce that the Chicken Casino has officially opened with TWO GAMES: Chicken Race on the Blockchain\n BET 100 $EGGC AND WIN DOUBLE !!!!!\n 1- Connect your wallet\n 2-Buy $ EGGC\n 3-Approve and BET for your best chicken\n 4-Claim your prize\n PLAY NOW HERE:https://www.eggchainproject.com/teams"
   })
})
bot.hears("/race", (ctx) => {
    ctx.deleteMessage(ctx.chatId, ctx.messageId);
})
var pollOptions = ["1.- Not familiar at all", "2.-I've heard something about that", "3.-I have read some concepts but have never practiced it", "4'-I have experience on PSC", "5.- I can recommend you the best place to do it"]
bot.on('new_chat_members', (ctx) => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Hi' + ' ' + ctx.from.first_name + ' ' + 'Welcome to the Official Group of \u{1F373}EggChain Project\u{00AE}!  \u{1F4CC}Please check this video to know more about the project 👍 https://m.youtube.com/watch?v=pn0j9lTqA10&feature=youtu.be Please help us to know more about you! answer this poll Honestly and Anonymously')
    ctx.deleteMessage();
    //var pollOptions = ["1.- Not familiar at all", "2.-I've heard something about that", "3.-I have read some concepts but have never practiced it", "4'-I have experience on PSC", "5.- I can recommend you the best place to do it"]
    bot.telegram.sendPoll(ctx.chat.id, 'In a range of 1-5 how much are you familiar to staking and farming process?', pollOptions, {reply_to_message_id:-23338})
    //console.log(message.message_id)
    //bot.telegram.forwardMessage(ctx.chat.id, -1001250652205, 23316,)
    })
})
/*bot.on('new_chat_members', (ctx) => {
    console.log(ctx.from)
    let onMessage = 'Hi' + ' ' + ctx.from.first_name + ' ' + 'Welcome to the Official Group of \u{1F373}EggChain Project\u{00AE}!  \u{1F4CC}Please check our pinned message and the links below, please check this video to know more about the Project 👍 https://m.youtube.com/watch?v=pn0j9lTqA10&feature=youtu.be'
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, onMessage, {
        reply_markup: {
            inline_keyboard: [
                [{
                    
                        text: "\u{1F426}Twitter",
                        url: 'https://www.twitter.com/egg_chain'
                    },
                    {
                        text: "\u{1F310}Website",
                        url: 'https://eggchain.netlify.app'
                    },
                    {
                        text: "\u{1F4FC}Youtube",
                        url: 'https://www.youtube.com/channel/UCDfIcWQi1QNl7Mds97NqyNw'
                        
                    }], 
                    [{   
                        text: "\u{1F423}Hatch EGGC",
                        url: 'http://www.eggchainproject.com/incubators'
                    },
                    {
                        text: "\u{1F413}DYOR",
                        url: 'https://eggchainproject.gitbook.io/eggchain-project/untitled'
                    },
                    {
                        text: "\u{1F4C8}CHART",
                        url: 'https://poocoin.app/tokens/0xa244ef3f07699b4b929c17e99ddb39bec238465b'
                    }],
                    [{
                        text: "\u{1F95A}BUY NOW\u{1F95A}",
                        url: 'https://eggchainswap.netlify.app/#/swap'
                    },
                    {
                        text: "\u{1F4BB}PLAY NOW\u{1F4F1}",
                        url: 'https://www.eggchainproject.com/'
                    }
                ],

            ]
        
        }
    })
})*/
bot.command('help', (ctx) => {
    console.log(ctx.from)
    let helpMessage = 'Hi' + ' ' + ctx.from.first_name + ' ' + 'Maybe one of this links below can help you \u{1F373} if not please send a PM to answer your question\u{00AE}!  \u{1F4CC}'
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, helpMessage, {
        reply_markup: {
            inline_keyboard: [
                [{
                    
                        text: "\u{1F426}Twitter",
                        url: 'https://www.twitter.com/egg_chain'
                    },
                    {
                        text: "\u{1F310}Website",
                        url: 'https://eggchain.netlify.app'
                    },
                    {
                        text: "\u{1F4FC}Youtube",
                        url: 'https://www.youtube.com/channel/UCDfIcWQi1QNl7Mds97NqyNw'
                        
                    }], 
                    [{   
                        text: "\u{1F423}Hatch EGGC",
                        url: 'http://www.eggchainproject.com/incubators'
                    },
                    {
                        text: "\u{1F413}DYOR",
                        url: 'https://eggchainproject.gitbook.io/eggchain-project/untitled'
                    },
                    {
                        text: "\u{1F4C8}CHART",
                        url: 'https://poocoin.app/tokens/0xa244ef3f07699b4b929c17e99ddb39bec238465b'
                    }],
                    [{
                        text: "\u{1F95A}BUY NOW\u{1F95A}",
                        url: 'https://eggchainswap.netlify.app/#/swap'
                    },
                    {
                        text: "\u{1F4BB}PLAY NOW\u{1F4F1}",
                        url: 'https://www.eggchainproject.com/'
                    }
                ],

            ]
        
        }
    })
})
bot.command('links', (ctx) => {
    console.log(ctx.from)
    let helpMessage = 'Hi maybe one of this links below can help you \u{1F373} if not please send a PM to answer your question\u{00AE}!  \u{1F4CC}'
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, helpMessage, {
        reply_markup: {
            inline_keyboard: [
                [{
                    
                        text: "\u{1F426}Twitter",
                        url: 'https://www.twitter.com/egg_chain'
                    },
                    {
                        text: "\u{1F310}Website",
                        url: 'https://eggchain.netlify.app'
                    },
                    {
                        text: "\u{1F4FC}Youtube",
                        url: 'https://www.youtube.com/channel/UCDfIcWQi1QNl7Mds97NqyNw'
                        
                    }], 
                    [{   
                        text: "\u{1F423}Hatch EGGC",
                        url: 'http://www.eggchainproject.com/incubators'
                    },
                    {
                        text: "\u{1F413}DYOR",
                        url: 'https://eggchainproject.gitbook.io/eggchain-project/untitled'
                    },
                    {
                        text: "\u{1F4C8}CHART",
                        url: 'https://poocoin.app/tokens/0xa244ef3f07699b4b929c17e99ddb39bec238465b'
                    }],
                    [{
                        text: "\u{1F95A}BUY NOW\u{1F95A}",
                        url: 'https://eggchainswap.netlify.app/#/swap'
                    },
                    {
                        text: "\u{1F4BB}PLAY NOW\u{1F4F1}",
                        url: 'https://www.eggchainproject.com/'
                    }
                ],

            ]
        
        }
    })
})
    })
bot.launch()