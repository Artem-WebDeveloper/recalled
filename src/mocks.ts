import type { WordDetail } from './types';

export const wordsCardMock: WordDetail[] = [
  {
    id: 1,
    word: 'ambiguous',
    translate: 'неоднозначный',
    is_learned: false,
    examples: [
      {
        en: 'The instructions were ambiguous and confusing.',
        ru: 'Инструкции были неоднозначными и запутанными.',
      },
      { en: 'His answer was deliberately ambiguous.', ru: 'Его ответ был намеренно уклончивым.' },
      { en: 'The law is ambiguous on this point.', ru: 'Закон неоднозначен в этом вопросе.' },
    ],
  },
  {
    id: 2,
    word: 'resilient',
    translate: 'устойчивый',
    is_learned: false,
    examples: [
      { en: 'Children are remarkably resilient.', ru: 'Дети удивительно устойчивы.' },
      {
        en: 'The economy proved resilient despite the crisis.',
        ru: 'Экономика оказалась устойчивой несмотря на кризис.',
      },
      {
        en: 'She is a resilient person who never gives up.',
        ru: 'Она стойкий человек, который никогда не сдаётся.',
      },
      {
        en: 'Resilient materials can withstand heavy pressure.',
        ru: 'Упругие материалы выдерживают сильное давление.',
      },
    ],
  },
  {
    id: 3,
    word: 'peculiar',
    translate: 'своеобразный',
    is_learned: true,
    examples: [
      { en: 'There was a peculiar smell in the room.', ru: 'В комнате был странный запах.' },
      { en: 'He has a peculiar sense of humor.', ru: 'У него своеобразное чувство юмора.' },
      {
        en: 'Something peculiar happened last night.',
        ru: 'Прошлой ночью произошло что-то странное.',
      },
    ],
  },
  {
    id: 4,
    word: 'endeavor',
    translate: 'усилие',
    is_learned: false,
    examples: [
      {
        en: 'She endeavored to finish the project on time.',
        ru: 'Она приложила усилия чтобы закончить проект вовремя.',
      },
      { en: 'Success requires constant endeavor.', ru: 'Успех требует постоянных усилий.' },
      {
        en: 'His new endeavor turned out to be profitable.',
        ru: 'Его новое начинание оказалось прибыльным.',
      },
      {
        en: 'We will endeavor to respond within 24 hours.',
        ru: 'Мы постараемся ответить в течение 24 часов.',
      },
      { en: 'Scientific endeavor has changed the world.', ru: 'Научные усилия изменили мир.' },
    ],
  },
  {
    id: 5,
    word: 'concise',
    translate: 'лаконичный',
    is_learned: false,
    examples: [
      { en: 'Please keep your answer concise.', ru: 'Пожалуйста, держите ответ лаконичным.' },
      { en: 'A concise summary is better than a long one.', ru: 'Краткое резюме лучше длинного.' },
      {
        en: 'His writing style is clear and concise.',
        ru: 'Его стиль письма чёткий и лаконичный.',
      },
      {
        en: 'Try to be more concise in your reports.',
        ru: 'Старайтесь быть более краткими в своих отчётах.',
      },
    ],
  },
];
