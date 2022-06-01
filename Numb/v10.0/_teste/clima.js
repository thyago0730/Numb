main()

function main()
{
    const dateTime = new Date()

    dayMessage(dateTime)
    sayHello(dateTime);
}

function dayMessage(dateTime)
{
    const weekDay = dateTime.getDay();

    let message = '';
    switch (weekDay)
    {
        case 0x00:
            message = 'Domingo';
            break;

        case 0x01:
            message = 'Segunda-feira';
            break;

        case 0x02:
            message = 'Terça-feira';
            break;

        case 0x03:
            message = 'Quarta-feira';
            break;

        case 0x04:
            message = 'Quinta-feira';
            break;

        case 0x05:
            message = 'Sexta-feira';
            break;

        case 0x06:
            message = 'Sabado';
            break;
    }

    console.log(message);
    // alert(message);
}

function sayHello(dateTime)
{
    const time = dateTime.getHours();
    const weather = "chuvoso";

    let message = '';
    if (time < 12)
    {
        message = 'Bom dia...';
        if (weather == 'chuvoso')
            console.log('Está chovendo, leve o guarda-chuva');
    }
    message = (time >= 12 && time < 18) ? 'Boa tarde...' : 'Boa noite';

    console.log(message);
    // alert(message);
}