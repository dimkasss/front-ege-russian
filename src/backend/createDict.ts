const createDict = () => {

    let dict: any = [[]];
    const correct_words = [
            'аэропОрты',
            'бАнты',
            'бОроду',
            'бухгАлтеров',
            'вероисповЕдание',
            'водопровОд',
            'газопровОд',
            'граждАнство',
            'дефИс',
            'дешевИзна',
            'диспансЕр',
            'договорЁнность',
            'докумЕнт',
            'досУг',
            'еретИк',
            'жалюзИ',
            'знАчимость',
            'Иксы',
            'каталОг',
            'квартАл',
            'киломЕтр',
            'кОнусов',
            'корЫсть',
            'крАны',
            'кремЕнь',
            'лЕкторов',
            'лОктя',
            'лыжнЯ',
            'мЕстностей',
            'намЕрение',
            'нарОст',
            'нЕдруг',
            'недУг',
            'некролОг',
            'нЕнависть',
            'нефтепровОд',
            'новостЕй',
            'нОгтя',
            'Отзыв (о книге)',
            'отзЫв (посла из страны)',
            'Отрочество',
            'партЕр',
            'портфЕль',
            'пОручни',
            'придАное',
            'призЫв',
            'свЁкла',
            'сирОты',
            'созЫв',
            'сосредотОчение',
            'срЕдства',
            'стАтуя',
            'столЯр',
            'тамОжня',
            'тОрты',
            'тУфля',
            'цемЕнт',
            'цЕнтнер',
            'цепОчка',
            'шАрфы',
            'шофЁр',
            'экспЕрт',
            'вернА',
            'знАчимый',
            'красИвее',
            'кУхонный',
            'ловкА',
            'мозаИчный',
            'оптОвый',
            'прозорлИвый',
            'слИвовый',
            'бралА',
            'бралАсь',
            'взялА',
            'взялАсь',
            'влилАсь',
            'ворвалАсь',
            'воспринЯть',
            'воссоздалА',
            'вручИт',
            'гналА',
            'гналАсь',
            'добралА',
            'добралАсь',
            'дождалАсь',
            'дозвонИтся',
            'дозИровать',
            'ждалА',
            'жилОсь',
            'закУпорить',
            'занЯть',
            'заперлА',
            'запломбировАть',
            'защемИт',
            'звалА',
            'звонИт',
            'кАшлянуть',
            'клАла',
            'клЕить',
            'крАлась',
            'кровоточИть',
            'лгалА',
            'лилА',
            'лилАсь',
            'навралА',
            'наделИт',
            'надорвалАсь',
            'назвалАсь',
            'накренИтся',
            'налилА',
            'нарвалА',
            'начАть',
            'обзвонИт',
            'облегчИть',
            'облилАсь',
            'обнялАсь',
            'обогналА',
            'ободралА',
            'ободрИть',
            'ободрИться',
            'обострИть',
            'одолжИть',
            'озлОбить',
            'оклЕить',
            'окружИт',
            'опОшлить',
            'освЕдомиться',
            'отбылА',
            'отдалА',
            'откУпорить',
            'отозвалА',
            'отозвалАсь',
            'перезвонИт',
            'перелилА',
            'плодоносИть',
            'пломбировАть',
            'повторИт',
            'позвалА',
            'позвонИт',
            'полилА',
            'положИть',
            'понЯть',
            'послАла',
            'прибЫть',
            'принЯть',
            'рвалА',
            'сверлИт',
            'снялА',
            'совралА',
            'создалА',
            'сорвалА',
            'сорИт',
            'убралА',
            'углубИть',
            'укрепИт',
            'чЕрпать',
            'щемИт',
            'щЁлкать',
            'довезЁнный',
            'зАгнутый',
            'зАнятый',
            'зАпертый',
            'заселЁнный',
            'кормЯщий',
            'кровоточАщий',
            'нажИвший',
            'налИвший',
            'нанЯвшийся',
            'начАвший',
            'нАчатый',
            'низведЁнный',
            'облегчЁнный',
            'ободрЁнный',
            'обострЁнный',
            'отключЁнный',
            'повторЁнный',
            'поделЁнный',
            'понЯвший',
            'прИнятый',
            'приручЁнный',
            'прожИвший',
            'снятА',
            'сОгнутый',
            'углублЁнный',
            'закУпорив',
            'начАв',
            'начАвшись',
            'отдАв',
            'поднЯв',
            'понЯв',
            'прибЫв',
            'создАв',
            'вОвремя',
            'дОверху',
            'донЕльзя',
            'дОнизу',
            'дОсуха',
            'зАсветло',
            'зАтемно',
            'красИвее',
            'надОлго',
            'ненадОлго',
    ]
    const incorrect_words = [
            'аэропортЫ',
            'бантЫ',
            'бородУ',
            'бухгалтерОв',
            'вероисповедАние',
            'водопрОвод',
            'газопрОвод',
            'грАжданство',
            'дЕфис',
            'дешевизнА',
            'диспАнсер',
            'договОренность',
            'докУмент',
            'дОсуг',
            'ерЕтик',
            'жАлюзи',
            'значИмость',
            'иксЫ',
            'кАталог',
            'квАртал',
            'килОметр',
            'конусОв',
            'кОрысть',
            'кранЫ',
            'крЕмень',
            'лекторОв',
            'локтЯ',
            'лЫжня',
            'местностЕй',
            'намерЕние',
            'нАрост',
            'недрУг',
            'нЕдуг',
            'некрОлог',
            'ненАвисть',
            'нефтепрОвод',
            'нОвостей',
            'ногтЯ',
            'отзЫв (о книге)',
            'Отзыв (посла из страны)',
            'отрОчество',
            'пАртер',
            'пОртфель',
            'порУчни',
            'прИданое',
            'прИзыв',
            'свеклА',
            'сИроты',
            'сОзыв',
            'сосредоточЕние',
            'средствА',
            'статУя',
            'стОляр',
            'тАможня',
            'тортЫ',
            'туфлЯ',
            'цЕмент',
            'центнЕр',
            'цЕпочка',
            'шарфЫ',
            'шОфер',
            'Эксперт',
            'вЕрна',
            'значИмый',
            'красивЕе',
            'кухОнный',
            'лОвка',
            'мозАичный',
            'Оптовый',
            'прозОрливый',
            'сливОвый',
            'брАла',
            'брАлась',
            'взЯла',
            'взЯлась',
            'влИлась',
            'ворвАлась',
            'воспрИнять',
            'воссоздАла',
            'врУчит',
            'гнАла',
            'гнАлась',
            'добрАла',
            'добрАлась',
            'дождАлась',
            'дозвОнится',
            'дозировАть',
            'ждАла',
            'жИлось',
            'закупорИть',
            'зАнять',
            'зАперла',
            'запломбИровать',
            'защЕмит',
            'звАла',
            'звОнит',
            'кашлянУть',
            'клалА',
            'клеИть',
            'кралАсь',
            'кровотОчить',
            'лгАла',
            'лИла',
            'лИлась',
            'наврАла',
            'надЕлит',
            'надорвАлась',
            'назвАлась',
            'накрЕнится',
            'налИла',
            'нарвАла',
            'нАчать',
            'обзвОнит',
            'облЕгчить',
            'облИлась',
            'обнЯлась',
            'обогнАла',
            'ободрАла',
            'обОдрить',
            'обОдриться',
            'обОстрить',
            'одОлжить',
            'озлобИть',
            'оклеИть',
            'окрУжит',
            'опошлИть',
            'осведомИться',
            'отбЫла',
            'отдАла',
            'откупорИть',
            'отозвАла',
            'отозвАлась',
            'перезвОнит',
            'перелИла',
            'плодонОсить',
            'пломбИровать',
            'повтОрит',
            'позвАла',
            'позвОнит',
            'полИла',
            'полОжить',
            'пОнять',
            'послалА',
            'прИбыть',
            'прИнять',
            'рвАла',
            'свЕрлит',
            'снЯла',
            'соврАла',
            'создАла',
            'сорвАла',
            'сОрит',
            'убрАла',
            'углУбить',
            'укрЕпит',
            'черпАть',
            'щЕмит',
            'щелкАть',
            'дОвезенный',
            'загнУтый',
            'занЯтый',
            'запЕртый',
            'засЕленный',
            'кОрмящий',
            'кровотОчащий',
            'нАживший',
            'нАливший',
            'нАнявшийся',
            'нАчавший',
            'начАтый',
            'нИзведенный',
            'облЕгченный',
            'обОдренный',
            'обОстренный',
            'отклЮченный',
            'повтОренный',
            'подЕленный',
            'пОнявший',
            'принЯтый',
            'прирУченный',
            'прОживший',
            'снЯта',
            'согнУтый',
            'углУбленный',
            'закупорИв',
            'нАчав',
            'нАчавшись',
            'Отдав',
            'пОдняв',
            'пОняв',
            'прИбыв',
            'сОздав',
            'воврЕмя',
            'довЕрху',
            'дОнельзя',
            'донИзу',
            'досУха',
            'засветлО',
            'затемнО',
            'красивЕе',
            'нАдолго',
            'ненАдолго',
    ]
    const dict_length = correct_words.length;

    for (let i = 0; i < dict_length; i++) {
        dict.push( [] )
    }
    for (let i = 0; i < dict_length; i++) {
        dict[i].push([correct_words[i], incorrect_words[i]])
    }
    return [dict, dict_length];
}

export default createDict;