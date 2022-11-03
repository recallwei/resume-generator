import { createI18n } from "vue-i18n";

const messages = {
  en: {
    common: {
      start: "Start"
    },
    application: {
      name: "Resume Generator",
      description: {
        firstLine: "This is a resume generator that based on Markdown syntax.",
        secondLine:
          "Write your resume in Markdown, then export the PDF version."
      }
    }
  },
  zh_cn: {
    common: {
      start: "开始"
    },
    application: {
      name: "简历生成器",
      description: {
        firstLine: "这是一个基于 Markdown 的简历生成器。",
        secondLine: "用 Markdown 书写你的简历，再生成 PDF。"
      }
    }
  }
};

const i18n = createI18n({
  locale: "zh_cn",
  //locale: "en",
  fallbackLocale: "en",
  allowComposition: true,
  messages
});

export default i18n;
