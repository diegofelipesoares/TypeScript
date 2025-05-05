//name space serve para organizar o código em pastas virtuais
// assim nome de variaveis não se repetem por haver o mesmo nome em outra pasta
namespace casting{
    let idade: any =25;
    (idade as number).toFixed();
    (idade as string).length;
    (idade as string[]).forEach(x => {
        console.log(x);
    });

    //Casting para string a fim de usar métodos de string
    //tem que converter para unknown antes de converter para string
    let nome: string = 35 as unknown as string;
    //métodos de string disponíveis agora para variável nome
    nome.length;

    //Conversões tradicionais
    parseInt ("35.5"); // 35
    idade.parseFloat();
    idade.toString;

}