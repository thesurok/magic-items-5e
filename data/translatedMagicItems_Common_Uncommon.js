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
  }
]