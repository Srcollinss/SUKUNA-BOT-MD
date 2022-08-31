const cmd_termux = (prefix) => {
return `


- _1 COMANDO :


termux-change-repo

APERTA OK

MARCA A TERCEIRA CAIXINHA E APERTA OK.



_2 COMANDO


pkg upgrade -y 


_3 COMANDO 


pkg update -y


_4 COMANDO


termux-setup-storage


_5 COMANDO 


pkg install nodejs -y


_6 COMANDO 


pkg install nodejs-lts -y


_7 COMANDO 


pkg install git -y


_8 COMANDO 


pkg install ffmpeg -y


_9 COMANDO PARA O HEROKU


npm i -g npm@6 && npm i heroku -g


PRONTO, BOA SORTE... 


`
}

exports.cmd_termux = cmd_termux
