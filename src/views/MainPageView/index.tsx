"use client";
import Form from "@/components/Form";
import Image from "next/image";
import React from "react";

interface ICommentItem {
  name: string;
  text: string;
  likes: string;
  time: string;
}

const content = [
  {
    title: "СОДЕРЖАНИЕ ПРОБЛЕМЫ",
    description:
      "В последние годы случаи мошенничества, связанные с финансовыми брокерами, стали все более распространенными. Мошенники представляют себя в качестве надежных брокеров, привлекая доверчивых клиентов, а затем уклоняются от ответственности и исчезают с их средствами.",
  },
  {
    title: "Более подробная информация о нашей петиции",
    description:
      "<b>Принятие Ответственности Государством.</b> Мы убеждены, что правительство должно принять ответственность за возврат средств потерпевшим от мошенников. Возражаем против безнаказанности и поддерживаем решение правительства о возврате утерянных денег пострадавшим.",
  },
  {
    description:
      "<b>Реальный Эффект нашей Петиции.</b> Процесс возврата средств уже начался для многих из нас. Это свидетельствует о том, что наша работа не напрасна, и наша петиция имеет реальный эффект. Верим, что в ближайшем будущем все потерпевшие смогут получить обратно свои средства, лишенные им по нечестным схемам.",
  },
  {
    description:
      "<b>Гарантированный Возврат Потерпевшим.</b> Мы призываем всех, кто потерял средства при мошеннических действиях в интернете, присоединиться к нашей петиции. Распространите эту инициативу среди своих друзей и коллег, которые пострадали от мошенников. Чем больше подписей, тем сильнее будет наше требование. Вместе мы можем добиться возврата утерянных средств и сделать нашу финансовую среду более надежной и справедливой.",
  },
  {
    description:
      "<b>Солидарность в Деле Борьбы.</b> Наша инициатива основана на принципе солидарности и взаимопомощи. Вместе мы имеем возможность повлиять на изменение ситуации и заставить органы регулирования принять более жесткие меры по предотвращению мошенничества в финансовой сфере.",
  },
  {
    description:
      "Поддержите усилия по борьбе с мошенничеством в финансовой индустрии и возврату утерянных средств. Чем больше подписей, тем сильнее будет наше требование. Инвесторы и клиенты финансовых брокеров заслуживают защиты и справедливости. Давайте совместно бороться за честные и надежные финансовые услуги.",
  },
  {
    title: "Текст петиции учитывает мнение экспертов ИПЭЭ РАН.",
  },
  {
    title: "СКАЖИ НЕТ МОШЕННИЧЕСТВУ В ИНТЕРНЕТЕ",
  },
];

const comments = [
  {
    name: "Андрей Петров",
    text: "Благодаря участию в этой инициативе, мне удалось вернуть свои средства. Это подтверждает, что совместные усилия могут привести к справедливости и защите интересов граждан в сфере финансов. Важно помнить, что каждый человек имеет право на справедливое распоряжение своими финансовыми ресурсами.",
    likes: "13",
    time: "19h",
  },
  {
    name: "Екатерина Иванова",
    text: "Спасибо, правительство вернуло все потерянные деньги, даже не думала, что эта петиция может сработать. Наша поддержка оказала влияние, и мы надеемся на продолжение положительных изменений в обеспечении справедливости и защите прав граждан!",
    likes: "5",
    time: "17h",
    subComments: [
      {
        name: "Алексей Смирнов",
        text: "Я поддерживаю инициативу по возврату средств, поскольку убежден, что забота о правах человека на справедливость в распоряжении своими средствами - это забота о нашем общем будущем. Давайте сделаем мир более дружелюбным и справедливым для всех его обитателей!",
        likes: "35",
        time: "17h",
      },
      {
        name: "Иван Исамбулов",
        text: "Приятно слышать, что вам уже вернули всю сумму. Мой возврат пока что в процессе, но уже в ближайшем времени ожидаю пополнения в своём кошельке. Этот шаг по борьбе с мошенниками - верный шаг вперёд. Давайте сделаем нашу страну более открытой и поддерживающей в вопросе возврата средств от пойманных мошенников.",
        likes: "18",
        time: "17h",
      },
    ],
  },
  {
    name: "Екатерина Иванова",
    text: "Очень приятно сообщить, что благодаря этой инициативе, мне удалось вернуть свои средства. Это прекрасный пример того, как совместные усилия могут принести реальные изменения. Я поддерживаю Вас! Даже не мог надеяться, что кто-то сможет помочь. Борьба с мошенниками – важный шаг в развитии ответственного общества. Я выражаю свою поддержку и надеюсь на позитивные изменения по искоренению мошенничества.",
    likes: "4",
    time: "17h",
  },
];

const RightBlock = ({ className }: { className?: string }) => {
  return (
    <div className={`flex w-full flex-col max-w-[320px] h-fit ${className}`}>
      <div className="border-2 flex w-full rounded">
        <div className={`h-2 w-4/5 bg-[#842B8F] rounded`}></div>
      </div>
      <div className="flex w-full justify-between gap-x-2">
        <div className={`flex flex-col items-center text-[#842B8F] text-2xl`}>
          <span className="font-bold">51,740</span>
          <span>Signatures</span>
        </div>
        <div className="flex flex-col items-center text-2xl text-[#707070]">
          <span className="font-bold">75,000</span>
          <span>Next Goal</span>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 p-2 bg-[#F2F2F2] rounded-xl">
        <Image
          className="rounded-full"
          width={20}
          height={20}
          src={"/images/force.png"}
          alt="avatar"
        />
        <p>
          <span className=" font-bold">107 people</span> signed today
        </p>
      </div>
      <div
        className={`flex flex-col gap-y-10 bg-[#F2F2F2] mt-5 p-5 rounded-md`}
      >
        <p className=" text-[#842B8F] text-2xl text-center font-bold">
          Если вы потеряли средства, оставляйте заявку и мы с Вами свяжемся
        </p>
        <Form />
      </div>
    </div>
  );
};

const CommentItem = (props: ICommentItem) => {
  const { name, text, likes, time } = props;

  return (
    <div className="flex flex-col gap-y-5">
      <p className="text-blue-700 font-bold text-xl">{name}</p>
      <p className="text-lg">{text}</p>
      <div className="flex gap-x-2 items-center">
        <span className=" font-bold text-blue-600 cursor-pointer">Like</span>
        <span className="font-bold text-blue-600 cursor-pointer">Reply</span>
        <span className="flex items-center">
          <Image
            className="flex w-full max-w-[526px] rounded"
            src={"/images/like.png"}
            alt="like"
            width={20}
            height={20}
          />
          {likes}
        </span>
        <span className="text-gray-400">{time}</span>
      </div>
    </div>
  );
};

const MainPageView = () => {
  return (
    <main className="flex max-w-5xl mx-auto px-4 py-10 flex-col">
      <h1 className="text-4xl text-center font-bold">
        Петиция по помощи потерпевшим от брокеров мошенников: Возврат средств
        потерпевшим
      </h1>

      <div className="flex mt-20 gap-x-5 max-lg:flex-col">
        <div className="flex w-full flex-col  max-lg:items-center">
          <Image
            className="flex w-full max-w-[526px] rounded"
            src={"/images/main-img.jpg"}
            alt="logo"
            width={526}
            height={526}
          />
          <p className="flex max-w-[300px] w-full justify-between gap-x-1 mt-2">
            <span>Started</span>
            <span>October 8, 2023</span>
          </p>
          <RightBlock className="hidden mx-auto max-lg:flex mt-10" />
          <h1 className="text-2xl font-bold mt-5">
            Петиция по помощи потерпевшим от брокерв мошенников: Возврат средств
            потерпевшим
          </h1>
          <Image
            className="rounded-full"
            width={48}
            height={48}
            src={"/images/avatar.jpg"}
            alt="avatar"
          />
          <span>Started by</span>{" "}
          <span className="text-blue-500">Арсений Филиппов</span>
          <ul className="flex flex-col gap-y-5 mt-5">
            {content.map((item, index) => (
              <li key={index} className="flex flex-col gap-y-5">
                {item.title && (
                  <h2 className="font-bold text-xl">{item.title}</h2>
                )}
                {item.description && (
                  <div
                    className="text-lg"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                )}
              </li>
            ))}
          </ul>
          <p className="text-blue-500 mt-10 text-xl">Поддержать нашу борьбу.</p>
          <div className="flex justify-between gap-x-2 mt-10 border-b-2 pb-4 items-center">
            <p>5 Comments</p>
            <div className="flex gap-x-2 items-center">
              <p>Sort by</p>
              <button className="border-2 p-1">Newest</button>
            </div>
          </div>
          <p className="flex w-full border-2 mt-10 px-10 py-10 rounded text-gray-400">
            Add a comment...
          </p>
          <ul className="flex flex-col gap-y-5 mt-5">
            {comments.map((item, index) => {
              return (
                <div
                  key={`${item.name}__${index}`}
                  className="flex flex-col gap-y-5"
                >
                  <CommentItem
                    name={item.name}
                    text={item.text}
                    likes={item.likes}
                    time={item.time}
                  />
                  {item.subComments && (
                    <ul className="flex flex-col gap-y-5 ml-10">
                      {item.subComments.map((subItem, index) => (
                        <CommentItem
                          key={`${subItem.name}__${index}`}
                          name={subItem.name}
                          text={subItem.text}
                          likes={subItem.likes}
                          time={subItem.time}
                        />
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </ul>
          <p className="flex items-center gap-x-2 underline cursor-pointer mt-5">
            <Image
              className="rounded-full"
              width={20}
              height={20}
              src={"/images/flag.png"}
              alt="avatar"
            />
            Report a policy violation
          </p>
        </div>
        <RightBlock className="max-lg:hidden" />
      </div>
    </main>
  );
};

export default MainPageView;
