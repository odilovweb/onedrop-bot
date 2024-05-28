const { Telegraf, Telegram } = require("telegraf");
const { message } = require("telegraf/filters");
const axios = require("axios");
const API = "7007761863:AAEUsrtn-BIdGcanJMdp4P7lke8f3bisBG8";
const apiCode =
  "patdGIsCaU7hT4Cb0.18bf5b02fda3faa8f4bc563a8f9dafb567624a6e356e1a81ef2d699d3948db45";
const bot = new Telegraf(API);
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
let usersIds = [];

const apiBaseUrl =
  "https://api.airtable.com/v0/app3A2MZlE8zw9wjM/tblrmZNiJZlQOacQW";
const apiBaseUrl2 =
  "https://api.airtable.com/v0/app3A2MZlE8zw9wjM/tblue5zeLDqj87zEw";
const admin = "841886966";

let channel = "2018020256";
let channel1 = "1873339742";
let channel2 = "1576332973";

let chanLink = "https://t.me/+B6ibcl6qtb45YmVi";
let chanLink1 = "https://t.me/+y62ECfeXAWw3ZDgy";
let chanLink2 = "https://t.me/+CQRKl4gO8rswNmQ6";

const zayavka = "1882547088";
let minimal = 10;
let canWithdraw = true;
let users = [];
let download = true;
const fetchAllRecords = async () => {
  console.log("boshlandi");
  let records = [];
  let offset = null;

  do {
    const params = offset ? { offset } : {};
    const response = await axios.get(apiBaseUrl2, {
      headers: { Authorization: `Bearer ${apiCode}` },
      params,
    });

    records = records.concat(response.data.records);
    offset = response.data.offset;
  } while (offset);

  return records;
};
const fetchAllRecords2 = async () => {
  console.log("boshlandi 2");
  let records = [];
  let offset = null;

  do {
    const params = offset ? { offset } : {};
    const response = await axios.get(apiBaseUrl, {
      headers: { Authorization: `Bearer ${apiCode}` },
      params,
    });

    records = records.concat(response.data.records);
    offset = response.data.offset;
  } while (offset);

  return records;
};
const addMembers = async (down) => {
  if (down) {
    try {
      console.log("started");
      const records = await fetchAllRecords();
      const records2 = await fetchAllRecords2();
      if (records.length === 0) {
        console.log("No records found.");
      } else {
        const apiUsers = records;
        usersIds = [];
        apiUsers.forEach((u) => {
          usersIds.push(Number(u.fields.id));
        });
        records2.forEach((u) => {
          usersIds.push(Number(u.fields.id));
        });
        download = false;
        console.log("muvaffaqiyatli qoshildi");
      }
    } catch (error) {
      console.error(error);
    }
  }
};
addMembers(download);

const isMemberFunc = async (ctx) => {
  const id = ctx.chat.id;

  const member = await ctx.telegram
    .getChatMember(`-100${channel}`, id)
    .then((s) => s.status)
    .catch((e) => console.log(e));

  const member1 = await ctx.telegram
    .getChatMember(`-100${channel1}`, id)
    .then((s) => s.status)
    .catch((e) => console.log(e));

  const member2 = await ctx.telegram
    .getChatMember(`-100${channel2}`, id)
    .then((s) => s.status)
    .catch((e) => console.log(e));

  if (member == "creator" || member == "member") {
    if (member1 == "creator" || member1 == "member") {
      if (member2 == "creator" || member2 == "member") {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
};

// const isMemberFuncId = async (idBn, ctx) => {
//   const id = idBn;
//   const member = await ctx.telegram
//     .getChatMember(`-100${channel}`, id)
//     .then((s) => s.status)
//     .catch((e) => console.log(e));

//   const member1 = await ctx.telegram
//     .getChatMember(`-100${channel1}`, id)
//     .then((s) => s.status)
//     .catch((e) => console.log(e));

//   const member2 = await ctx.telegram
//     .getChatMember(`-100${channel2}`, id)
//     .then((s) => s.status)
//     .catch((e) => console.log(e));

//   if (member == "creator" || member == "member") {
//     if (member1 == "creator" || member1 == "member") {
//       if (member2 == "creator" || member2 == "member") {
//         return true;
//       } else {
//         return false;
//       }
//     } else {
//       return false;
//     }
//   } else {
//     return false;
//   }
// };

let payload = false;
bot.start(async (ctx) => {
  const id = ctx.chat.id;
  {
    let isUserOr = false;
    usersIds.forEach((i) => {
      if (i == id) {
        isUserOr = true;
      }
    });

    if (!isUserOr) {
      const userData = {
        fields: {
          id: `${ctx.chat.id}`,
        },
      };

      try {
        const response = await axios.post(apiBaseUrl, userData, {
          headers: {
            Authorization: `Bearer ${apiCode}`,
            "Content-Type": "application/json",
          },
        });

        usersIds.push(ctx.chat.id);
        console.log("User added");
      } catch (error) {
        console.error("Error adding user:", error);
        ctx.reply("Failed to add user. Please try again later.");
      }
    }
  }

  //payload
  payload = ctx.payload;
  //payload

  //isMember

  const isMember = await isMemberFunc(ctx);
  //isMember

  if (isMember) {
    //referral

    //referral end

    if (payload == "hot") {
      try {
        await ctx.telegram.sendMessage(
          ctx.chat.id,
          "Near Hot loyihasining darsligini olish uchun bosing 👇",
          {
            reply_markup: {
              inline_keyboard: [
                [{ text: "Near Hot Darslik", callback_data: "hot" }],
                [
                  {
                    text: "Botning boshqa funksiyalari",
                    callback_data: "home",
                  },
                ],
              ],
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    } else if (payload == "catizen") {
      try {
        await ctx.telegram.sendMessage(
          ctx.chat.id,
          "Catizen loyihasining darsligini olish uchun bosing 👇",
          {
            reply_markup: {
              inline_keyboard: [
                [{ text: "Catizen Darslik", callback_data: "catizen" }],
                [
                  {
                    text: "Botning boshqa funksiyalari",
                    callback_data: "home",
                  },
                ],
              ],
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    } else if (payload == "vertus") {
      try {
        await ctx.telegram.sendMessage(
          ctx.chat.id,
          "Vertus Wallet loyihasining darsligini olish uchun bosing 👇",
          {
            reply_markup: {
              inline_keyboard: [
                [{ text: "Vertus Wallet Darslik", callback_data: "vertus" }],
                [
                  {
                    text: "Botning boshqa funksiyalari",
                    callback_data: "home",
                  },
                ],
              ],
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    } else if (payload == "body") {
      try {
        await ctx.telegram.sendMessage(
          ctx.chat.id,
          "BodyPump loyihasining darsligini olish uchun bosing 👇",
          {
            reply_markup: {
              inline_keyboard: [
                [{ text: "BodyPump Darslik", callback_data: "body" }],
                [
                  {
                    text: "Botning boshqa funksiyalari",
                    callback_data: "home",
                  },
                ],
              ],
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await ctx.telegram.sendMessage(
          id,
          `Hurmatli <b>foydalanuvchi</b> , botimizga hush kelibsiz !
    O'zingizga kerakli bo'limdan foydalanishingiz mumkin 👇
        `,
          {
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Hamster Kombat sotish 💰",
                    callback_data: "hamster-sell",
                  },
                ],
                [
                  {
                    text: "Tapswap sotish 💰",
                    callback_data: "notcoin-sell",
                  },
                ],
                [
                  {
                    text: "Telegram Airdroplar 🏆",
                    callback_data: "telegram-app",
                  },
                ],
              ],
            },
          }
        );
      } catch (error) {
        if (
          error.code === 403 &&
          error.description.includes("bot was blocked by the user")
        ) {
          console.log(`User ${ctx.from.id} blocked the bot.`);
          // Optionally, remove the user from your database or take other actions
        } else {
          console.error("Failed to send message:", error);
        }
      }
    }
  } else {
    try {
      await ctx.telegram.sendMessage(
        id,
        `Hurmatli <b>foydalanuvchi</b> , quyidagi kanalga obuna bo'lganingizdan so'ng botdan to'liq foydalanishingiz mumkin 👇
        `,
        {
          parse_mode: "HTML",
          reply_markup: {
            inline_keyboard: [
              [{ text: "1️⃣ Kanal 📢", url: chanLink }],
              [
                {
                  text: "2️⃣ Kanal 📢",
                  url: chanLink1,
                },
              ],
              [
                {
                  text: "3️⃣ Kanal 📢",
                  url: chanLink2,
                },
              ],
              [{ text: "Tekshirish ✅", callback_data: "start" }],
            ],
          },
        }
      );
    } catch (error) {
      if (
        error.code === 403 &&
        error.description.includes("bot was blocked by the user")
      ) {
        console.log(`User ${ctx.from.id} blocked the bot.`);
        // Optionally, remove the user from your database or take other actions
      } else {
        console.error("Failed to send message:", error);
      }
    }
  }
});

//bot query

bot.on("callback_query", async (ctx) => {
  //isMember
  const id = ctx.chat.id;
  const isMember = await isMemberFunc(ctx);
  //isMember
  sleep(2500);
  if (isMember) {
    if (ctx.callbackQuery.data == "home") {
      {
        try {
          await ctx.telegram.sendMessage(
            ctx.chat.id,
            `Hurmatli <b>foydalanuvchi</b> , botimizdan bemalol foydalanishingiz mumkin !
        O'zingizga kerakli bo'limni tanlang 👇
            `,
            {
              parse_mode: "HTML",
              reply_markup: {
                inline_keyboard: [
                  [
                    {
                      text: "Hamster Kombat sotish 💰",
                      callback_data: "hamster-sell",
                    },
                  ],
                  [
                    {
                      text: "Tapswap sotish 💰",
                      callback_data: "notcoin-sell",
                    },
                  ],
                  [
                    {
                      text: "Telegram Airdroplar 🏆",
                      callback_data: "telegram-app",
                    },
                  ],
                ],
              },
            }
          );
        } catch (e) {
          console.log(e);
        }
      }
    } else if (ctx.callbackQuery.data == "telegram-app") {
      try {
        await ctx.replyWithPhoto(
          { source: "telegram.png" },
          {
            caption: `<b>Ushbu bo'limda telegramda airdrop beradigan loyihalarda ishtirok etishni o'rganishingiz mumkin</b>
O'zingizga kerakli loyihani tanlang 👇`,
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [{ text: "Near HOT 🔥", callback_data: "hot" }],
                [{ text: "Catizen 🐱", callback_data: "catizen" }],
                [{ text: "Body Pump 🏋️‍♀️", callback_data: "body" }],
                [{ text: "Vertus Wallet 🌲", callback_data: "vertus" }],
              ],
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    } else if (ctx.callbackQuery.data == "catizen") {
      try {
        await ctx.replyWithVideo("https://t.me/k02isniwu2kjsi/7", {
          caption: `<b>Catizen 🐱</b>

Catizen loyihasi Telegram va Notcoin tomonida qo'llab quvvatlanadi. Bu degani Airdrop berish ehtimoli juda yuqori. Hoziroq ishlashni boshlang.

Link: https://t.me/catizenbot/gameapp?startapp=r_2761_1084914

Ushbu videoni yaqinlaringiz bilan ulashing 👇`,
          parse_mode: "HTML",
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "Yaqinlaringizga ulashing ✈",
                  url: `https://t.me/share/url?url=Catizen Darslik 🐱&text=
🎮Ushbu link orqali Near Hot loyihasi to'g'risida bepul darslik olishingiz mumkin.
                  
Hoziroq botga kiring 👉 https://t.me/OneDrop_uzbot?start=catizen`,
                },
              ],
              [
                { text: "Orqaga 🔙", callback_data: "telegram-app" },
                { text: "Bosh Menu 🏠", callback_data: "home" },
              ],
            ],
          },
        });
      } catch (error) {
        console.log(error);
      }
    } else if (ctx.callbackQuery.data == "vertus") {
      try {
        await ctx.replyWithVideo("https://t.me/k02isniwu2kjsi/4", {
          caption: `<b>Vertus 🌲</b>

Vertus loyihasi Ton tarmog'ida yaratilgan. Ushbu loyiha ham ishonchli. Hoziroq ishlashni boshlang.

Link: t.me/vertus_app_bot/app?startapp=841886966

Ushbu videoni yaqinlaringiz bilan ulashing 👇`,
          parse_mode: "HTML",
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "Yaqinlaringizga ulashing ✈",
                  url: `https://t.me/share/url?url=Vertus Darslik 🌲&text=
🎮Ushbu link orqali Near Hot loyihasi to'g'risida bepul darslik olishingiz mumkin.
                  
Hoziroq botga kiring 👉 https://t.me/OneDrop_uzbot?start=vertus`,
                },
              ],
              [
                { text: "Orqaga 🔙", callback_data: "telegram-app" },
                { text: "Bosh Menu 🏠", callback_data: "home" },
              ],
            ],
          },
        });
      } catch (error) {
        console.log(error);
      }
    } else if (ctx.callbackQuery.data == "body") {
      try {
        await ctx.replyWithVideo("https://t.me/k02isniwu2kjsi/5", {
          caption: `<b>BodyPump 🏋️‍♀️</b>

Body Pump loyihasi ham yaxhshi loyihalardan biri. Hoziroq boshlang.

Link:https://t.me/Bodypump_app_bot?start=67b46fd1-21cc-413c-8840-5377e52f8b5e

Ushbu videoni yaqinlaringiz bilan ulashing 👇`,
          parse_mode: "HTML",
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "Yaqinlaringizga ulashing ✈",
                  url: `https://t.me/share/url?url=BodyPump Darslik 🏋️‍♀️&text=
🎮Ushbu link orqali Near Hot loyihasi to'g'risida bepul darslik olishingiz mumkin.
                  
Hoziroq botga kiring 👉 https://t.me/OneDrop_uzbot?start=body`,
                },
              ],
              [
                { text: "Orqaga 🔙", callback_data: "telegram-app" },
                { text: "Bosh Menu 🏠", callback_data: "home" },
              ],
            ],
          },
        });
      } catch (error) {
        console.log(error);
      }
    } else if (ctx.callbackQuery.data == "hot") {
      try {
        await ctx.replyWithVideo("https://t.me/k02isniwu2kjsi/6", {
          caption: `<b>Near Hot</b>

Hot loyihasi top kriptavalyutalardan biri bo'lgan Near bilan hamkorlikda ochilgan. Ushbu loyiha oz fursat ichida juda ham yaxshi natijalar ko'rsatdi. Tezroq ushbu loyihada ishtirok etishni boshlang.

Link: https://t.me/herewalletbot/app?startapp=167810

Ushbu videoni yaqinlaringiz bilan ulashing 👇`,
          parse_mode: "HTML",
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "Yaqinlaringizga ulashing ✈",
                  url: `https://t.me/share/url?url=Near Hot Darslik 🔥&text=
🎮Ushbu link orqali Near Hot loyihasi to'g'risida bepul darslik olishingiz mumkin.
                  
Hoziroq botga kiring 👉 https://t.me/OneDrop_uzbot?start=hot`,
                },
              ],
              [
                { text: "Orqaga 🔙", callback_data: "telegram-app" },
                { text: "Bosh Menu 🏠", callback_data: "home" },
              ],
            ],
          },
        });
      } catch (error) {
        console.log(error);
      }
    } else if (ctx.callbackQuery.data == "notcoin-sell") {
      {
        try {
          await ctx.telegram.sendMessage(
            ctx.chat.id,
            `<b>Tapswap sotish uchun ushbu kanalga a'zo bo'lishingiz kerak 👇</b> 
    
    👉 https://t.me/+LzI6C5bOHCdhNzQ6`,
            {
              parse_mode: "HTML",
              reply_markup: {
                inline_keyboard: [
                  [{ text: "Ortga qaytish 🔙", callback_data: "home" }],
                ],
              },
            }
          );
        } catch (error) {
          console.log(error);
        }
      }
    } else if (ctx.callbackQuery.data == "hamster-sell") {
      {
        await ctx.telegram.sendMessage(
          ctx.chat.id,

          `<b>Hamster Kombat sotish uchun ushbu kanalga a'zo bo'lishingiz kerak 👇</b> 
  
  👉 https://t.me/+ACMH1IaKGek0M2Vi`,
          {
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [{ text: "Ortga qaytish 🔙", callback_data: "home" }],
              ],
            },
          }
        );
      }
    } else if (ctx.callbackQuery.data == "video-dars") {
      {
        await ctx.telegram.sendMessage(
          ctx.chat.id,
          `<b>Bepul kriptavalyuta ishlash</b> 
  
  Ushbu bo'lim orqali siz botga do'stlaringizni taklif qilib pul ishlashingiz mumkin !
  
  Har bir do'stingiz uchun 0.1 USDT.
  1 USDT = narxi 12500 so'm ga teng
  
  Balansingiz ${minimal} USDT bo'lganda pulingizni chiqarib olishingiz mumkin ✔
  
  👇 <b>Pul ishlash uchun</b>
  /referral <b>bosing</b>
  
  <b>Barcha to'lovlarni ushbu kanalda ko'rishingiz mumkin</b>
  👉 https://t.me/+asFl1zjr5zQxMjUy`,
          {
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [{ text: "Ortga qaytish 🔙", callback_data: "home" }],
                [
                  {
                    text: "Pul ishlash 💸",
                    callback_data: "earn",
                  },
                ],
              ],
            },
          }
        );
      }
    }
    //     else if (ctx.callbackQuery.data == "earn") {
    //       const referral = generateReferralLink(ctx.chat.id);
    //       let referrals = 0;
    //       await users.forEach((i) => {
    //         if (i.id == ctx.chat.id) {
    //           referrals = i.referrals;
    //         }
    //       });
    //       ctx.replyWithPhoto(
    //         { source: "onedrop.png" },
    //         {
    //           caption: `<b>Ushbu bot orqali do'stlaringizni botga taklif qilib kriptavalyuta (USDT) ishlashingiz mumkin.</b>

    // Sizning referallaringiz soni: <b>${referrals} ta</b>
    // Sizning balansingiz : <b>${referrals * 0.1} USDT</b>

    // Balansingiz ${minimal} usdt ga yetgandan pulingizni chiqarib olishingiz mumkin.

    // Sizning referral linkingiz 👇
    // // ${referral}
    // // `,
    //           parse_mode: "HTML",
    //           reply_markup: {
    //             inline_keyboard: [
    //               [
    //                 {
    //                   text: "Yaqinlaringizga yuboring ✈",
    //                   url: `https://t.me/share/url?url=OneDrops Bot&text=
    // 💰 Ushbu bot orqali do'stlaringizni botga taklif qilib kriptavalyuta (USDT) ishlashingiz mumkin.
    // 🎮Bundan tashqari botda notcoin , tapswap va hamster kombatga o'xshagan o'yinlarni tangalarni sotish o'rgatiladi.

    // Hoziroq botga kiring 👉 ${referral}`,
    //                 },
    //               ],
    //               [
    //                 { text: "Pul yechish 💰", callback_data: "withdrawl" },
    //                 {
    //                   text: "Bosh menu 🏠",
    //                   url: "https://t.me/Onedrop_uzbot?start=841886966",
    //                 },
    //               ],
    //             ],
    //           },
    //         }
    //       );
    //     }
    else if (ctx.callbackQuery.data == "start") {
      if (payload == "hot") {
        try {
          await ctx.telegram.sendMessage(
            ctx.chat.id,
            "Near Hot loyihasining darsligini olish uchun bosing 👇",
            {
              reply_markup: {
                inline_keyboard: [
                  [{ text: "Near Hot Darslik", callback_data: "hot" }],
                  [
                    {
                      text: "Botning boshqa funksiyalari",
                      callback_data: "home",
                    },
                  ],
                ],
              },
            }
          );
        } catch (error) {
          console.log(error);
        }
      } else if (payload == "catizen") {
        try {
          await ctx.telegram.sendMessage(
            ctx.chat.id,
            "Catizen loyihasining darsligini olish uchun bosing 👇",
            {
              reply_markup: {
                inline_keyboard: [
                  [{ text: "Catizen Darslik", callback_data: "catizen" }],
                  [
                    {
                      text: "Botning boshqa funksiyalari",
                      callback_data: "home",
                    },
                  ],
                ],
              },
            }
          );
        } catch (error) {
          console.log(error);
        }
      } else if (payload == "vertus") {
        try {
          await ctx.telegram.sendMessage(
            ctx.chat.id,
            "Vertus Wallet loyihasining darsligini olish uchun bosing 👇",
            {
              reply_markup: {
                inline_keyboard: [
                  [{ text: "Vertus Wallet Darslik", callback_data: "vertus" }],
                  [
                    {
                      text: "Botning boshqa funksiyalari",
                      callback_data: "home",
                    },
                  ],
                ],
              },
            }
          );
        } catch (error) {
          console.log(error);
        }
      } else if (payload == "body") {
        try {
          await ctx.telegram.sendMessage(
            ctx.chat.id,
            "BodyPump loyihasining darsligini olish uchun bosing 👇",
            {
              reply_markup: {
                inline_keyboard: [
                  [{ text: "BodyPump Darslik", callback_data: "body" }],
                  [
                    {
                      text: "Botning boshqa funksiyalari",
                      callback_data: "home",
                    },
                  ],
                ],
              },
            }
          );
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          await ctx.telegram.sendMessage(
            id,
            `Hurmatli <b>foydalanuvchi</b> , botimizga hush kelibsiz !
    O'zingizga kerakli bo'limdan foydalanishingiz mumkin 👇
        `,
            {
              parse_mode: "HTML",
              reply_markup: {
                inline_keyboard: [
                  [
                    {
                      text: "Hamster Kombat sotish 💰",
                      callback_data: "hamster-sell",
                    },
                  ],
                  [
                    {
                      text: "Tapswap sotish 💰",
                      callback_data: "notcoin-sell",
                    },
                  ],
                  [
                    {
                      text: "Telegram Airdroplar 🏆",
                      callback_data: "telegram-app",
                    },
                  ],
                ],
              },
            }
          );
        } catch (error) {
          if (
            error.code === 403 &&
            error.description.includes("bot was blocked by the user")
          ) {
            console.log(`User ${ctx.from.id} blocked the bot.`);
            // Optionally, remove the user from your database or take other actions
          } else {
            console.error("Failed to send message:", error);
          }
        }
      }
    } else if (ctx.callbackQuery.data == "penalty") {
      if (ctx.chat.id == admin) {
        await ctx.telegram.deleteMessage(
          ctx.chat.id,
          ctx.callbackQuery.message.message_id
        );
      }
      ctx.telegram.sendMessage(
        ctx.callbackQuery.message.text.split(" ")[4],
        `${
          ctx.callbackQuery.message.text.split(" ")[10]
        } miqdoridagi USDT to'lovi bekor qilindi ❌, pul ishlashda noto'g'ri yo'ldan foydalangansiz yoki qandaydir muommo bor !

Adminga murojaat qilishingiz mumkin 👇`,
        {
          reply_markup: {
            inline_keyboard: [
              [{ text: "Admin 🙎‍♂️", url: "https://t.me/Onedrop_admin" }],
            ],
          },
        }
      );
    } else if (ctx.callbackQuery.data == "paid") {
      if (ctx.chat.id == admin) {
        await ctx.telegram.deleteMessage(
          ctx.chat.id,
          ctx.callbackQuery.message.message_id
        );
        ctx.telegram.sendMessage(
          ctx.callbackQuery.message.text.split(" ")[4],
          `${
            ctx.callbackQuery.message.text.split(" ")[10]
          } miqdoridagi USDT hamyoningizga yuborildi 🎉
Ishlashda davom eting /referral`
        );
        ctx.telegram.sendMessage(
          `-100${zayavka}`,
          `${
            ctx.callbackQuery.message.text.split(" ")[7]
          } foydalanuvchining bep20 adresiga ${
            ctx.callbackQuery.message.text.split(" ")[10]
          } miqdorida USDT yuborildi ✅`,
          {
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Pul ishlash 💸",
                    url: "https://t.me/Onedrop_uzbot?start=841886966",
                  },
                ],
              ],
            },
          }
        );
      }
    }
    // else if (ctx.callbackQuery.data == "confirm") {
    //       let balanceCount = 0;
    //       let referralCount = 0;
    //       users.forEach((i) => {
    //         if (i.id == ctx.chat.id) {
    //           balanceCount = i.balance;
    //           referralCount = i.referrals;
    //         }
    //       });
    //       ctx.telegram.sendMessage(
    //         admin,
    //         `
    // <b>Yangi zayavka ⌚</b>

    // <b>id:</b> ${ctx.chat.id}
    // <b>user: </b> ${ctx.chat.username}
    // <b>miqdor: </b> ${balanceCount} USDT
    // <b>referallar soni: </b> ${referralCount} ta
    // <b>manzil: </b> ${ctx.callbackQuery.message.text.split(" ")[20]}
    // `,
    //         {
    //           parse_mode: "HTML",
    //           reply_markup: {
    //             inline_keyboard: [
    //               [{ text: "To'landi ✅", callback_data: "paid" }],
    //               [{ text: "Bekor qilish ❌", callback_data: "unpaid" }],
    //               [{ text: "Jarima ⚠", callback_data: "penalty" }],
    //             ],
    //           },
    //         }
    //       );
    //       users.forEach((i) => {
    //         if (i.id == ctx.chat.id) {
    //           i.balance = 0;
    //           i.referrals = 0;
    //         }
    //       });
    //       {
    //         await ctx.telegram.sendMessage(
    //           ctx.chat.id,
    //           "Zayavkangiz muvaffaqiyatli adminga yuborildi. 24 soat ichida to'lov yuborilmasa adminga murojaat qiling. Admin: @m_odlov",
    //           {
    //             reply_markup: {
    //               inline_keyboard: [
    //                 [
    //                   {
    //                     text: "Bosh menu 🏠",
    //                     url: "https://t.me/Onedrop_uzbot?start=841886966",
    //                   },
    //                 ],
    //               ],
    //             },
    //           }
    //         );
    //       }
    //     }
    else if (ctx.callbackQuery.data == "unpaid") {
      if (ctx.chat.id == admin) {
        await ctx.telegram.deleteMessage(
          ctx.chat.id,
          ctx.callbackQuery.message.message_id
        );
        let reciever = ctx.callbackQuery.message.text.split(" ")[4];
        let recievBalance = ctx.callbackQuery.message.text.split(" ")[10];
        ctx.telegram.sendMessage(
          ctx.callbackQuery.message.text.split(" ")[4],
          `${
            ctx.callbackQuery.message.text.split(" ")[10]
          } miqdoridagi USDT hamyoningizga qaytarildi. Adres yuborishda yoki qandaydir muommo bor. Qayta zayavka yuboring yoki admin bilan bog'laning 👇`,
          {
            reply_markup: {
              inline_keyboard: [
                [{ text: "Pul Yechish", callback_data: "withdrawl" }],
                [{ text: "Admin 🙎‍♂️", url: "https://t.me/onedrop_admin" }],
              ],
            },
          }
        );

        users.forEach((i) => {
          if (i.id == reciever) {
            i.balance = recievBalance;
            i.referrals = recievBalance * 10;
          }
        });
      }
    } else if (ctx.callbackQuery.data == "cancel" && !canWithdraw) {
      await ctx.telegram.deleteMessage(
        ctx.chat.id,
        ctx.callbackQuery.message.message_id
      );
      canWithdraw = true;
    } else if (ctx.callbackQuery.data == "withdrawl") {
      users.forEach(async (i) => {
        if (ctx.chat.id == i.id) {
          let resultFriends = [];
          //start
          //           i.friends.forEach(async (u) => {
          //             const isMember = await isMemberFuncId(u, ctx);
          //             if (!isMember) {
          //               console.log("id");
          //               i.referrals--;
          //               i.balance = i.referrals * 0.1;
          //               resultFriends = i.friends.filter((friend) => {
          //                 friend == u;
          //               });
          //               // end
          //               await ctx.telegram.sendMessage(
          //                 ctx.chat.id,
          //                 `Sizning <b>${u} ID </b> referalingiz kanallardan chiqib ketgani uchun 0.1 USDT balansingizdan olib tashlandi ⚠
          // Sizning hozirgi balansingiz ${i.balance}`,
          //                 { parse_mode: "HTML" }
          //               );
          //               // i.friends = resultFriends;
          //             }
          //           });

          const referrals = i.referrals;
          console.log(referrals);
          if (referrals * 0.1 < minimal) {
            await ctx.telegram.sendMessage(
              ctx.chat.id,
              `❌<b>Balansingizda yetarli mablag' mavjud emas. Pul chiqarish uchun balansingizda kamida ${minimal} USDT bo'lish kerak. 
Ko'proq USDT to'plang </b> /referral `,
              { parse_mode: "HTML" }
            );
          } else {
            canWithdraw = true;
            await ctx.telegram.sendMessage(
              ctx.chat.id,
              `✅<b>Balansingizda yetarli mablag' mavjud. USDT(BEP-20) adresingizni yuboring. </b>  

Ushbu ko'rinishda yuboring: /bep20 0x996bbd17516a6a8d5b6b08f8b929a610df775541                

⚠ Diqqatli bo'ling agarda adres xato yuborilsa pulingiz boshqa adresga ketadi va pul to'lab berilmaydi !
                `,
              { parse_mode: "HTML" }
            );
            bot.command("bep20", (address) => {
              if (address.chat.id == ctx.chat.id && canWithdraw) {
                canWithdraw = false;
                address.telegram.sendMessage(
                  address.chat.id,
                  ` <b>Diqqat , Pul Yechish 💰</b>
  
  Siz yechmoqchi bo'lgan mablag':  <b>${i.balance} USDT</b>
  Sizning bep-20 adresingiz : <b>${address.message.text.split(" ")[1]}</b>
  
  Barchasi to'g'ri ekanligiga aminmisiz ? Aks holda to'lov qaytarilmaydi ⚠
                  `,
                  {
                    parse_mode: "HTML",
                    reply_markup: {
                      inline_keyboard: [
                        [
                          {
                            text: "Tasdiqlash ✅",
                            callback_data: "confirm",
                          },
                        ],
                        [
                          {
                            text: "Bekor qilish ❌",
                            callback_data: "cancel",
                          },
                        ],
                      ],
                    },
                  }
                );
              }
            });
          }
        }
      });
    }
  } else {
    if (
      ctx.callbackQuery.data !== "start" &&
      ctx.callbackQuery.data !== "withdrawl"
    ) {
      try {
        await ctx.telegram.sendMessage(
          ctx.chat.id,
          `Hurmatli <b>foydalanuvchi</b> , quyidagi kanalga obuna bo'lganingizdan so'ng botdan to'liq foydalanishingiz mumkin 👇
                        `,
          {
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [{ text: "1️⃣ Kanal 📢", url: chanLink }],
                [
                  {
                    text: "2️⃣ Kanal 📢",
                    url: chanLink1,
                  },
                ],
                [
                  {
                    text: "3️⃣ Kanal 📢",
                    url: chanLink2,
                  },
                ],
                [{ text: "Tekshirish ✅", callback_data: "home" }],
              ],
            },
          }
        );
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        await ctx.telegram.sendMessage(
          id,
          `Hurmatli <b>foydalanuvchi</b> , quyidagi kanalga obuna bo'lganingizdan so'ng botdan to'liq foydalanishingiz mumkin 👇
        `,
          {
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [{ text: "1️⃣ Kanal 📢", url: chanLink }],
                [
                  {
                    text: "2️⃣ Kanal 📢",
                    url: chanLink1,
                  },
                ],
                [
                  {
                    text: "3️⃣ Kanal 📢",
                    url: chanLink2,
                  },
                ],
                [{ text: "Tekshirish ✅", callback_data: "start" }],
              ],
            },
          }
        );
      } catch (e) {
        console.log(e);
      }
    }
  }
});
const generateReferralLink = (userId) =>
  `https://t.me/OneDrop_uzbot?start=${userId}`;
// bot.command("referral", async (ctx) => {
//   const referral = generateReferralLink(ctx.chat.id);
//   let referrals = 0;
//   await users.forEach((i) => {
//     if (i.id == ctx.chat.id) {
//       referrals = i.referrals;
//     }
//   });
//   ctx.replyWithPhoto(
//     { source: "onedrop.png" },
//     {
//       caption: `<b>Ushbu bot orqali do'stlaringizni botga taklif qilib kriptavalyuta (USDT) ishlashingiz mumkin.</b>

// Sizning referallaringiz soni: <b>${referrals} ta</b>
// Sizning balansingiz : <b>${referrals * 0.1} USDT</b>

// Balansingiz ${minimal} usdt ga yetgandan pulingizni chiqarib olishingiz mumkin.

// Sizning referral linkingiz 👇
// ${referral}
// `,
//       parse_mode: "HTML",
//       reply_markup: {
//         inline_keyboard: [
//           [
//             {
//               text: "Yaqinlaringizga yuboring ✈",
//               url: `https://t.me/share/url?url=OneDrops Bot&text=
// 💰 Ushbu bot orqali do'stlaringizni botga taklif qilib kriptavalyuta (USDT) ishlashingiz mumkin.
// 🎮Bundan tashqari botda notcoin , tapswap va hamster kombatga o'xshagan o'yinlarni tangalarni sotish o'rgatiladi.

// Hoziroq botga kiring 👉 ${referral}`,
//             },
//           ],
//           [
//             { text: "Pul yechish 💰", callback_data: "withdrawl" },
//             {
//               text: "Bosh menu 🏠",
//               url: "https://t.me/Onedrop_uzbot?start=841886966",
//             },
//           ],
//         ],
//       },
//     }
//   );
// });

bot.command("admin", (ctx) => {
  if (ctx.chat.id == admin) {
    ctx.telegram.sendMessage(admin, "Siz botda adminsiz", {
      reply_markup: {
        resize_keyboard: true,
        keyboard: [[{ text: "All users" }], [{ text: "Send Message" }]],
      },
    });
    // bot.hears("All users", async (msg) => {
    //   msg.telegram.sendMessage(841886966, "Console logga yuborildi");
    //   let count = users.length / 100;
    //   for (let i = 0; i < count; i++) {
    //     console.log(users.slice(i * 100, (i + 1) * 100));
    //   }
    // });
    let canSend = false;
    bot.hears("Send Message", async (contex) => {
      if (contex.chat.id == admin) {
        contex.telegram.sendMessage(admin, "Enter message: ");
        canSend = true;
        let msgId = null;
        bot.on("message", async (msg) => {
          if (msg.message.text == "Ha ✅" && canSend) {
            usersIds.forEach(async (i) => {
              try {
                await msg.telegram.forwardMessage(i, msg.chat.id, msgId);
              } catch (error) {
                if (
                  error.code === 403 &&
                  error.description.includes("bot was blocked by the user")
                ) {
                  console.log(`User ${msg.from.id} blocked the bot.`);
                  // Optionally, remove the user from your database or take other actions
                } else {
                  console.error("Failed to send message:", error);
                }
              }

              sleep(2000);
            });
            try {
              await msg.telegram.sendMessage(
                ctx.chat.id,
                "Hammaga yuborildi !"
              );
            } catch (e) {
              console.log(e);
            }
            canSend = false;
          } else {
            if (canSend) {
              msgId = msg.message.message_id;
              msg.telegram.sendMessage(
                msg.chat.id,
                "Barcha foydalanuvchilarga habar yuborilsinmi ?",
                {
                  reply_markup: { keyboard: [[{ text: "Ha ✅" }]] },
                }
              );
            } else {
              if (ctx.chat.id == admin) {
                msg.telegram.sendMessage(msg.chat.id, "Bosh sahifa", {
                  reply_markup: { keyboard: [[{ text: "/admin" }]] },
                });
              }
            }
          }
        });
      }
    });
  }
});

bot.command("help", async (ctx) => {
  try {
    await ctx.telegram.sendMessage(
      ctx.chat.id,
      `
/start - botni qayta ishga tushirish
/help - botdagi buyruqlar 
/about - bot haqida 
  
    `
    );
  } catch (error) {
    if (
      error.code === 403 &&
      error.description.includes("bot was blocked by the user")
    ) {
      console.log(`User ${ctx.from.id} blocked the bot.`);
      // Optionally, remove the user from your database or take other actions
    } else {
      console.error("Failed to send message:", error);
    }
  }
});

// bot.command("users", async (ctx) => {
//   if (ctx.chat.id == admin) {
//     ctx.telegram.sendMessage(841886966, "Console logga yuborildi");
//     let count = usersIds.length / 100;
//     for (let i = 0; i < count; i++) {
//       console.log(usersIds.slice(i * 100, (i + 1) * 100));
//     }
//   }
// });

bot.command("changeminimal", (ctx) => {
  if (ctx.chat.id == admin) {
    minimal = ctx.message.text.split(" ")[1];
    ctx.telegram.sendMessage(admin, `Minimal pul yechish endi ${minimal}`);
  }
});

bot.command("channel", (ctx) => {
  if (ctx.chat.id == admin) {
    let channelId = ctx.message.text.split(" ")[1];
    let channelLink = ctx.message.text.split(" ")[2];
    channel = channelId;
    chanLink = channelLink;
  }
});

bot.command("channel1", (ctx) => {
  if (ctx.chat.id == admin) {
    let channelId = ctx.message.text.split(" ")[1];
    let channelLink = ctx.message.text.split(" ")[2];
    channel1 = channelId;
    chanLink1 = channelLink;
  }
});

bot.command("channel2", (ctx) => {
  if (ctx.chat.id == admin) {
    let channelId = ctx.message.text.split(" ")[1];
    let channelLink = ctx.message.text.split(" ")[2];
    channel2 = channelId;
    chanLink2 = channelLink;
  }
});

bot.command("videos", async (ctx) => {
  try {
    await ctx.replyWithVideo("https://t.me/k02isniwu2kjsi/6");
  } catch (error) {
    console.error("Failed to send message:", error);
  }
});

bot.command("downIds", async (ctx) => {
  if (ctx.chat.id == admin) {
    try {
      const records = await fetchAllRecords();
      if (records.length === 0) {
        console.log("No records found.");
      } else {
        const apiUsers = records;
        usersIds = [];
        apiUsers.forEach((u) => {
          usersIds.push(Number(u.fields.id));
        });
        ctx.reply("Tayyor ✅");
      }
    } catch (error) {
      console.error(error);
    }
  }
});

// bot.command("downUsers", async (ctx) => {
//   try {
//     const response = await axios.get(apiBaseUrl, {
//       headers: { Authorization: `Bearer ${apiCode}` },
//     });
//     const apiUsers = response.data.records;

//     if (apiUsers.length === 0) {
//       ctx.reply("No users found.");
//     } else {
//       users = [];
//       apiUsers.forEach((user) => {
//         users.push({
//           id: user.fields.id,
//           friends: user.fields.friends,
//           balance: user.fields.balance,
//           referrals: user.fields.referrals,
//         });
//       });

//       ctx.reply("Userlar royhati yuklandi ✅");
//       console.log(users);
//     }
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     ctx.reply("Failed to fetch users. Please try again later.");
//   }
// });

bot.command("about", async (ctx) => {
  try {
    await ctx.telegram.sendMessage(
      ctx.chat.id,
      `
  <b>📈Bot statistikasi:</b> ${usersIds.length} ta a'zo bor
  
  <b>🤝Reklama bo'yicha:</b> @OneDrop_admin
  
  <b>👨‍💻Dasturchi:</b> @m_odlov
  `,
      { parse_mode: "HTML" }
    );
  } catch (error) {
    if (
      error.code === 403 &&
      error.description.includes("bot was blocked by the user")
    ) {
      console.log(`User ${ctx.from.id} blocked the bot.`);
      // Optionally, remove the user from your database or take other actions
    } else {
      console.error("Failed to send message:", error);
    }
  }
});

bot.launch();
const userData = {
  fields: {
    id: "New User", // You can dynamically get this from user input
    balance: "newuser@example.com",
  },
};
