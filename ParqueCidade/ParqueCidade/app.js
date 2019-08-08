var request = require("request");
var texto = '';

function getInfo(dias, i, url) {

    return new Promise(function (resolve, reject) {

        var semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
        let now = new Date(dias[i]);
        var request = require("request");
        var options = {
            method: 'GET',
            url: 'http://agendamento.serra.es.gov.br/api/servicos/' + url + '/unidades/45/horarios/' + dias[i],
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            let string = 'Dia ' + (now.getDate() + 1).toString() + '/' + (now.getMonth() + 1).toString() + '/' + now.getFullYear().toString() + '(' + semana[now.getDay() + 1] + ')\nHorarios disponiveis:' + body;
            texto += string + '\n'
            resolve(string);
        });
    });
}

async function main() {

    console.log('Quadra 1')
    texto += "Quadra 1\n"
    var options = {
        method: 'GET',
        url: 'http://agendamento.serra.es.gov.br/api/servicos/19/unidades/45',
        qs: { _: '1563201098425' },

    };

    request(options, async function (error, response, body) {
        if (error) throw new Error(error);

        var dias = JSON.parse(body).diasDisponiveis;
        var org = []
        for (let i in dias) {

            let res = await getInfo(dias, i, 19);
            console.log(res);

        }

        var options = {
            method: 'GET',
            url: 'http://agendamento.serra.es.gov.br/api/servicos/20/unidades/45',
            qs: { _: '1563201098425' },

        };

        request(options, async function (error, response, body) {
            if (error) throw new Error(error);

            var dias = JSON.parse(body).diasDisponiveis;
            var org = []
            console.log('--------------------------')
            texto += '--------------------------\n'
            texto += 'Quadra 2 \n'
            console.log('Quadra 2')

            for (let i in dias) {
                let res = await getInfo(dias, i, 20);
                console.log(res);

            }


            const fs = require('fs');
            fs.writeFile("C:\\Users\\thiago.alves\\a.txt", texto + '\n'
                , function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");
                });

            process.stdin.on('readable', () => {
                let variable = process.stdin.read();
            });
        });

        process.stdin.on('readable', () => {
            let variable = process.stdin.read();
        });
    });




}
main();