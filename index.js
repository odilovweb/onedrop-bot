const { Telegraf, Telegram } = require("telegraf");
const { message } = require("telegraf/filters");

const bot = new Telegraf("7007761863:AAEUsrtn-BIdGcanJMdp4P7lke8f3bisBG8");
const usersIds = [];
const admin = "841886966";

const channel = "2018020256";
const channel1 = "1873339742";
const channel2 = "1576332973";
const zayavka = "1882547088";
let minimal = 10;
let canWithdraw = true;
const users = [
  {
    id: 841886966,
    referrals: 39,
    balance: 3.9000000000000004,
    friends: [],
  },
  {
    id: 7026932649,
    referrals: 3,
    balance: 0.30000000000000004,
    friends: [],
  },
  { id: 6791034718, referrals: 0, balance: 0, friends: [] },
  { id: 5095477136, referrals: 0, balance: 0, friends: [] },
  { id: 5550269002, referrals: 0, balance: 0, friends: [] },
  { id: 992293177, referrals: 0, balance: 0, friends: [] },
  { id: 1941859158, referrals: 1, balance: 0.1, friends: [2120271620] },
  { id: 1798285348, referrals: 0, balance: 0, friends: [] },
  { id: 2120271620, referrals: 0, balance: 0, friends: [] },
  { id: 5466125291, referrals: 0, balance: 0, friends: [] },
  { id: 6459081982, referrals: 0, balance: 0, friends: [] },
  { id: 7185217927, referrals: 0, balance: 0, friends: [] },
  { id: 6069895506, referrals: 0, balance: 0, friends: [] },
  { id: 6780325206, referrals: 0, balance: 0, friends: [] },
  { id: 495062311, referrals: 0, balance: 0, friends: [] },
  { id: 805694863, referrals: 0, balance: 0, friends: [] },
  { id: 6432468569, referrals: 0, balance: 0, friends: [] },
  { id: 6742816852, referrals: 0, balance: 0, friends: [] },
  { id: 6213442592, referrals: 0, balance: 0, friends: [] },
  { id: 6320044321, referrals: 0, balance: 0, friends: [] },
  { id: 6645386648, referrals: 0, balance: 0, friends: [] },
  { id: 7069043878, referrals: 0, balance: 0, friends: [] },
  { id: 7072784637, referrals: 0, balance: 0, friends: [] },
  { id: 7000707423, referrals: 0, balance: 0, friends: [] },
  { id: 6527236893, referrals: 0, balance: 0, friends: [] },
  { id: 7126366421, referrals: 0, balance: 0, friends: [] },
  { id: 5073924250, referrals: 0, balance: 0, friends: [] },
  { id: 5224450550, referrals: 0, balance: 0, friends: [] },
  { id: 5532466468, referrals: 1, balance: 0.1, friends: [6504610865] },
  { id: 6504610865, referrals: 0, balance: 0, friends: [] },
  { id: 562822595, referrals: 0, balance: 0, friends: [] },
  { id: 6223826274, referrals: 0, balance: 0, friends: [] },
  { id: 5072971478, referrals: 0, balance: 0, friends: [] },
  { id: 2035436076, referrals: 0, balance: 0, friends: [] },
  { id: 6750602520, referrals: 0, balance: 0, friends: [] },
  { id: 2096622540, referrals: 0, balance: 0, friends: [] },
  { id: 6712914471, referrals: 0, balance: 0, friends: [] },
  { id: 5367412050, referrals: 0, balance: 0, friends: [] },
  { id: 7096099103, referrals: 0, balance: 0, friends: [] },
  { id: 6755525610, referrals: 0, balance: 0, friends: [] },
  { id: 5142312438, referrals: 0, balance: 0, friends: [] },
  { id: 5172005614, referrals: 0, balance: 0, friends: [] },
  { id: 5673274104, referrals: 0, balance: 0, friends: [] },
  { id: 5730505510, referrals: 0, balance: 0, friends: [] },
  { id: 1067952369, referrals: 0, balance: 0, friends: [] },
  { id: 6752297146, referrals: 0, balance: 0, friends: [] },
  { id: 5489984178, referrals: 0, balance: 0, friends: [] },
  { id: 6005726125, referrals: 0, balance: 0, friends: [] },
  { id: 5698037834, referrals: 0, balance: 0, friends: [] },
  { id: 6794226191, referrals: 0, balance: 0, friends: [] },
  { id: 395251421, referrals: 0, balance: 0, friends: [] },
  { id: 6629186256, referrals: 0, balance: 0, friends: [] },
  { id: 5149321498, referrals: 0, balance: 0, friends: [] },
  { id: 6028336322, referrals: 0, balance: 0, friends: [] },
  { id: 6052648869, referrals: 0, balance: 0, friends: [] },
  { id: 1951909536, referrals: 0, balance: 0, friends: [] },
  { id: 641760918, referrals: 0, balance: 0, friends: [] },
  { id: 1466581289, referrals: 0, balance: 0, friends: [] },
  { id: 6177326595, referrals: 0, balance: 0, friends: [] },
  { id: 5955244115, referrals: 0, balance: 0, friends: [] },
  { id: 680572327, referrals: 0, balance: 0, friends: [] },
];

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

const isMemberFuncId = async (idBn, ctx) => {
  const id = idBn;
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

let payload = false;
bot.start(async (ctx) => {
  let userorNouser = false;
  await usersIds.forEach((i) => {
    if (i.id == ctx.chat.id) {
      userorNouser = true;
    }
  });
  if (!userorNouser) {
    usersIds.push(ctx.chat.id);
  }
  //payload
  payload = ctx.payload;
  let isUser = false;
  //payload

  //isMember
  const id = ctx.chat.id;
  const isMember = await isMemberFunc(ctx);
  //isMember

  console.log(isMember);
  if (isMember) {
    //referral
    if (!payload) {
      let isUserOr = false;
      await users.forEach((i) => {
        if (i.id == id) {
          isUserOr = true;
        }
      });
      if (!isUserOr) {
        users.push({ id: ctx.chat.id, balance: 0, referrals: 0, friends: [] });
      }
    }
    await users.forEach((i) => {
      if (i.id == id) {
        isUser = true;
      }
    });
    if (!isUser) {
      users.push({ id, balance: 0, referrals: 0, friends: [] });
      users.forEach((i) => {
        if (i.id == payload && payload) {
          i.referrals++;
          i.friends.push(id);
          i.balance = i.referrals * 0.1;
          ctx.telegram.sendMessage(
            id,
            "Referral orqali ro'yhatdan o'tganingiz bilan tabriklayman 🎉"
          );
          ctx.telegram.sendMessage(
            payload,
            `<b>${
              ctx.chat.username ? `@${ctx.chat.username}` : ctx.chat.first_name
            }</b> ushbu foydalanuvchi sizning referralingiz orqali ro'yhatdan o'tdi va siz 0.1 USDT ga ega bo'ldingiz. <b>Sizning balansingiz ${
              i.balance
            } USDT</b>`,
            { parse_mode: "HTML" }
          );
        }
      });
    }

    //referral end
    ctx.telegram.sendMessage(
      id,
      `Hurmatli <b>${ctx.chat.first_name}</b> , botimizga hush kelibsiz !
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
                text: "Notcoin sotish 💰",
                callback_data: "notcoin-sell",
              },
            ],
            [
              {
                text: "Pul sarflamasdan crypto ishlash 💲",
                callback_data: "video-dars",
              },
            ],
          ],
        },
      }
    );
  } else {
    ctx.telegram.sendMessage(
      id,
      `Hurmatli <b>${ctx.chat.first_name}</b> , quyidagi kanalga obuna bo'lganingizdan so'ng botdan to'liq foydalanishingiz mumkin 👇
      `,
      {
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [{ text: "One Drop 📢", url: "https://t.me/+B6ibcl6qtb45YmVi" }],
            [
              {
                text: "Kriptavalyuta Uz 📢",
                url: "https://t.me/+CQRKl4gO8rswNmQ6",
              },
            ],
            [
              {
                text: "Tg Loyihalar 📢",
                url: "https://t.me/+y62ECfeXAWw3ZDgy",
              },
            ],
            [{ text: "Tekshirish ✅", callback_data: "start" }],
          ],
        },
      }
    );
  }
});

//bot query

bot.on("callback_query", async (ctx) => {
  //isMember
  const id = ctx.chat.id;
  const isMember = await isMemberFunc(ctx);
  //isMember

  if (isMember) {
    if (ctx.callbackQuery.data == "home") {
      ctx.telegram.editMessageText(
        ctx.chat.id,
        ctx.callbackQuery.message.message_id,
        ctx.callbackQuery.message.message_id,
        `Hurmatli <b>${ctx.chat.first_name}</b> , botimizdan bemalol foydalanishingiz mumkin !
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
                  text: "Notcoin sotish 💰",
                  callback_data: "notcoin-sell",
                },
              ],
              [
                {
                  text: "Pul sarflamasdan crypto ishlash 💲",
                  callback_data: "video-dars",
                },
              ],
            ],
          },
        }
      );
    } else if (ctx.callbackQuery.data == "notcoin-sell") {
      ctx.telegram.editMessageText(
        ctx.chat.id,
        ctx.callbackQuery.message.message_id,
        ctx.callbackQuery.message.message_id,
        `<b>Notcoin sotish uchun ushbu kanalga a'zo bo'lishingiz kerak 👇</b> 

👉 https://t.me/+AFmf0OKkk_k5ODVi`,
        {
          parse_mode: "HTML",
          reply_markup: {
            inline_keyboard: [
              [{ text: "Ortga qaytish 🔙", callback_data: "home" }],
            ],
          },
        }
      );
    } else if (ctx.callbackQuery.data == "hamster-sell") {
      ctx.telegram.editMessageText(
        ctx.chat.id,
        ctx.callbackQuery.message.message_id,
        ctx.callbackQuery.message.message_id,
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
    } else if (ctx.callbackQuery.data == "video-dars") {
      ctx.telegram.editMessageText(
        ctx.chat.id,
        ctx.callbackQuery.message.message_id,
        ctx.callbackQuery.message.message_id,
        `<b>Bepul kriptavalyuta ishlash</b> 

Ushbu bo'lim orqali siz botga do'stlaringizni taklif qilib pul ishlashingiz mumkin !

Har bir do'stingiz uchun 0.1 USDT.
1 USDT = narxi 12500 so'm ga teng

Balansingiz ${10} USDT bo'lganda pulingizni chiqarib olishingiz mumkin ✔

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
    } else if (ctx.callbackQuery.data == "earn") {
      const referral = generateReferralLink(ctx.chat.id);
      let referrals = 0;
      await users.forEach((i) => {
        if (i.id == ctx.chat.id) {
          referrals = i.referrals;
        }
      });
      ctx.replyWithPhoto(
        { source: "onedrop.png" },
        {
          caption: `<b>Ushbu bot orqali do'stlaringizni botga taklif qilib kriptavalyuta (USDT) ishlashingiz mumkin.</b>

Sizning referallaringiz soni: <b>${referrals} ta</b>
Sizning balansingiz : <b>${referrals * 0.1} USDT</b>

Balansingiz ${minimal} usdt ga yetgandan pulingizni chiqarib olishingiz mumkin.

Sizning referral linkingiz 👇
${referral}
`,
          parse_mode: "HTML",
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "Yaqinlaringizga yuboring ✈",
                  url: `https://t.me/share/url?url=OneDrops Bot&text=
💰 Ushbu bot orqali do'stlaringizni botga taklif qilib kriptavalyuta (USDT) ishlashingiz mumkin.
🎮Bundan tashqari botda notcoin va hamster kombatga o'xshagan o'yinlarni tangalarni sotish o'rgatiladi.

Hoziroq botga kiring 👉 ${referral}`,
                },
              ],
              [
                { text: "Pul yechish 💰", callback_data: "withdrawl" },
                {
                  text: "Bosh menu 🏠",
                  url: "https://t.me/Onedrop_uzbot?start=841886966",
                },
              ],
            ],
          },
        }
      );
    } else if (ctx.callbackQuery.data == "start") {
      //referral
      let isUser = false;
      await users.forEach((i) => {
        if (i.id == id) {
          isUser = true;
        }
      });

      if (!isUser) {
        users.push({ id, balance: 0, referrals: 0, friends: [] });
        users.forEach((i) => {
          if (i.id == payload && payload) {
            i.referrals++;
            i.friends.push(ctx.chat.id);
            i.balance = i.referrals * 0.1;
            ctx.telegram.sendMessage(
              id,
              "Referral orqali ro'yhatdan o'tganingiz bilan tabriklayman 🎉"
            );
            ctx.telegram.sendMessage(
              payload,
              `<b>${
                ctx.chat.username
                  ? `@${ctx.chat.username}`
                  : ctx.chat.first_name
              }</b> ushbu foydalanuvchi sizning referralingiz orqali ro'yhatdan o'tdi va siz 0.1 USDT ga ega bo'ldingiz. <b>Sizning balansingiz ${
                i.balance
              } USDT</b>`,
              { parse_mode: "HTML" }
            );
          }
        });
      }

      //referral end
      ctx.telegram.editMessageText(
        ctx.chat.id,
        ctx.callbackQuery.message.message_id,
        ctx.callbackQuery.message.message_id,
        `Hurmatli <b>${ctx.chat.first_name}</b> , botimizga hush kelibsiz !
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
                  text: "Notcoin sotish 💰",
                  callback_data: "notcoin-sell",
                },
              ],
              [
                {
                  text: "Pul sarflamasdan crypto ishlash 💲",
                  callback_data: "video-dars",
                },
              ],
            ],
          },
        }
      );
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
    } else if (ctx.callbackQuery.data == "confirm") {
      let balanceCount = 0;
      let referralCount = 0;
      users.forEach((i) => {
        if (i.id == ctx.chat.id) {
          balanceCount = i.balance;
          referralCount = i.referrals;
        }
      });
      ctx.telegram.sendMessage(
        admin,
        `
<b>Yangi zayavka ⌚</b> 

<b>id:</b> ${ctx.chat.id} 
<b>user: </b> ${
          ctx.chat.username ? `@${ctx.chat.username}` : ctx.chat.firstname
        } 
<b>miqdor: </b> ${balanceCount} USDT 
<b>referallar soni: </b> ${referralCount} ta 
<b>manzil: </b> ${ctx.callbackQuery.message.text.split(" ")[20]}     
`,
        {
          parse_mode: "HTML",
          reply_markup: {
            inline_keyboard: [
              [{ text: "To'landi ✅", callback_data: "paid" }],
              [{ text: "Bekor qilish ❌", callback_data: "unpaid" }],
              [{ text: "Jarima ⚠", callback_data: "penalty" }],
            ],
          },
        }
      );
      users.forEach((i) => {
        if (i.id == ctx.chat.id) {
          i.balance = 0;
          i.referrals = 0;
        }
      });
      ctx.telegram.editMessageText(
        ctx.chat.id,
        ctx.callbackQuery.message.message_id,
        ctx.callbackQuery.message.message_id,
        "Zayavkangiz muvaffaqiyatli adminga yuborildi. 24 soat ichida to'lov yuborilmasa adminga murojaat qiling. Admin: @m_odlov",
        {
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "Bosh menu 🏠",
                  url: "https://t.me/Onedrop_uzbot?start=841886966",
                },
              ],
            ],
          },
        }
      );
    } else if (ctx.callbackQuery.data == "unpaid") {
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
    } else if (ctx.callbackQuery.data == "cancel") {
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
          i.friends.forEach(async (u) => {
            const isMember = await isMemberFuncId(u, ctx);
            if (!isMember) {
              console.log("id");
              i.referrals--;
              i.balance = i.referrals * 0.1;
              resultFriends = i.friends.filter((friend) => {
                friend == u;
              });
              // end
              await ctx.telegram.sendMessage(
                ctx.chat.id,
                `Sizning <b>${u} ID </b> referalingiz kanallardan chiqib ketgani uchun 0.1 USDT balansingizdan olib tashlandi ⚠
Sizning hozirgi balansingiz ${i.balance}`,
                { parse_mode: "HTML" }
              );
              i.friends = resultFriends;
            }
          });

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
      ctx.telegram.editMessageText(
        ctx.chat.id,
        ctx.callbackQuery.message.message_id,
        ctx.callbackQuery.message.message_id,
        `Hurmatli <b>${ctx.chat.first_name}</b> , quyidagi kanalga obuna bo'lganingizdan so'ng botdan to'liq foydalanishingiz mumkin 👇
                      `,
        {
          parse_mode: "HTML",
          reply_markup: {
            inline_keyboard: [
              [{ text: "One Drop 📢", url: "https://t.me/+B6ibcl6qtb45YmVi" }],
              [
                {
                  text: "Kriptavalyuta Uz 📢",
                  url: "https://t.me/+CQRKl4gO8rswNmQ6",
                },
              ],
              [
                {
                  text: "Tg Loyihalar 📢",
                  url: "https://t.me/+y62ECfeXAWw3ZDgy",
                },
              ],
              [{ text: "Tekshirish ✅", callback_data: "home" }],
            ],
          },
        }
      );
    } else {
      ctx.telegram.sendMessage(
        id,
        `Hurmatli <b>${ctx.chat.first_name}</b> , quyidagi kanalga obuna bo'lganingizdan so'ng botdan to'liq foydalanishingiz mumkin 👇
        `,
        {
          parse_mode: "HTML",
          reply_markup: {
            inline_keyboard: [
              [{ text: "One Drop 📢", url: "https://t.me/+B6ibcl6qtb45YmVi" }],
              [
                {
                  text: "Kriptavalyuta Uz 📢",
                  url: "https://t.me/+CQRKl4gO8rswNmQ6",
                },
              ],
              [
                {
                  text: "Tg Loyihalar 📢",
                  url: "https://t.me/+y62ECfeXAWw3ZDgy",
                },
              ],
              [{ text: "Tekshirish ✅", callback_data: "start" }],
            ],
          },
        }
      );
    }
  }
});
const generateReferralLink = (userId) =>
  `https://t.me/OneDrop_uzbot?start=${userId}`;
bot.command("referral", async (ctx) => {
  const referral = generateReferralLink(ctx.chat.id);
  let referrals = 0;
  await users.forEach((i) => {
    if (i.id == ctx.chat.id) {
      referrals = i.referrals;
    }
  });
  ctx.replyWithPhoto(
    { source: "onedrop.png" },
    {
      caption: `<b>Ushbu bot orqali do'stlaringizni botga taklif qilib kriptavalyuta (USDT) ishlashingiz mumkin.</b>

Sizning referallaringiz soni: <b>${referrals} ta</b>
Sizning balansingiz : <b>${referrals * 0.1} USDT</b>

Balansingiz ${minimal} usdt ga yetgandan pulingizni chiqarib olishingiz mumkin.

Sizning referral linkingiz 👇
${referral}
`,
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Yaqinlaringizga yuboring ✈",
              url: `https://t.me/share/url?url=OneDrops Bot&text=
💰 Ushbu bot orqali do'stlaringizni botga taklif qilib kriptavalyuta (USDT) ishlashingiz mumkin.
🎮Bundan tashqari botda notcoin va hamster kombatga o'xshagan o'yinlarni tangalarni sotish o'rgatiladi.

Hoziroq botga kiring 👉 ${referral}`,
            },
          ],
          [
            { text: "Pul yechish 💰", callback_data: "withdrawl" },
            {
              text: "Bosh menu 🏠",
              url: "https://t.me/Onedrop_uzbot?start=841886966",
            },
          ],
        ],
      },
    }
  );
});
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
bot.command("admin", (ctx) => {
  if (ctx.chat.id == admin) {
    ctx.telegram.sendMessage(admin, "Siz botda adminsiz", {
      reply_markup: {
        resize_keyboard: true,
        keyboard: [[{ text: "All users" }], [{ text: "Send Message" }]],
      },
    });
    bot.hears("All users", async (msg) => {
      let txt = "";
      await users.forEach(async (i) => {
        txt += "{id:";
        txt += `${i.id} ,`;
        txt += "referrals:";
        txt += `${i.referrals}, `;
        txt += "balance:";
        txt += `${i.balance}, `;
        txt += "friends:";
        txt += `[ `;
        await i.friends.forEach((fr) => {
          txt += `${fr}, `;
        });
        txt += " ]},";
      });
      msg.telegram.sendMessage(841886966, txt);
    });
    let canSend = false;
    bot.hears("Send Message", async (contex) => {
      contex.telegram.sendMessage(admin, "Enter message: ");
      canSend = true;
      let msgId = null;
      bot.on("message", async (msg) => {
        if (msg.message.text == "Ha ✅" && canSend) {
          usersIds.forEach((i) => {
            console.log(msg.message);
            msg.telegram.forwardMessage(i, msg.chat.id, msgId);
            sleep(2000);
          });
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
            msg.telegram.sendMessage(msg.chat.id, "Bosh sahifa", {
              reply_markup: { keyboard: [[{ text: "/admin" }]] },
            });
          }
        }
      });
    });
  }
});

bot.command("help", (ctx) => {
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
/start - botni qayta ishga tushirish
/help - botdagi buyruqlar 
/referral - botda pul ishlash
/about - bot haqida 

  `
  );
});

bot.command("users", async (ctx) => {
  if (ctx.chat.id == admin) {
    let text = "[";
    await usersIds.forEach((i) => {
      text += `${i}, `;
    });
    text += " ]";
    await ctx.telegram.sendMessage(ctx.chat.id, text);
  }
});

bot.command("changeminimal", (ctx) => {
  if (ctx.chat.id == admin) {
    minimal = ctx.message.text.split(" ")[1];
    ctx.telegram.sendMessage(admin, `Minimal pul yechish endi ${minimal}`);
  }
});
bot.command("about", (ctx) => {
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
<b>📈Bot statistikasi:</b> ${usersIds.length} ta a'zo bor

<b>🤝Reklama bo'yicha:</b> @OneDrop_admin

<b>👨‍💻Dasturchi:</b> @m_odlov
`,
    { parse_mode: "HTML" }
  );
});

bot.launch();
