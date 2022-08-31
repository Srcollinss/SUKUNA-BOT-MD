const hospedar = (prefix) => {
return `
║┅┅╮
╠═══════════════════════
║┅┅╯  LEMBRANDO QUE VOCÊ DEVE DAR OS COMANDOS BÁSICOS DO TERMUX ANTES DE INICIAR O PROCESSO DE HOSPEDAGEM NO HEROKU 

E LEMBRANDO A TODOS :> O HEROKU NÃO ARMAZENA DADOS, ENTÃO DEVES DÁ TODOS OS COMANDOS DO BOT PRA ATIVAR FUNÇÕES, NO TERMUX


PRIMEIRO, VOCÊ DEVE SE CADASTRAR NO HEROKU

SITE : heroku.com


APÓS SE CADASTRAR NO HEROKU, VÁ ATÉ O TERMUX E DE OS SEGUINTES COMANDOS

║┅┅╮
╠═══════════════════════
║┅┅╯  1° heroku login -i


ESSE COMANDO ^ É PARA CONECTAR NA CONTA DO HEROKU 

ELE VAI CONECTAR.

Próximos comando :
 
1_ COMANDO :

cd /sdcard/pasta do bot...

1.2_ COMANDO :

sh start.sh

ESCANEIA O QRCODE COM O TESTE BETA NO WHATSAPP WEB

1.3_ PASSO :

DEPOIS PRESSIONA O VOLUME DE DIMINUIR O VOLUME DO CELULAR, E APERTA A LETRA Z, APÓS ESCANEAR O QRCODE, E FAÇA OS PROCEDIMENTOS, ABAIXO, LEMBRE-SE DE CONFIGURAR O BOT ANTES, EXPLIQUEI LÁ ENCIMA O PORQUE.

1.4_ COMANDO :

rm -rf .git

2_ COMANDO :

git init

3_ COMANDO :

heroku apps:create NOMEDOSEUAPP

^ em NOMEDOSEUAPP, coloque um nome seu, ou nick com numeração, pra ele aceitar, deve ser letra menuscula, lembre do nome.


║┅┅╮
╠═══════════════════════
║┅┅╯  PRÓXIMOS COMANDOS :

4_ COMANDO :

heroku buildpacks:add heroku/nodejs

5_ COMANDO :

heroku buildpacks:add https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest

6_ COMANDO :

heroku buildpacks:add https://github.com/clhuang/heroku-buildpack-webp-binaries.git

_7 COMANDO :

heroku git:remote -a NOMEDoSEUAPP

Em NOMEDOSEUAPP você coloca o nome que colocou, que mandei criar, no primeiro que informei. 

_8 COMANDO :

git config --global user.email "tantofaz@gmail.com"
git config --global user.name "TantoFaz"

Cole exatamente dessa fórma, não precisa editar nada... 

_9 COMANDO :

git add . 

_10 COMANDO :

git commit -am "blabla"

_11 COMANDO :

git push heroku master

║┅┅╮
╠═══════════════════════
║┅┅╯  PROXIMOS :

ENTRE NO SITE : heroku.com

ACESSE A SUA CONTA QUE CRIOU, ENTRE NO APP QUE FOI CRIADO

DEPOIS QUE ENTRAR NO APP

ACESSE ESSA PARTE DE LOGIN ATIVE A CHAVINHA SH START.SH E PRONTINHO SEU BOT JA ESTARÁ FUNCIONANDO NO SITE 

FAÇA COMO EXPLIQUEI PASSO A PASSO, SE MUDAR ATÉ UMA VIRGULA, OU UMA PONTUAÇÃO DO QUE ENSINEI, PODE DÁ ERRO


COMANDO PARA ATUALIZAR, CASO EDITAR ALGUMA INFORMAÇÃO, OU NOME DO BOT :

ACESSE A PASTA DO BOT COM :

_1 COMANDO :

cd /sdcard/pasta do Bot 

_2 COMANDO :

git add .

3_ COMANDO :

git commit -am "blabla"

4_ COMANDO :

git push heroku master


`
}

exports.hospedar = hospedar
