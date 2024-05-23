const { Telegraf, Telegram } = require("telegraf");
const { message } = require("telegraf/filters");

const bot = new Telegraf("7007761863:AAEUsrtn-BIdGcanJMdp4P7lke8f3bisBG8");
const admin = "841886966";
const channel = "2018020256";
const zayavka = "1882547088";
let canWithdraw = true;
const users = [
  { id: 841886966, referrals: 1, balance: 0.1 },
  { id: 7026932649, referrals: 100, balance: 10 },
  { id: 6791034718, referrals: 0, balance: 0 },
  { id: 5095477136, referrals: 0, balance: 0 },
];

const isMemberFunc = async (ctx) => {
  const id = ctx.chat.id;
  const member = await ctx.telegram
    .getChatMember(`-100${channel}`, id)
    .then((s) => s.status)
    .catch((e) => console.log(e));
  if (member == "creator" || member == "member") {
    return true;
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
  if (member == "creator" || member == "member") {
    return true;
  } else {
    return false;
  }
};

let payload = false;
bot.start(async (ctx) => {
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
/referral bosing

👉 https://t.me/+oyIdInY74x1mZTM6`,
        {
          parse_mode: "HTML",
          reply_markup: {
            inline_keyboard: [
              [{ text: "Ortga qaytish 🔙", callback_data: "home" }],
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
    } else if (ctx.callbackQuery.data == "paid") {
      if (ctx.chat.id == admin) {
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
          } foydalanuvchining bep 20 adresiga ${
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
          if (referrals * 0.1 < 9.9) {
            await ctx.telegram.sendMessage(
              ctx.chat.id,
              "❌<b>Balansingizda yetarli mablag' mavjud emas. Ko'proq USDT to'plang </b> /referral ",
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
              [
                {
                  text: "One Drop 📢",
                  url: "https://t.me/+B6ibcl6qtb45YmVi",
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

Balansingiz 10 usdt ga yetgandan pulingizni chiqarib olishingiz mumkin.

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
          [{ text: "Pul yechish 💰", callback_data: "withdrawl" }],
        ],
      },
    }
  );
});

bot.command("admin", (ctx) => {
  if (ctx.chat.id == admin) {
    ctx.telegram.sendMessage(admin, "Siz botda adminsiz", {
      reply_markup: { keyboard: [[{ text: "All users" }]] },
    });
    bot.hears("All users", async (msg) => {
      let txt = "";
      await users.forEach((i) => {
        txt += "{id:";
        txt += `${i.id} ,`;
        txt += "referrals:";
        txt += `${i.referrals}, `;
        txt += "balance:";
        txt += `${i.balance} }, `;
      });
      msg.telegram.sendMessage(841886966, txt);
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

bot.command("about", (ctx) => {
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
<b>📈Bot statistikasi:</b> ${users.length} ta a'zo bor

<b>🤝Reklama bo'yicha:</b> @OneDrop_admin

<b>👨‍💻Dasturchi:</b> @m_odlov
`,
    { parse_mode: "HTML" }
  );
});

bot.launch();
