/* Допустим, вы написали рассказ, и везде для обозначения диалогов использовали одинарные кавычки.
Теперь вы хотите заменить кавычки диалогов на двойные, и оставить одинарные в сокращениях слов типа aren’t.
Придумайте шаблон, различающий два этих использования кавычек, и напишите вызов метода replace, который производит замену.*/

const pattern = /((^|\s)'\w)|(\w(')(\s|[.!?]|$))/gi;

const text = `'fasdaf'sdfds'.
'aren't' aren't 'dsadsads' ''
'dasdad' sdadasd'dasd''.vsdv'''''ásdad''sad'''dsvsdvdsvdsvdsvdare
'nt 'vsvvvcvcxvcxvvcx' xvcvvc'svdvc'. 'sdfdsd
dfdsfd'. 'd'sf'dsfdsffdsd sdfds 'fsdfds fsd'.`;

function replacer(match) {
    return match.replace('\'', '"');
}

console.log(text.replace(pattern, replacer));