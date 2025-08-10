const magicItems = [
  {
    "index": "winged-boots",
    "name": "Winged Boots",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nКоли ви носите ці черевики, ваша швидкість польоту дорівнює вашій швидкості ходьби. Ви можете використовувати черевики для польоту до 4 годин, як за один раз, так і в кількох коротших перельотах, кожен з яких використовує мінімум 1 хвилину з тривалості. Якщо ви літаєте, коли тривалість закінчується, ви спускаєтеся зі швидкістю 30 футів за раунд, поки не приземлитеся.\nЧеревики відновлюють 2 години можливості польоту за кожні 12 годин, коли вони не використовуються.\"",
    "url": "/api/2014/magic-items/winged-boots",
    "name_ua": "Winged Boots"
  },
  {
    "index": "wind-fan",
    "name": "Wind Fan",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nТримаючи цей вентилятор, ви можете використати дію, щоб кинути заклинання «Порив вітру» (поріг порятунку 13). Після використання вентилятор не можна використовувати знову до наступного світанку. Кожного разу, коли його використовують знову до цього часу, ймовірність того, що він не спрацює, збільшується на 20 відсотків і він розривається на марні, немагічні клаптики.\"",
    "url": "/api/2014/magic-items/wind-fan",
    "name_ua": "Wind Fan"
  },
  {
    "index": "weapon-1",
    "name": "Weapon, +1",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/2014/equipment-categories/weapon"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Зброя (будь-яка), незвичайна\nВи отримуєте бонус +1 до атак і пошкоджень, завданих цією магічною зброєю.\"",
    "url": "/api/2014/magic-items/weapon-1",
    "name_ua": "Weapon, +1"
  },
  {
    "index": "wand-of-web",
    "name": "Wand of Web",
    "equipment_category": {
      "index": "wand",
      "name": "Wand",
      "url": "/api/2014/equipment-categories/wand"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Палиця, незвичайна (потребує налаштування чаклуном)\nЦя палиця має 7 зарядів. Тримаючи її, ви можете використати дію, щоб витратити 1 з її зарядів для заклинання павутиння (рятувальний кидок СК 15).\nПалиця відновлює 1d6 + 1 витрачених зарядів щодня на світанку. Якщо ви витратите останній заряд палиці, киньте d20. Якщо випаде 1, палиця розсипається на попіл і знищується.\"",
    "url": "/api/2014/magic-items/wand-of-web",
    "name_ua": "Wand of Web"
  },
  {
    "index": "wand-of-the-war-mage-1",
    "name": "Wand of the War Mage, +1",
    "equipment_category": {
      "index": "wand",
      "name": "Wand",
      "url": "/api/2014/equipment-categories/wand"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Палиця, незвичайна (потребує налаштування від заклинателя)\nТримаючи цю палицю, ви отримуєте бонус +1 до атак заклинання. Крім того, ви ігноруєте половинне укриття при здійсненні атаки заклинання.\"",
    "url": "/api/2014/magic-items/wand-of-the-war-mage-1",
    "name_ua": "Wand of the War Mage, +1"
  },
  {
    "index": "wand-of-secrets",
    "name": "Wand of Secrets",
    "equipment_category": {
      "index": "wand",
      "name": "Wand",
      "url": "/api/2014/equipment-categories/wand"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Палиця, незвичайна\nПалиця має 3 заряди. Тримаючи її, ви можете використати дію, щоб витратити 1 з її зарядів, і якщо таємні двері або пастка знаходяться в межах 30 футів від вас, палиця пульсує і вказує на найближчу до вас. Палиця відновлює 1d3 витрачених зарядів щодня на світанку.\"",
    "url": "/api/2014/magic-items/wand-of-secrets",
    "name_ua": "Wand of Secrets"
  },
  {
    "index": "wand-of-magic-missiles",
    "name": "Wand of Magic Missiles",
    "equipment_category": {
      "index": "wand",
      "name": "Wand",
      "url": "/api/2014/equipment-categories/wand"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Палиця, незвичайна\nЦя палиця має 7 зарядів. Тримаючи її, ви можете використати дію, щоб витратити 1 або більше її зарядів для заклинання магічної стріли. За 1 заряд ви закликаєте версію заклинання 1-го рівня. Ви можете збільшити рівень заклинання на один за кожен додатковий заряд, який ви витрачаєте.\nПалиця відновлює 1d6 + 1 витрачених зарядів щодня на світанку. Якщо ви витрачаєте останній заряд палиці, киньте d20. Якщо випаде 1, палиця розсипається в попіл і знищується.\"",
    "url": "/api/2014/magic-items/wand-of-magic-missiles",
    "name_ua": "Wand of Magic Missiles"
  },
  {
    "index": "wand-of-magic-detection",
    "name": "Wand of Magic Detection",
    "equipment_category": {
      "index": "wand",
      "name": "Wand",
      "url": "/api/2014/equipment-categories/wand"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Палиця, незвичайна\nЦя палиця має 3 заряди. Тримаючи її, ви можете витратити 1 заряд як дію, щоб кинути заклинання виявлення магії. Палиця відновлює 1d3 витрачених зарядів щодня на світанку.\"",
    "url": "/api/2014/magic-items/wand-of-magic-detection",
    "name_ua": "Wand of Magic Detection"
  },
  {
    "index": "trident-of-fish-command",
    "name": "Trident of Fish Command",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/2014/equipment-categories/weapon"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зброя (тризуб), незвичайна (потребує налаштування)\nЦей тризуб є магічною зброєю. Він має 3 заряди. Коли ви його носите, ви можете використати дію та витратити 1 заряд, щоб накласти заклинання «Підкорення звіра» (поріг порятунку 15) на звіра, який має вроджену швидкість плавання. Тризуб відновлює 1d3 витрачених зарядів щодня на світанку.\"",
    "url": "/api/2014/magic-items/trident-of-fish-command",
    "name_ua": "Trident of Fish Command"
  },
  {
    "index": "stone-of-good-luck-luckstone",
    "name": "Stone of Good Luck (Luckstone)",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nПоки цей поліруваний агат знаходиться при вас, ви отримуєте бонус +1 до перевірок здібностей і рятувальних кидків.\"",
    "url": "/api/2014/magic-items/stone-of-good-luck-luckstone",
    "name_ua": "Stone of Good Luck (Luckstone)"
  },
  {
    "index": "spell-scroll-3rd",
    "name": "Spell Scroll (3rd)",
    "equipment_category": {
      "index": "scroll",
      "name": "Scroll",
      "url": "/api/2014/equipment-categories/scroll"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Свиток, незвичайний\nСвиток заклинань містить слова одного заклинання, написані в містичному шифрі. Якщо заклинання є у списку заклинань вашого класу, ви можете прочитати свиток і застосувати його заклинання без надання матеріальних компонентів. В іншому випадку свиток залишається незрозумілим. Використання заклинання шляхом читання свитка вимагає звичайного часу накладання заклинання. Після того як заклинання буде застосовано, слова на свитку зникають, і він розсипається на порох. Якщо накладання не переривається, свиток не втрачається.\nЯкщо заклинання є у списку заклинань вашого класу, але має вищий рівень, ніж ви можете зазвичай застосовувати, вам потрібно зробити перевірку здібності з використанням вашої здібності до накладання заклинань, щоб визначити, чи вдалося вам його застосувати. Складність дорівнює 10 + рівень заклинання. У разі невдалої перевірки заклинання зникає зі свитка без інших ефектів.\nЦей свиток містить заклинання 3-го рівня. Складність рятувального кидка для заклинання дорівнює 15, а бонус атаки становить +7.\nЗаклинання чарівника на свитку можна скопіювати так само, як і заклинання в книгах заклинань. Коли заклинання копіюється зі свитка, копіювальник повинен успішно виконати перевірку Інтелекту (Аркана) зі складністю 13. Якщо перевірка успішна, заклинання успішно скопійовано. Незалежно від того, чи вдалася перевірка чи ні, свиток знищується.\"",
    "url": "/api/2014/magic-items/spell-scroll-3rd",
    "name_ua": "Spell Scroll (3rd)"
  },
  {
    "index": "spell-scroll-2nd",
    "name": "Spell Scroll (2nd)",
    "equipment_category": {
      "index": "scroll",
      "name": "Scroll",
      "url": "/api/2014/equipment-categories/scroll"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Свиток, незвичайний\nСвиток заклинань містить слова одного заклинання, написані в містичному шифрі. Якщо заклинання є у списку заклинань вашого класу, ви можете прочитати свиток і застосувати його заклинання без надання матеріальних компонентів. В іншому випадку свиток залишається незрозумілим. Використання заклинання шляхом читання свитка вимагає звичайного часу накладання заклинання. Після того як заклинання буде застосовано, слова на свитку зникають, і він розсипається на порох. Якщо накладання не переривається, свиток не втрачається.\nЯкщо заклинання є у списку заклинань вашого класу, але має вищий рівень, ніж ви можете зазвичай застосовувати, вам потрібно зробити перевірку здібності, використовуючи вашу здібність до накладання заклинань, щоб визначити, чи вдалося вам його застосувати. Складність перевірки дорівнює 10 + рівень заклинання. У разі невдалої перевірки заклинання зникає зі свитка без інших ефектів.\nЦей свиток містить заклинання 2-го рівня. Складність рятувального кидка для цього заклинання дорівнює 13, а бонус атаки становить +5.\nЗаклинання чарівника на свитку можна скопіювати так само, як і заклинання у книгах заклинань. Коли заклинання копіюється зі свитка, копіювальник повинен успішно пройти перевірку Інтелекту (Аркана) зі складністю 12. Якщо перевірка успішна, заклинання успішно скопійовано. Незалежно від того, чи вдалася перевірка чи ні, свиток знищується.\"",
    "url": "/api/2014/magic-items/spell-scroll-2nd",
    "name_ua": "Spell Scroll (2nd)"
  },
  {
    "index": "spell-scroll-1st",
    "name": "Spell Scroll (1st)",
    "equipment_category": {
      "index": "scroll",
      "name": "Scroll",
      "url": "/api/2014/equipment-categories/scroll"
    },
    "rarity": {
      "name": "Common"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Свиток, звичайний\nСвиток заклинань містить слова одного заклинання, написані в містичному шифрі. Якщо заклинання є у списку заклинань вашого класу, ви можете прочитати свиток і застосувати його заклинання без надання матеріальних компонентів. В іншому випадку свиток залишається незрозумілим. Використання заклинання шляхом читання свитка вимагає звичайного часу накладання заклинання. Після того як заклинання буде застосовано, слова на свитку зникають, і він розсипається на порох. Якщо накладання не переривається, свиток не втрачається.\nЯкщо заклинання є у списку заклинань вашого класу, але має вищий рівень, ніж ви можете зазвичай застосовувати, вам потрібно зробити перевірку здібності, використовуючи вашу здібність до накладання заклинань, щоб визначити, чи вдалося вам його застосувати. Складність дорівнює 10 + рівень заклинання. У разі невдалої перевірки заклинання зникає зі свитка без інших ефектів.\nЦей свиток містить заклинання 1-го рівня. Збереження від заклинання дорівнює 13, а бонус атаки становить +5.\nЗаклинання чарівника на свитку можна скопіювати так само, як і заклинання у книгах заклинань. Коли заклинання копіюється зі свитка, копіювальник повинен успішно пройти перевірку Інтелекту (Аркана) зі складністю 11. Якщо перевірка успішна, заклинання успішно скопійовано. Незалежно від того, чи вдалася перевірка чи ні, свиток знищується.\"",
    "url": "/api/2014/magic-items/spell-scroll-1st",
    "name_ua": "Spell Scroll (1st)"
  },
  {
    "index": "spell-scroll-cantrip",
    "name": "Spell Scroll (Cantrip)",
    "equipment_category": {
      "index": "scroll",
      "name": "Scroll",
      "url": "/api/2014/equipment-categories/scroll"
    },
    "rarity": {
      "name": "Common"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Рукавичка, звичайна\nРукавичка заклинання містить слова одного заклинання, написані в містичному шифрі. Якщо заклинання є у списку заклинань вашого класу, ви можете прочитати рукавичку і виконати його без надання матеріальних компонентів. В іншому випадку рукавичка є незрозумілою. Виконання заклинання шляхом читання рукавички вимагає звичайного часу накладання заклинання. Після виконання заклинання слова на рукавичці зникають, і вона розсипається на порох. Якщо виконання не переривається, рукавичка не втрачається.\nЯкщо заклинання є у списку заклинань вашого класу, але має вищий рівень, ніж ви можете зазвичай виконувати, вам потрібно зробити перевірку здібності, використовуючи вашу здібність до накладання заклинань, щоб визначити, чи вдалося вам його виконати. Складність дорівнює 10 + рівень заклинання. При невдалому результаті перевірки заклинання зникає з рукавички без інших ефектів.\nЦя рукавичка містить канtrip. Збереження заклинання дорівнює 13, а бонус атаки становить +5.\"",
    "url": "/api/2014/magic-items/spell-scroll-cantrip",
    "name_ua": "Spell Scroll (Cantrip)"
  },
  {
    "index": "slippers-of-spider-climbing",
    "name": "Slippers of Spider Climbing",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, незвичайний (потребує налаштування)\nКоли ви носите ці легкі черевики, ви можете рухатися вгору, вниз і по вертикальних поверхнях, а також догори дном по стелях, залишаючи руки вільними. Ви маєте швидкість лазіння, яка дорівнює вашій швидкості ходьби. Однак черевики не дозволяють вам рухатися таким чином по слизькій поверхні, наприклад, покритій льодом або олією.\"",
    "url": "/api/2014/magic-items/slippers-of-spider-climbing",
    "name_ua": "Slippers of Spider Climbing"
  },
  {
    "index": "rope-of-climbing",
    "name": "Rope of Climbing",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nЦей шовковий канат довжиною 60 футів важить 3 фунти і може витримувати до 3000 фунтів. Якщо ви тримаєте один кінець каната і використовуєте дію, щоб вимовити командне слово, канат оживає. Як бонусну дію, ви можете наказати іншому кінцю рухатися до обраного вами місця призначення. Цей кінець рухається на 10 футів у вашому ході, коли ви вперше його наказуєте, і на 10 футів у кожному вашому ході, поки не досягне свого місця призначення, максимальної відстані або поки ви не скажете йому зупинитися. Ви також можете наказати канату надійно закріпитися за об'єктом або розкріпитися, зав'язатися або розв'язатися, або скрутитися для перенесення.\nЯкщо ви скажете канату зав'язатися, великі вузли з'являються через кожен фут уздовж каната. Поки канат зав'язаний, він скорочується до довжини 50 футів і надає перевагу при перевірках на його підйом.\nКанат має клас броні 20 та 20 очок здоров'я. Він відновлює 1 очко здоров'я кожні 5 хвилин, якщо має хоча б 1 очко здоров'я. Якщо канат опускається до 0 очок здоров'я, він знищується.\"",
    "url": "/api/2014/magic-items/rope-of-climbing",
    "name_ua": "Rope of Climbing"
  },
  {
    "index": "robe-of-useful-items",
    "name": "Robe of Useful Items",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nЦя накидка має тканинні латки різних форм і кольорів. Поки ви носите накидку, ви можете використати дію, щоб від'єднати одну з латок, перетворивши її на об'єкт або істоту, яку вона представляє. Коли остання латка буде видалена, накидка стає звичайним одягом.\nНакидка має по дві з кожної з наступних латок:\n— кинджал\n— ліхтар «bullseye» (заповнений і запалений)\n— сталеве дзеркало\n— 10-футова палиця\n— мотузка з конопель (50 футів, скручена)\n— мішок\nКрім того, накидка має 4d4 інших латок. Ведучий вибирає латки або визначає їх випадковим чином.\n| d100 | Латка |\n|",
    "url": "/api/2014/magic-items/robe-of-useful-items",
    "name_ua": "Robe of Useful Items"
  },
  {
    "index": "ring-of-water-walking",
    "name": "Ring of Water Walking",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Кільце, рідкісне\nПоки ви носите це кільце, ви можете стояти на будь-якій рідині та пересуватися по ній, ніби це тверда поверхня.\"",
    "url": "/api/2014/magic-items/ring-of-water-walking",
    "name_ua": "Ring of Water Walking"
  },
  {
    "index": "ring-of-warmth",
    "name": "Ring of Warmth",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Кільце, незвичайне (потребує налаштування)\nПоки ви носите це кільце, ви маєте опір до холодного пошкодження. Крім того, ви та все, що ви носите і несете, не зазнаєте шкоди від температури до -50 градусів за Фаренгейтом.\"",
    "url": "/api/2014/magic-items/ring-of-warmth",
    "name_ua": "Ring of Warmth"
  },
  {
    "index": "ring-of-swimming",
    "name": "Ring of Swimming",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Кільце, незвичайне\nПід час носіння цього кільця ваша швидкість плавання становить 40 футів.\"",
    "url": "/api/2014/magic-items/ring-of-swimming",
    "name_ua": "Ring of Swimming"
  },
  {
    "index": "ring-of-mind-shielding",
    "name": "Ring of Mind Shielding",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Кільце, незвичайне (потребує налаштування)\nПоки ви носите це кільце, ви імунні до магії, яка дозволяє іншим істотам читати ваші думки, визначати, чи ви брешете, знати ваш світогляд або тип істоти. Істоти можуть телепатично спілкуватися з вами лише якщо ви дозволите це.\nВи можете використати дію, щоб зробити кільце невидимим, поки не використаєте іншу дію, щоб зробити його видимим, поки не знімете кільце або поки не помрете.\nЯкщо ви помрете, носячи кільце, ваша душа увійде в нього, якщо в ньому вже немає душі. Ви можете залишитися в кільці або вирушити до потойбічного світу. Поки ваша душа знаходиться в кільці, ви можете телепатично спілкуватися з будь-якою істотою, яка його носить. Носій не може запобігти цьому телепатичному спілкуванню.\"",
    "url": "/api/2014/magic-items/ring-of-mind-shielding",
    "name_ua": "Ring of Mind Shielding"
  },
  {
    "index": "ring-of-jumping",
    "name": "Ring of Jumping",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Кільце, незвичайне (потребує налаштування)\nПоки ви носите це кільце, ви можете кидати заклинання стрибка з нього як бонусну дію на власний розсуд, але можете націлювати лише на себе, коли робите це.\"",
    "url": "/api/2014/magic-items/ring-of-jumping",
    "name_ua": "Ring of Jumping"
  },
  {
    "index": "restorative-ointment",
    "name": "Restorative Ointment",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nЦя скляна банка діаметром 3 дюйми містить 1d4 + 1 дози густої суміші, яка має легкий запах алое. Банка разом із вмістом важить 1/2 фунта.\nЯк дію, одну дозу мазі можна проковтнути або нанести на шкіру. Створіння, яке отримує її, відновлює 2d8 + 2 очок здоров'я, перестає бути отруєним і виліковується від будь-якої хвороби.\"",
    "url": "/api/2014/magic-items/restorative-ointment",
    "name_ua": "Restorative Ointment"
  },
  {
    "index": "potion-of-water-breathing",
    "name": "Potion of Water Breathing",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зілля, рідкісне\nПісля вживання цього зілля ви можете дихати під водою протягом 1 години. Його каламутна зелена рідина пахне морем і містить плаваючу медузоподібну бульбашку.\"",
    "url": "/api/2014/magic-items/potion-of-water-breathing",
    "name_ua": "Potion of Water Breathing"
  },
  {
    "index": "potion-of-resistance-thunder",
    "name": "Potion of Thunder Resistance",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Зілля, незвичайне\nКоли ви випиваєте це зілля, ви отримуєте опір до шкоди від грому на 1 годину.\"",
    "url": "/api/2014/magic-items/potion-of-resistance-thunder",
    "name_ua": "Potion of Thunder Resistance"
  },
  {
    "index": "potion-of-resistance-radiant",
    "name": "Potion of Radiant Resistance",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Зілля, рідкісне\nКоли ви випиваєте це зілля, ви отримуєте опір до радіантної шкоди на 1 годину.\"",
    "url": "/api/2014/magic-items/potion-of-resistance-radiant",
    "name_ua": "Potion of Radiant Resistance"
  },
  {
    "index": "potion-of-resistance-psychic",
    "name": "Potion of Psychic Resistance",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Зілля, рідкісне\nКоли ви випиваєте це зілля, ви отримуєте опір до психічної шкоди на 1 годину.\"",
    "url": "/api/2014/magic-items/potion-of-resistance-psychic",
    "name_ua": "Potion of Psychic Resistance"
  },
  {
    "index": "potion-of-resistance-poison",
    "name": "Potion of Poison Resistance",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Зілля, рідкісне\nКоли ви випиваєте це зілля, ви отримуєте опір до отруйної шкоди на 1 годину.\"",
    "url": "/api/2014/magic-items/potion-of-resistance-poison",
    "name_ua": "Potion of Poison Resistance"
  },
  {
    "index": "potion-of-resistance-necrotic",
    "name": "Potion of Necrotic Resistance",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Зілля, незвичайне\nКоли ви випиваєте це зілля, ви отримуєте опір до некротичного пошкодження на 1 годину.\"",
    "url": "/api/2014/magic-items/potion-of-resistance-necrotic",
    "name_ua": "Potion of Necrotic Resistance"
  },
  {
    "index": "potion-of-resistance-lightning",
    "name": "Potion of Lightning Resistance",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Зілля, рідкісне\nКоли ви випиваєте це зілля, ви отримуєте опір до урону від блискавки на 1 годину.\"",
    "url": "/api/2014/magic-items/potion-of-resistance-lightning",
    "name_ua": "Potion of Lightning Resistance"
  },
  {
    "index": "potion-of-resistance-force",
    "name": "Potion of Force Resistance",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Зілля, незвичайне\nКоли ви випиваєте це зілля, ви отримуєте опір до ушкоджень від сили на 1 годину.\"",
    "url": "/api/2014/magic-items/potion-of-resistance-force",
    "name_ua": "Potion of Force Resistance"
  },
  {
    "index": "potion-of-resistance-fire",
    "name": "Potion of Fire Resistance",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Зілля, незвичайне\nКоли ви випиваєте це зілля, ви отримуєте опір до вогняного пошкодження на 1 годину.\"",
    "image": "/api/2014/magic-items/potion-of-resistance-fire.png",
    "url": "/api/2014/magic-items/potion-of-resistance-fire",
    "name_ua": "Potion of Fire Resistance"
  },
  {
    "index": "potion-of-resistance-cold",
    "name": "Potion of Cold Resistance",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Зілля, рідкісне\nКоли ви випиваєте це зілля, ви отримуєте опір до холодного пошкодження на 1 годину.\"",
    "url": "/api/2014/magic-items/potion-of-resistance-cold",
    "name_ua": "Potion of Cold Resistance"
  },
  {
    "index": "potion-of-resistance-acid",
    "name": "Potion of Acid Resistance",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Зілля, незвичайне\nКоли ви випиваєте це зілля, ви отримуєте опір до ушкоджень від кислоти на 1 годину.\"",
    "url": "/api/2014/magic-items/potion-of-resistance-acid",
    "name_ua": "Potion of Acid Resistance"
  },
  {
    "index": "potion-of-resistance",
    "name": "Potion of Resistance",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [
      {
        "index": "potion-of-resistance-acid",
        "name": "Potion of Acid Resistance",
        "url": "/api/2014/magic-items/potion-of-resistance-acid"
      },
      {
        "index": "potion-of-resistance-cold",
        "name": "Potion of Cold Resistance",
        "url": "/api/2014/magic-items/potion-of-resistance-cold"
      },
      {
        "index": "potion-of-resistance-fire",
        "name": "Potion of Fire Resistance",
        "url": "/api/2014/magic-items/potion-of-resistance-fire"
      },
      {
        "index": "potion-of-resistance-force",
        "name": "Potion of Force Resistance",
        "url": "/api/2014/magic-items/potion-of-resistance-force"
      },
      {
        "index": "potion-of-resistance-lightning",
        "name": "Potion of Lightning Resistance",
        "url": "/api/2014/magic-items/potion-of-resistance-lightning"
      },
      {
        "index": "potion-of-resistance-necrotic",
        "name": "Potion of Necrotic Resistance",
        "url": "/api/2014/magic-items/potion-of-resistance-necrotic"
      },
      {
        "index": "potion-of-resistance-poison",
        "name": "Potion of Poison Resistance",
        "url": "/api/2014/magic-items/potion-of-resistance-poison"
      },
      {
        "index": "potion-of-resistance-psychic",
        "name": "Potion of Psychic Resistance",
        "url": "/api/2014/magic-items/potion-of-resistance-psychic"
      },
      {
        "index": "potion-of-resistance-radiant",
        "name": "Potion of Radiant Resistance",
        "url": "/api/2014/magic-items/potion-of-resistance-radiant"
      },
      {
        "index": "potion-of-resistance-thunder",
        "name": "Potion of Thunder Resistance",
        "url": "/api/2014/magic-items/potion-of-resistance-thunder"
      }
    ],
    "variant": false,
    "desc": "\"Зілля, незвичайне\nКоли ви випиваєте це зілля, ви отримуєте опір до одного типу ушкоджень на 1 годину. Гравець вибирає тип або визначає його випадковим чином з наведених нижче варіантів.\n| d10 | Тип ушкоджень |\n|",
    "url": "/api/2014/magic-items/potion-of-resistance",
    "name_ua": "Potion of Resistance"
  },
  {
    "index": "potion-of-poison",
    "name": "Potion of Poison",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зілля, незвичайне\nЦей напій виглядає, пахне і смакує як зілля лікування або інше корисне зілля. Однак насправді це отрута, замаскована ілюзійною магією. Заклинання визначення виявляє його справжню природу.\nЯкщо ви його вип'єте, ви отримуєте 3d6 отруйної шкоди, і вам потрібно успішно пройти рятувальний кидок Конституції зі складністю 13, інакше ви будете отруєні. На початку кожного вашого ходу, поки ви отруєні таким чином, ви отримуєте 3d6 отруйної шкоди. Наприкінці кожного вашого ходу ви можете повторити рятувальний кидок. При успішному кидку отруйна шкода, яку ви отримуєте на наступних ходах, зменшується на 1d6. Отрута закінчується, коли шкода зменшується до 0.\"",
    "url": "/api/2014/magic-items/potion-of-poison",
    "name_ua": "Potion of Poison"
  },
  {
    "index": "potion-of-healing-greater",
    "name": "Potion of Greater Healing",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Зілля, незвичайне\nКоли ви випиваєте це зілля, ви відновлюєте 4d4 + 4 очки здоров'я. Червона рідина зілля блищить при збуренні.\"",
    "url": "/api/2014/magic-items/potion-of-healing-greater",
    "name_ua": "Potion of Greater Healing"
  },
  {
    "index": "potion-of-healing-common",
    "name": "Potion of Healing",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Common"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Зілля, звичайне\nКоли ви випиваєте це зілля, ви відновлюєте 2d4 + 2 очки здоров'я. Червона рідина зілля блищить при збуренні.\"",
    "url": "/api/2014/magic-items/potion-of-healing-common",
    "name_ua": "Potion of Healing"
  },
  {
    "index": "potion-of-growth",
    "name": "Potion of Growth",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зілля, рідкісне\nКоли ви випиваєте це зілля, ви отримуєте ефект «збільшення» заклинання «Збільшення/зменшення» на 1d4 години (без потреби в концентрації). Червоний колір у рідині зілля постійно розширюється від маленької краплі, забарвлюючи прозору рідину навколо, а потім знову стискається. Трясти пляшку не перериває цей процес.\"",
    "url": "/api/2014/magic-items/potion-of-growth",
    "name_ua": "Potion of Growth"
  },
  {
    "index": "potion-of-giant-strength-hill",
    "name": "Potion of Hill Giant Strength",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Зілля, рідкісне\nКоли ви випиваєте це зілля, ваш показник Сили змінюється на 21 на 1 годину. Зілля не має жодного ефекту, якщо ваша Сила дорівнює або перевищує цей показник.\nПрозора рідина цього зілля містить плаваючий уламок нігтя гірського велетня.\"",
    "url": "/api/2014/magic-items/potion-of-giant-strength-hill",
    "name_ua": "Potion of Hill Giant Strength"
  },
  {
    "index": "potion-of-climbing",
    "name": "Potion of Climbing",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Common"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зілля, звичайне\nКоли ви випиваєте це зілля, ви отримуєте швидкість лазіння, яка дорівнює вашій швидкості ходьби, на 1 годину. Протягом цього часу ви маєте перевагу на перевірки Сили (Спорт), які ви робите для лазіння. Зілля розділене на коричневі, срібні та сірі шари, що нагадують смуги каменю. Трясти пляшку не змішує кольори.\"",
    "url": "/api/2014/magic-items/potion-of-climbing",
    "name_ua": "Potion of Climbing"
  },
  {
    "index": "potion-of-animal-friendship",
    "name": "Potion of Animal Friendship",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зілля, незвичайне\nКоли ви випиваєте це зілля, ви можете на свій розсуд на 1 годину використовувати заклинання дружби з тваринами (поріг порятунку 13). Розмішування цієї каламутної рідини виводить на поверхню маленькі частинки: луску риби, язичок колібрі, кіготь кота або шерсть білки.\"",
    "url": "/api/2014/magic-items/potion-of-animal-friendship",
    "name_ua": "Potion of Animal Friendship"
  },
  {
    "index": "pipes-of-the-sewers",
    "name": "Pipes of the Sewers",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, незвичайний (потребує налаштування)\nВи повинні вміти грати на духових інструментах, щоб використовувати ці труби. Поки ви налаштовані на труби, звичайні щури та гігантські щури ставляться до вас байдужно і не атакуватимуть, якщо ви не загрожуватимете або не завдасте їм шкоди.\nТруби мають 3 заряди. Якщо ви граєте на трубах як дію, ви можете використати бонусну дію, щоб витратити від 1 до 3 зарядів, викликавши одне скупчення щурів з кожним витраченим зарядом, за умови, що достатньо щурів знаходиться в межах півмилі від вас для виклику таким чином (як визначає майстер гри). Якщо недостатньо щурів для формування скупчення, заряд марнується. Викликані скупчення рухаються до музики найкоротшим доступним шляхом, але інакше не підлягають вашому контролю. Труби відновлюють 1d3 витрачених зарядів щодня на світанку.\nКоли скупчення щурів, яке не під контролем іншої істоти, наближається до вас на відстань 30 футів під час гри на трубах, ви можете зробити перевірку Харизми, яку оскаржить перевірка Мудрості скупчення. Якщо ви програєте змагання, скупчення поводиться як зазвичай і не може бути схилене музикою труб протягом наступних 24 годин. Якщо ви виграєте змагання, скупчення піддається музиці труб і стає дружнім до вас і ваших супутників доти, поки ви продовжуєте грати на трубах кожен раунд як дію. Дружнє скупчення підкоряється вашим командам. Якщо ви не даєте команд дружньому скупченню, воно захищається, але інакше не вживає жодних дій. Якщо дружнє скупчення починає свій хід і не може чути музику труб, ваш контроль над цим скупченням закінчується, і скупчення поводиться як зазвичай і не може бути схилене музикою труб протягом наступних 24 годин.\"",
    "url": "/api/2014/magic-items/pipes-of-the-sewers",
    "name_ua": "Pipes of the Sewers"
  },
  {
    "index": "pipes-of-haunting",
    "name": "Pipes of Haunting",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nВи повинні вміти грати на духових інструментах, щоб використовувати ці труби. Вони мають 3 заряди. Ви можете використати дію, щоб зіграти на них і витратити 1 заряд, створивши моторошну, зачаровуючу мелодію. Кожна істота в межах 30 футів від вас, яка чує вашу гру, повинна успішно пройти рятувальний кидок Мудрості зі складністю 15 або стати наляканою вами на 1 хвилину. Якщо ви бажаєте, всі істоти в цій зоні, які не є вороже налаштованими до вас, автоматично успішно проходять рятувальний кидок. Істота, яка не проходить рятувальний кидок, може повторити його наприкінці кожного свого ходу, припиняючи ефект на собі при успіху. Істота, яка успішно проходить свій рятувальний кидок, стає імунною до ефекту цих труб на 24 години. Труби відновлюють 1d3 витрачених зарядів щодня на світанку.\"",
    "url": "/api/2014/magic-items/pipes-of-haunting",
    "name_ua": "Pipes of Haunting"
  },
  {
    "index": "philter-of-love",
    "name": "Philter of Love",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зілля, незвичайне\nНаступного разу, коли ви побачите істоту протягом 10 хвилин після вживання цього фільтру, ви станете зачаровані цією істотою на 1 годину. Якщо істота належить до виду та статі, до яких ви зазвичай відчуваєте потяг, ви вважаєте її своєю справжньою любов'ю, поки перебуваєте під чарами. Рожева, шипуча рідина цього зілля містить одну легко пропускаючу бульбашку у формі серця.\"",
    "url": "/api/2014/magic-items/philter-of-love",
    "name_ua": "Philter of Love"
  },
  {
    "index": "periapt-of-wound-closure",
    "name": "Periapt of Wound Closure",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nПоки ви носите цей підвіс, ви стабілізуєтеся щоразу, коли перебуваєте в стані вмирання на початку свого ходу. Крім того, кожного разу, коли ви кидаєте кубик здоров'я для відновлення очок здоров'я, подвоюйте кількість очок здоров'я, які він відновлює.\"",
    "url": "/api/2014/magic-items/periapt-of-wound-closure",
    "name_ua": "Periapt of Wound Closure"
  },
  {
    "index": "periapt-of-health",
    "name": "Periapt of Health",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nВи маєте імунітет до зараження будь-якою хворобою, поки носите цей підвіс. Якщо ви вже інфіковані хворобою, її ефекти пригнічуються, поки ви носите підвіс.\"",
    "url": "/api/2014/magic-items/periapt-of-health",
    "name_ua": "Periapt of Health"
  },
  {
    "index": "pearl-of-power",
    "name": "Pearl of Power",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, незвичайний (потребує налаштування для заклинателя)\nПоки ця перлина знаходиться при вас, ви можете використати дію, щоб вимовити її командне слово і відновити один витрачений слот заклинання. Якщо витрачений слот був 4-го рівня або вище, новий слот буде 3-го рівня. Після використання перлини вона не може бути використана знову до наступного світанку.\"",
    "url": "/api/2014/magic-items/pearl-of-power",
    "name_ua": "Pearl of Power"
  },
  {
    "index": "oil-of-slipperiness",
    "name": "Oil of Slipperiness",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зілля, незвичайне\nЦя липка чорна мазь густа і важка в контейнері, але швидко тече при виливанні. Олія може покрити істоту середнього розміру або меншу, разом із спорядженням, яке вона носить і має при собі (для кожної категорії розміру вище середнього потрібна одна додаткова ампула). Нанесення олії займає 10 хвилин. Після цього істота отримує ефект заклинання «Свобода руху» на 8 годин.\nАльтернативно, олію можна вилити на землю як дію, де вона покриває квадрат 10 футів, дублюючи ефект заклинання «Слизь» в цій області на 8 годин.\"",
    "url": "/api/2014/magic-items/oil-of-slipperiness",
    "name_ua": "Oil of Slipperiness"
  },
  {
    "index": "necklace-of-adaptation",
    "name": "Necklace of Adaptation",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nПоки ви носите цей намисто, ви можете дихати нормально в будь-якому середовищі, і у вас є перевага на кидки порятунку проти шкідливих газів і парів (таких як ефекти хмарного вбивства та смердючої хмари, вдихувані отрути та дихальні атаки деяких драконів).\"",
    "url": "/api/2014/magic-items/necklace-of-adaptation",
    "name_ua": "Necklace of Adaptation"
  },
  {
    "index": "mithral-armor",
    "name": "Mithral Armor",
    "equipment_category": {
      "index": "armor",
      "name": "Armor",
      "url": "/api/2014/equipment-categories/armor"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Броня (середня або важка), незвичайна\nМіфрил — це легкий, гнучкий метал. Міфрилова ланцюгова сорочка або нагрудник можуть носитися під звичайним одягом. Якщо броня зазвичай накладає недолік на перевірки Декстерності (Схованки) або має вимогу до Сили, міфрилова версія броні цього не робить.\"",
    "url": "/api/2014/magic-items/mithral-armor",
    "name_ua": "Mithral Armor"
  },
  {
    "index": "medallion-of-thoughts",
    "name": "Medallion of Thoughts",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, незвичайний (потребує налаштування)\nМедальйон має 3 заряди. Поки ви його носите, ви можете використати дію та витратити 1 заряд, щоб накласти заклинання «Виявлення думок» (рятувальний кидок СК 13) з нього. Медальйон відновлює 1d3 витрачених зарядів щодня на світанку.\"",
    "url": "/api/2014/magic-items/medallion-of-thoughts",
    "name_ua": "Medallion of Thoughts"
  },
  {
    "index": "lantern-of-revealing",
    "name": "Lantern of Revealing",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nПоки лампа з капюшоном запалена, вона горить 6 годин на 1 пінту олії, випромінюючи яскраве світло в радіусі 30 футів і тьмяне світло ще на 30 футів. Невидимі істоти та об'єкти стають видимими, поки вони знаходяться в яскравому світлі лампи. Ви можете використати дію, щоб опустити капюшон, зменшуючи світло до тьмяного в радіусі 5 футів.\"",
    "url": "/api/2014/magic-items/lantern-of-revealing",
    "name_ua": "Lantern of Revealing"
  },
  {
    "index": "javelin-of-lightning",
    "name": "Javelin of Lightning",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/2014/equipment-categories/weapon"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зброя (спис), незвичайна\nЦей спис є магічною зброєю. Коли ви кидаєте його і вимовляєте слово-команду, він перетворюється на розряд блискавки, формуючи лінію шириною 5 футів, яка простягається від вас до цілі в межах 120 футів. Кожна істота в лінії, окрім вас і цілі, повинна зробити рятувальний кидок на Спритність зі складністю 13, отримуючи 4d6 шкоди від блискавки при невдалому кидку, і половину цієї шкоди при вдалому. Блискавичний розряд перетворюється назад на спис, коли досягає цілі. Зробіть атаку дальньої зброї проти цілі. При попаданні ціль отримує шкоду від списа плюс 4d6 шкоди від блискавки.\nВластивість списа не може бути використана знову до наступного світанку. Тим часом спис все ще може використовуватися як магічна зброя.\"",
    "url": "/api/2014/magic-items/javelin-of-lightning",
    "name_ua": "Javelin of Lightning"
  },
  {
    "index": "immovable-rod",
    "name": "Immovable Rod",
    "equipment_category": {
      "index": "rod",
      "name": "Rod",
      "url": "/api/2014/equipment-categories/rod"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Палиця, рідкісна\nЦя плоска залізна палиця має кнопку на одному кінці. Ви можете використати дію, щоб натиснути кнопку, що змушує палицю магічно закріпитися на місці. Поки ви або інша істота не використаєте дію, щоб знову натиснути кнопку, палиця не рухатиметься, навіть якщо вона суперечить гравітації. Палиця може витримувати вагу до 8000 фунтів. Більша вага призводить до деактивації палиці та її падіння. Істота може використати дію, щоб зробити перевірку Сили зі складністю 30, переміщуючи закріплену палицю до 10 футів у разі успіху.\"",
    "url": "/api/2014/magic-items/immovable-rod",
    "name_ua": "Immovable Rod"
  },
  {
    "index": "helm-of-telepathy",
    "name": "Helm of Telepathy",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, незвичайний (потребує налаштування)\nПід час носіння цього шолома ви можете використати дію, щоб кинути заклинання «Виявлення думок» (поріг порятунку 13) з нього. Поки ви підтримуєте концентрацію на заклинанні, ви можете використати бонусну дію, щоб надіслати телепатичне повідомлення істоті, на якій ви зосереджені. Вона може відповісти, використовуючи бонусну дію, поки ваша концентрація на ній триває.\nПоки ви зосереджені на істоті з «Виявленням думок», ви можете використати дію, щоб кинути заклинання «Пропозиція» (поріг порятунку 13) з шолома на цю істоту. Після використання властивість «Пропозиція» не може бути використана знову до наступного світанку.\"",
    "url": "/api/2014/magic-items/helm-of-telepathy",
    "name_ua": "Helm of Telepathy"
  },
  {
    "index": "helm-of-comprehending-languages",
    "name": "Helm of Comprehending Languages",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nПоки ви носите цей шолом, ви можете використовувати дію, щоб на власний розсуд кидати заклинання «Розуміння мов».\"",
    "url": "/api/2014/magic-items/helm-of-comprehending-languages",
    "name_ua": "Helm of Comprehending Languages"
  },
  {
    "index": "headband-of-intellect",
    "name": "Headband of Intellect",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nВаш показник Інтелекту дорівнює 19, коли ви носите цей головний убір. Він не має жодного ефекту, якщо ваш Інтелект вже дорівнює 19 або вище.\"",
    "url": "/api/2014/magic-items/headband-of-intellect",
    "name_ua": "Headband of Intellect"
  },
  {
    "index": "hat-of-disguise",
    "name": "Hat of Disguise",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nПоки ви носите цей капелюх, ви можете використовувати дію, щоб на власний розсуд кидати заклинання «маскування» з нього. Заклинання припиняється, якщо капелюх знято.\"",
    "url": "/api/2014/magic-items/hat-of-disguise",
    "name_ua": "Hat of Disguise"
  },
  {
    "index": "goggles-of-night",
    "name": "Goggles of Night",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nПід час носіння цих темних лінз ви отримуєте нічне бачення на відстань до 60 футів. Якщо у вас вже є нічне бачення, носіння окулярів збільшує його діапазон на 60 футів.\"",
    "url": "/api/2014/magic-items/goggles-of-night",
    "name_ua": "Goggles of Night"
  },
  {
    "index": "gloves-of-swimming-and-climbing",
    "name": "Gloves of Swimming and Climbing",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nПід час носіння цих рукавичок підйом і плавання не вимагають додаткових витрат руху, і ви отримуєте бонус +5 до перевірок Сили (Спорт), зроблених для підйому або плавання.\"",
    "url": "/api/2014/magic-items/gloves-of-swimming-and-climbing",
    "name_ua": "Gloves of Swimming and Climbing"
  },
  {
    "index": "gloves-of-missile-snaring",
    "name": "Gloves of Missile Snaring",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nЦі рукавиці здаються майже зливаються з вашими руками, коли ви їх одягаєте. Коли на вас влучає атака дальньої зброї, поки ви їх носите, ви можете використати свою реакцію, щоб зменшити шкоду на 1d10 + ваш модифікатор Ловкості, за умови, що у вас є вільна рука. Якщо ви зменшите шкоду до 0, ви можете спіймати снаряд, якщо він достатньо малий, щоб ви могли тримати його в цій руці.\"",
    "url": "/api/2014/magic-items/gloves-of-missile-snaring",
    "name_ua": "Gloves of Missile Snaring"
  },
  {
    "index": "gem-of-brightness",
    "name": "Gem of Brightness",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, незвичайний\nЦей призма має 50 зарядів. Коли ви тримаєте її, ви можете використати дію, щоб вимовити одне з трьох слів команди, щоб викликати один з наступних ефектів:\nПерше слово команди змушує коштовність випромінювати яскраве світло в радіусі 30 футів і тьмяне світло ще на 30 футів. Цей ефект не витрачає заряд. Він триває, поки ви не використаєте бонусну дію, щоб повторити слово команди або поки не використаєте іншу функцію коштовності.\nДруге слово команди витрачає 1 заряд і змушує коштовність випустити яскравий промінь світла на одну істоту, яку ви можете бачити в межах 60 футів від вас. Істота повинна успішно пройти рятувальний кидок зі Спротиву (DC 15), інакше вона буде осліплена на 1 хвилину. Істота може повторити рятувальний кидок в кінці кожного свого ходу, припиняючи ефект на собі при успіху.\nТретє слово команди витрачає 5 зарядів і змушує коштовність спалахнути осліплюючим світлом у конусі завширшки 30 футів, що виходить з неї. Кожна істота в конусі повинна зробити рятувальний кидок, як якби була вражена променем, створеним другим словом команди.\nКоли всі заряди коштовності витрачені, вона стає немагічним ювелірним виробом вартістю 50 золотих монет.\"",
    "url": "/api/2014/magic-items/gem-of-brightness",
    "name_ua": "Gem of Brightness"
  },
  {
    "index": "gauntlets-of-ogre-power",
    "name": "Gauntlets of Ogre Power",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nВаш показник Сили дорівнює 19, коли ви носите ці рукавиці. Вони не впливають на вас, якщо ваш показник Сили вже дорівнює 19 або вище.\"",
    "url": "/api/2014/magic-items/gauntlets-of-ogre-power",
    "name_ua": "Gauntlets of Ogre Power"
  },
  {
    "index": "figurine-of-wondrous-power-silver-raven",
    "name": "Silver Raven Figurine of Wondrous Power",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, незвичайний\nСтатуетка дивовижної сили — це фігурка звіра, достатньо мала, щоб вміститися в кишені. Якщо ви використаєте дію, щоб вимовити слово-команду і кинути фігурку на точку на землі в межах 60 футів від вас, фігурка перетворюється на живу істоту. Якщо місце, де має з'явитися істота, зайняте іншими істотами або об'єктами, або якщо для істоти немає достатньо місця, фігурка не стає істотою.\nІстота дружня до вас і ваших супутників. Вона розуміє ваші мови і підкоряється вашим усним командам. Якщо ви не даєте команд, істота захищає себе, але не виконує інших дій.\nІстота існує протягом певного часу, визначеного для кожної фігурки. Наприкінці цього часу істота повертається до своєї форми фігурки. Вона повертається до форми фігурки раніше, якщо її здоров'я опускається до 0 очок або якщо ви використаєте дію, щоб знову вимовити слово-команду, торкаючись її. Коли істота знову стає фігуркою, її властивість не може бути використана знову до того часу, як пройде певний період часу, зазначений у описі фігурки.\n***Срібний Ворон.*** Ця срібна статуетка ворона може стати вороном на термін до 12 годин. Після використання вона не може бути використана знову до закінчення 2 днів. Під час перебування у формі ворона фігурка дозволяє вам використовувати заклинання \"Посланець тварин\" на ній за бажанням.\"",
    "url": "/api/2014/magic-items/figurine-of-wondrous-power-silver-raven",
    "name_ua": "Silver Raven Figurine of Wondrous Power"
  },
  {
    "index": "eyes-of-the-eagle",
    "name": "Eyes of the Eagle",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nЦі кришталеві лінзи надягаються на очі. Поки ви їх носите, ви отримуєте перевагу в перевірках Мудрості (Спостереження), які залежать від зору. У умовах ясної видимості ви можете розрізняти деталі навіть дуже віддалених істот і об'єктів розміром до 2 футів у діаметрі.\"",
    "url": "/api/2014/magic-items/eyes-of-the-eagle",
    "name_ua": "Eyes of the Eagle"
  },
  {
    "index": "eyes-of-minute-seeing",
    "name": "Eyes of Minute Seeing",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nЦі кришталеві лінзи надягають на очі. Поки ви їх носите, ви можете бачити набагато краще, ніж зазвичай, на відстані до 1 фути. Ви маєте перевагу в перевірках Інтелекту (Розслідування), які залежать від зору, під час пошуку в області або вивчення об'єкта в межах цієї відстані.\"",
    "url": "/api/2014/magic-items/eyes-of-minute-seeing",
    "name_ua": "Eyes of Minute Seeing"
  },
  {
    "index": "eyes-of-charming",
    "name": "Eyes of Charming",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, незвичайний (потребує налаштування)\nЦі кришталеві лінзи надягаються на очі. Вони мають 3 заряди. Поки ви їх носите, ви можете витратити 1 заряд як дію, щоб накласти заклинання «Очарування особи» (поріг порятунку 13) на гуманоїда в межах 30 футів від вас, за умови, що ви і ціль можете бачити один одного. Лінзи відновлюють усі витрачені заряди щодня на світанку.\"",
    "url": "/api/2014/magic-items/eyes-of-charming",
    "name_ua": "Eyes of Charming"
  },
  {
    "index": "eversmoking-bottle",
    "name": "Eversmoking Bottle",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nДим витікає з пробки цього латунного фляги, яка важить 1 фунт. Коли ви використовуєте дію, щоб зняти пробку, з фляги вивільняється хмара густого диму, що розповсюджується на радіус 60 футів. Область хмари є сильно затуманеною. Кожну хвилину, поки фляга відкрита і знаходиться в межах хмари, радіус збільшується на 10 футів, поки не досягне максимального радіусу в 120 футів.\nХмара залишається, поки фляга відкрита. Щоб закрити флягу, вам потрібно вимовити її командне слово як дію. Після закриття фляги хмара розсіюється через 10 хвилин. Помірний вітер (11 до 20 миль на годину) також може розсіяти дим через 1 хвилину, а сильний вітер (21 або більше миль на годину) може зробити це через 1 раунд.\"",
    "url": "/api/2014/magic-items/eversmoking-bottle",
    "name_ua": "Eversmoking Bottle"
  },
  {
    "index": "elemental-gem-water",
    "name": "Water Elemental Gem",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, рідкісний\nЦей смарагд містить частинку елементальної енергії. Коли ви використовуєте дію, щоб розбити коштовність, викликається водяний елементаль, ніби ви застосували заклинання виклик елементаля, і магія коштовності втрачається.\"",
    "image": "/api/images/magic-items/elemental-gem-water.png",
    "url": "/api/2014/magic-items/elemental-gem-water",
    "name_ua": "Water Elemental Gem"
  },
  {
    "index": "elemental-gem-fire",
    "name": "Fire Elemental Gem",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, рідкісний\nЦей червоний корунд містить частинку елементальної енергії. Коли ви використовуєте дію, щоб розбити коштовність, викликається вогняний елементаль, ніби ви застосували заклинання виклик елементаля, і магія коштовності втрачається.\"",
    "image": "/api/images/magic-items/elemental-gem-fire.png",
    "url": "/api/2014/magic-items/elemental-gem-fire",
    "name_ua": "Fire Elemental Gem"
  },
  {
    "index": "elemental-gem-earth",
    "name": "Earth Elemental Gem",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, рідкісний\nЦей жовтий діамант містить частинку елементальної енергії. Коли ви використовуєте дію, щоб розбити коштовність, викликається земляний елементаль, ніби ви застосували заклинання виклик елементаля, і магія коштовності втрачається.\"",
    "image": "/api/images/magic-items/elemental-gem-earth.png",
    "url": "/api/2014/magic-items/elemental-gem-earth",
    "name_ua": "Earth Elemental Gem"
  },
  {
    "index": "elemental-gem-air",
    "name": "Air Elemental Gem",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, рідкісний\nЦей блакитний сапфір містить частинку елементальної енергії. Коли ви використовуєте дію, щоб розбити коштовність, викликається повітряний елементаль, ніби ви застосували заклинання виклик елементаля, і магія коштовності втрачається.\"",
    "image": "/api/images/magic-items/elemental-gem-air.png",
    "url": "/api/2014/magic-items/elemental-gem-air",
    "name_ua": "Air Elemental Gem"
  },
  {
    "index": "elemental-gem",
    "name": "Elemental Gem",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [
      {
        "index": "elemental-gem-air",
        "name": "Air Elemental Gem",
        "url": "/api/2014/magic-items/elemental-gem-air"
      },
      {
        "index": "elemental-gem-earth",
        "name": "Earth Elemental Gem",
        "url": "/api/2014/magic-items/elemental-gem-earth"
      },
      {
        "index": "elemental-gem-fire",
        "name": "Fire Elemental Gem",
        "url": "/api/2014/magic-items/elemental-gem-fire"
      },
      {
        "index": "elemental-gem-water",
        "name": "Water Elemental Gem",
        "url": "/api/2014/magic-items/elemental-gem-water"
      }
    ],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nЦей коштовний камінь містить частинку елементальної енергії. Коли ви використовуєте дію, щоб розбити камінь, викликається елементаль, ніби ви застосували заклинання виклик елементаля, і магія каменю втрачається. Тип каменю визначає, який елементаль буде викликаний заклинанням.\n| Камінь | Викликаний елементаль |\n|",
    "image": "/api/images/magic-items/elemental-gem.png",
    "url": "/api/2014/magic-items/elemental-gem",
    "name_ua": "Elemental Gem"
  },
  {
    "index": "efficient-quiver",
    "name": "Efficient Quiver",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nКожен з трьох відділів сагайдака з'єднаний з екстра-димензійним простором, що дозволяє сагайдаку вміщувати численні предмети, вага яких ніколи не перевищує 2 фунти. Найкоротший відділ може вмістити до шістдесяти стріл, болтів або подібних об'єктів. Середній відділ вміщує до вісімнадцяти списів або подібних предметів. Найдовший відділ вміщує до шести довгих предметів, таких як луки, палиці або списи.\nВи можете витягнути будь-який предмет, що міститься в сагайдаку, так само, як і з звичайного сагайдака або піхов.\"",
    "image": "/api/images/magic-items/efficient-quiver.png",
    "url": "/api/2014/magic-items/efficient-quiver",
    "name_ua": "Efficient Quiver"
  },
  {
    "index": "dust-of-sneezing-and-choking",
    "name": "Dust of Sneezing and Choking",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nЗнайдений у невеликій ємності, цей порошок нагадує дуже дрібний пісок. Він виглядає як пил зникнення, і заклинання визначення підтверджує це. Його достатньо для одного використання.\nКоли ви використовуєте дію, щоб кинути жменю пилу в повітря, ви та кожна істота, яка потребує дихання в межах 30 футів від вас, повинні успішно пройти рятувальний кидок Конституції зі складністю 15 або стати неспроможними дихати, при цьому неконтрольовано чхаючи. Істота, на яку вплинуло це, стає непрацездатною та задихається. Поки вона свідома, істота може повторити рятувальний кидок в кінці кожного свого ходу, припиняючи ефект на собі при успіху. Заклинання менше відновлення також може припинити ефект на істоті.\"",
    "image": "/api/images/magic-items/dust-of-sneezing-and-choking.png",
    "url": "/api/2014/magic-items/dust-of-sneezing-and-choking",
    "name_ua": "Dust of Sneezing and Choking"
  },
  {
    "index": "dust-of-dryness",
    "name": "Dust of Dryness",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "Дивовижний предмет, рідкісний\nЦей маленький пакетик містить 1d6 + 4 щіпки пилу. Ви можете використати дію, щоб посипати щіпку пилу на воду. Пил перетворює куб води розміром 15 футів на стороні в одну кульку розміром з мармур, яка плаває або лежить поруч із місцем, де був посипаний пил. Вага кульки незначна.\nХтось може використати дію, щоб розбити кульку об тверду поверхню, що призведе до її розколювання та вивільнення води, яку поглинув пил. Це припиняє магію цієї кульки.\nЕлементаль, що складається переважно з води і який піддається дії щіпки пилу, повинен зробити рятувальний кидок зі Спротивом Конституції DC 13, отримуючи 10d6 некротичної шкоди при невдалому кидку або половину цієї шкоди при вдалому.",
    "image": "/api/images/magic-items/dust-of-dryness.png",
    "url": "/api/2014/magic-items/dust-of-dryness",
    "name_ua": "Dust of Dryness"
  },
  {
    "index": "dust-of-disappearance",
    "name": "Dust of Disappearance",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nЗнайдений у маленькому пакеті, цей порошок нагадує дуже дрібний пісок. Його достатньо для одного використання. Коли ви використовуєте дію, щоб кинути пил у повітря, ви та кожна істота і об'єкт у радіусі 10 футів стають невидимими на 2d4 хвилини. Тривалість однакова для всіх суб'єктів, і пил зникає, коли його магія вступає в силу. Якщо істота, на яку вплинув пил, атакує або накладає заклинання, невидимість для цієї істоти припиняється.\"",
    "image": "/api/images/magic-items/dust-of-disappearance.png",
    "url": "/api/2014/magic-items/dust-of-disappearance",
    "name_ua": "Dust of Disappearance"
  },
  {
    "index": "deck-of-illusions",
    "name": "Deck of Illusions",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "Дивовижний предмет, рідкісний\nЦя коробка містить набір карток з пергаменту. Повна колода складається з 34 карт. Колода, знайдена як скарб, зазвичай містить на 1d20 - 1 карт менше.\nМагія колоди працює лише тоді, коли карти тягнуться випадковим чином (ви можете використовувати змінену колоду гральних карт для імітації цієї колоди). Ви можете використати дію, щоб випадково витягнути карту з колоди та кинути її на землю в точці в межах 30 футів від вас.\nІлюзія однієї або кількох істот формується над кинутою картою і залишається до тих пір, поки не буде розвіяна. Ілюзорна істота виглядає реальною, має відповідний розмір і поводиться так, ніби це справжня істота, за винятком того, що вона не може завдати шкоди. Поки ви перебуваєте в межах 120 футів від ілюзорної істоти і можете її бачити, ви можете використати дію, щоб магічно перемістити її будь-куди в межах 30 футів від її карти. Будь-яка фізична взаємодія з ілюзорною істотою розкриває її як ілюзію, оскільки об'єкти проходять крізь неї. Хтось, хто використовує дію для візуального огляду істоти, визначає її як ілюзорну за допомогою успішного перевірки Інтелекту (Розслідування) зі складністю DC 15. Тоді істота виглядає напівпрозорою.\nІлюзія триває до тих пір, поки її карта не буде переміщена або ілюзія не буде розвіяна. Коли ілюзія закінчується, зображення на її карті зникає, і цю карту більше не можна використовувати.\n| Гральна карта | Ілюзія |\n|",
    "image": "/api/images/magic-items/deck-of-illusions.png",
    "url": "/api/2014/magic-items/deck-of-illusions",
    "name_ua": "Deck of Illusions"
  },
  {
    "index": "decanter-of-endless-water",
    "name": "Decanter of Endless Water",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "Дивовижний предмет, рідкісний\nЦя закупорена фляга шумить, коли її струшують, ніби вона містить воду. Фляга важить 2 фунти.\nВи можете використати дію, щоб зняти пробку і вимовити одне з трьох слів-команд, після чого з фляги виллється певна кількість прісної або солоної води (на ваш вибір). Вода припиняє литися на початку вашого наступного ходу. Виберіть один з наступних варіантів:\n\"Потік\" виробляє 1 галон води.\n\"Фонтан\" виробляє 5 галонів води.\n\"Гейзер\" виробляє 30 галонів води, яка виливається у вигляді гейзера довжиною 30 футів і шириною 1 фут. Як бонусну дію, тримаючи флягу, ви можете націлити гейзер на істоту, яку ви бачите в межах 30 футів від вас. Ціль повинна успішно пройти рятувальний кидок Сили зі складністю DC 13 або отримати 1d4 ушкоджень від удару і впасти на землю. Замість істоти ви можете націлити об'єкт, який не носиться і не переноситься, вагою не більше 200 фунтів. Об'єкт буде або перекинуто, або відштовхнуто на відстань до 15 футів від вас.",
    "image": "/api/images/magic-items/decanter-of-endless-water.png",
    "url": "/api/2014/magic-items/decanter-of-endless-water",
    "name_ua": "Decanter of Endless Water"
  },
  {
    "index": "cloak-of-the-manta-ray",
    "name": "Cloak of the Manta Ray",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nКоли ви носите цей плащ з піднятим капюшоном, ви можете дихати під водою і маєте швидкість плавання 60 футів. Підняття або опускання капюшона вимагає дії.\"",
    "image": "/api/images/magic-items/cloak-of-the-manta-ray.png",
    "url": "/api/2014/magic-items/cloak-of-the-manta-ray",
    "name_ua": "Cloak of the Manta Ray"
  },
  {
    "index": "cloak-of-protection",
    "name": "Cloak of Protection",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nПоки ви носите цей плащ, ви отримуєте бонус +1 до класу броні та рятівних кидків.\"",
    "image": "/api/images/magic-items/cloak-of-protection.png",
    "url": "/api/2014/magic-items/cloak-of-protection",
    "name_ua": "Cloak of Protection"
  },
  {
    "index": "cloak-of-elvenkind",
    "name": "Cloak of Elvenkind",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, незвичайний (потребує налаштування)\nПоки ви носите цей плащ з піднятим капюшоном, перевірки Мудрості (Відчуття) для того, щоб вас помітити, мають недолік, а ви маєте перевагу на перевірки Декстерності (Приховання), коли ховаєтеся, оскільки колір плаща змінюється для маскування. Підняття або опускання капюшона вимагає дії.\"",
    "image": "/api/images/magic-items/cloak-of-elvenkind.png",
    "url": "/api/2014/magic-items/cloak-of-elvenkind",
    "name_ua": "Cloak of Elvenkind"
  },
  {
    "index": "circlet-of-blasting",
    "name": "Circlet of Blasting",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nПоки ви носите цей вінок, ви можете використати дію, щоб кинути заклинання «палючий промінь» з ним. Коли ви здійснюєте атаки заклинання, ви робите це з бонусом атаки +5. Цей вінок не можна використовувати таким чином знову до наступного світанку.\"",
    "image": "/api/images/magic-items/circlet-of-blasting.png",
    "url": "/api/2014/magic-items/circlet-of-blasting",
    "name_ua": "Circlet of Blasting"
  },
  {
    "index": "broom-of-flying",
    "name": "Broom of Flying",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nЦя дерев'яна мітла вагою 3 фунти функціонує як звичайна мітла, поки ви не станете на неї і не скажете її магічне слово. Вона починає літати під вами і може бути використана для польоту в повітрі. Її швидкість польоту становить 50 футів. Вона може нести до 400 фунтів, але її швидкість польоту зменшується до 30 футів, якщо вона несе понад 200 фунтів. Мітла припиняє літати, коли ви приземляєтеся.\nВи можете відправити мітлу подорожувати самостійно до місця призначення в межах 1 милі від вас, якщо скажете магічне слово, назвете місце та будете знайомі з цим місцем. Мітла повернеться до вас, коли ви скажете інше магічне слово, за умови, що вона все ще знаходиться в межах 1 милі від вас.\"",
    "image": "/api/images/magic-items/broom-of-flying.png",
    "url": "/api/2014/magic-items/broom-of-flying",
    "name_ua": "Broom of Flying"
  },
  {
    "index": "brooch-of-shielding",
    "name": "Brooch of Shielding",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nПоки ви носите цей брош, ви маєте опір до ушкоджень від сили, а також імунітет до ушкоджень від заклинання магічна стріла.\"",
    "image": "/api/images/magic-items/brooch-of-shielding.png",
    "url": "/api/2014/magic-items/brooch-of-shielding",
    "name_ua": "Brooch of Shielding"
  },
  {
    "index": "bracers-of-archery",
    "name": "Bracers of Archery",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nПоки ви носите ці наручники, ви отримуєте майстерність з луком і коротким луком, а також отримуєте бонус +2 до кидків шкоди при дальніх атаках, виконаних за допомогою таких зброї.\"",
    "image": "/api/images/magic-items/bracers-of-archery.png",
    "url": "/api/2014/magic-items/bracers-of-archery",
    "name_ua": "Bracers of Archery"
  },
  {
    "index": "boots-of-the-winterlands",
    "name": "Boots of the Winterlands",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nЦі хутряні черевики щільно прилягають і відчуваються досить теплими. Поки ви їх носите, ви отримуєте такі переваги:\n* Ви маєте опір до холодного пошкодження.\n* Ви ігноруєте складний ландшафт, створений льодом або снігом.\n* Ви можете витримувати температури до -50 градусів за Фаренгейтом без додаткового захисту. Якщо ви носите важкий одяг, ви можете витримувати температури до -100 градусів за Фаренгейтом.\"",
    "image": "/api/images/magic-items/boots-of-the-winterlands.png",
    "url": "/api/2014/magic-items/boots-of-the-winterlands",
    "name_ua": "Boots of the Winterlands"
  },
  {
    "index": "boots-of-striding-and-springing",
    "name": "Boots of Striding and Springing",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nКоли ви носите ці черевики, ваша швидкість ходьби стає 30 футів, якщо ваша швидкість ходьби не вища, і ваша швидкість не зменшується, якщо ви обтяжені або носите важку броню. Крім того, ви можете стрибати втричі далі звичайної відстані, хоча ви не можете стрибнути далі, ніж дозволяє ваша залишкова рухливість.\"",
    "image": "/api/images/magic-items/boots-of-striding-and-springing.png",
    "url": "/api/2014/magic-items/boots-of-striding-and-springing",
    "name_ua": "Boots of Striding and Springing"
  },
  {
    "index": "boots-of-elvenkind",
    "name": "Boots of Elvenkind",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nПоки ви носите ці черевики, ваші кроки не видають жодного звуку, незалежно від поверхні, по якій ви рухаєтеся. Ви також маєте перевагу в перевірках Ловкості (Прихованість), які залежать від тихого руху.\"",
    "image": "/api/images/magic-items/boots-of-elvenkind.png",
    "url": "/api/2014/magic-items/boots-of-elvenkind",
    "name_ua": "Boots of Elvenkind"
  },
  {
    "index": "bag-of-tricks-tan",
    "name": "Tan Bag of Tricks",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, рідкісний\nЦя звичайна сумка, виготовлена з світло-коричневої тканини, здається порожньою. Проте, якщо зазирнути всередину, можна виявити невеликий пухнастий об'єкт. Сумка важить 0,5 фунта.\nВи можете використати дію, щоб витягнути пухнастий об'єкт із сумки і кинути його на відстань до 20 футів. Коли об'єкт приземлиться, він перетвориться на істоту, яку ви визначаєте, кинувши кубик d8 і звернувшись до таблиці відповідно до кольору сумки. Істота зникне на наступний світанок або коли її очки здоров'я зменшаться до 0.\nІстота є дружньою до вас і ваших супутників і діє у вашому ході. Ви можете використати бонусну дію, щоб наказати істоті, як рухатися і яку дію виконати в наступному ході, або дати їй загальні накази, такі як атака ваших ворогів. У відсутності таких наказів істота діє відповідно до своєї природи.\nПісля того як з сумки буде витягнуто три пухнастих об'єкти, сумку не можна буде використовувати знову до наступного світанку.\nСвітло-коричнева сумка:\n| d8 | Істота |\n|",
    "image": "/api/images/magic-items/bag-of-tricks.png",
    "url": "/api/2014/magic-items/bag-of-tricks-tan",
    "name_ua": "Tan Bag of Tricks"
  },
  {
    "index": "bag-of-tricks-rust",
    "name": "Rust Bag of Tricks",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": true,
    "desc": "Дивовижний предмет, рідкісний\nЦя звичайна сумка, виготовлена з іржавої тканини, здається порожньою. Однак, якщо зазирнути всередину, можна виявити маленький пухнастий об'єкт. Сумка важить 1/2 фунта.\nВи можете використати дію, щоб витягнути пухнастий об'єкт із сумки і кинути його на відстань до 20 футів. Коли об'єкт приземлиться, він перетвориться на істоту, яку ви визначаєте, кинувши d8 і звернувшись до таблиці, що відповідає кольору сумки. Істота зникне наступного світанку або коли її здоров'я знизиться до 0 очок.\nІстота є дружньою до вас і ваших супутників і діє у вашому ході. Ви можете використати бонусну дію, щоб наказати істоті, як рухатися і яку дію виконати на наступному ході, або дати їй загальні накази, наприклад, атакувати ваших ворогів. У відсутності таких наказів істота діє відповідно до своєї природи.\nПісля того як з сумки буде витягнуто три пухнастих об'єкти, сумку не можна буде використовувати знову до наступного світанку.\nІржава Сумка:\n| d8 | Істота |\n|",
    "image": "/api/images/magic-items/bag-of-tricks.png",
    "url": "/api/2014/magic-items/bag-of-tricks-rust",
    "name_ua": "Rust Bag of Tricks"
  },
  {
    "index": "bag-of-tricks-gray",
    "name": "Gray Bag of Tricks",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, рідкісний\nЦя звичайна сумка, виготовлена з сірого полотна, здається порожньою. Однак, якщо зазирнути всередину, можна виявити маленький пухнастий об'єкт. Сумка важить 1/2 фунта.\nВи можете використати дію, щоб витягнути пухнастий об'єкт із сумки і кинути його на відстань до 20 футів. Коли об'єкт приземлиться, він перетворюється на істоту, яку ви визначаєте, кинувши d8 і звернувшись до таблиці, що відповідає кольору сумки. Істота зникає на наступний світанок або коли її очки здоров'я знижуються до 0.\nІстота дружня до вас і ваших супутників і діє у вашому ході. Ви можете використати бонусну дію, щоб наказати істоті, як вона рухається і які дії виконує на своєму наступному ході, або дати їй загальні вказівки, наприклад, атакувати ваших ворогів. У відсутності таких вказівок істота діє відповідно до своєї природи.\nПісля того як з сумки буде витягнуто три пухнастих об'єкти, сумку не можна буде використовувати знову до наступного світанку.\nСіра Сумка:\n| d8 | Істота |\n|",
    "image": "/api/images/magic-items/bag-of-tricks.png",
    "url": "/api/2014/magic-items/bag-of-tricks-gray",
    "name_ua": "Gray Bag of Tricks"
  },
  {
    "index": "bag-of-tricks",
    "name": "Bag of Tricks",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [
      {
        "index": "bag-of-tricks-gray",
        "name": "Gray Bag of Tricks",
        "url": "/api/2014/magic-items/bag-of-tricks-gray"
      },
      {
        "index": "bag-of-tricks-rust",
        "name": "Rust Bag of Tricks",
        "url": "/api/2014/magic-items/bag-of-tricks-rust"
      },
      {
        "index": "bag-of-tricks-tan",
        "name": "Tan Bag of Tricks",
        "url": "/api/2014/magic-items/bag-of-tricks-tan"
      }
    ],
    "variant": false,
    "desc": "Чудовий предмет, незвичайний\nЦя звичайна сумка, виготовлена з сірого, іржавого або бежевого полотна, здається порожньою. Однак, коли ви зазирнете всередину, ви знайдете маленький пухнастий предмет. Сумка важить 1/2 фунта.\nВи можете використати дію, щоб витягнути пухнастий предмет із сумки і кинути його на відстань до 20 футів. Коли предмет приземлиться, він перетворюється на істоту, яку ви визначаєте, кинувши d8 і звернувшись до таблиці відповідно до кольору сумки. Істота зникає на наступний світанок або коли її очки здоров'я знижуються до 0.\nІстота дружня до вас і ваших супутників і діє на вашому ході. Ви можете використати додаткову дію, щоб наказати, як істота рухається і яку дію вона виконує на своєму наступному ході, або дати їй загальні вказівки, наприклад, атакувати ваших ворогів. У відсутності таких вказівок істота діє відповідно до своєї природи.\nПісля того як з сумки буде витягнуто три пухнастих предмети, сумку не можна буде використовувати знову до наступного світанку.\n\nСіра сумка:\n| d8 | Істота |\n|",
    "image": "/api/images/magic-items/bag-of-tricks.png",
    "url": "/api/2014/magic-items/bag-of-tricks",
    "name_ua": "Bag of Tricks"
  },
  {
    "index": "bag-of-holding",
    "name": "Bag of Holding",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nЦя сумка має внутрішній простір, який значно більший за її зовнішні розміри, приблизно 2 фути в діаметрі на вході та 4 фути в глибину. Сумка може вмістити до 500 фунтів, не перевищуючи об'єм у 64 кубічні фути. Сумка важить 15 фунтів, незалежно від її вмісту. Щоб дістати предмет із сумки, потрібна дія.\nЯкщо сумка перевантажена, проколота або порвана, вона розривається і знищується, а її вміст розкидається в Астральній площині. Якщо сумку вивернути навиворіт, її вміст висипається назовні, неушкоджений, але сумку потрібно повернути на місце, перш ніж її можна буде використовувати знову. Дихаючі істоти всередині сумки можуть вижити до кількості хвилин, рівної 10 поділеному на кількість істот (мінімум 1 хвилина), після чого вони починають задихатися.\nЯкщо помістити сумку для зберігання всередину екстра-вимірного простору, створеного Ручним Рюкзаком, Портативною Діркою або подібним предметом, обидва предмети миттєво знищуються і відкривається ворота до Астральної площини. Ворота виникають там, де один предмет був поміщений всередину іншого. Будь-яка істота в межах 10 футів від воріт затягується через них у випадкове місце на Астральній площині. Потім ворота закриваються. Ворота односторонні і не можуть бути відкриті знову.\"",
    "image": "/api/images/magic-items/bag-of-holding.png",
    "url": "/api/2014/magic-items/bag-of-holding",
    "name_ua": "Bag of Holding"
  },
  {
    "index": "amulet-of-proof-against-detection-and-location",
    "name": "Amulet of Proof against Detection and Location",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nПоки ви носите цей амулет, ви приховані від магії ворожіння. Ви не можете стати ціллю такої магії або бути поміченим через магічні сенсори спостереження.\"",
    "image": "/api/images/magic-items/amulet-of-proof-against-detection-and-location.png",
    "url": "/api/2014/magic-items/amulet-of-proof-against-detection-and-location",
    "name_ua": "Amulet of Proof against Detection and Location"
  },
  {
    "index": "ammunition-1",
    "name": "Ammunition, +1",
    "equipment_category": {
      "index": "ammunition",
      "name": "Ammunition",
      "url": "/api/2014/equipment-categories/ammunition"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Зброя (будь-які боєприпаси), рідкісна\nВи отримуєте бонус +1 до атак і пошкоджень, завданих цими магічними боєприпасами. Після того як вони влучать у ціль, боєприпаси більше не є магічними.\"",
    "image": "/api/images/magic-items/ammunition.png",
    "url": "/api/2014/magic-items/ammunition-1",
    "name_ua": "Ammunition, +1"
  },
  {
    "index": "adamantine-armor",
    "name": "Adamantine Armor",
    "equipment_category": {
      "index": "armor",
      "name": "Armor",
      "url": "/api/2014/equipment-categories/armor"
    },
    "rarity": {
      "name": "Uncommon"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Броня (середня або важка, але не шкіряна), незвичайна\nЦей комплект броні посилений адамантином, однією з найтвердіших речовин у світі. Коли ви її носите, будь-який критичний удар по вам стає звичайним ударом.\"",
    "image": "/api/images/magic-items/adamantine-armor.png",
    "url": "/api/2014/magic-items/adamantine-armor",
    "name_ua": "Adamantine Armor"
  },
  {
    "index": "wings-of-flying",
    "name": "Wings of Flying",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nПоки ви носите цей плащ, ви можете використати дію, щоб вимовити його командне слово. Це перетворює плащ на пару крил кажана або птаха на вашій спині на 1 годину або до повторного вимовляння командного слова як дії. Крила надають вам швидкість польоту 60 футів. Коли вони зникнуть, ви не зможете використовувати їх знову протягом 1d12 годин.\"",
    "url": "/api/2014/magic-items/wings-of-flying",
    "name_ua": "Wings of Flying"
  },
  {
    "index": "well-of-many-worlds",
    "name": "Well of Many Worlds",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": false,
    "desc": "Чудовий предмет, легендарний\nЦя тонка чорна тканина, м'яка як шовк, складена до розмірів носової хустинки. Вона розгортається в круглу поверхню діаметром 6 футів.\nВи можете використати дію, щоб розгорнути та розмістити колодязь багатьох світів на твердому покритті, після чого він створює двосторонній портал до іншого світу або виміру існування. Щоразу, коли предмет відкриває портал, майстер гри вирішує, куди він веде. Ви можете використати дію, щоб закрити відкритий портал, взявшись за краї тканини та скласти її. Після того як колодязь багатьох світів відкрив портал, він не може зробити це знову протягом 1d8 годин.",
    "url": "/api/2014/magic-items/well-of-many-worlds",
    "name_ua": "Well of Many Worlds"
  },
  {
    "index": "weapon-3",
    "name": "Weapon, +3",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/2014/equipment-categories/weapon"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Зброя (будь-яка), дуже рідкісна\nВи отримуєте бонус +3 до атак і пошкоджень, завданих цією магічною зброєю.\"",
    "url": "/api/2014/magic-items/weapon-3",
    "name_ua": "Weapon, +3"
  },
  {
    "index": "weapon-2",
    "name": "Weapon, +2",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/2014/equipment-categories/weapon"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Зброя (будь-яка), рідкісна\nВи отримуєте бонус +2 до атак і пошкоджень, завданих цією магічною зброєю.\"",
    "url": "/api/2014/magic-items/weapon-2",
    "name_ua": "Weapon, +2"
  },
  {
    "index": "wand-of-wonder",
    "name": "Wand of Wonder",
    "equipment_category": {
      "index": "wand",
      "name": "Wand",
      "url": "/api/2014/equipment-categories/wand"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Палиця, рідкісна (потребує налаштування заклинателем)\nЦя палиця має 7 зарядів. Тримаючи її, ви можете використати дію, щоб витратити 1 заряд і вибрати ціль у межах 120 футів від вас. Ціллю може бути істота, об'єкт або точка в просторі. Киньте d100 і зверніться до наступної таблиці, щоб дізнатися, що станеться.\nЯкщо ефект змушує вас кинути заклинання з палиці, поріг порятунку заклинання дорівнює 15. Якщо заклинання зазвичай має діапазон у футах, його діапазон стає 120 футів, якщо він ще не такий.\nЯкщо ефект охоплює площу, ви повинні зосередити заклинання на цілі та включити її. Якщо ефект має кілька можливих об'єктів, ГМ випадковим чином визначає, які з них підлягають впливу.\nПалиця відновлює 1d6 + 1 витрачених зарядів щодня на світанку. Якщо ви витрачаєте останній заряд палиці, киньте d20. При випавшому 1 палиця розсипається на пил і знищується.\n| d100 | Ефект |\n|",
    "url": "/api/2014/magic-items/wand-of-wonder",
    "name_ua": "Wand of Wonder"
  },
  {
    "index": "wand-of-the-war-mage-3",
    "name": "Wand of the War Mage, +3",
    "equipment_category": {
      "index": "wand",
      "name": "Wand",
      "url": "/api/2014/equipment-categories/wand"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Палиця, дуже рідкісна (потребує налаштування чаклуном)\nТримаючи цю палицю, ви отримуєте бонус +3 до атак заклинаннями. Крім того, ви ігноруєте половинне укриття під час здійснення атаки заклинанням.\"",
    "url": "/api/2014/magic-items/wand-of-the-war-mage-3",
    "name_ua": "Wand of the War Mage, +3"
  },
  {
    "index": "wand-of-the-war-mage-2",
    "name": "Wand of the War Mage, +2",
    "equipment_category": {
      "index": "wand",
      "name": "Wand",
      "url": "/api/2014/equipment-categories/wand"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Палиця, рідкісна (потребує налаштування чаклуном)\nТримаючи цю палицю, ви отримуєте бонус +2 до атак заклинаннями. Крім того, ви ігноруєте половинне укриття при здійсненні атаки заклинанням.\"",
    "url": "/api/2014/magic-items/wand-of-the-war-mage-2",
    "name_ua": "Wand of the War Mage, +2"
  },
  {
    "index": "wand-of-polymorph",
    "name": "Wand of Polymorph",
    "equipment_category": {
      "index": "wand",
      "name": "Wand",
      "url": "/api/2014/equipment-categories/wand"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Палиця, дуже рідкісна (потребує налаштування від заклинателя)\nЦя палиця має 7 зарядів. Тримаючи її, ви можете використати дію, щоб витратити 1 з її зарядів для кидання заклинання «Поліморф» (рятувальний кидок СК 15).\nПалиця відновлює 1d6 + 1 витрачених зарядів щодня на світанку. Якщо ви витратите останній заряд палиці, киньте d20. Якщо випаде 1, палиця розсипається в попіл і знищується.\"",
    "url": "/api/2014/magic-items/wand-of-polymorph",
    "name_ua": "Wand of Polymorph"
  },
  {
    "index": "wand-of-paralysis",
    "name": "Wand of Paralysis",
    "equipment_category": {
      "index": "wand",
      "name": "Wand",
      "url": "/api/2014/equipment-categories/wand"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Палиця, рідкісна (потребує налаштування від заклинателя)\nЦя палиця має 7 зарядів. Тримаючи її, ви можете використати дію, щоб витратити 1 з її зарядів, спрямовуючи тонкий синій промінь з кінчика на істоту, яку ви можете бачити на відстані до 60 футів від вас. Ціль повинна успішно пройти рятувальний кидок Конституції зі складністю 15 або бути паралізованою на 1 хвилину. Наприкінці кожного ходу цілі вона може повторити рятувальний кидок, припиняючи ефект на собі при успіху.\nПалиця відновлює 1d6 + 1 витрачених зарядів щодня на світанку. Якщо ви витратите останній заряд палиці, киньте d20. Якщо випаде 1, палиця розсипається в попіл і знищується.\"",
    "url": "/api/2014/magic-items/wand-of-paralysis",
    "name_ua": "Wand of Paralysis"
  },
  {
    "index": "wand-of-lightning-bolts",
    "name": "Wand of Lightning Bolts",
    "equipment_category": {
      "index": "wand",
      "name": "Wand",
      "url": "/api/2014/equipment-categories/wand"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Палиця, рідкісна (потребує налаштування від заклинателя)\nЦя палиця має 7 зарядів. Тримаючи її, ви можете використати дію, щоб витратити 1 або більше її зарядів для кидка заклинання «Блискавична стріла» (порятунок СК 15). За 1 заряд ви кидаєте версію заклинання 3-го рівня. Ви можете збільшити рівень заклинального слота на один за кожен додатковий заряд, який ви витрачаєте.\nПалиця відновлює 1d6 + 1 витрачених зарядів щодня на світанку. Якщо ви витратите останній заряд палиці, киньте d20. Якщо випаде 1, палиця розсипається в попіл і знищується.\"",
    "url": "/api/2014/magic-items/wand-of-lightning-bolts",
    "name_ua": "Wand of Lightning Bolts"
  },
  {
    "index": "wand-of-fireballs",
    "name": "Wand of Fireballs",
    "equipment_category": {
      "index": "wand",
      "name": "Wand",
      "url": "/api/2014/equipment-categories/wand"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Палиця, рідкісна (потребує налаштування від заклинателя)\nЦя палиця має 7 зарядів. Тримаючи її, ви можете використати дію, щоб витратити 1 або більше її зарядів для кидання заклинання «Вогняний куля» (порятунок СД 15). За 1 заряд ви кидаєте версію заклинання 3-го рівня. Ви можете збільшити рівень заклинального слоту на одиницю за кожен додатковий заряд, який ви витрачаєте.\nПалиця відновлює 1d6 + 1 витрачених зарядів щодня на світанку. Якщо ви витратите останній заряд палиці, киньте d20. Якщо випаде 1, палиця розсипається в попіл і знищується.\"",
    "url": "/api/2014/magic-items/wand-of-fireballs",
    "name_ua": "Wand of Fireballs"
  },
  {
    "index": "wand-of-fear",
    "name": "Wand of Fear",
    "equipment_category": {
      "index": "wand",
      "name": "Wand",
      "url": "/api/2014/equipment-categories/wand"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Палиця, рідкісна (потребує налаштування)\nЦя палиця має 7 зарядів для наступних властивостей. Вона відновлює 1d6 + 1 витрачених зарядів щодня на світанку. Якщо ви витратите останній заряд палиці, киньте d20. Якщо випаде 1, палиця розсипається на попіл і знищується.\n***Команда.*** Тримаючи палицю, ви можете використати дію, щоб витратити 1 заряд і наказати іншій істоті втекти або принизитися, як у заклятті \"Наказ\" (поріг порятунку СК 15).\n***Конус страху.*** Тримаючи палицю, ви можете використати дію, щоб витратити 2 заряди, змусивши кінчик палиці випромінювати конус янтарного світла завдовжки 60 футів. Кожна істота в конусі повинна успішно пройти порятунок Мудрості СК 15 або стати наляканою вас на 1 хвилину. Поки істота налякана таким чином, вона повинна намагатися рухатися якомога далі від вас і не може добровільно переміщатися в межах 30 футів від вас. Вона також не може здійснювати реакції. Для своєї дії вона може використовувати лише дію \"Ривок\" або намагатися втекти від ефекту, який заважає їй рухатися. Якщо немає місця для руху, істота може використовувати дію \"Ухилення\". Наприкінці кожного свого ходу істота може повторити порятунок, припиняючи ефект на собі у разі успіху.\"",
    "url": "/api/2014/magic-items/wand-of-fear",
    "name_ua": "Wand of Fear"
  },
  {
    "index": "wand-of-enemy-detection",
    "name": "Wand of Enemy Detection",
    "equipment_category": {
      "index": "wand",
      "name": "Wand",
      "url": "/api/2014/equipment-categories/wand"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Палиця, рідкісна (потребує налаштування)\nЦя палиця має 7 зарядів. Тримаючи її, ви можете використати дію та витратити 1 заряд, щоб вимовити її командне слово. Протягом наступної хвилини ви знаєте напрямок до найближчої істоти, ворожої вам, на відстані до 60 футів, але не знаєте її відстані від вас. Палиця може відчувати присутність ворожих істот, які є ефірними, невидимими, замаскованими або схованими, а також тих, хто знаходиться на виду. Ефект припиняється, якщо ви перестаєте тримати палицю.\nПалиця відновлює 1d6 + 1 витрачених зарядів щодня на світанку. Якщо ви витратите останній заряд палиці, киньте d20. Якщо випаде 1, палиця розсипається на попіл і знищується.\"",
    "url": "/api/2014/magic-items/wand-of-enemy-detection",
    "name_ua": "Wand of Enemy Detection"
  },
  {
    "index": "wand-of-binding",
    "name": "Wand of Binding",
    "equipment_category": {
      "index": "wand",
      "name": "Wand",
      "url": "/api/2014/equipment-categories/wand"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Палиця, рідкісна (потребує налаштування від заклинателя)\nЦя палиця має 7 зарядів для наступних властивостей. Вона відновлює 1d6 + 1 витрачених зарядів щодня на світанку. Якщо ви витратите останній заряд палиці, киньте d20. Якщо випаде 1, палиця розсипається в попіл і знищується.\n***Заклинання.*** Тримаючи палицю, ви можете використати дію, щоб витратити деякі її заряди для заклинання одного з наступних заклинань (поріг порятунку DC 17): утримання монстра (5 зарядів) або утримання людини (2 заряди).\n***Допоміжний втеча.*** Тримаючи палицю, ви можете використати свою реакцію, щоб витратити 1 заряд і отримати перевагу на кидок порятунку, який ви робите, щоб уникнути паралічу або обмеження рухів, або ви можете витратити 1 заряд і отримати перевагу на будь-якому перевірці, яку ви робите для втечі з захвату.\"",
    "url": "/api/2014/magic-items/wand-of-binding",
    "name_ua": "Wand of Binding"
  },
  {
    "index": "vorpal-sword",
    "name": "Vorpal Sword",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/2014/equipment-categories/weapon"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зброя (будь-який меч, що завдає різану шкоду), легендарна (потребує налаштування)\nВи отримуєте бонус +3 до атак і шкоди, завданої цією магічною зброєю. Крім того, ця зброя ігнорує опір до різаної шкоди.\nКоли ви атакуєте істоту, яка має принаймні одну голову, цією зброєю і кидаєте 20 на кидку атаки, ви відрубуєте одну з голів істоти. Істота гине, якщо не може вижити без втраченої голови. Істота є імунною до цього ефекту, якщо вона має імунітет до різаної шкоди, не має або не потребує голови, має легендарні дії або якщо ГМ вирішить, що істота занадто велика для того, щоб її голова могла бути відрубана цією зброєю. Така істота натомість отримує додаткову шкоду 6d8 різаною шкодою від удару.\"",
    "url": "/api/2014/magic-items/vorpal-sword",
    "name_ua": "Vorpal Sword"
  },
  {
    "index": "vicious-weapon",
    "name": "Vicious Weapon",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/2014/equipment-categories/weapon"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зброя (будь-яка), рідкісна\nКоли ви кидаєте 20 на вашому кидку атаки з цією магічною зброєю, ваш критичний удар завдає додаткових 2d6 ушкоджень типу цієї зброї.\"",
    "url": "/api/2014/magic-items/vicious-weapon",
    "name_ua": "Vicious Weapon"
  },
  {
    "index": "universal-solvent",
    "name": "Universal Solvent",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, легендарний\nЦя трубка містить молочну рідину з сильним запахом алкоголю. Ви можете використати дію, щоб вилити вміст трубки на поверхню, що знаходиться в межах досяжності. Рідина миттєво розчиняє до 1 квадратного фута клею, з яким вона контактує, включаючи суверенний клей.\"",
    "url": "/api/2014/magic-items/universal-solvent",
    "name_ua": "Universal Solvent"
  },
  {
    "index": "tome-of-understanding",
    "name": "Tome of Understanding",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, дуже рідкісний\nЦя книга містить вправи для розвитку інтуїції та проникливості, а її слова наповнені магією. Якщо ви витратите 48 годин протягом 6 днів або менше на вивчення змісту книги та практикування її рекомендацій, ваш показник Мудрості збільшиться на 2, як і його максимальне значення. Після цього посібник втрачає свою магію, але відновлює її через століття.\"",
    "url": "/api/2014/magic-items/tome-of-understanding",
    "name_ua": "Tome of Understanding"
  },
  {
    "index": "tome-of-leadership-and-influence",
    "name": "Tome of Leadership and Influence",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, дуже рідкісний\nЦя книга містить вказівки щодо впливу та чарування інших, а її слова наповнені магією. Якщо ви витратите 48 годин протягом 6 днів або менше на вивчення змісту книги та практикування її вказівок, ваш показник Харизми збільшиться на 2, як і максимальне значення цього показника. Потім посібник втрачає свою магію, але відновлює її через століття.\"",
    "url": "/api/2014/magic-items/tome-of-leadership-and-influence",
    "name_ua": "Tome of Leadership and Influence"
  },
  {
    "index": "tome-of-clear-thought",
    "name": "Tome of Clear Thought",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, дуже рідкісний\nЦя книга містить вправи на пам'ять і логіку, а її слова заряджені магією. Якщо ви витратите 48 годин протягом 6 днів або менше на вивчення змісту книги та практикування її рекомендацій, ваш показник Інтелекту збільшується на 2, як і ваш максимальний показник для цього значення. Потім посібник втрачає свою магію, але відновлює її через століття.\"",
    "url": "/api/2014/magic-items/tome-of-clear-thought",
    "name_ua": "Tome of Clear Thought"
  },
  {
    "index": "talisman-of-ultimate-evil",
    "name": "Talisman of Ultimate Evil",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, легендарний (потребує налаштування для істоти зі злим вирівнюванням)\nЦей предмет символізує непокаянне зло. Істота, яка не є ні доброю, ні злою за вирівнюванням, отримує 6d6 некротичного пошкодження при дотику до талісмана. Добра істота отримує 8d6 некротичного пошкодження при дотику до талісмана. Будь-яка з цих істот отримує пошкодження знову кожного разу, коли закінчує свій хід, тримаючи або носячи талісман.\nЯкщо ви є злим кліриком або паладином, ви можете використовувати талісман як святий символ і отримуєте бонус +2 до кидків атаки заклинань, поки носите або тримаєте його.\nТалісман має 6 зарядів. Якщо ви носите або тримаєте його, ви можете використати дію, щоб витратити 1 заряд з талісмана і вибрати одну істоту, яку ви бачите на землі в межах 120 футів від вас. Якщо ціль має добре вирівнювання, під нею відкривається палаючий розлом. Ціль повинна успішно пройти рятувальний кидок на Спритність зі складністю 20 або впасти в розлом і бути знищеною, не залишаючи слідів. Потім розлом закривається, не залишаючи жодних ознак свого існування. Коли ви витрачаєте останній заряд, талісман розчиняється в смердючому слизу і знищується.\"",
    "url": "/api/2014/magic-items/talisman-of-ultimate-evil",
    "name_ua": "Talisman of Ultimate Evil"
  },
  {
    "index": "talisman-of-the-sphere",
    "name": "Talisman of the Sphere",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, легендарний (потребує налаштування)\nКоли ви робите перевірку Інтелекту (Аркана), щоб контролювати сферу знищення, тримаючи цей талісман, ви подвоюєте свій бонус майстерності на цій перевірці. Крім того, коли ви починаєте свій хід з контролем над сферою знищення, ви можете використати дію, щоб підняти її на 10 футів плюс додаткову кількість футів, рівну 10 × ваш модифікатор Інтелекту.\"",
    "url": "/api/2014/magic-items/talisman-of-the-sphere",
    "name_ua": "Talisman of the Sphere"
  },
  {
    "index": "talisman-of-pure-good",
    "name": "Talisman of Pure Good",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, легендарний (потребує налаштування для істоти доброго спрямування)\nЦей талісман є могутнім символом доброти. Істота, яка не є ні доброю, ні злою за спрямуванням, отримує 6d6 радіантного пошкодження при дотику до талісмана. Зла істота отримує 8d6 радіантного пошкодження при дотику до талісмана. Обидва типи істот отримують це пошкодження знову кожного разу, коли закінчують свій хід, тримаючи або носячи талісман.\nЯкщо ви є добрим клериком або паладином, ви можете використовувати талісман як святий символ і отримуєте бонус +2 до атак заклинаннями, поки носите або тримаєте його.\nТалісман має 7 зарядів. Якщо ви носите або тримаєте його, ви можете використати дію, щоб витратити 1 заряд і вибрати одну істоту, яку ви бачите на землі в межах 120 футів від вас. Якщо ціль має зле спрямування, під нею відкривається палаюча тріщина. Ціль повинна успішно пройти рятувальний кидок на Спритність зі складністю 20 або впасти в тріщину і бути знищеною, не залишаючи слідів. Тріщина потім закривається, не залишаючи жодних ознак свого існування. Коли ви витрачаєте останній заряд, талісман розпорошується на частинки золотистого світла і знищується.\"",
    "url": "/api/2014/magic-items/talisman-of-pure-good",
    "name_ua": "Talisman of Pure Good"
  },
  {
    "index": "sword-of-wounding",
    "name": "Sword of Wounding",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/2014/equipment-categories/weapon"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зброя (будь-який меч), рідкісна (потребує налаштування)\nВтрачені очки здоров'я від пошкоджень цією зброєю можна відновити лише під час короткого або тривалого відпочинку, а не за допомогою регенерації, магії чи будь-яких інших засобів.\nРаз на хід, коли ви вражаєте істоту атакою за допомогою цієї магічної зброї, ви можете завдати рану цілі. На початку кожного ходу пораненої істоти вона отримує 1d4 некротичних пошкоджень за кожен раз, коли ви її поранили, і може зробити спаскидку на Конституцію зі складністю 15, щоб припинити дію всіх таких ран на успіх. Альтернативно, поранена істота або істота в межах 5 футів від неї може використати дію, щоб зробити перевірку Мудрості (Медицина) зі складністю 15, припиняючи дію таких ран на успіх.\"",
    "url": "/api/2014/magic-items/sword-of-wounding",
    "name_ua": "Sword of Wounding"
  },
  {
    "index": "sword-of-sharpness",
    "name": "Sword of Sharpness",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/2014/equipment-categories/weapon"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зброя (будь-який меч, що завдає різану шкоду), дуже рідкісна (потребує налаштування)\nКоли ви атакуєте об'єкт цим магічним мечем і влучаєте, максимізуйте кубики шкоди вашої зброї проти цілі.\nКоли ви атакуєте істоту цією зброєю і кидаєте 20 на кидку атаки, ця ціль отримує додаткові 4d6 різаної шкоди. Потім киньте ще один d20. Якщо ви знову кидаєте 20, ви відрубуєте одну з кінцівок цілі, ефект такого втрати визначається майстром гри. Якщо у істоти немає кінцівки для відсікання, ви відрізаєте частину її тіла.\nКрім того, ви можете вимовити слово команди меча, щоб лезо випромінювало яскраве світло в радіусі 10 футів і тьмяне світло на додаткові 10 футів. Повторне вимовлення слова команди або вкладення меча гасить світло.\"",
    "url": "/api/2014/magic-items/sword-of-sharpness",
    "name_ua": "Sword of Sharpness"
  },
  {
    "index": "sword-of-life-stealing",
    "name": "Sword of Life Stealing",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/2014/equipment-categories/weapon"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зброя (будь-який меч), рідкісна (потребує налаштування)\nКоли ви атакуєте істоту цією магічною зброєю і кидаєте 20 на кидку атаки, ця ціль отримує додаткові 3d6 некротичного пошкодження, якщо тільки ціль не є конструкцією або нежиттю. Ви отримуєте тимчасові очки здоров'я, рівні додатковому завданому пошкодженню.\"",
    "url": "/api/2014/magic-items/sword-of-life-stealing",
    "name_ua": "Sword of Life Stealing"
  },
  {
    "index": "sun-blade",
    "name": "Sun Blade",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/2014/equipment-categories/weapon"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зброя (довгий меч), рідкісна (потребує налаштування)\nЦей предмет виглядає як руків'я довгого меча. Тримаючи руків'я, ви можете використати бонусну дію, щоб викликати лезо чистого сяйва, або зробити так, щоб лезо зникло. Поки лезо існує, цей магічний довгий меч має властивість витонченості. Якщо ви володієте короткими мечами або довгими мечами, ви також володієте мечем сонця.\nВи отримуєте бонус +2 до атак і пошкоджень, завданих цією зброєю, яка завдає радіантного пошкодження замість різального. Коли ви вражаєте нежиттю цим мечем, ціль отримує додаткові 1d8 радіантного пошкодження.\nСвітне лезо меча випромінює яскраве світло на радіус 15 футів і тьмяне світло на додаткові 15 футів. Світло є сонячним. Поки лезо існує, ви можете використати дію, щоб розширити або зменшити його радіус яскравого та тьмяного світла на 5 футів кожен, до максимуму 30 футів кожен або мінімуму 10 футів кожен.\"",
    "url": "/api/2014/magic-items/sun-blade",
    "name_ua": "Sun Blade"
  },
  {
    "index": "stone-of-controlling-earth-elementals",
    "name": "Stone of Controlling Earth Elementals",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nЯкщо камінь торкається землі, ви можете використати дію, щоб вимовити його командне слово і викликати елементаля землі, ніби ви застосували заклинання виклик елементаля. Цей камінь не може бути використаний таким чином знову до наступного світанку. Камінь важить 5 фунтів.\"",
    "url": "/api/2014/magic-items/stone-of-controlling-earth-elementals",
    "name_ua": "Stone of Controlling Earth Elementals"
  },
  {
    "index": "staff-of-withering",
    "name": "Staff of Withering",
    "equipment_category": {
      "index": "staff",
      "name": "Staff",
      "url": "/api/2014/equipment-categories/staff"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Посох, рідкісний (потребує налаштування для священика, друїда або чаклуна)\nЦей посох має 3 заряди і відновлює 1d3 витрачених зарядів щодня на світанку.\nПосох можна використовувати як магічний чвертьпосох. При попаданні він завдає шкоди, як звичайний чвертьпосох, і ви можете витратити 1 заряд, щоб завдати додаткові 2d10 некротичної шкоди цілі. Крім того, ціль повинна успішно пройти рятувальний кидок Конституції зі складністю DC 15, інакше вона матиме недолік протягом 1 години на будь-які перевірки здібностей або рятувальні кидки, що використовують Силу або Конституцію.\"",
    "url": "/api/2014/magic-items/staff-of-withering",
    "name_ua": "Staff of Withering"
  },
  {
    "index": "staff-of-thunder-and-lightning",
    "name": "Staff of Thunder and Lightning",
    "equipment_category": {
      "index": "staff",
      "name": "Staff",
      "url": "/api/2014/equipment-categories/staff"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Посох, дуже рідкісний (потребує налаштування)\nЦей посох можна використовувати як магічний чвертьпосох, який надає бонус +2 до атак і пошкоджень, здійснених ним. Він також має наступні додаткові властивості. Коли одна з цих властивостей використовується, вона не може бути використана знову до наступного світанку.\n***Блискавка.*** Коли ви вражаєте ворога в ближньому бою за допомогою посоха, ви можете завдати цілі додаткові 2d6 пошкоджень від блискавки.\n***Грім.*** Коли ви вражаєте ворога в ближньому бою за допомогою посоха, ви можете змусити посох видати тріск грому, який чути на відстані до 300 футів. Ціль, яку ви вразили, повинна успішно пройти рятувальний кидок Конституції зі СК 17 або стати оглушеною до кінця вашого наступного ходу.\n***Удар блискавки.*** Ви можете використати дію, щоб викликати спалах блискавки з кінчика посоха в лінії шириною 5 футів і довжиною 120 футів. Кожна істота в цій лінії повинна зробити рятувальний кидок Ловкості зі СК 17, отримуючи 9d6 пошкоджень від блискавки при невдалому кидку або половину пошкоджень при успішному.\n***Гримучий удар.*** Ви можете використати дію, щоб змусити посох видати оглушливий гримучий удар, який чути на відстані до 600 футів. Кожна істота в радіусі 60 футів від вас (крім вас) повинна зробити рятувальний кидок Конституції зі СК 17. При невдалому кидку істота отримує 2d6 пошкоджень від грому і стає глухою на 1 хвилину. При успішному кидку істота отримує половину пошкоджень і не стає глухою.\n***Грім і Блискавка.*** Ви можете використати дію, щоб одночасно застосувати властивості Удар блискавки та Гримучий удар. Це не витрачає щоденне використання цих властивостей, лише використання цієї.\"",
    "url": "/api/2014/magic-items/staff-of-thunder-and-lightning",
    "name_ua": "Staff of Thunder and Lightning"
  },
  {
    "index": "staff-of-the-woodlands",
    "name": "Staff of the Woodlands",
    "equipment_category": {
      "index": "staff",
      "name": "Staff",
      "url": "/api/2014/equipment-categories/staff"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Палиця, рідкісна (потребує налаштування для друїда)\nЦю палицю можна використовувати як магічну палицю, яка надає бонус +2 до атак і пошкоджень. Тримаючи її, ви отримуєте бонус +2 до атак заклинаннями.\nПалиця має 10 зарядів для наступних властивостей. Щодня на світанку вона відновлює 1d6 + 4 витрачених зарядів. Якщо ви витратите останній заряд, киньте d20. Якщо випаде 1, палиця втрачає свої властивості і стає немагічною палицею.\n***Заклинання.*** Ви можете використати дію, щоб витратити 1 або більше зарядів палиці для кидання одного з наступних заклинань, використовуючи ваш показник порятунку від заклинань: дружба з тваринами (1 заряд), пробудження (5 зарядів), кора шкіри (2 заряди), виявлення тварин або рослин (2 заряди), розмова з тваринами (1 заряд), розмова з рослинами (3 заряди) або стіна тернових гілок (6 зарядів).\nВи також можете використати дію, щоб кинути заклинання \"проходження без слідів\" з палиці без витрати будь-яких зарядів. Форма дерева. Ви можете використати дію, щоб встромити один кінець палиці в родючий ґрунт і витратити 1 заряд, щоб перетворити палицю на здорове дерево. Дерево висотою 60 футів і має стовбур діаметром 5 футів, а його гілки на верху розпросторюються на радіус 20 футів.\nДерево виглядає звичайним, але випромінює слабкий аур магії перетворення, якщо його виявляють за допомогою заклинання \"виявлення магії\". Поки ви торкаєтеся дерева і використовуєте іншу дію для вимовляння його команди, ви повертаєте палицю до її нормальної форми. Будь-яка істота в дереві падає, коли воно повертається до форми палиці.\"",
    "url": "/api/2014/magic-items/staff-of-the-woodlands",
    "name_ua": "Staff of the Woodlands"
  },
  {
    "index": "staff-of-the-python",
    "name": "Staff of the Python",
    "equipment_category": {
      "index": "staff",
      "name": "Staff",
      "url": "/api/2014/equipment-categories/staff"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Палиця, дуже рідкісна (потребує налаштування для священика, друїда або чаклуна)\nВи можете використати дію, щоб вимовити слово команди цієї палиці та кинути її на землю в межах 10 футів від вас. Палиця перетворюється на гігантського змія-контректора під вашим контролем і діє на власному ініціативному рахунку. Використовуючи бонусну дію, щоб знову вимовити слово команди, ви повертаєте палицю до її нормальної форми в просторі, який раніше займав змій.\nПід час вашого ходу ви можете ментально керувати змієм, якщо він знаходиться в межах 60 футів від вас і ви не є нездатними до дій. Ви вирішуєте, яку дію змій виконує і куди рухається під час свого наступного ходу, або можете дати йому загальне розпорядження, наприклад, атакувати ваших ворогів або охороняти певне місце.\nЯкщо змій зменшується до 0 очок здоров'я, він помирає і повертається до форми палиці. Палиця тоді розбивається і знищується. Якщо змій повертається до форми палиці до втрати всіх своїх очок здоров'я, він відновлює всі свої очки.\"",
    "url": "/api/2014/magic-items/staff-of-the-python",
    "name_ua": "Staff of the Python"
  },
  {
    "index": "staff-of-the-magi",
    "name": "Staff of the Magi",
    "equipment_category": {
      "index": "staff",
      "name": "Staff",
      "url": "/api/2014/equipment-categories/staff"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Палиця, легендарна (потребує налаштування для чаклуна, відьмака або мага)\nЦю палицю можна використовувати як магічну чвертьпалицю, яка надає бонус +2 до атак і шкоди, завданої нею. Поки ви тримаєте її, ви отримуєте бонус +2 до атак заклинаннями.\nПалиця має 50 зарядів для наступних властивостей. Вона відновлює 4d6 + 2 витрачених зарядів щодня на світанку. Якщо ви витратите останній заряд, киньте d20. На 20 палиця відновлює 1d12 + 1 зарядів.\n***Поглинання заклинань.*** Поки ви тримаєте палицю, у вас є перевага в рятувальних кидках проти заклинань. Крім того, ви можете використати свою реакцію, коли інша істота кидає заклинання, яке націлене лише на вас. Якщо ви це зробите, палиця поглинає магію заклинання, скасовуючи його ефект і отримуючи кількість зарядів, рівну рівню поглинутого заклинання. Однак якщо це призведе до того, що загальна кількість зарядів у палиці перевищить 50, вона вибухне так, ніби ви активували її каральний удар (див. нижче).\n***Заклинання.*** Поки ви тримаєте палицю, ви можете використати дію, щоб витратити деякі з її зарядів для кидання одного з наступних заклинань з неї, використовуючи ваш показник порогу порятунку від заклинань і здібності чаклування: виклик елемента (7 зарядів), розсіювання магії (3 заряди), вогняний шар (7-й рівень, 7 зарядів), полум'яна сфера (2 заряди), льодова буря (4 заряди), невидимість (2 заряди), відкриття (2 заряди), блискавична стріла (7-й рівень, 7 зарядів), прохід стіни (5 зарядів), переміщення між світами (7 зарядів), телекинез (5 зарядів), стіна вогню (4 заряди) або павутина (2 заряди).\nВи також можете використати дію для кидання одного з наступних заклинань з палиці без витрати будь-яких зарядів: арканічний замок, виявлення магії, збільшення/зменшення, світло, рука мага або захист від зла і добра.\n***Каральний удар.*** Ви можете використати дію, щоб зламати палицю об коліно або об тверду поверхню, виконуючи каральний удар. Палиця руйнується і вивільняє свою залишкову магію в вибуху, який розширюється на сферу радіусом 30 футів навколо неї.\nУ вас є 50% шанс миттєво подорожувати до випадкового плану існування, уникаючи вибуху. Якщо вам не вдасться уникнути ефекту, ви отримуєте ушкодження силою рівне 16 × кількість зарядів у палиці. Кожна інша істота в зоні дії повинна зробити рятувальний кидок Dexterity зі складністю DC 17. При невдалому кидку істота отримує ушкодження залежно від того, як далеко вона знаходиться від точки початку вибуху, як показано в наступній таблиці. При успішному кидку істота отримує половину ушкоджень.\n| Відстань від початку | Ушкодження |\n|",
    "url": "/api/2014/magic-items/staff-of-the-magi",
    "name_ua": "Staff of the Magi"
  },
  {
    "index": "staff-of-swarming-insects",
    "name": "Staff of Swarming Insects",
    "equipment_category": {
      "index": "staff",
      "name": "Staff",
      "url": "/api/2014/equipment-categories/staff"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Палиця, дуже рідкісна (потребує налаштування для барда, клірика, друїда, чарівника, чаклуна або мага)\nЦя палиця має 10 зарядів і відновлює 1d6 + 4 витрачених зарядів щодня на світанку. Якщо ви витратите останній заряд, киньте d20. На 1 роїн комах споживає і знищує палицю, після чого розсіюється.\n***Заклинання.*** Тримаючи палицю, ви можете використати дію, щоб витратити деякі з її зарядів для заклинання одного з наступних заклинань, використовуючи ваш показник порятунку від заклинань: гігантський комаха (4 заряди) або інфекційний рій (5 зарядів).\n***Хмара комах.*** Тримаючи палицю, ви можете використати дію і витратити 1 заряд, щоб викликати рій нешкідливих літаючих комах, які розповсюджуються на радіус 30 футів від вас. Комахи залишаються протягом 10 хвилин, роблячи цю область сильно затуманеною для істот, окрім вас. Рій рухається разом з вами, залишаючись в центрі на вас. Вітер зі швидкістю щонайменше 10 миль на годину розсіює рій і припиняє ефект.\"",
    "url": "/api/2014/magic-items/staff-of-swarming-insects",
    "name_ua": "Staff of Swarming Insects"
  },
  {
    "index": "staff-of-striking",
    "name": "Staff of Striking",
    "equipment_category": {
      "index": "staff",
      "name": "Staff",
      "url": "/api/2014/equipment-categories/staff"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Посох, дуже рідкісний (потребує налаштування)\nЦей посох можна використовувати як магічний чотирикінцевий посох, який надає бонус +3 до атак і шкоди, завданої ним.\nПосох має 10 зарядів. Коли ви вражаєте ворога в ближньому бою, використовуючи його, ви можете витратити до 3 його зарядів. За кожен витрачений заряд ціль отримує додаткові 1d6 ушкоджень сили. Посох відновлює 1d6 + 4 витрачених зарядів щодня на світанку. Якщо ви витратите останній заряд, киньте d20. Якщо випаде 1, посох стає немагічним чотирикінцевим посохом.\"",
    "url": "/api/2014/magic-items/staff-of-striking",
    "name_ua": "Staff of Striking"
  },
  {
    "index": "staff-of-power",
    "name": "Staff of Power",
    "equipment_category": {
      "index": "staff",
      "name": "Staff",
      "url": "/api/2014/equipment-categories/staff"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Посох, дуже рідкісний (потребує налаштування для чаклуна, відьмака або мага)\nЦей посох можна використовувати як магічний чвертьпосох, який надає бонус +2 до атак і пошкоджень, завданих ним. Тримаючи його, ви отримуєте бонус +2 до класу броні, рятівних кидків і атак заклинаннями.\nПосох має 20 зарядів для наступних властивостей. Посох відновлює 2d8 + 4 витрачених зарядів щодня на світанку. Якщо ви витратите останній заряд, киньте d20. На 1 посох зберігає свій бонус +2 до атак і пошкоджень, але втрачає всі інші властивості. На 20 посох відновлює 1d8 + 2 зарядів.\n***Силовий удар.*** Коли ви вражаєте ціллю в ближньому бою за допомогою посоха, ви можете витратити 1 заряд, щоб завдати додаткові 1d6 ушкоджень сили цілі.\n***Заклинання.*** Тримаючи цей посох, ви можете використати дію, щоб витратити 1 або більше його зарядів для заклинання одного з наступних заклинань, використовуючи ваш показник порятунку від заклинань і бонус атаки заклинаннями: конус холоду (5 зарядів), вогняний шар (версія 5-го рівня, 5 зарядів), сфера невразливості (6 зарядів), утримання монстра (5 зарядів), левітація (2 заряди), блискавична стріла (версія 5-го рівня, 5 зарядів), магічна стріла (1 заряд), промінь ослаблення (1 заряд) або стіна сили (5 зарядів).\n***Відплатний удар.*** Ви можете використати дію, щоб зламати посох об коліно або об твердий поверхень, виконуючи відплатний удар. Посох руйнується і вивільняє свою залишкову магію в вибуху, який розширюється на сферу радіусом 30 футів навколо нього.\nУ вас є 50-відсоткова ймовірність миттєво подорожувати до випадкової площини існування, уникаючи вибуху. Якщо вам не вдається уникнути ефекту, ви отримуєте ушкодження сили рівне 16 × кількість зарядів у пососі. Кожна інша істота в зоні дії повинна зробити рятівний кидок Dexterity DC 17. При невдалому кидку істота отримує ушкодження залежно від того, як далеко вона знаходиться від початкової точки, як показано в наступній таблиці. При успішному кидку істота отримує половину ушкоджень.\n| Відстань від початку | Ушкодження |\n|",
    "url": "/api/2014/magic-items/staff-of-power",
    "name_ua": "Staff of Power"
  },
  {
    "index": "staff-of-healing",
    "name": "Staff of Healing",
    "equipment_category": {
      "index": "staff",
      "name": "Staff",
      "url": "/api/2014/equipment-categories/staff"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Посох, рідкісний (потребує налаштування для барда, клерика або друїда)\nЦей посох має 10 зарядів. Тримаючи його, ви можете використати дію, щоб витратити 1 або більше його зарядів для заклинання одного з наступних заклять, використовуючи ваш показник порятунку від заклинань і модифікатор здібностей: зцілення ран (1 заряд за рівень заклинання, до 4-го), менше відновлення (2 заряди) або масове зцілення ран (5 зарядів).\nПосох відновлює 1d6 + 4 витрачених зарядів щодня на світанку. Якщо ви витратите останній заряд, киньте d20. Якщо випаде 1, посох зникає в спалаху світла і назавжди втрачається.\"",
    "url": "/api/2014/magic-items/staff-of-healing",
    "name_ua": "Staff of Healing"
  },
  {
    "index": "staff-of-frost",
    "name": "Staff of Frost",
    "equipment_category": {
      "index": "staff",
      "name": "Staff",
      "url": "/api/2014/equipment-categories/staff"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Посох, дуже рідкісний (потребує налаштування для друїда, чарівника, чаклуна або мага)\nПоки ви тримаєте цей посох, ви маєте опір до холодного пошкодження.\nПосох має 10 зарядів. Під час його використання ви можете витратити 1 або більше зарядів, щоб кинути одне з наступних заклять, використовуючи ваш показник порятунку від заклять: конус холоду (5 зарядів), хмару туману (1 заряд), льодову бурю (4 заряди) або стіну льоду (4 заряди).\nПосох відновлює 1d6 + 4 витрачених зарядів щодня на світанку. Якщо ви витратите останній заряд, киньте d20. Якщо випаде 1, посох перетвориться на воду і буде знищено.\"",
    "url": "/api/2014/magic-items/staff-of-frost",
    "name_ua": "Staff of Frost"
  },
  {
    "index": "staff-of-fire",
    "name": "Staff of Fire",
    "equipment_category": {
      "index": "staff",
      "name": "Staff",
      "url": "/api/2014/equipment-categories/staff"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Посох, дуже рідкісний (потребує налаштування для друїда, чарівника, чаклуна або мага)\nПоки ви тримаєте цей посох, ви маєте опір до вогняного пошкодження.\nПосох має 10 зарядів. Під час його використання ви можете витратити 1 або більше зарядів, щоб кинути одне з наступних заклять, використовуючи ваш показник порятунку від заклять: полум'яні руки (1 заряд), вогняний шар (3 заряди) або стіна вогню (4 заряди).\nПосох відновлює 1d6 + 4 витрачених зарядів щодня на світанку. Якщо ви витратите останній заряд, киньте d20. Якщо випаде 1, посох почорніє, розсиплеться на попіл і буде знищений.\"",
    "url": "/api/2014/magic-items/staff-of-fire",
    "name_ua": "Staff of Fire"
  },
  {
    "index": "staff-of-charming",
    "name": "Staff of Charming",
    "equipment_category": {
      "index": "staff",
      "name": "Staff",
      "url": "/api/2014/equipment-categories/staff"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Палиця, рідкісна (потребує налаштування для барда, клірика, друїда, чарівника, чаклуна або мага)\nТримаючи цю палицю, ви можете використати дію, щоб витратити 1 з її 10 зарядів для заклинання charm person, command або comprehend languages, використовуючи ваш показник порятунку від заклинань. Палицю також можна використовувати як магічну чвертьпалицю.\nЯкщо ви тримаєте палицю і провалюєте кидок порятунку проти заклинання зачарування, яке націлене лише на вас, ви можете перетворити свій невдалий кидок на успішний. Ви не можете використовувати цю властивість палиці знову до наступного світанку. Якщо ви успішно проходите кидок порятунку проти заклинання зачарування, яке націлене лише на вас, з чи без втручання палиці, ви можете використати свою реакцію, щоб витратити 1 заряд з палиці і повернути заклинання назад на його кастера, ніби ви самі його закляли.\nПалиця відновлює 1d8 + 2 витрачених зарядів щодня на світанку. Якщо ви витрачаєте останній заряд, киньте d20. На 1 палиця стає немагічною чвертьпалицею.\"",
    "url": "/api/2014/magic-items/staff-of-charming",
    "name_ua": "Staff of Charming"
  },
  {
    "index": "sphere-of-annihilation",
    "name": "Sphere of Annihilation",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, легендарний\nЦя чорна сфера діаметром 2 фути є отвором у мультивсесвіті, що зависла в космосі та стабілізована магічним полем навколо неї.\nСфера знищує всю матерію, через яку вона проходить, і всю матерію, яка проходить через неї. Артефакти є винятком. Якщо артефакт не піддається пошкодженням від сфери знищення, він проходить через сферу неушкодженим. Все інше, що торкається сфери, але не охоплене повністю і не знищене нею, отримує 4d10 ушкоджень сили.\nСфера нерухома, поки хтось її не контролює. Якщо ви перебуваєте в межах 60 футів від неконтрольованої сфери, ви можете використати дію для виконання перевірки Інтелекту (Аркана) зі складністю DC 25. У разі успіху сфера піднімається в одному напрямку на кількість футів, рівну 5 × вашому модифікатору Інтелекту (мінімум 5 футів). У разі невдачі сфера рухається на 10 футів до вас. Створіння, простір якого входить у сферу, повинно успішно пройти рятувальний кидок Ловкості DC 13 або буде торкнутою нею, отримавши 4d10 ушкоджень сили.\nЯкщо ви намагаєтеся контролювати сферу, яка вже під контролем іншого створіння, ви виконуєте перевірку Інтелекту (Аркана), яка оскаржується перевіркою Інтелекту (Аркана) іншого створіння. Переможець конкурсу отримує контроль над сферою і може піднімати її як звичайно.\nЯкщо сфера контактує з планарним порталом, наприклад створеним заклинанням \"ворота\", або з екстра-вимірним простором, наприклад тим, що всередині портативної дірки, ГМ випадковим чином визначає наслідки за допомогою наступної таблиці.\n| d100 | Результат |\n|",
    "url": "/api/2014/magic-items/sphere-of-annihilation",
    "name_ua": "Sphere of Annihilation"
  },
  {
    "index": "spellguard-shield",
    "name": "Spellguard Shield",
    "equipment_category": {
      "index": "armor",
      "name": "Armor",
      "url": "/api/2014/equipment-categories/armor"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Броня (щит), дуже рідкісна (потребує налаштування)\nТримаючи цей щит, ви маєте перевагу в рятувальних кидках проти заклинань та інших магічних ефектів, а атаки заклинань мають недолік проти вас.\"",
    "url": "/api/2014/magic-items/spellguard-shield",
    "name_ua": "Spellguard Shield"
  },
  {
    "index": "spell-scroll-9th",
    "name": "Spell Scroll (9th)",
    "equipment_category": {
      "index": "scroll",
      "name": "Scroll",
      "url": "/api/2014/equipment-categories/scroll"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Свиток, легендарний\nСвиток заклинань містить слова одного заклинання, написані в містичному шифрі. Якщо заклинання є у списку заклинань вашого класу, ви можете прочитати свиток і застосувати його заклинання без надання матеріальних компонентів. В іншому випадку свиток залишається незрозумілим. Кастування заклинання шляхом читання свитка вимагає звичайного часу для його накладання. Після того як заклинання буде застосовано, слова на свитку зникають, і він розсипається на порох. Якщо кастування не переривається, свиток не втрачається.\nЯкщо заклинання є у списку заклинань вашого класу, але має вищий рівень, ніж ви можете зазвичай накладати, вам потрібно зробити перевірку здібності, використовуючи вашу здібність до заклинань, щоб визначити, чи вдалося вам його накласти. Складність перевірки дорівнює 10 + рівень заклинання. При невдалому результаті перевірки заклинання зникає зі свитка без жодного іншого ефекту.\nЦей свиток містить заклинання 9-го рівня. Збереження від цього заклинання дорівнює 19, а бонус атаки становить +11.\nЗаклинання чарівника на свитку можна скопіювати так само, як і заклинання в книгах заклинань. Коли заклинання копіюється зі свитка, копіювальник повинен успішно виконати перевірку Інтелекту (Аркана) зі складністю 19. Якщо перевірка успішна, заклинання успішно копіюється. Незалежно від того, чи вдалася перевірка чи ні, свиток знищується.\"",
    "url": "/api/2014/magic-items/spell-scroll-9th",
    "name_ua": "Spell Scroll (9th)"
  },
  {
    "index": "spell-scroll-8th",
    "name": "Spell Scroll (8th)",
    "equipment_category": {
      "index": "scroll",
      "name": "Scroll",
      "url": "/api/2014/equipment-categories/scroll"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Свиток, дуже рідкісний\nСвиток заклинань містить слова одного заклинання, написані в містичному шифрі. Якщо заклинання є у списку заклинань вашого класу, ви можете прочитати свиток і застосувати його заклинання без надання матеріальних компонентів. В іншому випадку свиток залишається незрозумілим. Використання заклинання шляхом читання свитка вимагає звичайного часу накладання заклинання. Після того як заклинання буде застосовано, слова на свитку зникають, і він розсипається на порох. Якщо накладання не переривається, свиток не втрачається.\nЯкщо заклинання є у списку заклинань вашого класу, але має вищий рівень, ніж ви можете зазвичай застосовувати, вам потрібно зробити перевірку здібності, використовуючи вашу здібність до накладання заклинань, щоб визначити, чи вдалося вам його застосувати. Складність дорівнює 10 + рівень заклинання. При невдалому результаті перевірки заклинання зникає зі свитка без інших наслідків.\nЦей свиток містить заклинання 8-го рівня. Збереження від цього заклинання дорівнює 18, а бонус атаки становить +10.\nЗаклинання чарівника на свитку можна копіювати так само, як і заклинання в книгах заклинань. Коли заклинання копіюється зі свитка, копіювальник повинен успішно пройти перевірку Інтелекту (Аркана) зі складністю 18. Якщо перевірка успішна, заклинання успішно скопійовано. Незалежно від того, чи вдалася перевірка чи ні, свиток знищується.\"",
    "url": "/api/2014/magic-items/spell-scroll-8th",
    "name_ua": "Spell Scroll (8th)"
  },
  {
    "index": "spell-scroll-7th",
    "name": "Spell Scroll (7th)",
    "equipment_category": {
      "index": "scroll",
      "name": "Scroll",
      "url": "/api/2014/equipment-categories/scroll"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Свиток, дуже рідкісний\nСвиток заклинань містить слова одного заклинання, написані в містичному шифрі. Якщо заклинання є у списку заклинань вашого класу, ви можете прочитати свиток і застосувати його заклинання без надання матеріальних компонентів. В іншому випадку свиток залишається незрозумілим. Використання заклинання шляхом читання свитка вимагає звичайного часу накладання заклинання. Після використання заклинання слова на свитку зникають, і він розсипається на порох. Якщо накладання не переривається, свиток не втрачається.\nЯкщо заклинання є у списку заклинань вашого класу, але має вищий рівень, ніж ви можете зазвичай використовувати, вам потрібно зробити перевірку здібності, використовуючи вашу здібність до накладання заклинань, щоб визначити, чи вдалося вам його застосувати. Складність дорівнює 10 + рівень заклинання. У разі невдалої перевірки заклинання зникає зі свитка без інших ефектів.\nЦей свиток містить заклинання 7-го рівня. Складність порятунку від заклинання дорівнює 18, а бонус атаки становить +10.\nЗаклинання чарівника на свитку можна копіювати так само, як і заклинання у книгах заклинань. Коли заклинання копіюється зі свитка, копіювальник повинен успішно пройти перевірку Інтелекту (Аркана) зі складністю 17. Якщо перевірка успішна, заклинання успішно копіюється. Незалежно від того, чи вдалася перевірка чи ні, свиток знищується.\"",
    "url": "/api/2014/magic-items/spell-scroll-7th",
    "name_ua": "Spell Scroll (7th)"
  },
  {
    "index": "spell-scroll-6th",
    "name": "Spell Scroll (6th)",
    "equipment_category": {
      "index": "scroll",
      "name": "Scroll",
      "url": "/api/2014/equipment-categories/scroll"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Рукавичка, дуже рідкісна\nРукавичка заклинання містить слова одного заклинання, написані в містичному шифрі. Якщо заклинання є у списку заклинань вашого класу, ви можете прочитати рукавичку та здійснити його без надання матеріальних компонентів. В іншому випадку рукавичка залишається незрозумілою. Виконання заклинання шляхом читання рукавички вимагає звичайного часу накладання заклинання. Після того як заклинання буде виконано, слова на рукавичці зникають, і вона розсипається на порох. Якщо виконання не переривається, рукавичка не втрачається.\nЯкщо заклинання є у списку заклинань вашого класу, але має вищий рівень, ніж ви можете зазвичай виконувати, вам потрібно зробити перевірку здібності, використовуючи вашу здібність до накладання заклинань, щоб визначити, чи вдалося вам його виконати. Складність дорівнює 10 + рівень заклинання. При невдалому результаті перевірки заклинання зникає з рукавички без інших ефектів.\nЦя рукавичка містить заклинання 6-го рівня. Збереження від цього заклинання дорівнює 18, а бонус атаки становить +10.\nЗаклинання чарівника на рукавичці можна копіювати так само, як і заклинання в книгах заклинань. Коли заклинання копіюється з рукавички, копіювальник повинен успішно пройти перевірку Інтелекту (Аркана) зі складністю 16. Якщо перевірка успішна, заклинання успішно копіюється. Незалежно від того, чи вдалася перевірка чи ні, рукавичка знищується.\"",
    "url": "/api/2014/magic-items/spell-scroll-6th",
    "name_ua": "Spell Scroll (6th)"
  },
  {
    "index": "spell-scroll-5th",
    "name": "Spell Scroll (5th)",
    "equipment_category": {
      "index": "scroll",
      "name": "Scroll",
      "url": "/api/2014/equipment-categories/scroll"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Рукавичка, рідкісна\nРукавичка заклинання містить слова одного заклинання, написані в містичному шифрі. Якщо заклинання є у списку заклинань вашого класу, ви можете прочитати рукавичку і виконати його без надання матеріальних компонентів. В іншому випадку рукавичка залишається незрозумілою. Виконання заклинання шляхом читання рукавички вимагає звичайного часу накладання заклинання. Після виконання заклинання слова на рукавичці зникають, і вона розсипається на порох. Якщо виконання не переривається, рукавичка не втрачається.\nЯкщо заклинання є у списку заклинань вашого класу, але має вищий рівень, ніж ви можете зазвичай виконувати, вам потрібно зробити перевірку здібності, використовуючи вашу здібність до накладання заклинань, щоб визначити, чи вдалося вам його виконати. Складність дорівнює 10 + рівень заклинання. При невдалому результаті перевірки заклинання зникає з рукавички без інших ефектів.\nЦя рукавичка містить заклинання 5-го рівня. Збереження від заклинання становить 17, а бонус атаки дорівнює +9.\nЗаклинання чарівника на рукавичці можна копіювати так само, як і заклинання в книгах заклинань. Коли заклинання копіюється з рукавички, копіювальник повинен успішно пройти перевірку Інтелекту (Аркана) зі складністю 15. Якщо перевірка успішна, заклинання успішно копіюється. Незалежно від того, чи вдалася перевірка чи ні, рукавичка знищується.\"",
    "url": "/api/2014/magic-items/spell-scroll-5th",
    "name_ua": "Spell Scroll (5th)"
  },
  {
    "index": "spell-scroll-4th",
    "name": "Spell Scroll (4th)",
    "equipment_category": {
      "index": "scroll",
      "name": "Scroll",
      "url": "/api/2014/equipment-categories/scroll"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Рукавичка, рідкісна\nРукавичка заклинання містить слова одного заклинання, написані в містичному шифрі. Якщо заклинання є у списку заклинань вашого класу, ви можете прочитати рукавичку і застосувати його без надання матеріальних компонентів. В іншому випадку рукавичка залишається незрозумілою. Використання заклинання шляхом читання рукавички вимагає звичайного часу накладання заклинання. Після того як заклинання застосовано, слова на рукавичці зникають, і вона розсипається на порох. Якщо накладання не переривається, рукавичка не втрачається.\nЯкщо заклинання є у списку заклинань вашого класу, але має вищий рівень, ніж ви можете зазвичай застосовувати, вам потрібно зробити перевірку здібності, використовуючи вашу здібність до накладання заклинань, щоб визначити, чи вдалося вам його застосувати. Складність дорівнює 10 + рівень заклинання. У разі невдалої перевірки заклинання зникає з рукавички без інших ефектів.\nЦя рукавичка містить заклинання 4-го рівня. Збереження від заклинання дорівнює 15, а бонус атаки становить +7.\nЗаклинання чарівника на рукавичці можна скопіювати так само, як і заклинання в книгах заклинань. Коли заклинання копіюється з рукавички, копіювальник повинен успішно пройти перевірку Інтелекту (Аркана) зі складністю 14. Якщо перевірка успішна, заклинання успішно скопійовано. Незалежно від того, чи вдалася перевірка чи ні, рукавичка знищується.\"",
    "url": "/api/2014/magic-items/spell-scroll-4th",
    "name_ua": "Spell Scroll (4th)"
  },
  {
    "index": "sovereign-glue",
    "name": "Sovereign Glue",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": false,
    "desc": "Дивовижний предмет, легендарний\nЦя в'язка, молочно-біла речовина може утворити постійний клейкий зв'язок між будь-якими двома об'єктами. Її потрібно зберігати в банці або флязі, внутрішня поверхня якої була покрита олією слизькості. При знаходженні контейнер містить 1d6 + 1 унцій.\nОдна унція клею може покрити поверхню площею 1 квадратний фут. Клей застигає протягом 1 хвилини. Після цього зв'язок, який він створює, можна розірвати лише за допомогою універсального розчинника або олії ефірності, або заклинання бажання.",
    "url": "/api/2014/magic-items/sovereign-glue",
    "name_ua": "Sovereign Glue"
  },
  {
    "index": "shield-of-missile-attraction",
    "name": "Shield of Missile Attraction",
    "equipment_category": {
      "index": "armor",
      "name": "Armor",
      "url": "/api/2014/equipment-categories/armor"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Броня (щит), рідкісна (потребує налаштування)\nТримаючи цей щит, ви отримуєте опір до ушкоджень від атак дальньої зброї.\n***Прокляття.*** Цей щит проклятий. Налаштування на нього накладає на вас прокляття, яке триває, поки на вас не буде застосовано заклинання зняття прокляття або подібну магію. Зняття щита не припиняє прокляття. Коли будь-яка атака дальньою зброєю здійснюється проти цілі в межах 10 футів від вас, прокляття змушує вас стати ціллю замість неї.\"",
    "url": "/api/2014/magic-items/shield-of-missile-attraction",
    "name_ua": "Shield of Missile Attraction"
  },
  {
    "index": "scimitar-of-speed",
    "name": "Scimitar of Speed",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/2014/equipment-categories/weapon"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зброя (сабля), дуже рідкісна (потребує налаштування)\nВи отримуєте бонус +2 до атак і пошкоджень, завданих цією магічною зброєю. Крім того, ви можете здійснити одну атаку нею як бонусну дію на кожному зі своїх ходів.\"",
    "url": "/api/2014/magic-items/scimitar-of-speed",
    "name_ua": "Scimitar of Speed"
  },
  {
    "index": "scarab-of-protection",
    "name": "Scarab of Protection",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, легендарний (потребує налаштування)\nЯкщо ви тримаєте цей медальйон у формі жука в руці протягом 1 раунду, на його поверхні з'являється напис, що розкриває його магічну природу. Він надає дві переваги, поки знаходиться при вас:\nВи маєте перевагу в рятувальних кидках проти заклинань.\nСкарабей має 12 зарядів. Якщо ви зазнаєте невдачі в рятувальному кидку проти заклинання некромантії або шкідливого ефекту, що походить від нежиттєвої істоти, ви можете використати свою реакцію, щоб витратити 1 заряд і перетворити невдалий кидок на успішний. Скарабей розсипається на порошок і знищується, коли його останній заряд витрачено.\"",
    "url": "/api/2014/magic-items/scarab-of-protection",
    "name_ua": "Scarab of Protection"
  },
  {
    "index": "rope-of-entanglement",
    "name": "Rope of Entanglement",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "Дивовижний предмет, рідкісний\nЦей канат довжиною 30 футів і важить 3 фунти. Якщо ви тримаєте один кінець каната і використовуєте дію, щоб вимовити його командне слово, інший кінець стрімко рухається вперед, щоб обв'язати істоту, яку ви можете бачити на відстані до 20 футів від вас. Ціль повинна успішно пройти рятувальний кидок на Спритність зі складністю 15 або стати обмеженою.\nВи можете звільнити істоту, використовуючи бонусну дію для вимови другого командного слова. Ціль, яка обмежена канатом, може використовувати дію, щоб зробити перевірку Сили або Спритності зі складністю 15 (на вибір цілі). У разі успіху істота більше не буде обмежена канатом.\nКанат має клас броні 20 та 20 очок здоров'я. Він відновлює 1 очко здоров'я кожні 5 хвилин, якщо має принаймні 1 очко здоров'я. Якщо канат опускається до 0 очок здоров'я, він знищується.",
    "url": "/api/2014/magic-items/rope-of-entanglement",
    "name_ua": "Rope of Entanglement"
  },
  {
    "index": "rod-of-security",
    "name": "Rod of Security",
    "equipment_category": {
      "index": "rod",
      "name": "Rod",
      "url": "/api/2014/equipment-categories/rod"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Палиця, дуже рідкісна\nТримаючи цю палицю, ви можете використати дію, щоб активувати її. Палиця миттєво транспортує вас і до 199 інших охочих істот, яких ви можете бачити, до раю, що існує в екстрапланарному просторі. Ви обираєте форму, яку приймає цей рай. Це може бути спокійний сад, чудова галявина, веселий трактир, величезний палац, тропічний острів, фантастичне свято або що завгодно інше, що ви можете уявити. Незалежно від його природи, рай містить достатньо води та їжі для підтримки своїх відвідувачів. Все інше, з чим можна взаємодіяти в екстрапланарному просторі, може існувати лише там. Наприклад, квітка, зірвана в саду раю, зникає, якщо її винести за межі екстрапланарного простору.\nЗа кожну годину перебування в раю відвідувач відновлює очки здоров'я так, ніби він витратив 1 кубик здоров'я. Крім того, істоти не старіють під час перебування в раю, хоча час проходить нормально. Відвідувачі можуть залишатися в раю до 200 днів, розділених на кількість присутніх істот (округлено вниз).\nКоли час закінчується або ви використовуєте дію для його завершення, всі відвідувачі з'являються на місці, яке вони займали під час активації палиці, або на найближчому незайнятому просторі до цього місця. Палицю не можна використовувати знову до того часу, як пройде десять днів.\"",
    "url": "/api/2014/magic-items/rod-of-security",
    "name_ua": "Rod of Security"
  },
  {
    "index": "rod-of-rulership",
    "name": "Rod of Rulership",
    "equipment_category": {
      "index": "rod",
      "name": "Rod",
      "url": "/api/2014/equipment-categories/rod"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Палиця, рідкісна (потребує налаштування)\nВи можете використати дію, щоб показати палицю і наказати підкоритися кожній істоті на ваш вибір, яку ви можете бачити в межах 120 футів від себе. Кожна ціль повинна успішно пройти спасибу на Мудрість зі складністю 15, інакше вона буде зачарована вами на 8 годин. Поки істота зачарована таким чином, вона вважає вас своїм довіреним лідером. Якщо ви або ваші супутники завдадуть їй шкоди або накажете зробити щось протилежне її природі, ціль перестає бути зачарованою таким чином. Палицю не можна використовувати знову до наступного світанку.\"",
    "url": "/api/2014/magic-items/rod-of-rulership",
    "name_ua": "Rod of Rulership"
  },
  {
    "index": "rod-of-lordly-might",
    "name": "Rod of Lordly Might",
    "equipment_category": {
      "index": "rod",
      "name": "Rod",
      "url": "/api/2014/equipment-categories/rod"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Палиця, легендарна (потребує налаштування)\nЦя палиця має флангову головку і функціонує як магічна булава, яка надає бонус +3 до атак і пошкоджень, зроблених нею. Палиця має властивості, пов'язані з шістьма різними кнопками, які розташовані в ряд уздовж рукоятки. Вона також має три інші властивості, детально описані нижче.\n***Шість кнопок.*** Ви можете натиснути одну з шести кнопок палиці як бонусну дію. Ефект кнопки триває до тих пір, поки ви не натиснете іншу кнопку або не натиснете ту ж кнопку знову, що призводить до повернення палиці до її нормальної форми.\nЯкщо ви натискаєте **кнопку 1**, палиця стає полум'яним мечем, оскільки вогняний лезо виростає з кінця протилежного фланговій головці палиці.\nЯкщо ви натискаєте **кнопку 2**, флангова головка палиці складається вниз, і з'являються два серпоподібні леза, перетворюючи палицю на магічну бойову сокиру, яка надає бонус +3 до атак і пошкоджень, зроблених нею.\nЯкщо ви натискаєте **кнопку 3**, флангова головка палиці складається вниз, наконечник списа виростає з кінчика палиці, а рукоятка подовжується до 6 футів, перетворюючи палицю на магічний спис, який надає бонус +3 до атак і пошкоджень, зроблених нею.\nЯкщо ви натискаєте **кнопку 4**, палиця перетворюється на підйомний стовп довжиною до 50 футів за вашим вибором. На поверхнях такої твердості, як граніт, шип внизу та три гачки зверху закріплюють стовп. Горизонтальні планки довжиною 3 дюйми висуваються з боків на відстані 1 фут одна від одної, утворюючи драбину. Стовп може витримувати вагу до 4000 фунтів. Більша вага або відсутність надійного закріплення призводять до повернення палиці до її нормальної форми.\nЯкщо ви натискаєте **кнопку 5**, палиця перетворюється на ручний тараном і надає користувачу бонус +10 до перевірок Сили для прориву дверей, барикад та інших перешкод.\nЯкщо ви натискаєте **кнопку 6**, палиця приймає або залишається у своїй нормальній формі та вказує магнітний північ. (Нічого не відбувається, якщо ця функція використовується в місцях без магнітного півночі.) Палиця також дає вам знання про вашу приблизну глибину під землею або висоту над нею.\n***Витягування життя.*** Коли ви вражаєте істоту ближнім боєм за допомогою палиці, ви можете змусити ціль зробити спасибу на Силу зі складністю DC 17. У разі невдачі ціль отримує додаткові 4d6 некротичних пошкоджень, а ви відновлюєте кількість очок здоров'я рівну половині цих некротичних пошкоджень. Ця властивість не може бути використана знову до наступного світанку.\n***Параліч.*** Коли ви вражаєте істоту ближнім боєм за допомогою палиці, ви можете змусити ціль зробити спасибу на Силу зі складністю DC 17. У разі невдачі ціль паралізована на 1 хвилину. Ціль може повторити спасибу наприкінці кожного свого ходу, припиняючи ефект у разі успіху. Ця властивість не може бути використана знову до наступного світанку.\n***Жах.*** Тримаючи паличку, ви можете використати дію для того, щоб змусити кожну істоту, яку ви бачите в межах 30 футів від вас, зробити спасибу на Мудрість зі складністю DC 17. У разі невдачі ціль боїться вас протягом 1 хвилини. Перелякана ціль може повторити спасибу наприкінці кожного свого ходу, припиняючи ефект на собі у разі успіху. Ця властивість не може бути використана знову до наступного світанку.\"",
    "url": "/api/2014/magic-items/rod-of-lordly-might",
    "name_ua": "Rod of Lordly Might"
  },
  {
    "index": "rod-of-alertness",
    "name": "Rod of Alertness",
    "equipment_category": {
      "index": "rod",
      "name": "Rod",
      "url": "/api/2014/equipment-categories/rod"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Палиця, дуже рідкісна (потребує налаштування)\nЦя палиця має флангову головку та наступні властивості.\n***Пильність.*** Тримаючи палицю, ви отримуєте перевагу на перевірки Мудрості (Сприйняття) та на кидки ініціативи.\n***Заклинання.*** Тримаючи палицю, ви можете використати дію, щоб закликати одне з наступних заклинань: виявлення зла і добра, виявлення магії, виявлення отрути і хвороб або бачення невидимого.\n***Захисна аура.*** Як дію, ви можете встромити кінчик палиці в землю, після чого головка палиці випромінює яскраве світло на радіус 60 футів і тьмяне світло ще на 60 футів. Поки ви перебуваєте в цьому яскравому світлі, ви та будь-яка істота, яка є дружньою до вас, отримують бонус +1 до класу броні та рятувальних кидків і можуть відчувати місцезнаходження будь-якої невидимої ворожої істоти, яка також знаходиться в яскравому світлі.\nГоловка палиці перестає світитися, і ефект закінчується через 10 хвилин або коли істота використовує дію, щоб витягнути палицю з землі. Цю властивість не можна використовувати знову до наступного світанку.\"",
    "url": "/api/2014/magic-items/rod-of-alertness",
    "name_ua": "Rod of Alertness"
  },
  {
    "index": "rod-of-absorption",
    "name": "Rod of Absorption",
    "equipment_category": {
      "index": "rod",
      "name": "Rod",
      "url": "/api/2014/equipment-categories/rod"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Палиця, дуже рідкісна (потребує налаштування)\nТримаючи цю палицю, ви можете використати свою реакцію, щоб поглинути заклинання, яке націлене лише на вас і не має зони дії. Ефект поглинутого заклинання скасовується, а енергія заклинання — не саме заклинання — зберігається в палиці. Енергія має той же рівень, що й заклинання під час його кидка. Палиця може поглинути та зберегти до 50 рівнів енергії протягом свого існування. Як тільки палиця поглинає 50 рівнів енергії, вона більше не може поглинати. Якщо на вас націлюється заклинання, яке палиця не може зберегти, палиця не впливає на це заклинання.\nКоли ви налаштовуєтеся на палицю, ви дізнаєтеся, скільки рівнів енергії палиця поглинула протягом свого існування та скільки рівнів енергії заклинань вона наразі має збережено.\nЯкщо ви є заклинателем і тримаєте палицю, ви можете перетворити збережену в ній енергію на слоти заклинань для кидання підготовлених або відомих вам заклинань. Ви можете створювати слоти заклинань лише рівня, що дорівнює або нижчого за ваші власні слоти заклинань, до максимуму 5-го рівня. Ви використовуєте збережені рівні замість своїх слотів, але в іншому випадку кидаєте заклинання як звичайно. Наприклад, ви можете використати 3 рівні, збережені в палиці, як слот 3-го рівня.\nНещодавно знайдена палиця вже має 1d10 рівнів енергії заклинань збережених у ній. Палиця, яка більше не може поглинати енергію заклинань і не має залишкової енергії, стає немагічною.\"",
    "url": "/api/2014/magic-items/rod-of-absorption",
    "name_ua": "Rod of Absorption"
  },
  {
    "index": "robe-of-the-archmagi",
    "name": "Robe of the Archmagi",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, легендарний (потребує налаштування для чаклуна, відьмака або мага)\nЦей елегантний одяг виготовлений з вишуканої тканини білого, сірого або чорного кольору та прикрашений сріблястими рунами. Колір мантії відповідає спрямуванню, для якого був створений цей предмет. Біла мантія була створена для добрих, сіра — для нейтральних, а чорна — для злих. Ви не можете налаштувати мантію архімага, яка не відповідає вашому спрямуванню.\nВи отримуєте ці переваги, коли носите мантію:\nЯкщо ви не носите броню, ваша базова клас захисту дорівнює 15 + ваш модифікатор Ловкості.\nУ вас є перевага на рятівні кидки проти заклинань та інших магічних ефектів.\nВаш поріг порятунку від заклинань і бонус атаки заклинання збільшуються на 2.\"",
    "url": "/api/2014/magic-items/robe-of-the-archmagi",
    "name_ua": "Robe of the Archmagi"
  },
  {
    "index": "robe-of-stars",
    "name": "Robe of Stars",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, дуже рідкісний (потребує налаштування)\nЦя чорна або темно-синя мантія вишита маленькими білими або сріблястими зірками. Ви отримуєте бонус +1 до рятувальних кидків, коли носите її.\nШість зірок, розташованих на верхній передній частині мантії, особливо великі. Під час носіння цієї мантії ви можете використати дію, щоб зняти одну зі зірок і використати її для заклинання \"Ракетна магія\" як заклинання 5-го рівня. Щодня на заході 1d6 знятих зірок знову з'являються на мантії.\nПоки ви носите мантію, ви можете використати дію, щоб увійти в Астральний План разом із усім, що на вас надягнуто та що ви несете. Ви залишаєтеся там, поки не використаєте дію, щоб повернутися до плану, на якому ви були. Ви з'являєтеся в останньому зайнятому вами просторі або, якщо цей простір зайнятий, у найближчому незайнятому просторі.\"",
    "url": "/api/2014/magic-items/robe-of-stars",
    "name_ua": "Robe of Stars"
  },
  {
    "index": "robe-of-scintillating-colors",
    "name": "Robe of Scintillating Colors",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, дуже рідкісний (потребує налаштування)\nЦя накидка має 3 заряди, і вона відновлює 1d3 витрачених зарядів щодня на світанку. Поки ви її носите, ви можете використати дію та витратити 1 заряд, щоб змусити одяг показувати змінний візерунок сліпучих відтінків до кінця вашого наступного ходу. Протягом цього часу накидка випромінює яскраве світло в радіусі 30 футів і тьмяне світло ще на 30 футів. С Creatures, які можуть вас бачити, мають недолік при атаках проти вас. Крім того, будь-яка істота в яскравому світлі, яка може вас бачити, коли активується сила накидки, повинна успішно пройти рятувальний кидок Мудрості зі складністю DC 15 або стати оглушеною до закінчення ефекту.\"",
    "url": "/api/2014/magic-items/robe-of-scintillating-colors",
    "name_ua": "Robe of Scintillating Colors"
  },
  {
    "index": "robe-of-eyes",
    "name": "Robe of Eyes",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nЦя мантія прикрашена візерунками у вигляді очей. Коли ви носите цю мантію, ви отримуєте наступні переваги:\nМантія дозволяє вам бачити в усіх напрямках, і ви маєте перевагу на перевірки Мудрості (Спостереження), що залежать від зору.\nВи маєте нічне бачення на відстань до 120 футів.\nВи можете бачити невидимих істот і об'єкти, а також бачити в Ефірну площину на відстань до 120 футів.\nОчі на мантії не можуть бути закриті або відвернені. Хоча ви можете закрити або відвернути свої власні очі, вас ніколи не вважають такими, коли ви носите цю мантію.\nЗаклинання світла, накладене на мантію, або заклинання денного світла, накладене в межах 5 футів від мантії, призводить до того, що ви стаєте осліпленими на 1 хвилину. Наприкінці кожного вашого ходу ви можете зробити спаскидний кидок Конституції (DC 11 для світла або DC 15 для денного світла), щоб припинити осліплення при успіху.\"",
    "url": "/api/2014/magic-items/robe-of-eyes",
    "name_ua": "Robe of Eyes"
  },
  {
    "index": "ring-of-x-ray-vision",
    "name": "Ring of X-ray Vision",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Кільце, рідкісне (потребує налаштування)\nПоки ви носите це кільце, ви можете використати дію, щоб вимовити його командне слово. Коли ви це зробите, ви можете бачити крізь тверді матеріали протягом 1 хвилини. Це бачення має радіус 30 футів. Для вас тверді об'єкти в цьому радіусі здаються прозорими і не перешкоджають проходженню світла через них. Це бачення може проникати на 1 фут каменю, 1 дюйм звичайного металу або до 3 футів дерева чи землі. Товстіші речовини блокують бачення, як і тонкий лист свинцю.\nЩоразу, коли ви знову використовуєте кільце до того, як зробите тривалий відпочинок, ви повинні успішно пройти рятувальний кидок Конституції зі складністю DC 15 або отримати один рівень виснаження.\"",
    "url": "/api/2014/magic-items/ring-of-x-ray-vision",
    "name_ua": "Ring of X-ray Vision"
  },
  {
    "index": "ring-of-three-wishes",
    "name": "Ring of Three Wishes",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Кільце, легендарне\nПід час носіння цього кільця ви можете використати дію, щоб витратити 1 з його 3 зарядів для заклинання бажання. Кільце стає немагічним, коли ви використовуєте останній заряд.\"",
    "url": "/api/2014/magic-items/ring-of-three-wishes",
    "name_ua": "Ring of Three Wishes"
  },
  {
    "index": "ring-of-the-ram",
    "name": "Ring of the Ram",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Кільце, рідкісне (потребує налаштування)\nЦе кільце має 3 заряди, і щодня на світанку відновлює 1d3 витрачених зарядів. Під час носіння кільця ви можете використати дію, щоб витратити від 1 до 3 його зарядів для атаки на одну істоту, яку ви можете бачити на відстані до 60 футів від вас. Кільце створює спектральну голову барана і робить свій атакувальний кидок з бонусом +7. При попаданні, за кожен витрачений заряд, ціль отримує 2d10 ушкоджень сили та відштовхується на 5 футів від вас.\nАльтернативно, ви можете витратити від 1 до 3 зарядів кільця як дію, щоб спробувати зламати об'єкт, який ви можете бачити на відстані до 60 футів і який не носиться та не переноситься. Кільце робить перевірку Сили з бонусом +5 за кожен витрачений заряд.\"",
    "url": "/api/2014/magic-items/ring-of-the-ram",
    "name_ua": "Ring of the Ram"
  },
  {
    "index": "ring-of-telekinesis",
    "name": "Ring of Telekinesis",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Кільце, дуже рідкісне (потребує налаштування)\nПоки ви носите це кільце, ви можете використовувати заклинання телекинезу на свій розсуд, але ви можете націлюватися лише на об'єкти, які не носяться і не переносяться.\"",
    "url": "/api/2014/magic-items/ring-of-telekinesis",
    "name_ua": "Ring of Telekinesis"
  },
  {
    "index": "ring-of-spell-turning",
    "name": "Ring of Spell Turning",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Кільце, легендарне (потребує налаштування)\nПоки ви носите це кільце, ви маєте перевагу на рятувальні кидки проти будь-якого закляття, яке націлене лише на вас (не в зоні дії). Крім того, якщо ви кидаєте 20 для рятувального кидка і закляття 7-го рівня або нижче, закляття не має на вас жодного ефекту і натомість націлюється на заклинателя, використовуючи рівень слота, DC рятувального кидка закляття, бонус атаки та здібність заклинання заклинателя.\"",
    "url": "/api/2014/magic-items/ring-of-spell-turning",
    "name_ua": "Ring of Spell Turning"
  },
  {
    "index": "ring-of-spell-storing",
    "name": "Ring of Spell Storing",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Кільце, рідкісне (потребує налаштування)\nЦе кільце зберігає заклинання, які в нього вносять, утримуючи їх до тих пір, поки налаштований носій не використає їх. Кільце може зберігати до 5 рівнів заклинань одночасно. При знаходженні воно містить 1d6 - 1 рівнів заклинань, обраних майстром гри.\nБудь-яка істота може ввести заклинання 1-го до 5-го рівня в кільце, торкнувшись його під час кидання заклинання. Заклинання не має жодного ефекту, окрім як бути збереженим у кільці. Якщо кільце не може вмістити заклинання, воно витрачається без ефекту. Рівень гнізда, використаного для кидання заклинання, визначає, скільки місця воно займає.\nПоки ви носите це кільце, ви можете кидати будь-яке заклинання, яке в ньому збережено. Заклинання використовує рівень гнізда, DC порятунку від заклинань, бонус атаки заклинань і здібність заклинателя оригінального кастера, але інакше розглядається так, ніби ви самі його кинули. Заклинання, кинуте з кільця, більше не зберігається в ньому, звільняючи місце.\"",
    "url": "/api/2014/magic-items/ring-of-spell-storing",
    "name_ua": "Ring of Spell Storing"
  },
  {
    "index": "ring-of-shooting-stars",
    "name": "Ring of Shooting Stars",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Кільце, дуже рідкісне (потребує налаштування на відкритому повітрі вночі)\nПоки ви носите це кільце в слабкому світлі або темряві, ви можете використовувати заклинання «танцюючі вогні» та «світло» з кільця за бажанням. Для використання будь-якого з цих заклинань з кільця потрібна дія.\nКільце має 6 зарядів для наступних властивостей. Кільце відновлює 1d6 витрачених зарядів щодня на світанку.\n***Чарівне полум'я.*** Ви можете витратити 1 заряд як дію, щоб використати чарівне полум'я з кільця.\n***Куля блискавки.*** Ви можете витратити 2 заряди як дію, щоб створити від однієї до чотирьох сфер блискавки діаметром 3 фути. Чим більше сфер ви створюєте, тим менш потужною є кожна окрема сфера.\nКожна сфера з'являється в незайнятому просторі, який ви можете бачити в межах 120 футів від вас. Сфери тривають стільки, скільки ви концентруєтеся (як при концентрації на заклинанні), до 1 хвилини. Кожна сфера випромінює слабке світло на радіус 30 футів.\nЯк бонусну дію, ви можете перемістити кожну сферу до 30 футів, але не далі ніж на 120 футів від вас. Коли істота, окрім вас, наближається до сфери на відстань 5 футів, сфера випускає блискавку в цю істоту і зникає. Цій істоті потрібно зробити рятувальний кидок Dexterity зі складністю DC 15. При невдалому кидку істота отримує шкоду від блискавки залежно від кількості створених вами сфер.\n| Сфери | Шкода від блискавки |\n|",
    "url": "/api/2014/magic-items/ring-of-shooting-stars",
    "name_ua": "Ring of Shooting Stars"
  },
  {
    "index": "ring-of-resistance-thunder",
    "name": "Ring of Thunder Resistance",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Кільце, рідкісне (потребує налаштування)\nПід час носіння цього шпинельного кільця ви маєте опір до шкоди від грому.\"",
    "url": "/api/2014/magic-items/ring-of-resistance-thunder",
    "name_ua": "Ring of Thunder Resistance"
  },
  {
    "index": "ring-of-resistance-radiant",
    "name": "Ring of Radiant Resistance",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Кільце, рідкісне (потребує налаштування)\nПоки ви носите це топазове кільце, ви маєте опір до радіантної шкоди.\"",
    "url": "/api/2014/magic-items/ring-of-resistance-radiant",
    "name_ua": "Ring of Radiant Resistance"
  },
  {
    "index": "ring-of-resistance-psychic",
    "name": "Ring of Psychic Resistance",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Кільце, рідкісне (потребує налаштування)\nПід час носіння цього нефритового кільця ви маєте опір до психічного ушкодження.\"",
    "url": "/api/2014/magic-items/ring-of-resistance-psychic",
    "name_ua": "Ring of Psychic Resistance"
  },
  {
    "index": "ring-of-resistance-poison",
    "name": "Ring of Poison Resistance",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Кільце, рідкісне (потребує налаштування)\nПоки ви носите це аметистове кільце, ви маєте опір до отруйного пошкодження.\"",
    "url": "/api/2014/magic-items/ring-of-resistance-poison",
    "name_ua": "Ring of Poison Resistance"
  },
  {
    "index": "ring-of-resistance-necrotic",
    "name": "Ring of Necrotic Resistance",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Кільце, рідкісне (потребує налаштування)\nПід час носіння цього кільця з жету ви маєте опір до некротичного пошкодження.\"",
    "url": "/api/2014/magic-items/ring-of-resistance-necrotic",
    "name_ua": "Ring of Necrotic Resistance"
  },
  {
    "index": "ring-of-resistance-lightning",
    "name": "Ring of Lightning Resistance",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Кільце, рідкісне (потребує налаштування)\nПід час носіння цього цитринової кільця ви маєте опір до уражень блискавкою.\"",
    "url": "/api/2014/magic-items/ring-of-resistance-lightning",
    "name_ua": "Ring of Lightning Resistance"
  },
  {
    "index": "ring-of-resistance-force",
    "name": "Ring of Force Resistance",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Кільце, рідкісне (потребує налаштування)\nПід час носіння цього сапфірового кільця ви маєте опір до пошкоджень сили.\"",
    "url": "/api/2014/magic-items/ring-of-resistance-force",
    "name_ua": "Ring of Force Resistance"
  },
  {
    "index": "ring-of-resistance-fire",
    "name": "Ring of Fire Resistance",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Кільце, рідкісне (потребує налаштування)\nПоки ви носите це гранатове кільце, ви маєте опір до вогняного пошкодження.\"",
    "url": "/api/2014/magic-items/ring-of-resistance-fire",
    "name_ua": "Ring of Fire Resistance"
  },
  {
    "index": "ring-of-resistance-cold",
    "name": "Ring of Cold Resistance",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Кільце, рідкісне (потребує налаштування)\nПід час носіння цього турмалінового кільця ви маєте опір до холодного пошкодження.\"",
    "url": "/api/2014/magic-items/ring-of-resistance-cold",
    "name_ua": "Ring of Cold Resistance"
  },
  {
    "index": "ring-of-resistance-acid",
    "name": "Ring of Acid Resistance",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Кільце, рідкісне (потребує налаштування)\nПоки ви носите це перлинне кільце, ви маєте опір до ушкоджень від кислоти.\"",
    "url": "/api/2014/magic-items/ring-of-resistance-acid",
    "name_ua": "Ring of Acid Resistance"
  },
  {
    "index": "ring-of-resistance",
    "name": "Ring of Resistance",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [
      {
        "index": "ring-of-resistance-acid",
        "name": "Ring of Acid Resistance",
        "url": "/api/2014/magic-items/ring-of-resistance-acid"
      },
      {
        "index": "ring-of-resistance-cold",
        "name": "Ring of Cold Resistance",
        "url": "/api/2014/magic-items/ring-of-resistance-cold"
      },
      {
        "index": "ring-of-resistance-fire",
        "name": "Ring of Fire Resistance",
        "url": "/api/2014/magic-items/ring-of-resistance-fire"
      },
      {
        "index": "ring-of-resistance-force",
        "name": "Ring of Force Resistance",
        "url": "/api/2014/magic-items/ring-of-resistance-force"
      },
      {
        "index": "ring-of-resistance-lightning",
        "name": "Ring of Lightning Resistance",
        "url": "/api/2014/magic-items/ring-of-resistance-lightning"
      },
      {
        "index": "ring-of-resistance-necrotic",
        "name": "Ring of Necrotic Resistance",
        "url": "/api/2014/magic-items/ring-of-resistance-necrotic"
      },
      {
        "index": "ring-of-resistance-poison",
        "name": "Ring of Poison Resistance",
        "url": "/api/2014/magic-items/ring-of-resistance-poison"
      },
      {
        "index": "ring-of-resistance-psychic",
        "name": "Ring of Psychic Resistance",
        "url": "/api/2014/magic-items/ring-of-resistance-psychic"
      },
      {
        "index": "ring-of-resistance-radiant",
        "name": "Ring of Radiant Resistance",
        "url": "/api/2014/magic-items/ring-of-resistance-radiant"
      },
      {
        "index": "ring-of-resistance-thunder",
        "name": "Ring of Thunder Resistance",
        "url": "/api/2014/magic-items/ring-of-resistance-thunder"
      }
    ],
    "variant": false,
    "desc": "\"Кільце, рідкісне (потребує налаштування)\nПоки ви носите це кільце, ви маєте опір до одного типу ушкоджень. Камінь у кільці вказує на тип, який обирає або визначає випадковим чином майстер гри.\n| d10 | Тип ушкодження | Камінь |\n|",
    "url": "/api/2014/magic-items/ring-of-resistance",
    "name_ua": "Ring of Resistance"
  },
  {
    "index": "ring-of-regeneration",
    "name": "Ring of Regeneration",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Кільце, дуже рідкісне (потребує налаштування)\nПоки ви носите це кільце, ви відновлюєте 1d6 очок здоров'я кожні 10 хвилин, за умови, що у вас є принаймні 1 очко здоров'я. Якщо ви втрачаєте частину тіла, кільце сприяє відновленню відсутньої частини і поверненню її до повної функціональності через 1d6 + 1 днів, якщо у вас протягом всього часу є принаймні 1 очко здоров'я.\"",
    "url": "/api/2014/magic-items/ring-of-regeneration",
    "name_ua": "Ring of Regeneration"
  },
  {
    "index": "ring-of-protection",
    "name": "Ring of Protection",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Кільце, рідкісне (потребує налаштування)\nПоки ви носите це кільце, ви отримуєте бонус +1 до класу броні та рятівних кидків.\"",
    "url": "/api/2014/magic-items/ring-of-protection",
    "name_ua": "Ring of Protection"
  },
  {
    "index": "ring-of-invisibility",
    "name": "Ring of Invisibility",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Кільце, легендарне (потребує налаштування)\nПоки ви носите це кільце, ви можете стати невидимим як дія. Все, що ви носите або несете, стає невидимим разом з вами. Ви залишаєтеся невидимим, поки кільце не буде знято, поки ви не атакуєте або не кинете заклинання, або поки ви не використаєте бонусну дію, щоб знову стати видимим.\"",
    "url": "/api/2014/magic-items/ring-of-invisibility",
    "name_ua": "Ring of Invisibility"
  },
  {
    "index": "ring-of-free-action",
    "name": "Ring of Free Action",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Кільце, рідкісне (потребує налаштування)\nПоки ви носите це кільце, важкий рельєф не збільшує ваш витрачений рух. Крім того, магія не може зменшити вашу швидкість або призвести до паралічу чи обмеження рухів.\"",
    "url": "/api/2014/magic-items/ring-of-free-action",
    "name_ua": "Ring of Free Action"
  },
  {
    "index": "ring-of-feather-falling",
    "name": "Ring of Feather Falling",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Кільце, рідкісне (потребує налаштування)\nКоли ви падаєте, носячи це кільце, ви спускаєтеся на 60 футів за раунд і не отримуєте шкоди від падіння.\"",
    "url": "/api/2014/magic-items/ring-of-feather-falling",
    "name_ua": "Ring of Feather Falling"
  },
  {
    "index": "ring-of-evasion",
    "name": "Ring of Evasion",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Кільце, рідкісне (потребує налаштування)\nЦе кільце має 3 заряди, і щодня на світанку відновлює 1d3 витрачених зарядів. Коли ви зазнаєте невдачі в рятувальному кидку на спритність, перебуваючи в ньому, ви можете використати свою реакцію, щоб витратити 1 з його зарядів і успішно виконати цей рятувальний кидок замість невдачі.\"",
    "url": "/api/2014/magic-items/ring-of-evasion",
    "name_ua": "Ring of Evasion"
  },
  {
    "index": "ring-of-elemental-command-water",
    "name": "Ring of Water Elemental Command",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Кільце, легендарне (потребує налаштування)\nЦе кільце пов'язане з Елементальним Планом Води.\nПоки ви носите це кільце, ви маєте перевагу в атаках проти водяних елементалів, а вони мають недолік в атаках проти вас. Крім того, ви отримуєте доступ до властивостей, заснованих на Елементальному Плані Води.\nКільце має 5 зарядів. Воно відновлює 1d4 + 1 витрачених зарядів щодня на світанку. Заклинання, кинуті з кільця, мають поріг порятунку DC 17.\nВи можете витратити 2 заряди кільця, щоб кинути заклинання \"панування над монстром\" на водяного елементала. Крім того, ви можете стояти на та ходити по рідких поверхнях так, ніби це тверда земля. Ви також можете говорити та розуміти мову Акван.\nЯкщо ви допоможете вбити водяного елементала, будучи налаштованим на кільце, ви отримаєте доступ до наступних додаткових властивостей:\nВи можете дихати під водою і маєте швидкість плавання, рівну вашій швидкості ходьби.\nВи можете кидати наступні заклинання з кільця, витрачаючи необхідну кількість зарядів: створення або знищення води (1 заряд), контроль води (3 заряди), айсова буря (2 заряди) або стіна льоду (3 заряди).\"",
    "url": "/api/2014/magic-items/ring-of-elemental-command-water",
    "name_ua": "Ring of Water Elemental Command"
  },
  {
    "index": "ring-of-elemental-command-fire",
    "name": "Ring of Fire Elemental Command",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": true,
    "desc": "Кільце, легендарне (потребує налаштування)\nЦе кільце пов'язане з Елементальним Планом Вогню.\nПід час носіння цього кільця ви маєте перевагу в атаках проти вогняних елементалів, а вони мають недолік у атаках проти вас. Крім того, ви отримуєте доступ до властивостей, пов'язаних з Елементальним Планом Вогню.\nКільце має 5 зарядів. Воно відновлює 1d4 + 1 витрачених зарядів щодня на світанку. Заклинання, що кидаються з кільця, мають поріг порятунку DC 17.\nВи можете витратити 2 заряди кільця, щоб кинути заклинання \"панування над істотою\" на вогняного елементаля. Крім того, ви маєте опір до вогняного пошкодження. Ви також можете говорити та розуміти Ігнан.\nЯкщо ви допоможете вбити вогняного елементаля, будучи налаштованим на кільце, ви отримаєте доступ до наступних додаткових властивостей:\nВи імунні до вогняного пошкодження.\nВи можете кидати наступні заклинання з кільця, витрачаючи необхідну кількість зарядів: \"палючі руки\" (1 заряд), \"вогняний куля\" (2 заряди) та \"стіна вогню\" (3 заряди).",
    "url": "/api/2014/magic-items/ring-of-elemental-command-fire",
    "name_ua": "Ring of Fire Elemental Command"
  },
  {
    "index": "ring-of-elemental-command-earth",
    "name": "Ring of Earth Elemental Command",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Кільце, легендарне (потребує налаштування)\nЦе кільце пов'язане з Елементальним Планом Землі.\nПоки ви носите це кільце, ви маєте перевагу в атаках проти елементалів землі, а вони мають недолік у атаках проти вас. Крім того, ви отримуєте доступ до властивостей, пов'язаних з Елементальним Планом Землі.\nКільце має 5 зарядів. Воно відновлює 1d4 + 1 витрачених зарядів щодня на світанку. Заклинання, що кидаються з кільця, мають поріг порятунку DC 17.\nВи можете витратити 2 заряди кільця, щоб кинути заклинання \"панування над монстром\" на елементаля землі. Крім того, ви можете рухатися по складній місцевості, що складається з уламків, каменів або ґрунту, так ніби це звичайна місцевість. Ви також можете говорити та розуміти Терану.\nЯкщо ви допоможете вбити елементаля землі під час налаштування на кільце, ви отримаєте доступ до наступних додаткових властивостей:\nВи маєте опір до шкоди від кислоти.\nВи можете проходити через тверду землю або камінь так, ніби ці області є складною місцевістю. Якщо ви закінчите свій хід там, вас виштовхне до найближчого незайнятого простору, який ви останнім часом займали.\nВи можете кидати наступні заклинання з кільця, витрачаючи необхідну кількість зарядів: \"форма каменю\" (2 заряди), \"шкіра каменю\" (3 заряди) або \"стіна каменю\" (3 заряди).\"",
    "url": "/api/2014/magic-items/ring-of-elemental-command-earth",
    "name_ua": "Ring of Earth Elemental Command"
  },
  {
    "index": "ring-of-elemental-command-air",
    "name": "Ring of Air Elemental Command",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Кільце, легендарне (потребує налаштування)\nЦе кільце пов'язане з Елементальним Планом Повітря.\nПід час носіння цього кільця ви маєте перевагу в атаках проти елементалів повітря, а вони мають недолік в атаках проти вас. Крім того, ви отримуєте доступ до властивостей, заснованих на Елементальному Плані Повітря.\nКільце має 5 зарядів. Воно відновлює 1d4 + 1 витрачених зарядів щодня на світанку. Заклинання, кинуті з кільця, мають поріг порятунку DC 17.\nВи можете витратити 2 заряди кільця, щоб кинути заклинання \"панування над монстром\" на елементаля повітря. Крім того, коли ви падаєте, ви спускаєтеся на 60 футів за раунд і не отримуєте шкоди від падіння. Ви також можете говорити та розуміти Ауран.\nЯкщо ви допоможете вбити елементаля повітря під час налаштування на кільце, ви отримаєте доступ до наступних додаткових властивостей:\nВи маєте опір до шкоди від блискавки.\nВи маєте швидкість польоту, рівну вашій швидкості ходьби, і можете зависати в повітрі.\nВи можете кидати наступні заклинання з кільця, витрачаючи необхідну кількість зарядів: ланцюг блискавки (3 заряди), порив вітру (2 заряди) або стіна вітру (1 заряд).\"",
    "url": "/api/2014/magic-items/ring-of-elemental-command-air",
    "name_ua": "Ring of Air Elemental Command"
  },
  {
    "index": "ring-of-elemental-command",
    "name": "Ring of Elemental Command",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [
      {
        "index": "ring-of-elemental-command-air",
        "name": "Ring of Air Elemental Command",
        "url": "/api/2014/magic-items/ring-of-elemental-command-air"
      },
      {
        "index": "ring-of-elemental-command-earth",
        "name": "Ring of Earth Elemental Command",
        "url": "/api/2014/magic-items/ring-of-elemental-command-earth"
      },
      {
        "index": "ring-of-elemental-command-fire",
        "name": "Ring of Fire Elemental Command",
        "url": "/api/2014/magic-items/ring-of-elemental-command-fire"
      },
      {
        "index": "ring-of-elemental-command-water",
        "name": "Ring of Water Elemental Command",
        "url": "/api/2014/magic-items/ring-of-elemental-command-water"
      }
    ],
    "variant": false,
    "desc": "\"Кільце, легендарне (потребує налаштування)\nЦе кільце пов'язане з одним із чотирьох Елементальних Планів. Майстер гри обирає або випадковим чином визначає пов'язаний план.\nПоки ви носите це кільце, ви маєте перевагу в атаках проти елементалів з пов'язаного плану, а вони мають недолік в атаках проти вас. Крім того, ви отримуєте доступ до властивостей, що залежать від пов'язаного плану.\nКільце має 5 зарядів. Воно відновлює 1d4 + 1 витрачених зарядів щодня на світанку. Заклинання, кинуті з кільця, мають поріг порятунку DC 17.\n***Кільце Командування Повітряним Елементалом.*** Ви можете витратити 2 заряди кільця, щоб кинути dominate monster на повітряного елементала. Крім того, коли ви падаєте, ви спускаєтеся на 60 футів за раунд і не отримуєте шкоди від падіння. Ви також можете говорити та розуміти Ауран.\nЯкщо ви допоможете вбити повітряного елементала під час налаштування на кільце, ви отримаєте доступ до наступних додаткових властивостей:\nВи маєте опір до шкоди від блискавки.\nВи маєте швидкість польоту, рівну вашій швидкості ходьби, і можете зависати в повітрі.\nВи можете кидати наступні заклинання з кільця, витрачаючи необхідну кількість зарядів: ланцюг блискавки (3 заряди), порив вітру (2 заряди) або стіна вітру (1 заряд).\n***Кільце Командування Земляним Елементалом.*** Ви можете витратити 2 заряди кільця, щоб кинути dominate monster на земляного елементала. Крім того, ви можете рухатися по складній місцевості, що складається з уламків, каменів або землі, як по звичайній місцевості. Ви також можете говорити та розуміти Терран.\nЯкщо ви допоможете вбити земляного елементала під час налаштування на кільце, ви отримаєте доступ до наступних додаткових властивостей:\nВи маєте опір до кислотої шкоди.\nВи можете проходити через тверду землю або камінь так, ніби ці області є складною місцевістю. Якщо ви закінчуєте свій хід там, вас виштовхує у найближчий незайнятий простір, який ви останнім часом займали.\nВи можете кидати наступні заклинання з кільця, витрачаючи необхідну кількість зарядів: форма каменю (2 заряди), шкіра каменю (3 заряди) або стіна каменю (3 заряди).\n***Кільце Командування Вогняним Елементалом.*** Ви можете витратити 2 заряди кільця, щоб кинути dominate monster на вогняного елементала. Крім того, у вас є опір до шкоди від вогню. Ви також можете говорити та розуміти Ігнан.\nЯкщо ви допоможете вбити вогняного елементала під час налаштування на кільце, ви отримаєте доступ до наступних додаткових властивостей:\nВи маєте імунітет до шкоди від вогню.\nВи можете кидати наступні заклинання з кільця, витрачаючи необхідну кількість зарядів: палаючі руки (1 заряд), кулю вогню (2 заряди) та стіну вогню (3 заряди).\n***Кільце Командування Водним Елементалом.*** Ви можете витратити 2 заряди кільця, щоб кинути dominate monster на водного елементала. Крім того, ви можете стояти на та ходити по рідких поверхнях так, ніби вони є твердою землею. Ви також можете говорити та розуміти Акван.\nЯкщо ви допоможете вбити водного елементала під час налаштування на кільце, ви отримаєте доступ до наступних додаткових властивостей:\nВи можете дихати під водою і маєте швидкість плавання рівну вашій швидкості ходьби.\nВи можете кидати наступні заклинання з кільця, витрачаючи необхідну кількість зарядів: створення або знищення води (1 заряд), контроль води (3 заряди), льодовий шторм (2 заряди) або стіна льоду (3 заряди).\"",
    "url": "/api/2014/magic-items/ring-of-elemental-command",
    "name_ua": "Ring of Elemental Command"
  },
  {
    "index": "ring-of-djinni-summoning",
    "name": "Ring of Djinni Summoning",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Кільце, легендарне (потребує налаштування)\nПід час носіння цього кільця ви можете вимовити його командне слово як дію, щоб викликати певного джина з Елементального Плану Повітря. Джин з'являється в незайнятому просторі, який ви обираєте в межах 120 футів від вас. Він залишається стільки, скільки ви концентруєтеся (як при концентрації на заклинанні), максимум 1 годину, або поки його очки здоров'я не впадуть до 0. Потім він повертається до свого рідного плану.\nПоки джин викликаний, він дружелюбний до вас і ваших супутників. Він підкоряється будь-яким командам, які ви йому даєте, незалежно від мови, якою ви користуєтеся. Якщо ви не зможете дати йому команду, джин захищає себе від нападників, але не вживає інших дій.\nПісля відходу джина його не можна буде викликати знову протягом 24 годин, а кільце стає немагічним, якщо джин помирає.\"",
    "url": "/api/2014/magic-items/ring-of-djinni-summoning",
    "name_ua": "Ring of Djinni Summoning"
  },
  {
    "index": "ring-of-animal-influence",
    "name": "Ring of Animal Influence",
    "equipment_category": {
      "index": "ring",
      "name": "Ring",
      "url": "/api/2014/equipment-categories/ring"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Кільце, рідкісне\nЦе кільце має 3 заряди, і щодня на світанку відновлює 1d3 витрачених зарядів. Під час носіння кільця ви можете використати дію, щоб витратити 1 з його зарядів для заклинання одного з наступних заклять:\nДружба з тваринами (поріг порятунку 13)\nСтрах (поріг порятунку 13), націлюючись лише на звірів з інтелектом 3 або нижче\nРозмова з тваринами\"",
    "url": "/api/2014/magic-items/ring-of-animal-influence",
    "name_ua": "Ring of Animal Influence"
  },
  {
    "index": "potion-of-speed",
    "name": "Potion of Speed",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зілля, дуже рідкісне\nКоли ви випиваєте це зілля, ви отримуєте ефект заклинання «Прискорення» на 1 хвилину (без потреби в концентрації). Жовта рідина зілля має чорні прожилки і сама по собі обертається.\"",
    "url": "/api/2014/magic-items/potion-of-speed",
    "name_ua": "Potion of Speed"
  },
  {
    "index": "potion-of-mind-reading",
    "name": "Potion of Mind Reading",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зілля, рідкісне\nКоли ви випиваєте це зілля, ви отримуєте ефект заклинання виявлення думок (поріг порятунку 13). Густий фіолетовий рідкий склад зілля містить овальну хмаринку рожевого кольору, що плаває в ньому.\"",
    "url": "/api/2014/magic-items/potion-of-mind-reading",
    "name_ua": "Potion of Mind Reading"
  },
  {
    "index": "potion-of-invisibility",
    "name": "Potion of Invisibility",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зілля, дуже рідкісне\nКонтейнер цього зілля виглядає порожнім, але відчувається, ніби в ньому є рідина. Коли ви його випиваєте, ви стаєте невидимим на 1 годину. Все, що ви носите або несете, також стає невидимим разом з вами. Ефект закінчується раніше, якщо ви атакуєте або накладаєте заклинання.\"",
    "url": "/api/2014/magic-items/potion-of-invisibility",
    "name_ua": "Potion of Invisibility"
  },
  {
    "index": "potion-of-heroism",
    "name": "Potion of Heroism",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зілля, рідкісне\nПротягом 1 години після вживання ви отримуєте 10 тимчасових очок здоров'я, які тривають 1 годину. Протягом того ж часу ви під впливом заклинання благословення (без потреби концентрації). Це синє зілля булькає і парує, ніби кипить.\"",
    "url": "/api/2014/magic-items/potion-of-heroism",
    "name_ua": "Potion of Heroism"
  },
  {
    "index": "potion-of-healing-supreme",
    "name": "Potion of Supreme Healing",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Зілля, дуже рідкісне\nКоли ви випиваєте це зілля, ви відновлюєте 10d4 + 20 очок здоров'я. Червона рідина зілля блищить при збуренні.\"",
    "url": "/api/2014/magic-items/potion-of-healing-supreme",
    "name_ua": "Potion of Supreme Healing"
  },
  {
    "index": "potion-of-healing-superior",
    "name": "Potion of Superior Healing",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Зілля, рідкісне\nКоли ви випиваєте це зілля, ви відновлюєте 8d4 + 8 очок здоров'я. Червона рідина зілля блищить при збуренні.\"",
    "url": "/api/2014/magic-items/potion-of-healing-superior",
    "name_ua": "Potion of Superior Healing"
  },
  {
    "index": "potion-of-giant-strength-storm",
    "name": "Potion of Storm Giant Strength",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Зілля, легендарне\nКоли ви випиваєте це зілля, ваш показник Сили змінюється на 29 на 1 годину. Зілля не має жодного ефекту, якщо ваша Сила дорівнює або перевищує цей показник.\nПрозора рідина цього зілля містить плаваючу частинку нігтя буревійного велетня.\"",
    "url": "/api/2014/magic-items/potion-of-giant-strength-storm",
    "name_ua": "Potion of Storm Giant Strength"
  },
  {
    "index": "potion-of-giant-strength-cloud",
    "name": "Potion of Cloud Giant Strength",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Зілля, дуже рідкісне\nКоли ви випиваєте це зілля, ваш показник Сили змінюється на 27 на 1 годину. Зілля не має жодного ефекту, якщо ваша Сила дорівнює або перевищує цей показник.\nПрозора рідина цього зілля містить плаваючу частинку нігтя хмарного велетня.\"",
    "url": "/api/2014/magic-items/potion-of-giant-strength-cloud",
    "name_ua": "Potion of Cloud Giant Strength"
  },
  {
    "index": "potion-of-giant-strength-fire",
    "name": "Potion of Fire Giant Strength",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Зілля, рідкісне\nКоли ви випиваєте це зілля, ваш показник Сили змінюється на 25 на 1 годину. Зілля не має жодного ефекту, якщо ваша Сила дорівнює або перевищує цей показник.\nПрозора рідина цього зілля містить плаваючий уламок нігтя вогняного велетня.\"",
    "url": "/api/2014/magic-items/potion-of-giant-strength-fire",
    "name_ua": "Potion of Fire Giant Strength"
  },
  {
    "index": "potion-of-giant-strength-stone",
    "name": "Potion of Stone Giant Strength",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Зілля, рідкісне\nКоли ви випиваєте це зілля, ваш показник Сили змінюється на 23 на 1 годину. Зілля не має жодного ефекту, якщо ваш показник Сили дорівнює або перевищує це значення.\nПрозора рідина цього зілля містить плаваючий уламок нігтя кам'яного велетня.\"",
    "url": "/api/2014/magic-items/potion-of-giant-strength-stone",
    "name_ua": "Potion of Stone Giant Strength"
  },
  {
    "index": "potion-of-giant-strength-frost",
    "name": "Potion of Frost Giant Strength",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Зілля, рідкісне\nКоли ви випиваєте це зілля, ваш показник Сили змінюється на 23 на 1 годину. Зілля не має жодного ефекту, якщо ваша Сила дорівнює або перевищує цей показник.\nПрозора рідина цього зілля містить плаваючу частинку нігтя від велетня-льодовика.\"",
    "url": "/api/2014/magic-items/potion-of-giant-strength-frost",
    "name_ua": "Potion of Frost Giant Strength"
  },
  {
    "index": "potion-of-gaseous-form",
    "name": "Potion of Gaseous Form",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зілля, рідкісне\nКоли ви випиваєте це зілля, ви отримуєте ефект заклинання «Туманна форма» на 1 годину (без потреби в концентрації) або до того часу, поки ви не припините ефект як бонусну дію. Контейнер цього зілля здається таким, що містить туман, який рухається і ллється, як вода.\"",
    "url": "/api/2014/magic-items/potion-of-gaseous-form",
    "name_ua": "Potion of Gaseous Form"
  },
  {
    "index": "potion-of-flying",
    "name": "Potion of Flying",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зілля, дуже рідкісне\nКоли ви випиваєте це зілля, ви отримуєте швидкість польоту, яка дорівнює вашій швидкості ходьби, на 1 годину і можете зависати в повітрі. Якщо ви перебуваєте в повітрі, коли дія зілля закінчується, ви падаєте, якщо у вас немає інших засобів для підтримки в повітрі. Прозора рідина цього зілля плаває на поверхні контейнера і має каламутні білі домішки, що плавають у ній.\"",
    "url": "/api/2014/magic-items/potion-of-flying",
    "name_ua": "Potion of Flying"
  },
  {
    "index": "potion-of-diminution",
    "name": "Potion of Diminution",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зілля, рідкісне\nКоли ви випиваєте це зілля, ви отримуєте ефект «зменшення» заклинання «Збільшення/Зменшення» на 1d4 години (без потреби в концентрації). Червоний колір у рідині зілля постійно стискається до крихітної краплі, а потім розширюється, фарбуючи прозору рідину навколо неї. Струшування пляшки не перериває цей процес.\"",
    "url": "/api/2014/magic-items/potion-of-diminution",
    "name_ua": "Potion of Diminution"
  },
  {
    "index": "potion-of-clairvoyance",
    "name": "Potion of Clairvoyance",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зілля, рідкісне\nКоли ви випиваєте це зілля, ви отримуєте ефект заклинання ясновидіння. В оранжевій рідині плаває очне яблуко, але воно зникає, коли зілля відкривається.\"",
    "url": "/api/2014/magic-items/potion-of-clairvoyance",
    "name_ua": "Potion of Clairvoyance"
  },
  {
    "index": "portable-hole",
    "name": "Portable Hole",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nЦя тонка чорна тканина, м'яка як шовк, складена до розмірів носової хустки. Вона розгортається в круглий лист діаметром 6 футів.\nВи можете використати дію, щоб розгорнути портативну діру і покласти її на або притиснути до твердого поверхні, після чого портативна діра створює екстрапросторову діру глибиною 10 футів. Циліндричний простір всередині діри існує на іншій площині, тому його не можна використовувати для створення відкритих проходів. Будь-яка істота всередині відкритої портативної діри може вийти з неї, вилізши назовні.\nВи можете використати дію, щоб закрити портативну діру, взявшись за краї тканини і скласти її. Складання тканини закриває діру, а будь-які істоти чи об'єкти всередині залишаються в екстрапросторовому просторі. Незалежно від того, що в ній знаходиться, діра важить майже нічого.\nЯкщо діра складена, істота в екстрапросторовому просторі діри може використати дію, щоб зробити перевірку Сили зі складністю DC 10. При успішній перевірці істота проривається назовні і з'являється в межах 5 футів від портативної діри або істоти, яка її несе. Дихаюча істота всередині закритої портативної діри може вижити до 10 хвилин, після чого починає задихатися.\nРозміщення портативної діри всередині екстрапросторового простору, створеного мішком для зберігання, зручним рюкзаком або подібним предметом миттєво знищує обидва предмети і відкриває ворота до Астральної площини. Ворота виникають там, де один предмет був поміщений всередину іншого. Будь-яка істота в межах 10 футів від воріт затягується через них і опиняється в випадковому місці на Астральній площині. Потім ворота закриваються. Ворота односторонні і не можуть бути повторно відкриті.\"",
    "url": "/api/2014/magic-items/portable-hole",
    "name_ua": "Portable Hole"
  },
  {
    "index": "plate-armor-of-etherealness",
    "name": "Plate Armor of Etherealness",
    "equipment_category": {
      "index": "armor",
      "name": "Armor",
      "url": "/api/2014/equipment-categories/armor"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Броня (латна), легендарна (потребує налаштування)\nПоки ви носите цю броню, ви можете вимовити її командне слово як дію, щоб отримати ефект закляття ефірності, який триває 10 хвилин або до тих пір, поки ви не знімете броню або не використаєте дію для повторного вимовлення командного слова. Ця властивість броні не може бути використана знову до наступного світанку.\"",
    "url": "/api/2014/magic-items/plate-armor-of-etherealness",
    "name_ua": "Plate Armor of Etherealness"
  },
  {
    "index": "periapt-of-proof-against-poison",
    "name": "Periapt of Proof against Poison",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nЦей тонкий срібний ланцюжок має підвіску з блискучим чорним каменем. Коли ви його носите, отрути не діють на вас. Ви маєте імунітет до стану отруєння та імунітет до шкоди від отрут.\"",
    "url": "/api/2014/magic-items/periapt-of-proof-against-poison",
    "name_ua": "Periapt of Proof against Poison"
  },
  {
    "index": "oil-of-sharpness",
    "name": "Oil of Sharpness",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зілля, дуже рідкісне\nЦей прозорий, желеподібний олій блищить дрібними, ультратонкими срібними частинками. Олія може покривати одну різальну або колючу зброю або до 5 одиниць різальної чи колючої боєприпасів. Нанесення олії займає 1 хвилину. Протягом 1 години покрите предмет є магічним і має бонус +3 до атак і шкоди.\"",
    "url": "/api/2014/magic-items/oil-of-sharpness",
    "name_ua": "Oil of Sharpness"
  },
  {
    "index": "oil-of-etherealness",
    "name": "Oil of Etherealness",
    "equipment_category": {
      "index": "potion",
      "name": "Potion",
      "url": "/api/2014/equipment-categories/potion"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зілля, рідкісне\nКраплі цього хмарного сірого масла утворюються на зовнішній стороні його контейнера і швидко випаровуються. Масло може покрити істоту середнього розміру або меншу, разом із спорядженням, яке вона носить і має при собі (для кожної категорії розміру вище середнього потрібна одна додаткова ампула). Нанесення масла займає 10 хвилин. Після цього істота отримує ефект заклинання «ефірність» на 1 годину.\"",
    "url": "/api/2014/magic-items/oil-of-etherealness",
    "name_ua": "Oil of Etherealness"
  },
  {
    "index": "oathbow",
    "name": "Oathbow",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/2014/equipment-categories/weapon"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "",
    "url": "/api/2014/magic-items/oathbow",
    "name_ua": "Oathbow"
  },
  {
    "index": "nine-lives-stealer",
    "name": "Nine Lives Stealer",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/2014/equipment-categories/weapon"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зброя (будь-який меч), дуже рідкісна (потребує налаштування)\nВи отримуєте бонус +2 до атак і пошкоджень, завданих цією магічною зброєю.\nМеч має 1d8 + 1 зарядів. Якщо ви завдасте критичного удару істоті, у якої менше 100 очок здоров'я, вона повинна успішно пройти рятувальний кидок на Конституцію зі складністю 15, інакше буде миттєво вбита, оскільки меч вириває її життєву силу з тіла (конструкт або нежить є імунними). Меч втрачає 1 заряд, якщо істота вбита. Коли у меча не залишиться зарядів, він втрачає цю властивість.\"",
    "url": "/api/2014/magic-items/nine-lives-stealer",
    "name_ua": "Nine Lives Stealer"
  },
  {
    "index": "necklace-of-prayer-beads",
    "name": "Necklace of Prayer Beads",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування для священика, друїда або паладина)\nЦей намисто має 1d4 + 2 магічних намистин, виготовлених з аквамарину, чорної перлини або топазу. Воно також містить багато немагічних намистин, зроблених зі таких каменів, як бурштин, кров'яний камінь, цитрин, корал, нефрит, перлина або кварц. Якщо магічна намистина буде знята з намиста, вона втратить свою магію.\nІснує шість типів магічних намистин. ГМ вирішує тип кожної намистини на намисті або визначає його випадковим чином. Намість може мати більше однієї намистини одного типу. Щоб використати одну з них, ви повинні носити це намисто. Кожна намистина містить заклинання, яке ви можете застосувати як бонусну дію (використовуючи ваш показник порятунку від заклинань, якщо це необхідно). Після того як заклинання з магічної намистини буде застосовано, ця намистина не може бути використана знову до наступного світанку.\n| d20 | Намість... | Заклинання |\n|",
    "url": "/api/2014/magic-items/necklace-of-prayer-beads",
    "name_ua": "Necklace of Prayer Beads"
  },
  {
    "index": "necklace-of-fireballs",
    "name": "Necklace of Fireballs",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nЦей намисто має 1d6 + 3 намистини, що звисають з нього. Ви можете використати дію, щоб від'єднати одну намистину і кинути її на відстань до 60 футів. Коли вона досягне кінця своєї траєкторії, намистина вибухає як заклинання вогняного кулі 3-го рівня (рятувальний кидок СК 15).\nВи можете кидати кілька намистин або навіть усе намисто за одну дію. Коли ви це робите, збільшуйте рівень вогняної кулі на 1 за кожну намистину понад першу.\"",
    "url": "/api/2014/magic-items/necklace-of-fireballs",
    "name_ua": "Necklace of Fireballs"
  },
  {
    "index": "mirror-of-life-trapping",
    "name": "Mirror of Life Trapping",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, дуже рідкісний\nКоли це дзеркало висотою 4 фути спостерігається непрямо, його поверхня показує тьмяні зображення істот. Дзеркало важить 50 фунтів, має клас броні 11, 10 очок здоров'я та вразливість до ударного пошкодження. Воно розбивається і знищується, коли його очки здоров'я знижуються до 0.\nЯкщо дзеркало висить на вертикальній поверхні і ви знаходитесь на відстані до 5 футів від нього, ви можете використати дію, щоб вимовити його командне слово і активувати його. Воно залишається активним, поки ви не використаєте дію для повторного вимовляння командного слова.\nБудь-яка істота, окрім вас, яка бачить своє відображення в активованому дзеркалі на відстані до 30 футів, повинна успішно пройти рятувальний кидок Харизми зі складністю DC 15 або бути затриманою разом з усім, що вона носить або тримає, в одній з дванадцяти екстрадиційних камер дзеркала. Цей рятувальний кидок виконується з перевагою, якщо істота знає природу дзеркала, а конструкції автоматично успішно проходять рятувальний кидок.\nЕкстрадиційна камера — це безмежний простір, заповнений густим туманом, який зменшує видимість до 10 футів. Істоти, затримані в камерах дзеркала, не старіють і не потребують їжі, води чи сну. Істота, затримана в камері, може втекти за допомогою магії, яка дозволяє планарні подорожі. В іншому випадку істота залишається в камері до звільнення.\nЯкщо дзеркало затримує істоту, але його дванадцять екстрадиційних камер вже зайняті, дзеркало звільняє одну випадкову затриману істоту для розміщення нового ув'язненого. Звільнена істота з'являється в незайнятому просторі в полі зору дзеркала, але обернена від нього. Якщо дзеркало розбите, всі істоти, які воно містить, звільняються і з'являються в незайнятих просторах поблизу нього.\nПоки ви знаходитесь на відстані до 5 футів від дзеркала, ви можете використати дію для вимовляння імені однієї істоти, затриманої в ньому, або назвати певну камеру за номером. Істота названа або міститься в названій камері з'являється як зображення на поверхні дзеркала. Ви та істота можете спілкуватися нормально.\nПодібним чином ви можете використати дію для вимовляння другого командного слова і звільнити одну істоту, затриману в дзеркалі. Звільнена істота з'являється разом зі своїми речами у найближчому незайнятому просторі біля дзеркала і обернена від нього.\"",
    "url": "/api/2014/magic-items/mirror-of-life-trapping",
    "name_ua": "Mirror of Life Trapping"
  },
  {
    "index": "marvelous-pigments",
    "name": "Marvelous Pigments",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, дуже рідкісний\nЗазвичай ці пігменти знаходяться в 1d4 горщиках всередині гарної дерев'яної коробки з пензлем (вагою 1 фунт загалом). Вони дозволяють створювати тривимірні об'єкти, малюючи їх у двох вимірах. Фарба тече з пензля, формуючи бажаний об'єкт, поки ви концентруєтеся на його образі.\nКожен горщик фарби достатній для покриття 1,000 квадратних футів поверхні, що дозволяє створювати неживі об'єкти або елементи ландшафту - такі як двері, яма, квіти, дерева, камери, кімнати або зброя - об'ємом до 10,000 кубічних футів. Потрібно 10 хвилин, щоб покрити 100 квадратних футів.\nКоли ви завершуєте малювання, зображений об'єкт або елемент ландшафту стає реальним, немагічним об'єктом. Таким чином, малювання дверей на стіні створює справжні двері, які можна відкрити до того, що знаходиться за ними. Малювання ями на підлозі створює реальну яму, і її глибина враховується в загальній площі об'єктів, які ви створюєте.\nНічого створеного пігментами не може мати цінність більше 25 золотих монет. Якщо ви малюєте об'єкт більшої вартості (наприклад, діамант або купу золота), об'єкт виглядає автентичним, але при близькому огляді виявляється зробленим з пасти, кістки або іншого безцінного матеріалу.\nЯкщо ви малюєте форму енергії, таку як вогонь або блискавка, енергія з'являється, але розсіюється щойно ви завершуєте малювання, не завдаючи шкоди нічому.\"",
    "url": "/api/2014/magic-items/marvelous-pigments",
    "name_ua": "Marvelous Pigments"
  },
  {
    "index": "manual-of-quickness-of-action",
    "name": "Manual of Quickness of Action",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, дуже рідкісний\nЦя книга містить вправи на координацію та баланс, а її слова наповнені магією. Якщо ви витратите 48 годин протягом 6 днів або менше на вивчення змісту книги та практикування її рекомендацій, ваш показник Ловкості збільшується на 2, як і ваш максимум для цього показника. Потім посібник втрачає свою магію, але відновлює її через століття.\"",
    "url": "/api/2014/magic-items/manual-of-quickness-of-action",
    "name_ua": "Manual of Quickness of Action"
  },
  {
    "index": "manual-of-golems-stone",
    "name": "Manual of Stone Golems",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, дуже рідкісний\nЦей том містить інформацію та заклинання, необхідні для створення кам'яного голема. Щоб розшифрувати та використовувати посібник, ви повинні бути заклинателем з принаймні двома слотами 5-го рівня. Створіння, яке не може використовувати посібник големів і намагається його прочитати, отримує 6d6 психічної шкоди.\nЩоб створити голема, ви повинні витратити 90 днів, працюючи без перерви з посібником під рукою та відпочиваючи не більше 8 годин на день. Вам також потрібно заплатити 80 000 золотих монет за придбання матеріалів.\nКоли ви закінчите створення голема, книга згорає в потойбічному полум'ї. Голем стає анімованим, коли попіл з посібника посипають на нього. Він під вашим контролем і розуміє та підкоряється вашим усним командам.\"",
    "url": "/api/2014/magic-items/manual-of-golems-stone",
    "name_ua": "Manual of Stone Golems"
  },
  {
    "index": "manual-of-golems-iron",
    "name": "Manual of Iron Golems",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "Дивовижний предмет, дуже рідкісний\nЦей том містить інформацію та заклинання, необхідні для створення залізного голема. Щоб розшифрувати та використовувати посібник, ви повинні бути заклинателем з принаймні двома слотами 5-го рівня. Створіння, яке не може використовувати посібник големів і намагається його прочитати, отримує 6d6 психічних ушкоджень.\nЩоб створити голема, ви повинні витратити 120 днів, працюючи без перерви з посібником під рукою та відпочиваючи не більше 8 годин на день. Вам також потрібно сплатити 100 000 золотих монет для придбання матеріалів.\nКоли ви завершите створення голема, книга згорає в потойбічному полум'ї. Голем стає анімованим, коли на нього посипаються попіл з посібника. Він перебуває під вашим контролем і розуміє та підкоряється вашим усним командам.",
    "url": "/api/2014/magic-items/manual-of-golems-iron",
    "name_ua": "Manual of Iron Golems"
  },
  {
    "index": "manual-of-golems-flesh",
    "name": "Manual of Flesh Golems",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, дуже рідкісний\nЦей том містить інформацію та заклинання, необхідні для створення плотяного голема. Щоб розшифрувати та використовувати посібник, ви повинні бути заклинателем з принаймні двома слотами 5-го рівня. Створіння, яке не може використовувати посібник големів і намагається його прочитати, отримує 6d6 психічної шкоди.\nЩоб створити голема, ви повинні витратити 60 днів, працюючи без перерви з посібником у руках і відпочиваючи не більше 8 годин на день. Вам також потрібно заплатити 50 000 золотих монет за придбання матеріалів.\nПісля завершення створення голема книга згорає в потойбічному полум'ї. Голем оживає, коли на нього посипаються попіл з посібника. Він під вашим контролем і розуміє та підкоряється вашим усним командам.\"",
    "url": "/api/2014/magic-items/manual-of-golems-flesh",
    "name_ua": "Manual of Flesh Golems"
  },
  {
    "index": "manual-of-golems-clay",
    "name": "Manual of Clay Golems",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, дуже рідкісний\nЦей том містить інформацію та заклинання, необхідні для створення глиняного голема. Щоб розшифрувати та використовувати посібник, ви повинні бути заклинателем з принаймні двома слотами заклинань 5-го рівня. Створіння, яке не може використовувати посібник големів і намагається його прочитати, отримує 6d6 психічної шкоди.\nЩоб створити голема, ви повинні витратити 30 днів, працюючи без перерви з посібником під рукою та відпочиваючи не більше 8 годин на день. Вам також потрібно сплатити 65 000 золотих монет за придбання матеріалів.\nКоли ви завершите створення голема, книга згорає в потойбічному полум'ї. Голем стає анімованим, коли на нього посипаються попіл з посібника. Він перебуває під вашим контролем і розуміє та підкоряється вашим усним командам.\"",
    "url": "/api/2014/magic-items/manual-of-golems-clay",
    "name_ua": "Manual of Clay Golems"
  },
  {
    "index": "manual-of-golems",
    "name": "Manual of Golems",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [
      {
        "index": "manual-of-golems-clay",
        "name": "Manual of Clay Golems",
        "url": "/api/2014/magic-items/manual-of-golems-clay"
      },
      {
        "index": "manual-of-golems-flesh",
        "name": "Manual of Flesh Golems",
        "url": "/api/2014/magic-items/manual-of-golems-flesh"
      },
      {
        "index": "manual-of-golems-iron",
        "name": "Manual of Iron Golems",
        "url": "/api/2014/magic-items/manual-of-golems-iron"
      },
      {
        "index": "manual-of-golems-stone",
        "name": "Manual of Stone Golems",
        "url": "/api/2014/magic-items/manual-of-golems-stone"
      }
    ],
    "variant": false,
    "desc": "Дивовижний предмет, дуже рідкісний\nЦей том містить інформацію та заклинання, необхідні для створення певного типу голема. Ведучий гри обирає тип або визначає його випадковим чином. Щоб розшифрувати та використовувати посібник, ви повинні бути заклинателем з принаймні двома слотами 5-го рівня. Створіння, яке не може використовувати посібник големів і намагається його прочитати, отримує 6d6 психічних ушкоджень.\n| d20 | Голем | Час | Вартість |\n|",
    "url": "/api/2014/magic-items/manual-of-golems",
    "name_ua": "Manual of Golems"
  },
  {
    "index": "manual-of-gainful-exercise",
    "name": "Manual of Gainful Exercise",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, дуже рідкісний\nЦя книга описує вправи для фізичної форми, і її слова наповнені магією. Якщо ви витратите 48 годин протягом 6 днів або менше на вивчення змісту книги та практикування її рекомендацій, ваш показник Сили збільшиться на 2, як і ваш максимум для цього показника. Потім посібник втрачає свою магію, але відновлює її через століття.\"",
    "url": "/api/2014/magic-items/manual-of-gainful-exercise",
    "name_ua": "Manual of Gainful Exercise"
  },
  {
    "index": "manual-of-bodily-health",
    "name": "Manual of Bodily Health",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, дуже рідкісний\nЦя книга містить поради щодо здоров'я та дієти, а її слова наповнені магією. Якщо ви витратите 48 годин протягом 6 днів або менше на вивчення змісту книги та практикування її рекомендацій, ваш показник Конституції збільшується на 2, як і ваш максимум для цього показника. Потім посібник втрачає свою магію, але відновлює її через століття.\"",
    "url": "/api/2014/magic-items/manual-of-bodily-health",
    "name_ua": "Manual of Bodily Health"
  },
  {
    "index": "mantle-of-spell-resistance",
    "name": "Mantle of Spell Resistance",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nПоки ви носите цей плащ, ви маєте перевагу в рятувальних кидках проти заклинань.\"",
    "url": "/api/2014/magic-items/mantle-of-spell-resistance",
    "name_ua": "Mantle of Spell Resistance"
  },
  {
    "index": "mace-of-terror",
    "name": "Mace of Terror",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/2014/equipment-categories/weapon"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зброя (булава), рідкісна (потребує налаштування)\nЦя магічна зброя має 3 заряди. Тримаючи її, ви можете використати дію та витратити 1 заряд, щоб випустити хвилю жаху. Кожна істота на ваш вибір в радіусі 30 футів від вас повинна успішно пройти рятувальний кидок Мудрості зі складністю 15, інакше вона стане наляканою вас на 1 хвилину. Поки істота налякана таким чином, вона повинна намагатися рухатися якомога далі від вас і не може добровільно переміщатися в простір в межах 30 футів від вас. Вона також не може здійснювати реакції. Для своєї дії вона може використовувати лише дію Ривок або намагатися втекти від ефекту, який заважає їй рухатися. Якщо немає місця для руху, істота може використовувати дію Ухилення. Наприкінці кожного свого ходу істота може повторити рятувальний кидок, припиняючи ефект на собі при успіху.\nБулава відновлює 1d3 витрачених зарядів щодня на світанку.\"",
    "url": "/api/2014/magic-items/mace-of-terror",
    "name_ua": "Mace of Terror"
  },
  {
    "index": "mace-of-smiting",
    "name": "Mace of Smiting",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/2014/equipment-categories/weapon"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зброя (булава), рідкісна\nВи отримуєте бонус +1 до кидків атаки та пошкоджень, зроблених цією магічною зброєю. Бонус збільшується до +3, коли ви використовуєте булаву для атаки конструкції.\nКоли ви кидаєте 20 на кидку атаки з цією зброєю, ціль отримує додаткові 2d6 ушкоджень від удару, або 4d6 ушкоджень від удару, якщо це конструкція. Якщо конструкція має 25 або менше очок здоров'я після отримання цих ушкоджень, вона знищується.\"",
    "url": "/api/2014/magic-items/mace-of-smiting",
    "name_ua": "Mace of Smiting"
  },
  {
    "index": "mace-of-disruption",
    "name": "Mace of Disruption",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/2014/equipment-categories/weapon"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зброя (булава), рідкісна (потребує налаштування)\nКоли ви вражаєте демонічну істоту або нежить цією магічною зброєю, ця істота отримує додаткові 2d6 радіантного пошкодження. Якщо після цього пошкодження ціль має 25 або менше очок здоров'я, вона повинна успішно пройти рятувальний кидок Мудрості зі складністю 15, інакше буде знищена. У разі успішного кидка істота стає наляканою вами до кінця вашого наступного ходу.\nПоки ви тримаєте цю зброю, вона випромінює яскраве світло в радіусі 20 футів і тьмяне світло ще на 20 футів.\"",
    "url": "/api/2014/magic-items/mace-of-disruption",
    "name_ua": "Mace of Disruption"
  },
  {
    "index": "luck-blade",
    "name": "Luck Blade",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/2014/equipment-categories/weapon"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зброя (будь-який меч), легендарна (потребує налаштування)\nВи отримуєте бонус +1 до атак і пошкоджень, завданих цією магічною зброєю. Поки меч знаходиться при вас, ви також отримуєте бонус +1 до рятувальних кидків.\n***Удача.*** Якщо меч знаходиться при вас, ви можете покликати на його удачу (без дії) для повторного кидка одного атаки, перевірки здібності або рятувального кидка, який вам не подобається. Ви повинні використати другий кидок. Цю властивість не можна використовувати знову до наступного світанку.\n***Бажання.*** Меч має 1d4 - 1 зарядів. Тримаючи його, ви можете використати дію, щоб витратити 1 заряд і здійснити заклинання бажання з нього. Цю властивість не можна використовувати знову до наступного світанку. Меч втрачає цю властивість, якщо в нього немає зарядів.\"",
    "url": "/api/2014/magic-items/luck-blade",
    "name_ua": "Luck Blade"
  },
  {
    "index": "iron-flask",
    "name": "Iron Flask",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, легендарний\nЦя залізна пляшка має латунну кришку. Ви можете використати дію, щоб вимовити командне слово пляшки, націлившись на істоту, яку ви можете бачити в межах 60 футів від вас. Якщо ціль є рідною для іншого плану існування, ніж той, на якому ви перебуваєте, ціль повинна успішно пройти рятувальний кидок Мудрості зі складністю 17, і",
    "url": "/api/2014/magic-items/iron-flask",
    "name_ua": "Iron Flask"
  },
  {
    "index": "iron-bands-of-binding",
    "name": "Iron Bands of Binding",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nЦя іржава залізна сфера має діаметр 3 дюйми і важить 1 фунт. Ви можете використати дію, щоб вимовити слово команди та кинути сферу в істоту розміром Великий або менше, яку ви бачите на відстані до 60 футів від себе. Коли сфера рухається в повітрі, вона розкривається в клубок металевих смуг.\nЗробіть дальній атакувальний кидок з бонусом атаки, рівним вашому модифікатору Ловкості плюс ваш бонус майстерності. При попаданні ціль стає обмеженою до тих пір, поки ви не використаєте бонусну дію, щоб знову вимовити слово команди для її звільнення. Якщо ви це зробите або промахнетеся з атакою, смуги стискаються і знову стають сферою.\nІстота, включаючи ту, що обмежена, може використати дію для виконання перевірки Сили зі складністю DC 20, щоб зламати залізні смуги. У разі успіху предмет знищується, і обмежена істота звільняється. Якщо перевірка не вдається, будь-які подальші спроби цієї істоти автоматично зазнають невдачі до тих пір, поки не мине 24 години.\nПісля використання смуг вони більше не можуть бути використані до наступного світанку.\"",
    "url": "/api/2014/magic-items/iron-bands-of-binding",
    "name_ua": "Iron Bands of Binding"
  },
  {
    "index": "ioun-stone-of-sustenance",
    "name": "Ioun Stone of Sustenance",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nКамінь Іуна названий на честь Іуна, бога знань і пророцтв, якого шанують на деяких світах. Існує багато типів каменів Іуна, кожен з яких є унікальним поєднанням форми та кольору.\nКоли ви використовуєте дію, щоб кинути один з цих каменів у повітря, камінь обертається навколо вашої голови на відстані 1d3 фути і надає вам перевагу. Після цього інша істота повинна використати дію, щоб схопити або сіткою взяти камінь, відокремивши його від вас, зробивши успішний кидок атаки проти AC 24 або успішну перевірку ДК 24 Dexterity (Акробатика). Ви можете використати дію, щоб захопити і прибрати камінь, завершивши його ефект.\nКамінь має AC 24, 10 очок здоров'я та опір до всіх видів пошкоджень. Він вважається предметом, який носиться на голові, поки обертається навколо неї.\n***Підтримка життя.*** Вам не потрібно їсти чи пити, поки цей прозорий веретеноподібний камінь обертається навколо вашої голови.\"",
    "url": "/api/2014/magic-items/ioun-stone-of-sustenance",
    "name_ua": "Ioun Stone of Sustenance"
  },
  {
    "index": "ioun-stone-of-strength",
    "name": "Ioun Stone of Strength",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, дуже рідкісний (потребує налаштування)\nКамінь Іуна названий на честь Іуна, бога знань і пророцтв, якого шанують на деяких світах. Існує багато типів каменів Іуна, кожен з яких є унікальним поєднанням форми та кольору.\nКоли ви використовуєте дію, щоб кинути один з цих каменів у повітря, камінь обертається навколо вашої голови на відстані 1d3 фути та надає вам перевагу. Після цього інша істота повинна використати дію, щоб схопити або сіткою забрати камінь, відокремивши його від вас, зробивши успішний кидок атаки проти AC 24 або успішну перевірку ДК 24 Dexterity (Акробатика). Ви можете використати дію, щоб захопити і прибрати камінь, завершивши його ефект.\nКамінь має AC 24, 10 очок здоров'я та опір до всіх видів пошкоджень. Він вважається предметом, який носиться на вас, поки обертається навколо вашої голови.\n***Сила.*** Ваш показник Сили збільшується на 2, до максимуму 20, поки цей блідо-блакитний ромбоїд обертається навколо вашої голови.\"",
    "url": "/api/2014/magic-items/ioun-stone-of-strength",
    "name_ua": "Ioun Stone of Strength"
  },
  {
    "index": "ioun-stone-of-reserve",
    "name": "Ioun Stone of Reserve",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nКамінь Іоун названий на честь Іоун, бога знань і пророцтв, якого шанують на деяких світах. Існує багато типів каменів Іоун, кожен з яких є унікальним поєднанням форми та кольору.\nКоли ви використовуєте дію, щоб кинути один з цих каменів у повітря, камінь обертається навколо вашої голови на відстані 1d3 фути і надає вам перевагу. Після цього інша істота повинна використати дію, щоб схопити або затримати камінь, відокремивши його від вас, зробивши успішний кидок атаки проти AC 24 або успішну перевірку ДК 24 Ловкості (Акробатика). Ви можете використати дію, щоб захопити і прибрати камінь, завершивши його ефект.\nКамінь має AC 24, 10 очок здоров'я та опір до всіх видів пошкоджень. Він вважається предметом, який носиться на голові під час обертання навколо неї.\n***Резерв.*** Цей яскравий пурпурний призматичний камінь зберігає заклинання, які в нього кидають, утримуючи їх до моменту використання. Камінь може зберігати до 3 рівнів заклинань одночасно. Коли його знаходять, він містить 1d4 - 1 рівнів заклинань, обраних ГМ.\nБудь-яка істота може кинути заклинання 1-го до 3-го рівня в камінь, торкнувшись його під час кидка заклинання. Заклинання не має ефекту, окрім як бути збереженим у камені. Якщо камінь не може вмістити заклинання, воно витрачається без ефекту. Рівень гнізда, використаного для кидка заклинання, визначає скільки місця воно займає.\nПоки цей камінь обертається навколо вашої голови, ви можете кидати будь-яке заклинання, яке в ньому збережено. Заклинання використовує рівень гнізда, ДК порятунку від заклинань, бонус атаки заклинань і здібність заклинателя оригінального кастера, але інакше розглядається так, ніби ви самі його кинули. Заклинання, кинуте з каменя, більше не зберігається в ньому, звільняючи місце.\"",
    "url": "/api/2014/magic-items/ioun-stone-of-reserve",
    "name_ua": "Ioun Stone of Reserve"
  },
  {
    "index": "ioun-stone-of-regeneration",
    "name": "Ioun Stone of Regeneration",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, легендарний (потребує налаштування)\nКамінь Іоун названий на честь Іоун, бога знань і пророцтв, якого шанують на деяких світах. Існує багато типів каменів Іоун, кожен з яких є унікальним поєднанням форми та кольору.\nКоли ви використовуєте дію, щоб кинути один з цих каменів у повітря, камінь обертається навколо вашої голови на відстані 1d3 фути і надає вам перевагу. Після цього інша істота повинна використати дію, щоб схопити або сіткою взяти камінь, відокремивши його від вас, зробивши успішний кидок атаки проти AC 24 або успішну перевірку DC 24 Декстеритету (Акробатика). Ви можете використати дію, щоб захопити і прибрати камінь, завершивши його ефект.\nКамінь має AC 24, 10 очок здоров'я та опір до всіх видів пошкоджень. Він вважається предметом, який носиться на голові під час обертання навколо неї.\n***Регенерація.*** Ви відновлюєте 15 очок здоров'я в кінці кожної години, поки цей перловий білий веретено обертається навколо вашої голови, за умови, що у вас є хоча б 1 очко здоров'я.\"",
    "url": "/api/2014/magic-items/ioun-stone-of-regeneration",
    "name_ua": "Ioun Stone of Regeneration"
  },
  {
    "index": "ioun-stone-of-protection",
    "name": "Ioun Stone of Protection",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nКамінь Іоун названий на честь Іоун, бога знань і пророцтв, якого шанують на деяких світах. Існує багато типів каменів Іоун, кожен з яких є унікальним поєднанням форми та кольору.\nКоли ви використовуєте дію, щоб кинути один з цих каменів у повітря, камінь обертається навколо вашої голови на відстані 1d3 фути і надає вам перевагу. Після цього інша істота повинна використати дію, щоб схопити або затримати камінь, відокремивши його від вас, зробивши успішний атакувальний кидок проти AC 24 або успішну перевірку ДК 24 Dexterity (Акробатика). Ви можете використати дію, щоб захопити і прибрати камінь, завершивши його ефект.\nКамінь має AC 24, 10 очок здоров'я та опір до всіх видів пошкоджень. Він вважається предметом, який носиться на голові під час обертання навколо неї.\n***Захист.*** Ви отримуєте бонус +1 до AC, поки цей рожевий призматичний камінь пилу обертається навколо вашої голови.\"",
    "url": "/api/2014/magic-items/ioun-stone-of-protection",
    "name_ua": "Ioun Stone of Protection"
  },
  {
    "index": "ioun-stone-of-mastery",
    "name": "Ioun Stone of Mastery",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, легендарний (потребує налаштування)\nКамінь Іоун названий на честь Іоун, бога знань і пророцтв, якого шанують на деяких світах. Існує багато типів каменів Іоун, кожен з яких є унікальним поєднанням форми та кольору.\nКоли ви використовуєте дію, щоб кинути один з цих каменів у повітря, камінь обертається навколо вашої голови на відстані 1d3 фути та надає вам перевагу. Після цього інша істота повинна використати дію, щоб схопити або затримати камінь, відокремивши його від вас, зробивши успішний атакувальний кидок проти AC 24 або успішну перевірку ДК 24 Ловкості (Акробатика). Ви можете використати дію, щоб захопити та прибрати камінь, завершивши його ефект.\nКамінь має AC 24, 10 очок здоров'я та опір до всіх видів пошкоджень. Він вважається предметом, який носиться на вас, поки обертається навколо вашої голови.\n***Майстерність.*** Ваш бонус майстерності збільшується на 1, поки цей блідо-зелений призма обертається навколо вашої голови.\"",
    "url": "/api/2014/magic-items/ioun-stone-of-mastery",
    "name_ua": "Ioun Stone of Mastery"
  },
  {
    "index": "ioun-stone-of-leadership",
    "name": "Ioun Stone of Leadership",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, дуже рідкісний (потребує налаштування)\nКамінь Іоун названий на честь Іоун, бога знань і пророцтв, якого шанують на деяких світах. Існує багато типів каменів Іоун, кожен з яких є унікальним поєднанням форми та кольору.\nКоли ви використовуєте дію, щоб кинути один з цих каменів у повітря, камінь обертається навколо вашої голови на відстані 1d3 фути і надає вам перевагу. Після цього інша істота повинна використати дію, щоб схопити або зловити камінь, відокремивши його від вас, зробивши успішний кидок атаки проти AC 24 або успішну перевірку ДК 24 Dexterity (Акробатика). Ви можете використати дію, щоб захопити і прибрати камінь, завершивши його ефект.\nКамінь має AC 24, 10 очок здоров'я та опір до всіх видів пошкоджень. Він вважається предметом, який носиться на голові, поки обертається навколо неї.\n***Лідерство.*** Ваш показник Харизми збільшується на 2, до максимуму 20, поки ця мармурова рожево-зелена сфера обертається навколо вашої голови.\"",
    "url": "/api/2014/magic-items/ioun-stone-of-leadership",
    "name_ua": "Ioun Stone of Leadership"
  },
  {
    "index": "ioun-stone-of-intellect",
    "name": "Ioun Stone of Intellect",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, дуже рідкісний (потребує налаштування)\nКамінь Іоун названий на честь Іоун, бога знань і пророцтв, якого шанують на деяких світах. Існує багато видів каменів Іоун, кожен з яких є унікальним поєднанням форми та кольору.\nКоли ви використовуєте дію, щоб кинути один з цих каменів у повітря, камінь обертається навколо вашої голови на відстані 1d3 фути і надає вам перевагу. Після цього інша істота повинна використати дію, щоб схопити або затримати камінь, відокремивши його від вас, зробивши успішний атакувальний кидок проти AC 24 або успішну перевірку ДК 24 Dexterity (Акробатика). Ви можете використати дію, щоб захопити і прибрати камінь, завершивши його ефект.\nКамінь має AC 24, 10 очок здоров'я та опір до всіх видів пошкоджень. Він вважається предметом, який носиться на голові під час обертання навколо неї.\n***Інтелект.*** Ваш показник Інтелекту збільшується на 2, до максимуму 20, поки ця мармурова червона та синя сфера обертається навколо вашої голови.\"",
    "url": "/api/2014/magic-items/ioun-stone-of-intellect",
    "name_ua": "Ioun Stone of Intellect"
  },
  {
    "index": "ioun-stone-of-insight",
    "name": "Ioun Stone of Insight",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, дуже рідкісний (потребує налаштування)\nКамінь Іуна названий на честь Іуна, бога знань і пророцтв, якого шанують на деяких світах. Існує багато типів каменів Іуна, кожен з яких є унікальним поєднанням форми та кольору.\nКоли ви використовуєте дію, щоб кинути один з цих каменів у повітря, камінь обертається навколо вашої голови на відстані 1d3 фути і надає вам перевагу. Після цього інша істота повинна використати дію, щоб схопити або затримати камінь, відокремивши його від вас, зробивши успішний атакувальний кидок проти AC 24 або успішну перевірку ДК 24 Dexterity (Акробатика). Ви можете використати дію, щоб захопити та прибрати камінь, завершивши його ефект.\nКамінь має AC 24, 10 очок здоров'я та опір до всіх видів пошкоджень. Він вважається предметом, який носиться на вас, поки обертається навколо вашої голови.\n***Проникливість.*** Ваш показник Мудрості збільшується на 2, до максимуму 20, поки ця світлова синя сфера обертається навколо вашої голови.\"",
    "url": "/api/2014/magic-items/ioun-stone-of-insight",
    "name_ua": "Ioun Stone of Insight"
  },
  {
    "index": "ioun-stone-of-greater-absorption",
    "name": "Ioun Stone of Greater Absorption",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, легендарний (потребує налаштування)\nКамінь Іуна названий на честь Іуна, бога знань і пророцтв, якого шанують на деяких світах. Існує багато типів каменів Іуна, кожен з яких є унікальним поєднанням форми та кольору.\nКоли ви використовуєте дію, щоб кинути один з цих каменів у повітря, камінь обертається навколо вашої голови на відстані 1d3 фути і надає вам перевагу. Після цього інша істота повинна використати дію, щоб схопити або затримати камінь, відокремивши його від вас, зробивши успішний атакувальний кидок проти AC 24 або успішну перевірку ДК 24 Ловкості (Акробатика). Ви можете використати дію, щоб захопити і прибрати камінь, завершивши його ефект.\nКамінь має AC 24, 10 очок здоров'я та опір до всіх видів ушкоджень. Він вважається предметом, який носиться на голові під час обертання навколо неї.\n***Покращене всмоктування.*** Поки цей мармуровий лавандово-зелений еліпсоїд обертається навколо вашої голови, ви можете використати свою реакцію, щоб скасувати заклинання 8-го рівня або нижче, яке було кинуте істотою, яку ви бачите і яка націлена лише на вас.\nЯкщо камінь скасував 50 рівнів заклинань, він вигоряє і стає тьмяно-сірим, втрачаючи свою магію. Якщо ви стаєте мішенню заклинання, рівень якого вищий за кількість рівнів заклинань, що залишилися в камені, камінь не може його скасувати.\"",
    "url": "/api/2014/magic-items/ioun-stone-of-greater-absorption",
    "name_ua": "Ioun Stone of Greater Absorption"
  },
  {
    "index": "ioun-stone-of-fortitude",
    "name": "Ioun Stone of Fortitude",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, дуже рідкісний (потребує налаштування)\nКамінь Іуна названий на честь Іуна, бога знань і пророцтв, якого шанують на деяких світах. Існує багато типів каменів Іуна, кожен з яких є унікальним поєднанням форми та кольору.\nКоли ви використовуєте дію, щоб кинути один з цих каменів у повітря, камінь обертається навколо вашої голови на відстані 1d3 фути і надає вам перевагу. Після цього інша істота повинна використати дію, щоб схопити або зловити камінь, відокремивши його від вас, зробивши успішний атакувальний кидок проти AC 24 або успішну перевірку ДК 24 Dexterity (Акробатика). Ви можете використати дію, щоб захопити і прибрати камінь, завершивши його ефект.\nКамінь має AC 24, 10 очок здоров'я та опір до всіх видів пошкоджень. Він вважається предметом, який носиться на голові, поки обертається навколо неї.\n***Стійкість.*** Ваш показник Конституції збільшується на 2, до максимуму 20, поки цей рожевий ромбоїд обертається навколо вашої голови.\"",
    "url": "/api/2014/magic-items/ioun-stone-of-fortitude",
    "name_ua": "Ioun Stone of Fortitude"
  },
  {
    "index": "ioun-stone-of-awareness",
    "name": "Ioun Stone of Awareness",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nКамінь Іоун названий на честь Іоун, бога знань і пророцтв, якого шанують на деяких світах. Існує багато типів каменів Іоун, кожен з яких є унікальним поєднанням форми та кольору.\nКоли ви використовуєте дію, щоб кинути один з цих каменів у повітря, камінь обертається навколо вашої голови на відстані 1d3 фути і надає вам перевагу. Після цього інша істота повинна використати дію, щоб схопити або затримати камінь, відокремивши його від вас, зробивши успішний кидок атаки проти AC 24 або успішну перевірку ДК 24 Dexterity (Акробатика). Ви можете використати дію, щоб захопити і прибрати камінь, завершивши його ефект.\nКамінь має AC 24, 10 очок здоров'я та опір до всіх видів ушкоджень. Він вважається предметом, який носиться на голові, поки обертається навколо неї.\n***Увага.*** Ви не можете бути здивовані, поки цей темно-синій ромбоїд обертається навколо вашої голови.\"",
    "url": "/api/2014/magic-items/ioun-stone-of-awareness",
    "name_ua": "Ioun Stone of Awareness"
  },
  {
    "index": "ioun-stone-of-agility",
    "name": "Ioun Stone of Agility",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, дуже рідкісний (потребує налаштування)\nКамінь Іоун названий на честь Іоун, бога знань і пророцтв, якого шанують на деяких світах. Існує багато типів каменів Іоун, кожен з яких є унікальним поєднанням форми та кольору.\nКоли ви використовуєте дію, щоб кинути один з цих каменів у повітря, камінь обертається навколо вашої голови на відстані 1d3 фути і надає вам перевагу. Після цього інша істота повинна використати дію, щоб схопити або затримати камінь, відокремивши його від вас, зробивши успішний атакувальний кидок проти AC 24 або успішну перевірку ДК 24 Dexterity (Акробатика). Ви можете використати дію, щоб захопити і прибрати камінь, завершивши його ефект.\nКамінь має AC 24, 10 очок здоров'я та опір до всіх видів пошкоджень. Він вважається предметом, який носиться на вас, поки обертається навколо вашої голови.\n***Спритність.*** Ваш показник Dexterity збільшується на 2, до максимуму 20, поки ця глибоко червона сфера обертається навколо вашої голови.\"",
    "url": "/api/2014/magic-items/ioun-stone-of-agility",
    "name_ua": "Ioun Stone of Agility"
  },
  {
    "index": "ioun-stone-of-absorption",
    "name": "Ioun Stone of Absorption",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, дуже рідкісний (потребує налаштування)\nКамінь Іуна названий на честь Іуна, бога знань і пророцтв, якого шанують на деяких світах. Існує багато видів каменів Іуна, кожен з яких є унікальним поєднанням форми та кольору.\nКоли ви використовуєте дію, щоб кинути один з цих каменів у повітря, камінь обертається навколо вашої голови на відстані 1d3 фути і надає вам перевагу. Після цього інша істота повинна використати дію, щоб схопити або затримати камінь, відокремивши його від вас, зробивши успішний атакувальний кидок проти AC 24 або успішну перевірку ДК 24 Dexterity (Акробатика). Ви можете використати дію, щоб захопити і прибрати камінь, завершивши його ефект.\nКамінь має AC 24, 10 очок здоров'я та опір до всіх видів пошкоджень. Він вважається предметом, який носиться на голові, поки обертається навколо неї.\n***Поглинання.*** Поки цей блідо-лавандовий еліпсоїд обертається навколо вашої голови, ви можете використати свою реакцію, щоб скасувати заклинання 4-го рівня або нижче, яке було кинуте істотою, яку ви бачите і яке націлене лише на вас.\nЯкщо камінь скасував заклинання на сумарну кількість рівнів 20, він вигоряє і стає тьмяно-сірим, втрачаючи свою магію. Якщо ви стаєте мішенню заклинання з рівнем вищим за кількість рівнів заклинань, що залишилися у каменя, він не може його скасувати.\"",
    "url": "/api/2014/magic-items/ioun-stone-of-absorption",
    "name_ua": "Ioun Stone of Absorption"
  },
  {
    "index": "instant-fortress",
    "name": "Instant Fortress",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nВи можете використати дію, щоб розмістити цей металевий куб розміром 1 дюйм на землі та вимовити його командне слово. Куб швидко перетворюється на фортецю, яка залишається, поки ви не використаєте дію для вимови командного слова, яке її скасовує, що працює лише якщо фортеця порожня.\nФортеця має форму квадратної вежі розміром 20 футів з кожного боку і висотою 30 футів, з бійницями з усіх сторін і зубчастим парапетом зверху. Її внутрішній простір поділений на два поверхи, з драбиною, що проходить вздовж однієї стіни для їх з'єднання. Драбина закінчується люком, що веде на дах. При активації вежа має невеликі двері зі сторони, що дивиться на вас. Двері відкриваються лише за вашою командою, яку ви можете вимовити як бонусну дію. Вони імунні до заклинання \"удар\" та подібної магії, такої як дзвінок відкриття.\nКожна істота в зоні появи фортеці повинна зробити рятувальний кидок Ловкості зі Складністю 15, отримуючи 10d10 ушкоджень від удару при невдалому кидку або половину цієї кількості при вдалому. У будь-якому випадку істота відштовхується до незайнятого простору зовні, але поруч із фортецею. Об'єкти в зоні, які не носяться і не несуться, отримують ці ушкодження і автоматично відштовхуються.\nВежа виготовлена з адамантину, а її магія запобігає її перекиданню. Дах, двері та стіни мають по 100 очок здоров'я,\nімунітет до ушкоджень від немагічної зброї за винятком облогової зброї та опір до всіх інших ушкоджень. Лише заклинання бажання може відновити фортецю (це використання заклинання вважається відтворенням заклинання 8-го рівня або нижче). Кожне використання бажання дозволяє даху, дверям або одній зі стін відновити 50 очок здоров'я.\"",
    "url": "/api/2014/magic-items/instant-fortress",
    "name_ua": "Instant Fortress"
  },
  {
    "index": "horseshoes-of-speed",
    "name": "Horseshoes of Speed",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nЦі залізні підкови йдуть у комплекті з чотирьох штук. Коли всі чотири підкови закріплені на копитах коня або подібної істоти, вони збільшують швидкість ходьби істоти на 30 футів.\"",
    "url": "/api/2014/magic-items/horseshoes-of-speed",
    "name_ua": "Horseshoes of Speed"
  },
  {
    "index": "horseshoes-of-a-zephyr",
    "name": "Horseshoes of a Zephyr",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, дуже рідкісний\nЦі залізні підкови йдуть у комплекті з чотирьох штук. Коли всі чотири підкови закріплені на копитах коня або подібної істоти, вони дозволяють істоті рухатися нормально, плаваючи на 4 дюйми над землею. Цей ефект дозволяє істоті перетинати або стояти над нестійкими чи нестійкими поверхнями, такими як вода чи лава. Істота не залишає слідів і ігнорує складний рельєф. Крім того, істота може рухатися зі звичайною швидкістю до 12 годин на день без втоми від вимушеного маршу.\"",
    "url": "/api/2014/magic-items/horseshoes-of-a-zephyr",
    "name_ua": "Horseshoes of a Zephyr"
  },
  {
    "index": "horn-of-valhalla-iron",
    "name": "Iron Horn of Valhalla",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": true,
    "desc": "Чудовий предмет, легендарний\nВи можете використати дію, щоб подути в цей ріг. У відповідь, 5d4 + 5 воїнів-духів з Вальгалли з'являються на відстані до 60 футів від вас. Вони використовують статистику берсерка. Вони повертаються до Вальгалли через 1 годину або коли їхні очки здоров'я опускаються до 0. Після використання рогу, він не може бути використаний знову протягом 7 днів.\nЯкщо ви подуєте в ріг без володіння всіма бойовими зброями, викликані берсерки атакуватимуть вас. Якщо ви відповідаєте вимозі, вони будуть дружніми до вас і ваших супутників та виконуватимуть ваші команди.",
    "url": "/api/2014/magic-items/horn-of-valhalla-iron",
    "name_ua": "Iron Horn of Valhalla"
  },
  {
    "index": "horn-of-valhalla-bronze",
    "name": "Bronze Horn of Valhalla",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "Чудовий предмет, дуже рідкісний\nВи можете використати дію, щоб подути в цей ріг. У відповідь, 4d4 + 4 воїнів-духів з Вальгалли з'являються на відстані до 60 футів від вас. Вони використовують статистику берсерка. Вони повертаються до Вальгалли через 1 годину або коли їхні очки здоров'я опускаються до 0. Після використання рогу, його не можна буде використовувати знову протягом 7 днів.\nЯкщо ви подуєте в ріг без володіння всіма середніми доспіхами, викликані берсерки атакуватимуть вас. Якщо ви відповідаєте вимозі, вони будуть дружні до вас і ваших супутників та виконуватимуть ваші команди.",
    "url": "/api/2014/magic-items/horn-of-valhalla-bronze",
    "name_ua": "Bronze Horn of Valhalla"
  },
  {
    "index": "horn-of-valhalla-brass",
    "name": "Brass Horn of Valhalla",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "Чудовий предмет, рідкісний\nВи можете використати дію, щоб подути в цей ріг. У відповідь, з Валгалли з'являються 3d4 + 3 духи воїнів на відстані до 60 футів від вас. Вони використовують статистику берсерка. Вони повертаються до Валгалли через 1 годину або коли їхні очки здоров'я опускаються до 0. Після використання рогу, його не можна використовувати знову протягом 7 днів.\nЯкщо ви подуєте в ріг, не маючи навичок володіння всіма простими зброями, викликані берсерки атакуватимуть вас. Якщо ви відповідаєте вимозі, вони будуть дружніми до вас і ваших супутників та виконуватимуть ваші команди.",
    "url": "/api/2014/magic-items/horn-of-valhalla-brass",
    "name_ua": "Brass Horn of Valhalla"
  },
  {
    "index": "horn-of-valhalla-silver",
    "name": "Silver Horn of Valhalla",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "Чудовий предмет, рідкісний\nВи можете використати дію, щоб подути в цей ріг. У відповідь, з Валгалли з'являються 2d4 + 2 духи воїнів на відстані до 60 футів від вас. Вони використовують статистику берсерка. Вони повертаються до Валгалли через 1 годину або коли їхні очки здоров'я опускаються до 0. Після використання рогу, його не можна буде використовувати знову протягом 7 днів.\nЗакликані берсерки дружні до вас і ваших супутників та виконують ваші команди.",
    "url": "/api/2014/magic-items/horn-of-valhalla-silver",
    "name_ua": "Silver Horn of Valhalla"
  },
  {
    "index": "horn-of-blasting",
    "name": "Horn of Blasting",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "Чудовий предмет, рідкісний\nВи можете використати дію, щоб вимовити слово команди рогу, а потім подути в ріг, який випускає грізний вибух у конусі завдовжки 30 футів, чутний на відстані 600 футів. Кожна істота в конусі повинна зробити спасибу на Конституцію зі складністю 15. При невдалому спасибі істота отримує 5d6 шкоди від грому та оглухне на 1 хвилину. При вдалому спасибі істота отримує половину шкоди і не оглухне. Істоти та об'єкти зі скла або кришталю мають перевагу на спасибу і отримують 10d6 шкоди від грому замість 5d6.\nКожне використання магії рогу має 20 відсотків шансів спричинити вибух рогу. Вибух завдає 10d6 шкоди від вогню тому, хто дує в ріг, і руйнує сам ріг.",
    "url": "/api/2014/magic-items/horn-of-blasting",
    "name_ua": "Horn of Blasting"
  },
  {
    "index": "holy-avenger",
    "name": "Holy Avenger",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/2014/equipment-categories/weapon"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зброя (будь-який меч), легендарна (потребує налаштування для паладина)\nВи отримуєте бонус +3 до атак і пошкоджень, завданих цією магічною зброєю. Коли ви вражаєте нещасного або нежиттю, ця істота отримує додаткові 2d10 радіантних пошкоджень.\nПоки ви тримаєте витягнутий меч, він створює ауру в радіусі 10 футів навколо вас. Ви та всі істоти, дружні до вас у цій аурі, мають перевагу на рятувальні кидки проти заклинань та інших магічних ефектів. Якщо у вас 17 або більше рівнів у класі паладина, радіус аури збільшується до 30 футів.\"",
    "url": "/api/2014/magic-items/holy-avenger",
    "name_ua": "Holy Avenger"
  },
  {
    "index": "helm-of-teleportation",
    "name": "Helm of Teleportation",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nЦей шолом має 3 заряди. Під час носіння ви можете використати дію та витратити 1 заряд, щоб кинути заклинання телепортації з нього. Шолом відновлює 1d3 витрачених зарядів щодня на світанку.\"",
    "url": "/api/2014/magic-items/helm-of-teleportation",
    "name_ua": "Helm of Teleportation"
  },
  {
    "index": "helm-of-brilliance",
    "name": "Helm of Brilliance",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, дуже рідкісний (потребує налаштування)\nЦей вражаючий шолом прикрашений 1d10 діамантами, 2d10 рубінами, 3d10 вогняними опалами та 4d10 опалами. Будь-який дорогоцінний камінь, вирваний зі шолома, розсипається на пил. Коли всі дорогоцінні камені видалені або знищені, шолом втрачає свою магію.\nВи отримуєте наступні переваги, коли носите його:\nВи можете використати дію, щоб заклясти одне з наступних заклять (поріг порятунку DC 18), використовуючи один з дорогоцінних каменів шолома відповідного типу як компонент: денне світло (опал), вогняний куля (вогняний опал), призматичний спрей (діамант) або стіна вогню (рубін). Дорогоцінний камінь знищується при заклинанні і зникає зі шолома.\nПоки в ньому є хоча б один діамант, шолом випромінює тьмяне світло на радіусі 30 футів, коли принаймні одна нежить знаходиться в цій зоні. Будь-яка нежить, яка починає свій хід у цій зоні, отримує 1d6 радіантного пошкодження.\nПоки шолом має хоча б один рубін, ви маєте опір до вогняного пошкодження.\nПоки шолом має хоча б один вогняний опал, ви можете використати дію і вимовити слово команди, щоб змусити одну зброю, яку ви тримаєте, спалахнути полум'ям. Полум'я випромінює яскраве світло на радіусі 10 футів і тьмяне світло ще на 10 футів. Полум'я не завдає шкоди вам і зброї. Коли ви потрапляєте атакою за допомогою палаючої зброї, ціль отримує додаткове 1d6 вогняного пошкодження. Полум'я триває до тих пір, поки ви не використаєте бонусну дію для повторного вимовлення слова команди або поки ви не кинете або не сховаєте зброю.\nКиньте d20, якщо ви носите шолом і отримуєте вогняне пошкодження через невдалий порятунок від заклинання. При кидку 1 шолом випромінює промені світла з його залишкових дорогоцінних каменів. Кожна істота в межах 60 футів від шолома, окрім вас, повинна успішно пройти рятувальний кидок Dexterity DC 17 або буде вражена променем, отримуючи радіантне пошкодження рівне кількості дорогоцінних каменів у шоломі. Шолом і його дорогоцінні камені тоді знищуються.\"",
    "url": "/api/2014/magic-items/helm-of-brilliance",
    "name_ua": "Helm of Brilliance"
  },
  {
    "index": "handy-haversack",
    "name": "Handy Haversack",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nЦей рюкзак має центральну кишеню та дві бічні кишені, кожна з яких є екстрапросторовим простором. Кожна бічна кишеня може вмістити до 20 фунтів матеріалу, не перевищуючи об'єм у 2 кубічні фути. Велика центральна кишеня може вмістити до 8 кубічних футів або 80 фунтів матеріалу. Рюкзак завжди важить 5 фунтів, незалежно від його вмісту.\nРозміщення предмета в рюкзаку слідує звичайним правилам взаємодії з предметами. Щоб дістати предмет з рюкзака, потрібно використати дію. Коли ви простягаєте руку в рюкзак за конкретним предметом, цей предмет завжди магічно знаходиться зверху.\nРюкзак має кілька обмежень. Якщо він перевантажений або якщо гострий предмет проколює його чи розриває, рюкзак лопається і руйнується. Якщо рюкзак знищено, його вміст назавжди втрачається, хоча артефакт завжди з'являється знову десь. Якщо рюкзак вивернути навиворіт, його вміст висипається, неушкоджений, і рюкзак потрібно повернути на місце, перш ніж його можна буде використовувати знову. Якщо дихаюча істота поміщена всередину рюкзака, вона може вижити до 10 хвилин, після чого починає задихатися.\nПоміщення рюкзака всередину екстрапростору, створеного мішком утримання, портативною дірою або подібним предметом миттєво знищує обидва предмети і відкриває ворота до Астрального Плану. Ворота виникають там, де один предмет був поміщений всередину іншого. Будь-яка істота в межах 10 футів від воріт затягується через них і опиняється у випадковому місці на Астральному Плані. Потім ворота закриваються. Ворота односторонні і не можуть бути відкриті знову.\"",
    "url": "/api/2014/magic-items/handy-haversack",
    "name_ua": "Handy Haversack"
  },
  {
    "index": "hammer-of-thunderbolts",
    "name": "Hammer of Thunderbolts",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/2014/equipment-categories/weapon"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зброя (молот), легендарна\nВи отримуєте бонус +1 до кидків атаки та пошкоджень, зроблених цією магічною зброєю.\nВбивця велетнів (потрібна налаштування). Щоб налаштуватися на цю зброю, ви повинні носити пояс сили велетня (будь-якого виду) та рукавиці сили огра. Налаштування припиняється, якщо ви знімете будь-який з цих предметів. Поки ви налаштовані на цю зброю і тримаєте її, ваш показник Сили збільшується на 4 і може перевищувати 20, але не 30. Коли ви кидаєте 20 на кидку атаки цією зброєю проти велетня, велетень повинен успішно пройти рятувальний кидок Конституції зі складністю 17 або померти.\nМолот також має 5 зарядів. Поки ви налаштовані на нього, ви можете витратити 1 заряд і зробити дальню атаку зброєю з молотом, кидаючи його так, ніби він має властивість \"кидання\" з нормальною дальністю 20 футів і великою дальністю 60 футів. Якщо атака влучає, молот випускає грім, який чути на відстані до 300 футів. Ціль і кожна істота в межах 30 футів від неї повинні успішно пройти рятувальний кидок Конституції зі складністю 17 або бути оглушеними до кінця вашого наступного ходу. Молот відновлює 1d4 + 1 витрачених зарядів щодня на світанку.\"",
    "url": "/api/2014/magic-items/hammer-of-thunderbolts",
    "name_ua": "Hammer of Thunderbolts"
  },
  {
    "index": "glamoured-studded-leather-armor",
    "name": "Glamoured Studded Leather Armor",
    "equipment_category": {
      "index": "armor",
      "name": "Armor",
      "url": "/api/2014/equipment-categories/armor"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Броня (шкіряна з шипами), рідкісна\nКоли ви носите цю броню, ви отримуєте бонус +1 до класу броні. Ви також можете використати бонусну дію, щоб вимовити командне слово броні та змусити її набрати вигляду звичайного одягу або іншого виду броні. Ви вирішуєте, як вона виглядає, включаючи колір, стиль і аксесуари, але броня зберігає свою звичайну масу та вагу. Ілюзорний вигляд триває до тих пір, поки ви не використаєте цю властивість знову або не знімете броню.\"",
    "url": "/api/2014/magic-items/glamoured-studded-leather-armor",
    "name_ua": "Glamoured Studded Leather Armor"
  },
  {
    "index": "giant-slayer",
    "name": "Giant Slayer",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/2014/equipment-categories/weapon"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зброя (будь-яка сокира або меч), рідкісна\nВи отримуєте бонус +1 до кидків атаки та шкоди, зроблених цією магічною зброєю.\nКоли ви вражаєте гіганта, він отримує додаткові 2d6 шкоди відповідного типу зброї і повинен успішно пройти рятувальний кидок Сили зі складністю 15, інакше впаде на землю. Для цієї зброї \"гігант\" означає будь-яку істоту типу гіганта, включаючи етіна та тролів.\"",
    "url": "/api/2014/magic-items/giant-slayer",
    "name_ua": "Giant Slayer"
  },
  {
    "index": "gem-of-seeing",
    "name": "Gem of Seeing",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nЦей коштовний камінь має 3 заряди. Як дію, ви можете вимовити слово команди каменю та витратити 1 заряд. Протягом наступних 10 хвилин ви маєте істинне бачення на відстань до 120 футів, коли дивитесь через камінь.\nКамінь відновлює 1d3 витрачених зарядів щодня на світанку.\"",
    "url": "/api/2014/magic-items/gem-of-seeing",
    "name_ua": "Gem of Seeing"
  },
  {
    "index": "frost-brand",
    "name": "Frost Brand",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/2014/equipment-categories/weapon"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зброя (будь-який меч), дуже рідкісна (потребує налаштування)\nКоли ви вражаєте ціллю атакою з використанням цього магічного меча, ціль отримує додаткові 1d6 холодного пошкодження. Крім того, поки ви тримаєте меч, ви маєте опір до вогняного пошкодження.\nУ морозну погоду лезо випромінює яскраве світло на радіусі 10 футів і тьмяне світло на додаткові 10 футів.\nКоли ви витягуєте цю зброю, ви можете згасити всі немагічні полум'я в межах 30 футів від вас. Цю властивість можна використовувати не більше одного разу на годину.\"",
    "url": "/api/2014/magic-items/frost-brand",
    "name_ua": "Frost Brand"
  },
  {
    "index": "folding-boat",
    "name": "Folding Boat",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nЦей об'єкт виглядає як дерев'яна коробка розмірами 12 дюймів завдовжки, 6 дюймів завширшки та 6 дюймів завглибшки. Вона важить 4 фунти і плаває. Її можна відкрити для зберігання предметів всередині. Цей предмет також має три команди, кожна з яких вимагає використання дії для її вимовляння.\nПерша команда змушує коробку розгорнутися в човен довжиною 10 футів, шириною 4 фути та глибиною 2 фути. Човен має одну пару весел, якір, щоглу та латинський вітрило. Човен може комфортно вмістити до чотирьох середніх істот.\nДруга команда змушує коробку розгорнутися в корабель довжиною 24 фути, шириною 8 футів та глибиною 6 футів. Корабель має палубу, місця для гребців, п'ять комплектів весел, кермове весло, якір, каюту на палубі та щоглу з квадратним вітрилом. Корабель може комфортно вмістити п'ятнадцять середніх істот.\nКоли коробка стає судном, її вага стає такою ж, як у звичайного судна такого розміру, і все, що було збережено в коробці, залишається в човні.\nТретя команда змушує складний човен скластися назад у коробку, за умови, що на борту немає істот. Будь-які предмети на судні, які не можуть поміститися всередині коробки, залишаються зовні під час складання. Будь-які предмети на судні, які можуть поміститися всередині коробки, роблять це.\"",
    "url": "/api/2014/magic-items/folding-boat",
    "name_ua": "Folding Boat"
  },
  {
    "index": "flame-tongue",
    "name": "Flame Tongue",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/2014/equipment-categories/weapon"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зброя (будь-який меч), рідкісна (потребує налаштування)\nВи можете використати бонусну дію, щоб вимовити слово команди цього магічного меча, що спричиняє спалах полум'я з леза. Це полум'я випромінює яскраве світло в радіусі 40 футів і тьмяне світло ще на 40 футів. Поки меч палає, він завдає додаткових 2d6 вогняної шкоди будь-якій цілі, яку він вражає. Полум'я триває до тих пір, поки ви не використаєте бонусну дію для повторного вимовляння слова команди або поки ви не впустите чи не сховаєте меч.\"",
    "url": "/api/2014/magic-items/flame-tongue",
    "name_ua": "Flame Tongue"
  },
  {
    "index": "figurine-of-wondrous-power-serpentine-owl",
    "name": "Serpentine Owl Figurine of Wondrous Power",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, рідкісний\nСтатуетка дивовижної сили — це фігурка звіра, достатньо мала, щоб вміститися в кишені. Якщо ви використаєте дію, щоб вимовити командне слово і кинути статуетку на точку на землі в межах 60 футів від вас, статуетка перетворюється на живу істоту. Якщо місце, де має з'явитися істота, зайняте іншими істотами або об'єктами, або якщо для істоти немає достатньо місця, статуетка не стає істотою.\nІстота дружня до вас і ваших супутників. Вона розуміє ваші мови та підкоряється вашим усним командам. Якщо ви не даєте жодних команд, істота захищає себе, але не виконує інших дій.\nІстота існує протягом часу, специфічного для кожної статуетки. Наприкінці цього часу істота повертається до своєї статуеткової форми. Вона повертається до форми статуетки раніше, якщо її здоров'я падає до 0 очок або якщо ви використовуєте дію, щоб знову вимовити командне слово, торкаючись її. Коли істота знову стає статуеткою, її властивість не може бути використана знову до того часу, як пройде певний період часу, зазначений у описі статуетки.\n***Змієподібна сова.*** Ця змієподібна статуетка сови може стати гігантською совою на термін до 8 годин. Після використання вона не може бути використана знову до закінчення 2 днів. Сова може телепатично спілкуватися з вами на будь-якій відстані, якщо ви і вона перебуваєте на одному плані існування.\"",
    "url": "/api/2014/magic-items/figurine-of-wondrous-power-serpentine-owl",
    "name_ua": "Serpentine Owl Figurine of Wondrous Power"
  },
  {
    "index": "figurine-of-wondrous-power-onyx-dog",
    "name": "Onyx Dog Figurine of Wondrous Power",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, рідкісний\nСтатуетка дивовижної сили — це фігурка звіра, достатньо мала, щоб вміститися в кишені. Якщо ви використаєте дію, щоб вимовити слово-команду і кинути статуетку на точку на землі в межах 60 футів від вас, статуетка перетвориться на живу істоту. Якщо місце, де має з'явитися істота, зайняте іншими істотами або об'єктами, або якщо для істоти немає достатньо місця, статуетка не перетвориться на істоту.\nІстота є дружньою до вас і ваших супутників. Вона розуміє ваші мови та підкоряється вашим усним командам. Якщо ви не даєте команд, істота захищає себе, але не виконує інших дій.\nІстота існує протягом певного часу, визначеного для кожної статуетки. Наприкінці цього часу істота повертається до своєї статуеткової форми. Вона повертається до форми статуетки раніше, якщо її здоров'я падає до 0 очок або якщо ви знову вимовляєте слово-команду під час дотику до неї. Коли істота знову стає статуеткою, її властивість не може бути використана знову до того часу, як пройде певний період часу, зазначений у описі статуетки.\n***Оніксова собака.*** Ця оніксова статуетка собаки може стати мастифом на термін до 6 годин. Мастиф має інтелект 8 і може говорити спільною мовою. Він також має нічне бачення на відстань 60 футів і може бачити невидимих істот і об'єкти в цій зоні. Після використання його не можна використовувати знову протягом 7 днів.\"",
    "url": "/api/2014/magic-items/figurine-of-wondrous-power-onyx-dog",
    "name_ua": "Onyx Dog Figurine of Wondrous Power"
  },
  {
    "index": "figurine-of-wondrous-power-obsidian-steed",
    "name": "Obsidian Steed Figurine of Wondrous Power",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, дуже рідкісний\nСтатуетка дивовижної сили — це фігурка звіра, достатньо мала, щоб вміститися в кишені. Якщо ви використаєте дію, щоб вимовити слово команди та кинути фігурку на точку на землі в межах 60 футів від вас, фігурка перетворюється на живу істоту. Якщо місце, де має з'явитися істота, зайняте іншими істотами або об'єктами, або якщо немає достатньо місця для істоти, фігурка не стає істотою.\nІстота дружня до вас і ваших супутників. Вона розуміє ваші мови та підкоряється вашим усним командам. Якщо ви не даєте команд, істота захищає себе, але не виконує інших дій.\nІстота існує протягом певного часу, визначеного для кожної фігурки. Наприкінці цього часу істота повертається до форми фігурки. Вона повертається до форми фігурки раніше, якщо її здоров'я падає до 0 очок або якщо ви використовуєте дію, щоб знову вимовити слово команди, торкаючись її. Коли істота знову стає фігуркою, її властивість не може бути використана знову до того часу, як мине певний період часу, зазначений у описі фігурки.\n***Обсидиановий кінь.*** Цей поліруваний обсидіановий кінь може стати нічним кошмаром на термін до 24 годин. Нічний кошмар бореться лише для самозахисту. Після використання його не можна використовувати знову до того, як мине 5 днів.\nЯкщо у вас добра орієнтація, фігурка має 10-відсотковий шанс кожного разу при використанні ігнорувати ваші накази, включаючи команду повернутися до форми фігурки. Якщо ви сядете на нічного кошмара під час ігнорування ваших наказів, ви та нічний кошмар миттєво переноситесь у випадкове місце на плані Гадеса, де нічний кошмар повертається до форми фігурки.\"",
    "url": "/api/2014/magic-items/figurine-of-wondrous-power-obsidian-steed",
    "name_ua": "Obsidian Steed Figurine of Wondrous Power"
  },
  {
    "index": "figurine-of-wondrous-power-marble-elephant",
    "name": "Marble Elephant Figurine of Wondrous Power",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, рідкісний\nСтатуетка дивовижної сили — це фігурка звіра, достатньо мала, щоб вміститися в кишені. Якщо ви використаєте дію, щоб вимовити слово команди та кинути фігурку на точку на землі в межах 60 футів від вас, фігурка перетворюється на живу істоту. Якщо місце, де має з'явитися істота, зайняте іншими істотами або об'єктами, або якщо немає достатньо місця для істоти, фігурка не стає істотою.\nІстота дружня до вас і ваших супутників. Вона розуміє ваші мови та підкоряється вашим усним командам. Якщо ви не даєте команд, істота захищає себе, але не виконує інших дій.\nІстота існує протягом певного часу, визначеного для кожної фігурки. Наприкінці цього часу істота повертається до своєї форми фігурки. Вона повертається до форми фігурки раніше, якщо її здоров'я опускається до 0 очок або якщо ви використовуєте дію, щоб знову вимовити слово команди під час дотику до неї. Коли істота знову стає фігуркою, її властивість не може бути використана знову до закінчення певного часу, як зазначено в описі фігурки.\n***Мармуровий слон.*** Ця мармурова статуетка висотою і довжиною близько 4 дюймів може стати слоном на термін до 24 годин. Після використання вона не може бути використана знову до закінчення 7 днів.\"",
    "url": "/api/2014/magic-items/figurine-of-wondrous-power-marble-elephant",
    "name_ua": "Marble Elephant Figurine of Wondrous Power"
  },
  {
    "index": "figurine-of-wondrous-power-ivory-goats",
    "name": "Ivory Goats Figurine of Wondrous Power",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, рідкісний\nСтатуетка дивовижної сили — це фігурка звіра, достатньо мала, щоб вміститися в кишені. Якщо ви використаєте дію, щоб вимовити командне слово і кинути фігурку на точку на землі в межах 60 футів від вас, фігурка перетворюється на живу істоту. Якщо місце, де має з'явитися істота, зайняте іншими істотами або об'єктами, або якщо для істоти немає достатньо місця, фігурка не перетворюється на істоту.\nІстота дружня до вас і ваших супутників. Вона розуміє ваші мови і підкоряється вашим усним командам. Якщо ви не даєте жодних команд, істота захищає себе, але не виконує інших дій.\nІстота існує протягом певного часу, визначеного для кожної фігурки. Наприкінці цього часу істота повертається до своєї фігурної форми. Вона повертається до фігурки раніше, якщо її здоров'я знижується до 0 очок або якщо ви використовуєте дію, щоб знову вимовити командне слово під час дотику до неї. Коли істота знову стає фігуркою, її властивості не можуть бути використані знову до закінчення певного часу, як зазначено в описі фігурки.\n***Слонові кози.*** Ці слонові статуетки кіз завжди створюються наборами по три. Кожна коза виглядає унікально і функціонує інакше від інших. Їхні властивості такі:\nКоза подорожей може стати великою козою з тими ж характеристиками, що й верхова кінь. Вона має 24 заряди, і кожна година або її частина в формі звіра коштує 1 заряд. Поки у неї є заряди, ви можете використовувати її так часто, як бажаєте. Коли заряди закінчуються, вона повертається до фігурки і не може бути використана знову до того часу, коли пройде 7 днів, коли вона відновлює всі свої заряди.\nКоза праці стає гігантською козою на термін до 3 годин. Після використання вона не може бути використана знову до того часу, коли пройде 30 днів.\nКоза страху стає гігантською козою на термін до 3 годин. Коза не може атакувати, але ви можете видалити її роги і використовувати їх як зброю. Один ріг стає списом +1, а інший — довгим мечем +2. Видалення рогу вимагає дії, а зброя зникає і роги повертаються, коли коза повертається до форми фігурки. Крім того, коза випромінює ауру страху радіусом 30 футів під час їзди на ній. Будь-яка ворожа вам істота, яка починає свій хід в аурі, повинна успішно пройти спасибу на Мудрість зі Слд 15 або боятися козу протягом 1 хвилини або поки коза не повернеться до форми фігурки. Злякана істота може повторити спасибу наприкінці кожного свого ходу, припиняючи ефект на собі при успіху. Після успішного спасибування істота стає імунною до аури кози протягом наступних 24 годин. Після використання фігурки вона не може бути використана знову до того часу, коли пройде 15 днів.\"",
    "url": "/api/2014/magic-items/figurine-of-wondrous-power-ivory-goats",
    "name_ua": "Ivory Goats Figurine of Wondrous Power"
  },
  {
    "index": "figurine-of-wondrous-power-golden-lions",
    "name": "Golden Lions Figurine of Wondrous Power",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, рідкісний\nСтатуетка дивовижної сили — це фігурка звіра, достатньо мала, щоб вміститися в кишені. Якщо ви використаєте дію, щоб вимовити слово команди та кинути фігурку на точку на землі в межах 60 футів від вас, фігурка перетворюється на живу істоту. Якщо місце, де має з'явитися істота, зайняте іншими істотами або об'єктами, або якщо для істоти немає достатньо місця, фігурка не перетворюється на істоту.\nІстота дружня до вас і ваших супутників. Вона розуміє ваші мови і підкоряється вашим усним командам. Якщо ви не даєте команд, істота захищає себе, але не виконує інших дій.\nІстота існує протягом часу, визначеного для кожної фігурки. Наприкінці цього часу істота повертається до форми фігурки. Вона повертається до форми фігурки раніше, якщо її здоров'я опускається до 0 очок або якщо ви використовуєте дію, щоб знову вимовити слово команди, торкаючись її. Коли істота знову стає фігуркою, її властивість не може бути використана знову до того часу, як пройде певний період часу, зазначений у описі фігурки.\n***Золоті леви.*** Ці золоті статуетки левів завжди створюються парами. Ви можете використовувати одну фігурку або обидві одночасно. Кожна може стати левом на термін до 1 години. Після використання лева він не може бути використаний знову до того часу, як пройде 7 днів.\"",
    "url": "/api/2014/magic-items/figurine-of-wondrous-power-golden-lions",
    "name_ua": "Golden Lions Figurine of Wondrous Power"
  },
  {
    "index": "figurine-of-wondrous-power-ebony-fly",
    "name": "Ebony Fly Figurine of Wondrous Power",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, рідкісний\nФігурка дивовижної сили — це статуетка звіра, достатньо мала, щоб вміститися в кишені. Якщо ви використаєте дію, щоб вимовити слово команди та кинути фігурку на точку на землі в межах 60 футів від вас, фігурка перетворюється на живу істоту. Якщо місце, де має з'явитися істота, зайняте іншими істотами або об'єктами, або якщо немає достатньо місця для істоти, фігурка не стає істотою.\nІстота дружня до вас і ваших супутників. Вона розуміє ваші мови та підкоряється вашим усним командам. Якщо ви не даєте команд, істота захищає себе, але не виконує інших дій.\nІстота існує протягом певного часу, специфічного для кожної фігурки. Наприкінці цього часу істота повертається до своєї фігурної форми. Вона повертається до форми фігурки раніше, якщо її здоров'я падає до 0 очок або якщо ви використовуєте дію, щоб знову вимовити слово команди, торкаючись її. Коли істота знову стає фігуркою, її властивість не може бути використана знову до того часу, як пройде певний проміжок часу, зазначений у описі фігурки.\n***Ебенова муха.*** Ця ебенова статуетка вирізьблена у вигляді конської мухи. Вона може стати гігантською мухою на термін до 12 годин і може бути використана як верхова тварина. Після використання вона не може бути використана знову до закінчення 2 днів.\nГігантська муха\nВелика тварина, безстороння\nКлас броні 11\nОчки здоров'я 19 (3d10 + 3)\nШвидкість 30 футів, політ 60 футів.\n| СИЛА | ЛОВК | СТІЙК | ІНТ | МУД | ХАР |\n|",
    "url": "/api/2014/magic-items/figurine-of-wondrous-power-ebony-fly",
    "name_ua": "Ebony Fly Figurine of Wondrous Power"
  },
  {
    "index": "figurine-of-wondrous-power-bronze-griffon",
    "name": "Bronze Griffon Figurine of Wondrous Power",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, рідкісний\nСтатуетка дивовижної сили — це фігурка звіра, достатньо мала, щоб вміститися в кишені. Якщо ви використаєте дію, щоб вимовити слово команди та кинути статуетку на точку на землі в межах 60 футів від вас, статуетка перетворюється на живу істоту. Якщо місце, де має з'явитися істота, зайняте іншими істотами або об'єктами, або якщо для істоти немає достатньо місця, статуетка не стає істотою.\nІстота дружня до вас і ваших супутників. Вона розуміє ваші мови та підкоряється вашим усним командам. Якщо ви не даєте команд, істота захищає себе, але не виконує інших дій.\nІстота існує протягом часу, визначеного для кожної статуетки. Наприкінці цього часу істота повертається до своєї статуеткової форми. Вона повертається до форми статуетки раніше, якщо її здоров'я падає до 0 очок або якщо ви знову вимовляєте слово команди під час дотику до неї. Коли істота знову стає статуеткою, її властивість не може бути використана знову, доки не мине певний час, як зазначено в описі статуетки.\n***Бронзовий Грифон.*** Ця бронзова статуетка зображує грифона в піднесеній позі. Він може стати грифоном на термін до 6 годин. Після використання його не можна використовувати знову протягом 5 днів.\"",
    "url": "/api/2014/magic-items/figurine-of-wondrous-power-bronze-griffon",
    "name_ua": "Bronze Griffon Figurine of Wondrous Power"
  },
  {
    "index": "feather-token-whip",
    "name": "Whip Feather Token",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, рідкісний\nЦей маленький об'єкт виглядає як пір'їнка.\nВи можете використати дію, щоб кинути жетон на відстань до 10 футів від вас. Жетон зникає, і на його місці з'являється плаваючий батіг. Потім ви можете використати бонусну дію, щоб здійснити атаку ближнього бою заклинанням проти істоти в межах 10 футів від батога, з бонусом атаки +9. При попаданні ціль отримує 1d6 + 5 ушкоджень сили.\nЯк бонусну дію у свій хід ви можете вказати батогу пролетіти до 20 футів і повторити атаку проти істоти в межах 10 футів від нього. Батіг зникає через 1 годину, коли ви використовуєте дію, щоб його розпустити, або коли ви стаєте непрацездатними чи помираєте.\"",
    "url": "/api/2014/magic-items/feather-token-whip",
    "name_ua": "Whip Feather Token"
  },
  {
    "index": "feather-token-tree",
    "name": "Tree Feather Token",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, рідкісний\nЦей маленький об'єкт виглядає як пір'я.\nВи повинні бути на вулиці, щоб використовувати цей жетон. Ви можете використати дію, щоб доторкнутися до нього в незайняте місце на землі. Жетон зникає, і на його місці з'являється немагічне дубове дерево. Дерево має висоту 60 футів і стовбур діаметром 5 футів, а його гілки на верху розпросторюються на радіус 20 футів.\"",
    "url": "/api/2014/magic-items/feather-token-tree",
    "name_ua": "Tree Feather Token"
  },
  {
    "index": "feather-token-swan-boat",
    "name": "Swan Boat Feather Token",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, рідкісний\nЦей маленький об'єкт виглядає як пір'я.\nВи можете використати дію, щоб торкнутися токена до водойми діаметром не менше 60 футів. Токен зникає, і на його місці з'являється човен довжиною 50 футів і шириною 20 футів у формі лебедя. Човен самостійно рухається по воді зі швидкістю 6 миль на годину. Ви можете використати дію, перебуваючи на човні, щоб наказати йому рухатися або повернутися до 90 градусів. Човен може вмістити до тридцяти двох істот середнього розміру або менших. Велика істота вважається за чотири середні істоти, а гігантська — за дев'ять. Човен залишається на 24 години, після чого зникає. Ви можете відпустити човен як дію.\"",
    "url": "/api/2014/magic-items/feather-token-swan-boat",
    "name_ua": "Swan Boat Feather Token"
  },
  {
    "index": "feather-token-fan",
    "name": "Fan Feather Token",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, рідкісний\nЦей маленький об'єкт виглядає як пір'їнка.\nЯкщо ви на човні або кораблі, ви можете використати дію, щоб кинути жетон вгору на відстань до 10 футів. Жетон зникає, і на його місці з'являється величезний вентилятор, що махає крилами. Вентилятор плаває і створює вітер, достатній для того, щоб наповнити вітрила одного корабля, збільшуючи його швидкість на 5 миль на годину протягом 8 годин. Ви можете відпустити вентилятор як дію.\"",
    "url": "/api/2014/magic-items/feather-token-fan",
    "name_ua": "Fan Feather Token"
  },
  {
    "index": "feather-token-bird",
    "name": "Bird Feather Token",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, рідкісний\nЦей маленький об'єкт виглядає як пір'я.\nВи можете використати дію, щоб кинути жетон на висоту 5 футів у повітря. Жетон зникає, і на його місці з'являється величезна багатокольорова пташка. Пташка має статистику року, але підкоряється вашим простим командам і не може атакувати. Вона може нести до 500 фунтів, летючи зі своєю максимальною швидкістю (16 миль на годину, максимум 144 милі на день, з однією годиною відпочинку після кожних 3 годин польоту), або 1,000 фунтів на половині цієї швидкості. Пташка зникає після того, як пролетить свою максимальну відстань за день або якщо її здоров'я опуститься до 0 очок. Ви можете відпустити пташку як дію.\"",
    "url": "/api/2014/magic-items/feather-token-bird",
    "name_ua": "Bird Feather Token"
  },
  {
    "index": "feather-token-anchor",
    "name": "Anchor Feather Token",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, рідкісний\nЦей маленький об'єкт виглядає як пір'я.\nВи можете використати дію, щоб доторкнутися до токена і торкнутися ним човна чи корабля. Протягом наступних 24 годин судно не може бути переміщене жодним способом. Доторкання токена до судна знову припиняє ефект. Коли ефект закінчується, токен зникає.\"",
    "url": "/api/2014/magic-items/feather-token-anchor",
    "name_ua": "Anchor Feather Token"
  },
  {
    "index": "feather-token",
    "name": "Feather Token",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [
      {
        "index": "feather-token-anchor",
        "name": "Anchor Feather Token",
        "url": "/api/2014/magic-items/feather-token-anchor"
      },
      {
        "index": "feather-token-bird",
        "name": "Bird Feather Token",
        "url": "/api/2014/magic-items/feather-token-bird"
      },
      {
        "index": "feather-token-fan",
        "name": "Fan Feather Token",
        "url": "/api/2014/magic-items/feather-token-fan"
      },
      {
        "index": "feather-token-swan-boat",
        "name": "Swan Boat Feather Token",
        "url": "/api/2014/magic-items/feather-token-swan-boat"
      },
      {
        "index": "feather-token-tree",
        "name": "Tree Feather Token",
        "url": "/api/2014/magic-items/feather-token-tree"
      },
      {
        "index": "feather-token-whip",
        "name": "Whip Feather Token",
        "url": "/api/2014/magic-items/feather-token-whip"
      }
    ],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nЦей маленький об'єкт виглядає як пір'я. Існують різні типи жетонів з пір'ям, кожен з яких має свій одноразовий ефект. ГМ обирає тип жетона або визначає його випадковим чином.\n| d100 | Жетон з пір'ям |\n|",
    "url": "/api/2014/magic-items/feather-token",
    "name_ua": "Feather Token"
  },
  {
    "index": "elven-chain",
    "name": "Elven Chain",
    "equipment_category": {
      "index": "armor",
      "name": "Armor",
      "url": "/api/2014/equipment-categories/armor"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Броня (ланцюговий жилет), рідкісна\nПоки ви носите цю броню, ви отримуєте бонус +1 до класу броні (AC). Ви вважаєтеся досвідченим у використанні цієї броні, навіть якщо не маєте навичок користування середньою бронею.\"",
    "url": "/api/2014/magic-items/elven-chain",
    "name_ua": "Elven Chain"
  },
  {
    "index": "efreeti-bottle",
    "name": "Efreeti Bottle",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, дуже рідкісний\nЦя пофарбована латунна пляшка важить 1 фунт. Коли ви використовуєте дію, щоб зняти корок, з пляшки виходить хмара густого диму. Наприкінці вашого ходу дим зникає з спалахом безпечного вогню, і на незайнятому просторі в межах 30 футів від вас з'являється ефрит.\nПерший раз, коли пляшка відкривається, майстер гри кидає кубики, щоб визначити, що станеться.\n| d100 | Ефект |\n|",
    "image": "/api/images/magic-items/efreeti-bottle.png",
    "url": "/api/2014/magic-items/efreeti-bottle",
    "name_ua": "Efreeti Bottle"
  },
  {
    "index": "dwarven-thrower",
    "name": "Dwarven Thrower",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/2014/equipment-categories/weapon"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зброя (бойовий молот), дуже рідкісна (потребує налаштування для дворфа)\nВи отримуєте бонус +3 до атак і шкоди, завданої цією магічною зброєю. Вона має властивість метання з нормальною дальністю 20 футів і далекою дальністю 60 футів. Коли ви влучаєте в ціль на відстані, використовуючи цю зброю, вона завдає додаткову шкоду 1d8 або, якщо ціль є велетнем, 2d8 шкоди. Одразу після атаки зброя повертається до вашої руки.\"",
    "image": "/api/images/magic-items/dwarven-thrower.png",
    "url": "/api/2014/magic-items/dwarven-thrower",
    "name_ua": "Dwarven Thrower"
  },
  {
    "index": "dwarven-plate",
    "name": "Dwarven Plate",
    "equipment_category": {
      "index": "armor",
      "name": "Armor",
      "url": "/api/2014/equipment-categories/armor"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Броня (латна), дуже рідкісна\nПід час носіння цієї броні ви отримуєте бонус +2 до класу броні (КБ). Крім того, якщо якийсь ефект змушує вас рухатися проти вашої волі по землі, ви можете використати свою реакцію, щоб зменшити відстань, на яку вас переміщують, до 10 футів.\"",
    "image": "/api/images/magic-items/dwarven-plate.png",
    "url": "/api/2014/magic-items/dwarven-plate",
    "name_ua": "Dwarven Plate"
  },
  {
    "index": "dragon-slayer",
    "name": "Dragon Slayer",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/2014/equipment-categories/weapon"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зброя (будь-який меч), рідкісна\nВи отримуєте бонус +1 до атак і пошкоджень, завданих цією магічною зброєю.\nКоли ви вражаєте дракона цією зброєю, дракон отримує додаткові 3d6 пошкоджень відповідного типу зброї. Для цієї зброї \"дракон\" означає будь-яку істоту з типом дракона, включаючи драконів черепах і виверн.\"",
    "image": "/api/images/magic-items/dragon-slayer.png",
    "url": "/api/2014/magic-items/dragon-slayer",
    "name_ua": "Dragon Slayer"
  },
  {
    "index": "dragon-scale-mail-white",
    "name": "White Dragon Scale Mail",
    "equipment_category": {
      "index": "armor",
      "name": "Armor",
      "url": "/api/2014/equipment-categories/armor"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Броня (масивна луска), дуже рідкісна (потребує налаштування)\nБроня з драконячої луски виготовлена з луски білого дракона. Іноді дракони збирають свої скинуті луски та дарують їх гуманоїдам. В інших випадках мисливці обережно знімають і зберігають шкіру мертвого дракона. У будь-якому випадку, броня з драконячої луски має високу цінність.\nПід час носіння цієї броні ви отримуєте бонус +1 до класу броні, маєте перевагу в рятувальних кидках проти Лякаючої Присутності та дихальних атак драконів, а також опір до холодного пошкодження.\nКрім того, ви можете зосередити свої відчуття як дію, щоб магічно визначити відстань і напрямок до найближчого білого дракона в межах 30 миль від вас. Цю спеціальну дію не можна використовувати знову до наступного світанку.\"",
    "image": "/api/images/magic-items/dragon-scale-mail-white.png",
    "url": "/api/2014/magic-items/dragon-scale-mail-white",
    "name_ua": "White Dragon Scale Mail"
  },
  {
    "index": "dragon-scale-mail-silver",
    "name": "Silver Dragon Scale Mail",
    "equipment_category": {
      "index": "armor",
      "name": "Armor",
      "url": "/api/2014/equipment-categories/armor"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Броня (луска), дуже рідкісна (потребує налаштування)\nЛуска дракона виготовлена з луски срібного дракона. Іноді дракони збирають свою скинуту луску і дарують її людиноподібним істотам. Інколи мисливці обережно знімають шкіру з мертвого дракона і зберігають її. У будь-якому випадку, луска дракона має високу цінність.\nПід час носіння цієї броні ви отримуєте бонус +1 до класу броні, маєте перевагу в рятувальних кидках проти Жахливого Присутності та дихальних атак драконів, а також опір до холодного пошкодження.\nКрім того, ви можете зосередити свої відчуття як дію, щоб магічно визначити відстань і напрямок до найближчого срібного дракона в межах 30 миль від вас. Цю спеціальну дію не можна використовувати знову до наступного світанку.\"",
    "image": "/api/images/magic-items/dragon-scale-mail-silver.png",
    "url": "/api/2014/magic-items/dragon-scale-mail-silver",
    "name_ua": "Silver Dragon Scale Mail"
  },
  {
    "index": "dragon-scale-mail-red",
    "name": "Red Dragon Scale Mail",
    "equipment_category": {
      "index": "armor",
      "name": "Armor",
      "url": "/api/2014/equipment-categories/armor"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Броня (луска), дуже рідкісна (потребує налаштування)\nЛуска дракона виготовлена з луски червоного дракона. Іноді дракони збирають свою скинуту луску та дарують її людиноподібним істотам. Інколи мисливці обережно знімають і зберігають шкіру мертвого дракона. У будь-якому випадку, луска дракона має високу цінність.\nПід час носіння цієї броні ви отримуєте бонус +1 до класу броні, маєте перевагу в рятувальних кидках проти Жахливого Присутності та дихальних атак драконів, а також опір до вогняного пошкодження.\nКрім того, ви можете зосередити свої відчуття як дію, щоб магічно визначити відстань і напрямок до найближчого червоного дракона в межах 30 миль від вас. Цю спеціальну дію не можна використовувати знову до наступного світанку.\"",
    "image": "/api/images/magic-items/dragon-scale-mail-red.png",
    "url": "/api/2014/magic-items/dragon-scale-mail-red",
    "name_ua": "Red Dragon Scale Mail"
  },
  {
    "index": "dragon-scale-mail-green",
    "name": "Green Dragon Scale Mail",
    "equipment_category": {
      "index": "armor",
      "name": "Armor",
      "url": "/api/2014/equipment-categories/armor"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Броня (луска), дуже рідкісна (потребує налаштування)\nЛуска дракона виготовлена з луски зеленого дракона. Іноді дракони збирають свою скинуту луску та дарують її людиноподібним істотам. Інколи мисливці обережно знімають шкіру з мертвого дракона та зберігають її. У будь-якому випадку, луска дракона має високу цінність.\nПід час носіння цієї броні ви отримуєте бонус +1 до класу броні, маєте перевагу на рятувальні кидки проти Лякаючої Присутності та дихальних атак драконів, а також маєте опір до отруйної шкоди.\nКрім того, ви можете зосередити свої відчуття як дію, щоб магічно визначити відстань і напрямок до найближчого зеленого дракона в межах 30 миль від вас. Цю спеціальну дію не можна використовувати знову до наступного світанку.\"",
    "image": "/api/images/magic-items/dragon-scale-mail-green.png",
    "url": "/api/2014/magic-items/dragon-scale-mail-green",
    "name_ua": "Green Dragon Scale Mail"
  },
  {
    "index": "dragon-scale-mail-gold",
    "name": "Gold Dragon Scale Mail",
    "equipment_category": {
      "index": "armor",
      "name": "Armor",
      "url": "/api/2014/equipment-categories/armor"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Броня (луска), дуже рідкісна (потребує налаштування)\nЛуска дракона виготовлена з луски золотого дракона. Іноді дракони збирають свої скинуті луски і дарують їх людиноподібним істотам. Інколи мисливці обережно знімають шкіру з мертвого дракона і зберігають її. У будь-якому випадку, луска дракона має високу цінність.\nПід час носіння цієї броні ви отримуєте бонус +1 до класу броні, маєте перевагу в рятувальних кидках проти Лякаючої Присутності та дихальних атак драконів, а також маєте опір до вогняного пошкодження.\nКрім того, ви можете зосередити свої відчуття як дію, щоб магічно визначити відстань і напрямок до найближчого золотого дракона в межах 30 миль від вас. Цю спеціальну дію не можна використовувати знову до наступного світанку.\"",
    "image": "/api/images/magic-items/dragon-scale-mail-gold.png",
    "url": "/api/2014/magic-items/dragon-scale-mail-gold",
    "name_ua": "Gold Dragon Scale Mail"
  },
  {
    "index": "dragon-scale-mail-copper",
    "name": "Copper Dragon Scale Mail",
    "equipment_category": {
      "index": "armor",
      "name": "Armor",
      "url": "/api/2014/equipment-categories/armor"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Броня (масивна луска), дуже рідкісна (вимагає налаштування)\nБроня з драконячої луски виготовлена з луски мідного дракона. Іноді дракони збирають свої скинуті луски і дарують їх гуманоїдам. Інколи мисливці обережно знімають шкіру з мертвого дракона і зберігають її. У будь-якому випадку, броня з драконячої луски має високу цінність.\nПід час носіння цієї броні ви отримуєте бонус +1 до класу броні, маєте перевагу на спасибі проти Лякаючої Присутності та дихальних атак драконів, а також опір до кислотного пошкодження.\nКрім того, ви можете зосередити свої відчуття як дію, щоб магічно визначити відстань і напрямок до найближчого мідного дракона в межах 30 миль від вас. Цю спеціальну дію не можна використовувати знову до наступного світанку.\"",
    "image": "/api/images/magic-items/dragon-scale-mail-copper.png",
    "url": "/api/2014/magic-items/dragon-scale-mail-copper",
    "name_ua": "Copper Dragon Scale Mail"
  },
  {
    "index": "dragon-scale-mail-bronze",
    "name": "Bronze Dragon Scale Mail",
    "equipment_category": {
      "index": "armor",
      "name": "Armor",
      "url": "/api/2014/equipment-categories/armor"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Броня (луска), дуже рідкісна (потребує налаштування)\nЛуска дракона виготовлена з луски бронзового дракона. Іноді дракони збирають свою скинуту луску і дарують її гуманоїдам. Інколи мисливці обережно знімають і зберігають шкіру мертвого дракона. У будь-якому випадку, луска дракона має високу цінність.\nПід час носіння цієї броні ви отримуєте бонус +1 до класу броні, маєте перевагу на спасибі проти Жахливого Присутності та дихальних атак драконів, а також маєте опір до ураження блискавкою.\nКрім того, ви можете зосередити свої відчуття як дію, щоб магічно визначити відстань і напрямок до найближчого бронзового дракона в межах 30 миль від вас. Цю спеціальну дію не можна використовувати знову до наступного світанку.\"",
    "image": "/api/images/magic-items/dragon-scale-mail-bronze.png",
    "url": "/api/2014/magic-items/dragon-scale-mail-bronze",
    "name_ua": "Bronze Dragon Scale Mail"
  },
  {
    "index": "dragon-scale-mail-brass",
    "name": "Brass Dragon Scale Mail",
    "equipment_category": {
      "index": "armor",
      "name": "Armor",
      "url": "/api/2014/equipment-categories/armor"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Броня (масивна луска), дуже рідкісна (потребує налаштування)\nБроня з драконячої луски виготовлена з луски мідного дракона. Іноді дракони збирають свої скинуті луски та дарують їх людиноподібним істотам. Інколи мисливці обережно знімають шкіру та зберігають її з тіла мертвого дракона. У будь-якому випадку, броня з драконячої луски має високу цінність.\nПід час носіння цієї броні ви отримуєте бонус +1 до класу броні, маєте перевагу в рятувальних кидках проти Жахливого Присутності та дихальних атак драконів, а також опір до вогняного пошкодження.\nКрім того, ви можете зосередити свої відчуття як дію, щоб магічно визначити відстань і напрямок до найближчого мідного дракона в межах 30 миль від вас. Цю спеціальну дію не можна використовувати знову до наступного світанку.\"",
    "image": "/api/images/magic-items/dragon-scale-mail-brass.png",
    "url": "/api/2014/magic-items/dragon-scale-mail-brass",
    "name_ua": "Brass Dragon Scale Mail"
  },
  {
    "index": "dragon-scale-mail-blue",
    "name": "Blue Dragon Scale Mail",
    "equipment_category": {
      "index": "armor",
      "name": "Armor",
      "url": "/api/2014/equipment-categories/armor"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Броня (луска), дуже рідкісна (потребує налаштування)\nЛуска драконів виготовлена з луски синього дракона. Іноді дракони збирають свою скинуту луску і дарують її гуманоїдам. Інколи мисливці обережно знімають і зберігають шкіру мертвого дракона. У будь-якому випадку, луска драконів має високу цінність.\nПід час носіння цієї броні ви отримуєте бонус +1 до класу броні, маєте перевагу в рятувальних кидках проти Жахливого Присутності та дихальних атак драконів, а також опір до уражень блискавкою.\nКрім того, ви можете зосередити свої відчуття як дію, щоб магічно визначити відстань і напрямок до найближчого синього дракона в межах 30 миль від вас. Цю спеціальну дію не можна використовувати знову до наступного світанку.\"",
    "image": "/api/images/magic-items/dragon-scale-mail-blue.png",
    "url": "/api/2014/magic-items/dragon-scale-mail-blue",
    "name_ua": "Blue Dragon Scale Mail"
  },
  {
    "index": "dragon-scale-mail-black",
    "name": "Black Dragon Scale Mail",
    "equipment_category": {
      "index": "armor",
      "name": "Armor",
      "url": "/api/2014/equipment-categories/armor"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Броня (масивна луска), дуже рідкісна (потребує налаштування)\nБроня з драконячої луски виготовлена з луски чорного дракона. Іноді дракони збирають свої скинуті луски та дарують їх людиноподібним істотам. Інколи мисливці обережно знімають і зберігають шкіру мертвого дракона. У будь-якому випадку, броня з драконячої луски має високу цінність.\nПід час носіння цієї броні ви отримуєте бонус +1 до класу броні, маєте перевагу в рятувальних кидках проти Лякаючої Присутності та дихальних атак драконів, а також опір до кислотного пошкодження.\nКрім того, ви можете зосередити свої відчуття як дію, щоб магічно визначити відстань і напрямок до найближчого чорного дракона в межах 30 миль від вас. Цю спеціальну дію не можна використовувати знову до наступного світанку.\"",
    "image": "/api/images/magic-items/dragon-scale-mail-black.png",
    "url": "/api/2014/magic-items/dragon-scale-mail-black",
    "name_ua": "Black Dragon Scale Mail"
  },
  {
    "index": "dragon-scale-mail",
    "name": "Dragon Scale Mail",
    "equipment_category": {
      "index": "armor",
      "name": "Armor",
      "url": "/api/2014/equipment-categories/armor"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [
      {
        "index": "dragon-scale-mail-black",
        "name": "Black Dragon Scale Mail",
        "url": "/api/2014/magic-items/dragon-scale-mail-black"
      },
      {
        "index": "dragon-scale-mail-blue",
        "name": "Blue Dragon Scale Mail",
        "url": "/api/2014/magic-items/dragon-scale-mail-blue"
      },
      {
        "index": "dragon-scale-mail-brass",
        "name": "Brass Dragon Scale Mail",
        "url": "/api/2014/magic-items/dragon-scale-mail-brass"
      },
      {
        "index": "dragon-scale-mail-bronze",
        "name": "Bronze Dragon Scale Mail",
        "url": "/api/2014/magic-items/dragon-scale-mail-bronze"
      },
      {
        "index": "dragon-scale-mail-copper",
        "name": "Copper Dragon Scale Mail",
        "url": "/api/2014/magic-items/dragon-scale-mail-copper"
      },
      {
        "index": "dragon-scale-mail-gold",
        "name": "Gold Dragon Scale Mail",
        "url": "/api/2014/magic-items/dragon-scale-mail-gold"
      },
      {
        "index": "dragon-scale-mail-green",
        "name": "Green Dragon Scale Mail",
        "url": "/api/2014/magic-items/dragon-scale-mail-green"
      },
      {
        "index": "dragon-scale-mail-red",
        "name": "Red Dragon Scale Mail",
        "url": "/api/2014/magic-items/dragon-scale-mail-red"
      },
      {
        "index": "dragon-scale-mail-silver",
        "name": "Silver Dragon Scale Mail",
        "url": "/api/2014/magic-items/dragon-scale-mail-silver"
      },
      {
        "index": "dragon-scale-mail-white",
        "name": "White Dragon Scale Mail",
        "url": "/api/2014/magic-items/dragon-scale-mail-white"
      }
    ],
    "variant": false,
    "desc": "\"Броня (маска), дуже рідкісна (потребує налаштування)\nДраконяча маска виготовлена з луски одного виду дракона. Іноді дракони збирають свої скинуті луски і дарують їх гуманоїдам. Інколи мисливці обережно знімають і зберігають шкіру мертвого дракона. У будь-якому випадку, драконяча маска має високу цінність.\nПід час носіння цієї броні ви отримуєте бонус +1 до класу броні, маєте перевагу на рятувальних кидках проти Жахливого Присутності та дихальних атак драконів, а також маєте опір до одного типу ушкоджень, який визначається видом дракона, що надав луску (див. таблицю).\nКрім того, ви можете зосередити свої відчуття як дію, щоб магічно визначити відстань і напрямок до найближчого дракона того ж типу, що й броня, в межах 30 миль від вас. Цю спеціальну дію не можна використовувати знову до наступного світанку.\n| Дракон | Опір |\n|",
    "image": "/api/images/magic-items/dragon-scale-mail.png",
    "url": "/api/2014/magic-items/dragon-scale-mail",
    "name_ua": "Dragon Scale Mail"
  },
  {
    "index": "dimensional-shackles",
    "name": "Dimensional Shackles",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nВи можете використати дію, щоб надіти ці кайдани на безпорадну істоту. Кайдани регулюються під розмір істоти від Малого до Великого. Окрім того, що вони слугують звичайними кайданами, ці кайдани заважають істоті, яка ними зв'язана, використовувати будь-який метод екстрапросторового переміщення, включаючи телепортацію або подорож до іншої площини існування. Вони не заважають істоті проходити через міжпросторовий портал.\nВи та будь-яка істота, яку ви вкажете при використанні кайданів, можете використати дію, щоб зняти їх. Раз на 30 днів зв'язана істота може зробити перевірку Сили (Спорт) зі складністю 30. У разі успіху істота виривається на волю і руйнує кайдани.\"",
    "image": "/api/images/magic-items/dimensional-shackles.png",
    "url": "/api/2014/magic-items/dimensional-shackles",
    "name_ua": "Dimensional Shackles"
  },
  {
    "index": "demon-armor",
    "name": "Demon Armor",
    "equipment_category": {
      "index": "armor",
      "name": "Armor",
      "url": "/api/2014/equipment-categories/armor"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Броня (латна), дуже рідкісна (потребує налаштування)\nПід час носіння цієї броні ви отримуєте бонус +1 до класу броні, а також можете розуміти та говорити на Абисянській мові. Крім того, кігтясті рукавиці броні перетворюють беззбройні удари руками на магічну зброю, яка завдає різану шкоду, з бонусом +1 до атак і шкоди та кубиком шкоди 1d8.\n***Прокляття.*** Як тільки ви одягнете цю прокляту броню, ви не зможете її зняти, якщо на вас не буде застосовано заклинання зняття прокляття або подібну магію. Поки ви носите цю броню, у вас є недолік на атаки проти демонів і на рятувальні кидки проти їхніх заклинань та спеціальних здібностей.\"",
    "image": "/api/images/magic-items/demon-armor.png",
    "url": "/api/2014/magic-items/demon-armor",
    "name_ua": "Demon Armor"
  },
  {
    "index": "defender",
    "name": "Defender",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/2014/equipment-categories/weapon"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зброя (будь-який меч), легендарна (потребує налаштування)\nВи отримуєте бонус +3 до атак і пошкоджень, завданих цією магічною зброєю.\nПерший раз, коли ви атакуєте мечем на кожному з ваших ходів, ви можете перенести частину або весь бонус меча на ваш клас броні, замість використання бонусу для атак у цьому ході. Наприклад, ви можете зменшити бонус до атак і пошкоджень до +1 і отримати бонус +2 до класу броні. Скориговані бонуси залишаються в силі до початку вашого наступного ходу, хоча ви повинні тримати меч, щоб отримати бонус до класу броні від нього.\"",
    "image": "/api/images/magic-items/defender.png",
    "url": "/api/2014/magic-items/defender",
    "name_ua": "Defender"
  },
  {
    "index": "deck-of-many-things",
    "name": "Deck of Many Things",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, легендарний\nЗазвичай знаходиться в коробці або мішечку, ця колода містить кілька карток, виготовлених з слонової кістки або пергаменту. Більшість (75 відсотків) таких колод мають лише тринадцять карток, але інші - двадцять дві.\nПеред тим як витягнути карту, ви повинні оголосити, скільки карток ви плануєте витягнути, а потім витягнути їх випадковим чином (ви можете використовувати змінену колоду гральних карт для імітації колоди). Будь-які карти, витягнуті понад це число, не матимуть ефекту. Інакше, як тільки ви витягнете карту з колоди, її магія вступає в дію. Ви повинні витягнути кожну карту не пізніше ніж через 1 годину після попереднього витягування. Якщо ви не встигаєте витягнути обрану кількість карток, решта карток вилітають з колоди самостійно і вступають в дію всі одночасно.\nЯк тільки карта витягнута, вона зникає з існування. Якщо карта не є Дурнем або Жонглером, вона знову з'являється в колоді, що дозволяє витягнути ту ж саму карту двічі.\n| Гральна карта | Карта |\n|",
    "image": "/api/images/magic-items/deck-of-many-things.png",
    "url": "/api/2014/magic-items/deck-of-many-things",
    "name_ua": "Deck of Many Things"
  },
  {
    "index": "dancing-sword",
    "name": "Dancing Sword",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/2014/equipment-categories/weapon"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зброя (будь-який меч), дуже рідкісна (потребує налаштування)\nВи можете використати бонусну дію, щоб кинути цей магічний меч у повітря і вимовити слово команди. Коли ви це зробите, меч починає літати, піднімається на висоту до 30 футів і атакує одну істоту на ваш вибір в межах 5 футів від нього. Меч використовує ваш кидок атаки та модифікатор здібності для розрахунку шкоди.\nПоки меч літає, ви можете використати бонусну дію, щоб змусити його пролетіти до 30 футів до іншої точки в межах 30 футів від вас. Як частину тієї ж бонусної дії, ви можете змусити меч атакувати одну істоту в межах 5 футів від нього.\nПісля четвертої атаки літаючого меча він піднімається на висоту до 30 футів і намагається повернутися до вашої руки. Якщо у вас немає вільної руки, він падає на землю біля ваших ніг. Якщо у меча немає незаблокованого шляху до вас, він рухається настільки близько до вас, наскільки може, а потім падає на землю. Він також припиняє літати, якщо ви схопите його або відійдете більше ніж на 30 футів.\"",
    "image": "/api/images/magic-items/dancing-sword.png",
    "url": "/api/2014/magic-items/dancing-sword",
    "name_ua": "Dancing Sword"
  },
  {
    "index": "dagger-of-venom",
    "name": "Dagger of Venom",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/2014/equipment-categories/weapon"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зброя (кинджал), рідкісна\nВи отримуєте бонус +1 до атак і пошкоджень, завданих цією магічною зброєю.\nВи можете використати дію, щоб покрити лезо густим чорним отрутою. Отрута залишається на 1 хвилину або до того моменту, коли атака з використанням цієї зброї влучить у істоту. Цій істоті потрібно успішно пройти рятувальний кидок Конституції зі складністю DC 15, інакше вона отримає 2d10 отруйних пошкоджень і стане отруєною на 1 хвилину. Цей кинджал не можна використовувати таким чином знову до наступного світанку.\"",
    "image": "/api/images/magic-items/dagger-of-venom.png",
    "url": "/api/2014/magic-items/dagger-of-venom",
    "name_ua": "Dagger of Venom"
  },
  {
    "index": "cubic-gate",
    "name": "Cubic Gate",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": false,
    "desc": "Чудовий предмет, легендарний\nЦей куб має розмір 3 дюйми в діаметрі і випромінює відчутну магічну енергію. Шість граней куба налаштовані на різні плани існування, один з яких — Матеріальний План. Інші грані пов'язані з планами, визначеними майстром гри.\nВи можете використати дію, щоб натиснути на одну зі сторін куба, щоб застосувати заклинання \"ворота\", відкриваючи портал до плану, відповідного цій стороні. Альтернативно, якщо ви використаєте дію, щоб натиснути на одну зі сторін двічі, ви можете застосувати заклинання \"переміщення між планами\" (порятунок СД 17) за допомогою куба і перенести цілі до плану, відповідного цій стороні.\nКуб має 3 заряди. Кожне використання куба витрачає 1 заряд. Куб відновлює 1d3 витрачених зарядів щодня на світанку.",
    "image": "/api/images/magic-items/cubic-gate.png",
    "url": "/api/2014/magic-items/cubic-gate",
    "name_ua": "Cubic Gate"
  },
  {
    "index": "cube-of-force",
    "name": "Cube of Force",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nЦей кубик має розмір приблизно в дюйм. Кожна грань має унікальне позначення, яке можна натиснути. Куб починається з 36 зарядів і відновлює 1d20 витрачених зарядів щодня на світанку.\nВи можете використати дію, щоб натиснути на одну з граней куба, витративши певну кількість зарядів залежно від обраної грані, як показано в таблиці Граней Куба Сили. Кожна грань має різний ефект. Якщо в кубі недостатньо залишкових зарядів, нічого не відбувається. Інакше виникає бар'єр невидимої сили, що формує куб зі стороною 15 футів. Бар'єр розташований навколо вас, рухається разом з вами і триває 1 хвилину, поки ви не використаєте дію для натискання на шосту грань куба або поки куб не закінчаться заряди. Ви можете змінити ефект бар'єру, натиснувши на іншу грань куба і витративши відповідну кількість зарядів, скидаючи тривалість.\nЯкщо ваш рух призводить до контакту бар'єру з твердим об'єктом, який не може пройти через куб, ви не можете наблизитися до цього об'єкта, поки бар'єр залишається.\nГрані Куба Сили\n| Грань | Заряди | Ефект |\n|",
    "image": "/api/images/magic-items/cube-of-force.png",
    "url": "/api/2014/magic-items/cube-of-force",
    "name_ua": "Cube of Force"
  },
  {
    "index": "crystal-ball-of-true-seeing",
    "name": "Crystal Ball of True Seeing",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, легендарний (потребує налаштування)\nКришталевий шар має діаметр приблизно 6 дюймів. Під час дотику до нього ви можете використовувати заклинання «Прозорливість» (рятувальний кидок СК 17).\n***Кришталевий шар істинного бачення.*** Під час використання кришталевого шару для прозорливості ви отримуєте істинне бачення з радіусом 120 футів, зосередженим на сенсорі заклинання.\"",
    "image": "/api/images/magic-items/crystal-ball-of-true-seeing.png",
    "url": "/api/2014/magic-items/crystal-ball-of-true-seeing",
    "name_ua": "Crystal Ball of True Seeing"
  },
  {
    "index": "crystal-ball-of-telepathy",
    "name": "Crystal Ball of Telepathy",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, легендарний (потребує налаштування)\nКришталевий шар має діаметр близько 15 сантиметрів. Під час дотику до нього ви можете використовувати заклинання «Прозорливість» (поріг порятунку 17).\n***Кришталевий шар телепатії.*** Під час прозорливості з кришталевим шаром ви можете спілкуватися телепатично з істотами, яких ви бачите в межах 9 метрів від сенсора заклинання. Ви також можете використати дію, щоб накласти заклинання «Пропозиція» (поріг порятунку 17) через сенсор на одну з цих істот. Вам не потрібно концентруватися на цій пропозиції, щоб підтримувати її протягом тривалості, але вона закінчується, якщо прозорливість завершується. Після використання сили пропозиції кришталевого шару вона не може бути використана знову до наступного світанку.\"",
    "image": "/api/images/magic-items/crystal-ball-of-telepathy.png",
    "url": "/api/2014/magic-items/crystal-ball-of-telepathy",
    "name_ua": "Crystal Ball of Telepathy"
  },
  {
    "index": "crystal-ball-of-mind-reading",
    "name": "Crystal Ball of Mind Reading",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, легендарний (потребує налаштування)\nКришталевий шар має діаметр приблизно 15 см. Під час дотику до нього ви можете використовувати заклинання «Ворожіння» (поріг порятунку 17).\n***Кришталевий шар читання думок.*** Ви можете використати дію, щоб застосувати заклинання «Виявлення думок» (поріг порятунку 17), коли ви ворожите за допомогою кришталевого шару, націлюючись на істот, яких ви можете бачити в межах 9 метрів від сенсора заклинання. Вам не потрібно концентруватися на цьому заклинанні «Виявлення думок», щоб підтримувати його протягом тривалості, але воно припиняється, якщо ворожіння завершується.\"",
    "image": "/api/images/magic-items/crystal-ball-of-mind-reading.png",
    "url": "/api/2014/magic-items/crystal-ball-of-mind-reading",
    "name_ua": "Crystal Ball of Mind Reading"
  },
  {
    "index": "crystal-ball",
    "name": "Crystal Ball",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [
      {
        "index": "crystal-ball-of-mind-reading",
        "name": "Crystal Ball of Mind Reading",
        "url": "/api/2014/magic-items/crystal-ball-of-mind-reading"
      },
      {
        "index": "crystal-ball-of-telepathy",
        "name": "Crystal Ball of Telepathy",
        "url": "/api/2014/magic-items/crystal-ball-of-telepathy"
      },
      {
        "index": "crystal-ball-of-true-seeing",
        "name": "Crystal Ball of True Seeing",
        "url": "/api/2014/magic-items/crystal-ball-of-true-seeing"
      }
    ],
    "variant": false,
    "desc": "\"Дивовижний предмет, дуже рідкісний або легендарний (потребує налаштування)\nТипова кришталева куля, дуже рідкісний предмет, має діаметр близько 6 дюймів. Торкаючись її, ви можете використовувати заклинання «Ворожіння» (порятунок СД 17) з нею.\nНаступні варіанти кришталевої кулі є легендарними предметами та мають додаткові властивості.\n***Кришталева куля читання думок.*** Ви можете використати дію, щоб застосувати заклинання «Виявлення думок» (порятунок СД 17), коли ви ворожите за допомогою кришталевої кулі, націлюючись на істот, яких ви можете бачити в межах 30 футів від сенсора заклинання. Вам не потрібно концентруватися на цьому виявленні думок, щоб підтримувати його протягом тривалості, але воно припиняється, якщо ворожіння припиняється.\n***Кришталева куля телепатії.*** Під час ворожіння з кришталевою кулею ви можете спілкуватися телепатично з істотами, яких ви можете бачити в межах 30 футів від сенсора заклинання. Ви також можете використати дію, щоб застосувати заклинання «Пропозиція» (порятунок СД 17) через сенсор на одну з цих істот. Вам не потрібно концентруватися на цій пропозиції, щоб підтримувати її протягом тривалості, але вона припиняється, якщо ворожіння припиняється. Після використання сила пропозиції кришталевої кулі не може бути використана знову до наступного світанку.\n***Кришталева куля істинного бачення.*** Під час ворожіння з кришталевою кулею ви маєте істинне бачення з радіусом 120 футів, що центрований на сенсорі заклинання.\"",
    "image": "/api/images/magic-items/crystal-ball.png",
    "url": "/api/2014/magic-items/crystal-ball",
    "name_ua": "Crystal Ball"
  },
  {
    "index": "cloak-of-the-bat",
    "name": "Cloak of the Bat",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nПоки ви носите цей плащ, ви маєте перевагу в перевірках Ловкості (Приховання). У зоні слабкого світла або темряви ви можете схопитися за краї плаща обома руками і використовувати його для польоту зі швидкістю 40 футів. Якщо ви коли-небудь не зможете схопитися за краї плаща під час польоту таким чином, або якщо ви більше не перебуваєте в зоні слабкого світла або темряви, ви втратите цю швидкість польоту.\nПоки ви носите плащ у зоні слабкого світла або темряви, ви можете використати свою дію, щоб навести на себе заклинання \"перетворення\", перетворившись на кажана. Поки ви в формі кажана, ви зберігаєте свої показники Інтелекту, Мудрості та Харизми. Цей плащ не може бути використаний таким чином знову до наступного світанку.\"",
    "image": "/api/images/magic-items/cloak-of-the-bat.png",
    "url": "/api/2014/magic-items/cloak-of-the-bat",
    "name_ua": "Cloak of the Bat"
  },
  {
    "index": "cloak-of-displacement",
    "name": "Cloak of Displacement",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nПоки ви носите цей плащ, він створює ілюзію, яка змушує вас здаватися стоячим у місці, близькому до вашого фактичного розташування, що надає будь-якій істоті перевагу на атаки проти вас. Якщо ви отримуєте ушкодження, ця властивість перестає діяти до початку вашого наступного ходу. Ця властивість пригнічується, коли ви є нездатними до дій, обмеженими або в іншому випадку не можете рухатися.\"",
    "image": "/api/images/magic-items/cloak-of-displacement.png",
    "url": "/api/2014/magic-items/cloak-of-displacement",
    "name_ua": "Cloak of Displacement"
  },
  {
    "index": "cloak-of-arachnida",
    "name": "Cloak of Arachnida",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, дуже рідкісний (потребує налаштування)\nЦей чудовий одяг виготовлений з чорного шовку, переплетеного з тонкими сріблястими нитками. Під час носіння ви отримуєте такі переваги:\n* Ви маєте опір до отруйного ушкодження.\n* У вас є швидкість лазіння, яка дорівнює вашій швидкості ходьби.\n* Ви можете рухатися вгору, вниз і по вертикальних поверхнях, а також догори дригом по стелях, залишаючи руки вільними.\n* Вас не можуть спіймати в павутинні будь-якого виду, і ви можете рухатися через павутину так, ніби це складна місцевість.\n* Ви можете використати дію, щоб накласти заклинання \"Павутина\" (рятувальний кидок СК 13). Павутина, створена заклинанням, заповнює вдвічі більшу площу. Після використання цієї властивості плаща вона не може бути використана знову до наступного світанку.\"",
    "image": "/api/images/magic-items/cloak-of-arachnida.png",
    "url": "/api/2014/magic-items/cloak-of-arachnida",
    "name_ua": "Cloak of Arachnida"
  },
  {
    "index": "chime-of-opening",
    "name": "Chime of Opening",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nЦя порожня металева трубка має довжину приблизно 1 фут і важить 1 фунт. Ви можете вдарити по ній як дію, націлюючи її на об'єкт у межах 120 футів від вас, який можна відкрити, наприклад, двері, кришку або замок. Дзвін видає чистий тон, і один замок або засувка на об'єкті відкривається, якщо звук може досягти об'єкта. Якщо замків або засувок більше немає, сам об'єкт відкривається.\nДзвін можна використовувати десять разів. Після десятого використання він тріскається і стає непридатним.\"",
    "image": "/api/images/magic-items/chime-of-opening.png",
    "url": "/api/2014/magic-items/chime-of-opening",
    "name_ua": "Chime of Opening"
  },
  {
    "index": "censer-of-controlling-air-elementals",
    "name": "Censer of Controlling Air Elementals",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nПоки в цьому кадильниці горить ладан, ви можете використати дію, щоб вимовити слово команди кадильниці та викликати повітряного елемента, ніби ви застосували заклинання виклик елемента. Цю кадильницю не можна використовувати таким чином знову до наступного світанку.\nЦей посуд об'ємом 6 дюймів у ширину та 1 фут у висоту нагадує чашу з прикрашеною кришкою. Вона важить 1 фунт.\"",
    "image": "/api/images/magic-items/censer-of-controlling-air-elementals.png",
    "url": "/api/2014/magic-items/censer-of-controlling-air-elementals",
    "name_ua": "Censer of Controlling Air Elementals"
  },
  {
    "index": "carpet-of-flying-6x9",
    "name": "Carpet of Flying (6 ft. × 9 ft.)",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, дуже рідкісний\nВи можете вимовити командне слово килима як дію, щоб змусити килим літати. Він рухається відповідно до ваших усних вказівок, якщо ви перебуваєте в межах 30 футів від нього.\nЦей килим має розміри 6 футів на 9 футів і має швидкість польоту 30 футів. Він може нести до 1600 фунтів, але його швидкість польоту зменшується до 15 футів, якщо вага перевищує 800 фунтів.\"",
    "image": "/api/images/magic-items/carpet-of-flying.png",
    "url": "/api/2014/magic-items/carpet-of-flying-6x9",
    "name_ua": "Carpet of Flying (6 ft. × 9 ft.)"
  },
  {
    "index": "carpet-of-flying-5x7",
    "name": "Carpet of Flying (5 ft. × 7 ft.)",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, дуже рідкісний\nВи можете вимовити командне слово килима як дію, щоб змусити його парити та літати. Він рухається відповідно до ваших усних вказівок, якщо ви перебуваєте в межах 30 футів від нього.\nЦей килим має розміри 5 на 7 футів і має швидкість польоту 40 футів. Він може нести до 1200 фунтів, але його швидкість польоту зменшується до 20 футів, якщо вага перевищує 600 фунтів.\"",
    "image": "/api/images/magic-items/carpet-of-flying.png",
    "url": "/api/2014/magic-items/carpet-of-flying-5x7",
    "name_ua": "Carpet of Flying (5 ft. × 7 ft.)"
  },
  {
    "index": "carpet-of-flying-4x6",
    "name": "Carpet of Flying (4 ft. × 6 ft.)",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, дуже рідкісний\nВи можете вимовити командне слово килима як дію, щоб змусити килим літати. Він рухається відповідно до ваших усних вказівок, якщо ви перебуваєте в межах 30 футів від нього.\nЦей килим має розміри 4 фути на 6 футів і має швидкість польоту 60 футів. Він може нести до 800 фунтів, але його швидкість польоту зменшується до 30 футів, якщо вага перевищує 400 фунтів.\"",
    "image": "/api/images/magic-items/carpet-of-flying.png",
    "url": "/api/2014/magic-items/carpet-of-flying-4x6",
    "name_ua": "Carpet of Flying (4 ft. × 6 ft.)"
  },
  {
    "index": "carpet-of-flying-3x5",
    "name": "Carpet of Flying (3 ft. × 5 ft.)",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, дуже рідкісний\nВи можете вимовити командне слово килима як дію, щоб змусити килим літати. Він рухається відповідно до ваших усних вказівок, якщо ви перебуваєте в межах 30 футів від нього.\nЦей килим має розміри 3 фути на 5 футів і має швидкість польоту 80 футів. Він може нести до 400 фунтів, але його швидкість польоту зменшується до 40 футів при перевезенні понад 200 фунтів.\"",
    "image": "/api/images/magic-items/carpet-of-flying.png",
    "url": "/api/2014/magic-items/carpet-of-flying-3x5",
    "name_ua": "Carpet of Flying (3 ft. × 5 ft.)"
  },
  {
    "index": "carpet-of-flying",
    "name": "Carpet of Flying",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [
      {
        "index": "carpet-of-flying-3x5",
        "name": "Carpet of Flying (3 ft. × 5 ft.)",
        "url": "/api/2014/magic-items/carpet-of-flying-3x5"
      },
      {
        "index": "carpet-of-flying-4x6",
        "name": "Carpet of Flying (4 ft. × 6 ft.)",
        "url": "/api/2014/magic-items/carpet-of-flying-4x6"
      },
      {
        "index": "carpet-of-flying-5x7",
        "name": "Carpet of Flying (5 ft. × 7 ft.)",
        "url": "/api/2014/magic-items/carpet-of-flying-5x7"
      },
      {
        "index": "carpet-of-flying-6x9",
        "name": "Carpet of Flying (6 ft. × 9 ft.)",
        "url": "/api/2014/magic-items/carpet-of-flying-6x9"
      }
    ],
    "variant": false,
    "desc": "\"Дивовижний предмет, дуже рідкісний\nВи можете вимовити командне слово килима як дію, щоб змусити килим літати. Він рухається відповідно до ваших усних вказівок, якщо ви перебуваєте в межах 30 футів від нього.\nІснує чотири розміри літаючих килимів. Майстер гри обирає розмір конкретного килима або визначає його випадковим чином.\n| d100 | Розмір | Вантажопідйомність | Швидкість польоту |\n|",
    "image": "/api/images/magic-items/carpet-of-flying.png",
    "url": "/api/2014/magic-items/carpet-of-flying",
    "name_ua": "Carpet of Flying"
  },
  {
    "index": "cape-of-the-mountebank",
    "name": "Cape of the Mountebank",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nЦей плащ має легкий запах сірки. Поки ви його носите, ви можете використовувати його для заклинання «Двері виміру» як дію. Ця властивість плаща не може бути використана знову до наступного світанку.\nКоли ви зникаєте, ви залишаєте за собою хмару диму, і з'являєтеся в подібній хмарі диму у вашому пункті призначення. Дим трохи затемнює простір, який ви залишили, і простір, в якому ви з'являєтеся, і розсіюється наприкінці вашого наступного ходу. Легкий або сильніший вітер розсіює дим.\"",
    "image": "/api/images/magic-items/cape-of-the-mountebank.png",
    "url": "/api/2014/magic-items/cape-of-the-mountebank",
    "name_ua": "Cape of the Mountebank"
  },
  {
    "index": "candle-of-invocation",
    "name": "Candle of Invocation",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, дуже рідкісний (потребує налаштування)\nЦя струнка свічка присвячена божеству і має таку ж спрямованість, як і це божество. Спрямованість свічки можна визначити заклинанням виявлення зла та добра. Майстер гри обирає бога та відповідну спрямованість або визначає її випадковим чином.\n| d20 | Спрямованість |\n|",
    "image": "/api/images/magic-items/candle-of-invocation.png",
    "url": "/api/2014/magic-items/candle-of-invocation",
    "name_ua": "Candle of Invocation"
  },
  {
    "index": "brazier-of-commanding-fire-elementals",
    "name": "Brazier of Commanding Fire Elementals",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nПоки в цьому латунному жаровні горить вогонь, ви можете використати дію, щоб вимовити командне слово жаровні і викликати вогняного елемента, ніби ви застосували заклинання виклик елемента. Жаровня не може бути використана таким чином знову до наступного світанку.\nЖаровня важить 5 фунтів.\"",
    "image": "/api/images/magic-items/brazier-of-commanding-fire-elementals.png",
    "url": "/api/2014/magic-items/brazier-of-commanding-fire-elementals",
    "name_ua": "Brazier of Commanding Fire Elementals"
  },
  {
    "index": "bracers-of-defense",
    "name": "Bracers of Defense",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nПоки ви носите ці наручники, ви отримуєте бонус +2 до класу броні, якщо не носите броні та не використовуєте щит.\"",
    "image": "/api/images/magic-items/bracers-of-defense.png",
    "url": "/api/2014/magic-items/bracers-of-defense",
    "name_ua": "Bracers of Defense"
  },
  {
    "index": "bowl-of-commanding-water-elementals",
    "name": "Bowl of Commanding Water Elementals",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nПоки ця чаша наповнена водою, ви можете використати дію, щоб вимовити слово команди чаші і викликати водного елемента, ніби ви застосували заклинання виклик елемента. Цю чашу не можна використовувати таким чином знову до наступного світанку.\nЧаша має діаметр близько 1 фута і глибину в половину цього розміру. Вона важить 3 фунти і вміщує приблизно 3 галони.\"",
    "url": "/api/2014/magic-items/bowl-of-commanding-water-elementals",
    "name_ua": "Bowl of Commanding Water Elementals"
  },
  {
    "index": "boots-of-speed",
    "name": "Boots of Speed",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nКоли ви носите ці черевики, ви можете використати бонусну дію та клацнути каблуками разом. Якщо ви це зробите, черевики подвоюють вашу швидкість ходьби, і будь-яка істота, яка здійснює можливу атаку проти вас, має перевагу на кидок атаки. Якщо ви знову клацнете каблуками разом, ефект припиняється.\nКоли властивість черевиків була використана загалом протягом 10 хвилин, магія перестає діяти, доки ви не завершите тривалий відпочинок.\"",
    "image": "/api/images/magic-items/boots-of-speed.png",
    "url": "/api/2014/magic-items/boots-of-speed",
    "name_ua": "Boots of Speed"
  },
  {
    "index": "boots-of-levitation",
    "name": "Boots of Levitation",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nПоки ви носите ці черевики, ви можете використовувати дію, щоб на власне бажання застосувати заклинання «Левітація» на себе.\"",
    "image": "/api/images/magic-items/boots-of-levitation.png",
    "url": "/api/2014/magic-items/boots-of-levitation",
    "name_ua": "Boots of Levitation"
  },
  {
    "index": "berserker-axe",
    "name": "Berserker Axe",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/2014/equipment-categories/weapon"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зброя (будь-яка сокира), рідкісна (потребує налаштування)\nВи отримуєте бонус +1 до атак і пошкоджень, завданих цією магічною зброєю. Крім того, поки ви налаштовані на цю зброю, ваш максимальний запас очок здоров'я збільшується на 1 за кожен рівень, який ви досягли.\n***Прокляття.*** Ця сокира проклята, і налаштування на неї поширює прокляття на вас. Поки ви залишаєтеся проклятим, ви не бажаєте розлучатися з сокирою, тримаючи її завжди під рукою. Ви також маєте недолік при атаках іншою зброєю, окрім цієї, якщо поблизу немає ворога в межах 60 футів, якого ви можете бачити або чути.\nКожного разу, коли ворожа істота завдає вам шкоди, поки сокира у вас в руках, ви повинні успішно пройти спасибі на Мудрість зі складністю 15 або впасти в лють. Під час люті ви повинні використовувати свою дію кожного раунду для атаки найближчої до вас істоти за допомогою сокири. Якщо ви можете зробити додаткові атаки як частину дії атаки, ви використовуєте ці додаткові атаки, переходячи до наступної найближчої істоти після того, як впадете поточну ціль. Якщо у вас є кілька можливих цілей, ви атакуєте одну випадковим чином. Ви залишаєтеся в люті до початку вашого ходу, коли поблизу немає істот в межах 60 футів, яких ви можете бачити або чути.\"",
    "image": "/api/images/magic-items/berserker-axe.png",
    "url": "/api/2014/magic-items/berserker-axe",
    "name_ua": "Berserker Axe"
  },
  {
    "index": "belt-of-giant-strength-storm",
    "name": "Belt of Storm Giant Strength",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, легендарний (потребує налаштування)\nПоки ви носите цей пояс, ваш показник Сили змінюється на 29. Якщо ваша Сила вже дорівнює або перевищує показник пояса, предмет не має на вас жодного ефекту.\"",
    "image": "/api/images/magic-items/belt-of-giant-strength.png",
    "url": "/api/2014/magic-items/belt-of-giant-strength-storm",
    "name_ua": "Belt of Storm Giant Strength"
  },
  {
    "index": "belt-of-giant-strength-cloud",
    "name": "Belt of Cloud Giant Strength",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, легендарний (потребує налаштування)\nПоки ви носите цей пояс, ваш показник Сили змінюється на 27. Якщо ваша Сила вже дорівнює або перевищує показник пояса, предмет не має на вас жодного ефекту.\"",
    "image": "/api/images/magic-items/belt-of-giant-strength.png",
    "url": "/api/2014/magic-items/belt-of-giant-strength-cloud",
    "name_ua": "Belt of Cloud Giant Strength"
  },
  {
    "index": "belt-of-giant-strength-fire",
    "name": "Belt of Fire Giant Strength",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, дуже рідкісний (потребує налаштування)\nПоки ви носите цей пояс, ваш показник Сили змінюється на 25. Якщо ваша Сила вже дорівнює або перевищує показник пояса, предмет не має на вас жодного ефекту.\"",
    "image": "/api/images/magic-items/belt-of-giant-strength.png",
    "url": "/api/2014/magic-items/belt-of-giant-strength-fire",
    "name_ua": "Belt of Fire Giant Strength"
  },
  {
    "index": "belt-of-giant-strength-frost",
    "name": "Belt of Frost Giant Strength",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, дуже рідкісний (потребує налаштування)\nПоки ви носите цей пояс, ваш показник Сили змінюється на 23. Якщо ваша Сила вже дорівнює або перевищує показник пояса, предмет не має на вас жодного ефекту.\"",
    "image": "/api/images/magic-items/belt-of-giant-strength.png",
    "url": "/api/2014/magic-items/belt-of-giant-strength-frost",
    "name_ua": "Belt of Frost Giant Strength"
  },
  {
    "index": "belt-of-giant-strength-stone",
    "name": "Belt of Stone Giant Strength",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, дуже рідкісний (потребує налаштування)\nПоки ви носите цей пояс, ваш показник Сили змінюється на 23. Якщо ваша Сила вже дорівнює або перевищує показник пояса, предмет не має на вас жодного ефекту.\"",
    "image": "/api/images/magic-items/belt-of-giant-strength.png",
    "url": "/api/2014/magic-items/belt-of-giant-strength-stone",
    "name_ua": "Belt of Stone Giant Strength"
  },
  {
    "index": "belt-of-giant-strength-hill",
    "name": "Belt of Hill Giant Strength",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nПоки ви носите цей пояс, ваш показник Сили змінюється на 21. Якщо ваша Сила вже дорівнює або перевищує показник пояса, предмет не має на вас жодного ефекту.\"",
    "image": "/api/images/magic-items/belt-of-giant-strength.png",
    "url": "/api/2014/magic-items/belt-of-giant-strength-hill",
    "name_ua": "Belt of Hill Giant Strength"
  },
  {
    "index": "belt-of-dwarvenkind",
    "name": "Belt of Dwarvenkind",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижні предмети, рідкісні (потребує налаштування)\nПід час носіння цього поясу ви отримуєте такі переваги:\nВаш показник Конституції збільшується на 2, до максимуму 20.\nВи маєте перевагу в перевірках Харизми (Переконання), коли взаємодієте з гномами.\nКрім того, коли ви налаштовані на пояс, у вас є 50 відсотків шансів кожного дня на світанку виростити повну бороду, якщо ви здатні її вирощувати, або помітно густішу бороду, якщо вона вже є.\nЯкщо ви не гном, ви отримуєте наступні додаткові переваги під час носіння поясу:\nВи маєте перевагу в Збереженнях проти отрути і маєте Стійкість до шкоди від отрути.\nВи можете говорити, читати та писати гномською.\"",
    "image": "/api/images/magic-items/belt-of-dwarvenkind.png",
    "url": "/api/2014/magic-items/belt-of-dwarvenkind",
    "name_ua": "Belt of Dwarvenkind"
  },
  {
    "index": "bead-of-force",
    "name": "Bead of Force",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nЦя маленька чорна Сфера має діаметр 3/4 дюйма і важить одну унцію. Зазвичай разом знаходять 1d4 + 4 кульки сили.\nВи можете використати дію, щоб кинути кульку на відстань до 60 футів. Кулька вибухає при ударі і знищується. Кожна істота в радіусі 10 футів від місця падіння кульки повинна успішно пройти рятувальний кидок на Спритність зі складністю DC 15, інакше вона отримує 5d4 ушкоджень сили. Потім область оточує Сфера прозорої сили на 1 хвилину. Будь-яка істота, яка не пройшла рятувальний кидок і повністю знаходиться в цій області, потрапляє всередину цієї Сфери. Істоти, які успішно пройшли кидок або частково знаходяться в області, відштовхуються від центру Сфери до тих пір, поки не вийдуть з неї. Через стіну сфери може проходити лише дихальне повітря. Жодна атака чи інший ефект не можуть пройти через неї.\nЗакрита істота може використати свою дію, щоб натиснути на стіну сфери, переміщаючи Сферу до половини своєї швидкості ходьби. Сферу можна підняти, і її магія робить її вагою лише 1 фунт, незалежно від ваги істот всередині.\"",
    "image": "/api/images/magic-items/bead-of-force.png",
    "url": "/api/2014/magic-items/bead-of-force",
    "name_ua": "Bead of Force"
  },
  {
    "index": "bag-of-devouring",
    "name": "Bag of Devouring",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, дуже рідкісний\nЦя сумка зовні нагадує сумку для зберігання, але насправді є харчовим отвором для гігантської екстра-розмірної істоти. Перевернувши сумку навиворіт, ви закриваєте отвір.\nЕкстра-розмірна істота, що приєднана до сумки, може відчувати все, що поміщається всередину. Тваринні або рослинні матеріали, повністю поміщені в сумку, поглинаються і назавжди втрачаються. Коли частина живої істоти потрапляє в сумку, наприклад, коли хтось тягнеться всередину, існує 50-відсоткова ймовірність того, що істота буде затягнута всередину. Істота всередині сумки може використати свою дію, щоб спробувати втекти, зробивши успішну перевірку Сили зі складністю 15. Інша істота може використати свою дію, щоб дістатися до сумки і витягнути істоту звідти, зробивши успішну перевірку Сили зі складністю 20 (за умови, що вона не буде затягнута всередину спочатку). Будь-яка істота, яка починає свій хід всередині сумки, поглинається і її тіло знищується.\nНеживі предмети можна зберігати в сумці, яка може вмістити кубічний фут такого матеріалу. Однак раз на день сумка ковтає будь-які предмети всередині неї і випльовує їх у інший вимір. ГМ визначає час і вимір.\nЯкщо сумка буде проколота або порвана, вона знищується, а все, що міститься в ній, переноситься до випадкового місця на Астральному Плані.\"",
    "image": "/api/images/magic-items/bag-of-devouring.png",
    "url": "/api/2014/magic-items/bag-of-devouring",
    "name_ua": "Bag of Devouring"
  },
  {
    "index": "bag-of-beans",
    "name": "Bag of Beans",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний\nУ цьому важкому тканинному мішку знаходяться 3d4 сухих бобів. Мішок важить 1/2 фунта плюс 1/4 фунта за кожен біб, який він містить.\nЯкщо ви виливаєте вміст мішка на землю, вони вибухають у радіусі 10 футів від бобів. Кожна істота в цій зоні, включаючи вас, повинна зробити рятувальний кидок на Спритність зі складністю DC 15, отримуючи 5d4 вогневого пошкодження при невдалому кидку або половину цього пошкодження при успішному. Вогонь запалює горючі об'єкти в зоні, які не носяться і не несуться.\nЯкщо ви витягнете біб з мішка, посадите його в землю або пісок і потім поллєте водою, біб створює ефект через 1 хвилину з місця посадки. Майстер гри може вибрати ефект з наступної таблиці, визначити його випадковим чином або створити свій власний ефект.\n| d100 | Ефект |\n|",
    "image": "/api/images/magic-items/bag-of-beans.png",
    "url": "/api/2014/magic-items/bag-of-beans",
    "name_ua": "Bag of Beans"
  },
  {
    "index": "arrow-of-slaying",
    "name": "Arrow of Slaying",
    "equipment_category": {
      "index": "ammunition",
      "name": "Ammunition",
      "url": "/api/2014/equipment-categories/ammunition"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Зброя (стріла), дуже рідкісна\nСтріла вбивства — це магічна зброя, призначена для знищення певного виду істот. Деякі з них більш спеціалізовані, ніж інші; наприклад, існують як стріли вбивства драконів, так і стріли вбивства синіх драконів. Якщо істота, що належить до типу, раси або групи, пов'язаної зі стрілою вбивства, отримує шкоду від цієї стріли, вона повинна зробити рятувальний кидок на Конституцію зі складністю 17. У разі невдачі істота отримує додаткову шкоду 6d10 проникаючої шкоди, або половину цієї шкоди у разі успіху.\nЯк тільки стріла вбивства завдає додаткову шкоду істоті, вона стає немагічною стрілою.\nІснують й інші види магічних боєприпасів цього типу, такі як болти вбивства для арбалета, хоча стріли є найпоширенішими.\"",
    "image": "/api/images/magic-items/arrow-of-slaying.png",
    "url": "/api/2014/magic-items/arrow-of-slaying",
    "name_ua": "Arrow of Slaying"
  },
  {
    "index": "arrow-catching-shield",
    "name": "Arrow-Catching Shield",
    "equipment_category": {
      "index": "armor",
      "name": "Armor",
      "url": "/api/2014/equipment-categories/armor"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Броня (щит), рідкісна (потребує налаштування)\nВи отримуєте бонус +2 до класу броні проти дистанційних атак, коли використовуєте цей щит. Цей бонус додається до звичайного бонусу щита до класу броні. Крім того, щоразу, коли нападник здійснює дистанційну атаку на ціль у межах 5 футів від вас, ви можете використати свою реакцію, щоб стати ціллю атаки замість неї.\"",
    "image": "/api/images/magic-items/arrow-catching-shield.png",
    "url": "/api/2014/magic-items/arrow-catching-shield",
    "name_ua": "Arrow-Catching Shield"
  },
  {
    "index": "armor-of-vulnerability",
    "name": "Armor of Vulnerability",
    "equipment_category": {
      "index": "armor",
      "name": "Armor",
      "url": "/api/2014/equipment-categories/armor"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Броня (латна), рідкісна (потребує налаштування)\nПід час носіння цієї броні ви отримуєте опір до одного з наступних типів ушкоджень: дроблячого, колючого або різального. Вибір типу здійснює майстер гри або визначає його випадковим чином.\n***Прокляття.*** Ця броня проклята, і це стає відомо лише тоді, коли на броню накладається заклинання визначення або ви налаштовуєтеся на неї. Налаштування на броню накладає на вас прокляття, яке триває до тих пір, поки на вас не буде застосовано заклинання зняття прокляття або подібну магію; зняття броні не припиняє прокляття. Поки ви прокляті, ви маєте вразливість до двох з трьох типів ушкоджень, пов'язаних з бронею (не до того, до якого вона надає опір).\"",
    "image": "/api/images/magic-items/armor-of-vulnerability.png",
    "url": "/api/2014/magic-items/armor-of-vulnerability",
    "name_ua": "Armor of Vulnerability"
  },
  {
    "index": "armor-of-resistance",
    "name": "Armor of Resistance",
    "equipment_category": {
      "index": "armor",
      "name": "Armor",
      "url": "/api/2014/equipment-categories/armor"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Броня (легка, середня або важка), рідкісна (потребує налаштування)\nПоки ви носите цю броню, ви маєте опір до одного типу ушкоджень. Майстер гри обирає тип або визначає його випадковим чином з наведених нижче варіантів.\n| d10 | Тип ушкодження |\n|",
    "image": "/api/images/magic-items/armor-of-resistance.png",
    "url": "/api/2014/magic-items/armor-of-resistance",
    "name_ua": "Armor of Resistance"
  },
  {
    "index": "armor-of-invulnerability",
    "name": "Armor of Invulnerability",
    "equipment_category": {
      "index": "armor",
      "name": "Armor",
      "url": "/api/2014/equipment-categories/armor"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Броня (латна), легендарна (потребує налаштування)\nПоки ви носите цю броню, ви маєте опір до немагічного ушкодження. Крім того, ви можете використати дію, щоб зробити себе імунним до немагічного ушкодження на 10 хвилин або до тих пір, поки ви не знімете броню. Після використання цієї спеціальної дії, вона не може бути використана знову до наступного світанку.\"",
    "image": "/api/images/magic-items/armor-of-invulnerability.png",
    "url": "/api/2014/magic-items/armor-of-invulnerability",
    "name_ua": "Armor of Invulnerability"
  },
  {
    "index": "armor-3",
    "name": "Armor, +3",
    "equipment_category": {
      "index": "armor",
      "name": "Armor",
      "url": "/api/2014/equipment-categories/armor"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Броня (легка, середня або важка), легендарна\nПоки ви носите цю броню, ви отримуєте бонус +3 до класу броні (AC).\"",
    "image": "/api/images/magic-items/armor-3.png",
    "url": "/api/2014/magic-items/armor-3",
    "name_ua": "Armor, +3"
  },
  {
    "index": "armor-2",
    "name": "Armor, +2",
    "equipment_category": {
      "index": "armor",
      "name": "Armor",
      "url": "/api/2014/equipment-categories/armor"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Броня (легка, середня або важка), дуже рідкісна\nПоки ви носите цю броню, ви отримуєте бонус +2 до класу броні (AC).\"",
    "image": "/api/images/magic-items/armor-2.png",
    "url": "/api/2014/magic-items/armor-2",
    "name_ua": "Armor, +2"
  },
  {
    "index": "armor-1",
    "name": "Armor, +1",
    "equipment_category": {
      "index": "armor",
      "name": "Armor",
      "url": "/api/2014/equipment-categories/armor"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Броня (легка, середня або важка), рідкісна\nПоки ви носите цю броню, ви отримуєте бонус +1 до класу броні (AC).\"",
    "image": "/api/images/magic-items/armor.png",
    "url": "/api/2014/magic-items/armor-1",
    "name_ua": "Armor, +1"
  },
  {
    "index": "apparatus-of-the-crab",
    "name": "Apparatus of the Crab",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Legendary"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, легендарний\nЦей предмет спочатку виглядає як велика герметична залізна бочка вагою 500 фунтів. Бочка має прихований засув, який можна знайти за успішним кидком Інтелекту (Розслідування) зі складністю 20. Відпустивши засув, відкривається люк на одному кінці бочки, що дозволяє двом істотам середнього або меншого розміру залізти всередину. На далекому кінці встановлено десять важелів, кожен з яких знаходиться в нейтральному положенні і може рухатися вгору або вниз. Коли використовуються певні важелі, апарат перетворюється на гігантського рака.\nАпарат Рака — це великий об'єкт з такими характеристиками:\nКлас броні: 20\nОчки здоров'я: 200\nШвидкість: 30 футів, плавання 30 футів (або 0 футів для обох, якщо ноги та хвіст не розгорнуті)\nІмунітет до ушкоджень: отрута, психічні\nДля використання як транспортного засобу апарат потребує одного пілота. Поки люк апарату закритий, відсік герметичний і водонепроникний. Відсік містить достатньо повітря для дихання протягом 10 годин, розділених на кількість дихаючих істот всередині.\nАпарат плаває на воді. Він також може занурюватися під воду на глибину до 900 футів. Нижче цього транспортний засіб отримує 2d6 ушкоджень від удару щохвилини через тиск.\nІстота в відсіку може використовувати дію, щоб перемістити до двох важелів апарату вгору або вниз. Після кожного використання важіль повертається в нейтральне положення. Кожен важіль, зліва направо, функціонує так, як показано в таблиці Важелів Апарат Рака.\nВажелі Апарат Рака\n| Важіль | Вгору | Вниз |\n|",
    "image": "/api/images/magic-items/apparatus-of-the-crab.png",
    "url": "/api/2014/magic-items/apparatus-of-the-crab",
    "name_ua": "Apparatus of the Crab"
  },
  {
    "index": "animated-shield",
    "name": "Animated Shield",
    "equipment_category": {
      "index": "armor",
      "name": "Armor",
      "url": "/api/2014/equipment-categories/armor"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Броня (щит), дуже рідкісна (потребує налаштування)\nТримаючи цей щит, ви можете вимовити його командне слово як бонусну дію, щоб змусити його анімуватися. Щит підстрибує в повітря і зависає у вашому просторі, захищаючи вас так, ніби ви його тримаєте, залишаючи ваші руки вільними. Щит залишається анімованим протягом 1 хвилини, поки ви не використаєте бонусну дію, щоб припинити цей ефект, або поки ви не станете нездатними до дій або не помрете, після чого щит впаде на землю або у вашу руку, якщо вона вільна.\"",
    "image": "/api/images/magic-items/animated-shield.png",
    "url": "/api/2014/magic-items/animated-shield",
    "name_ua": "Animated Shield"
  },
  {
    "index": "amulet-of-the-planes",
    "name": "Amulet of the Planes",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, дуже рідкісний (потребує налаштування)\nПоки ви носите цей амулет, ви можете використати дію, щоб назвати місце, яке вам знайоме на іншому плані існування. Потім виконайте перевірку Інтелекту зі складністю DC 15. При успішній перевірці ви накладаєте заклинання «Переміщення між планами». При невдачі ви та кожна істота і об'єкт у радіусі 15 футів від вас переміщуються до випадкового місця. Киньте d100. Якщо випало 1-60, ви переміщуєтеся до випадкового місця на названому вами плані. Якщо випало 61-100, ви переміщуєтеся до випадково визначеного плану існування.\"",
    "image": "/api/images/magic-items/amulet-of-the-planes.png",
    "url": "/api/2014/magic-items/amulet-of-the-planes",
    "name_ua": "Amulet of the Planes"
  },
  {
    "index": "amulet-of-health",
    "name": "Amulet of Health",
    "equipment_category": {
      "index": "wondrous-items",
      "name": "Wondrous Items",
      "url": "/api/2014/equipment-categories/wondrous-items"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": false,
    "desc": "\"Дивовижний предмет, рідкісний (потребує налаштування)\nВаш показник Конституції дорівнює 19, коли ви носите цей амулет. Він не має жодного ефекту, якщо ваш показник Конституції вже дорівнює 19 або вище.\"",
    "image": "/api/images/magic-items/amulet-of-health.png",
    "url": "/api/2014/magic-items/amulet-of-health",
    "name_ua": "Amulet of Health"
  },
  {
    "index": "ammunition-3",
    "name": "Ammunition, +3",
    "equipment_category": {
      "index": "ammunition",
      "name": "Ammunition",
      "url": "/api/2014/equipment-categories/ammunition"
    },
    "rarity": {
      "name": "Very Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Зброя (будь-які боєприпаси), дуже рідкісна\nВи отримуєте бонус +3 до атак і пошкоджень, завданих цим магічним боєприпасом. Після того, як він влучає в ціль, боєприпас більше не є магічним.\"",
    "image": "/api/images/magic-items/ammunition.png",
    "url": "/api/2014/magic-items/ammunition-3",
    "name_ua": "Ammunition, +3"
  },
  {
    "index": "ammunition-2",
    "name": "Ammunition, +2",
    "equipment_category": {
      "index": "ammunition",
      "name": "Ammunition",
      "url": "/api/2014/equipment-categories/ammunition"
    },
    "rarity": {
      "name": "Rare"
    },
    "variants": [],
    "variant": true,
    "desc": "\"Зброя (будь-які боєприпаси), рідкісна\nВи отримуєте бонус +2 до атак і пошкоджень, завданих цим магічним боєприпасом. Після того, як він влучає в ціль, боєприпас більше не є магічним.\"",
    "image": "/api/images/magic-items/ammunition.png",
    "url": "/api/2014/magic-items/ammunition-2",
    "name_ua": "Ammunition, +2"
  }
]