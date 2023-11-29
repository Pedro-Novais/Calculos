// Coletando elementos HTML e armazenando em variáveis

let show_count = document.querySelector('#show-count');
let put_result = document.querySelector('#put-result');
let show_points= document.querySelector('#show-points');

    let pos_simbol = document.createElement('div');
    let pos_num_one = document.createElement('div');
    let pos_num_two = document.createElement('div');
    let pos_result = document.createElement('div');
    let put_count = document.createElement('div');

    put_count.className = 'put-count-div';
    pos_num_one.className = 'num'
    pos_num_two.className = 'num';

    show_count.appendChild(put_count)
    put_count.appendChild(pos_num_one);
    put_count.appendChild(pos_simbol)
    put_count.appendChild(pos_num_two);

    
    style();
    function style(){
        put_count.style.display="flex";
        put_count.style.flexDirection="row";
        put_count.style.justifyContent="center";
        put_count.style.width="90%";
        put_count.style.marginTop = "5rem";

        style_auto(pos_num_one)

        style_auto(pos_simbol)

        style_auto(pos_num_two)

        style_auto(pos_result)
        pos_result.style.width = "2rem";

        function style_auto(be){
            be.style.width="1.5rem";
            be.style.height="1.5rem";
            be.style.textAlign="center";
        }
    }
// Coletando o botão de verificação/reinicialização da conta
    let btn_sub = document.querySelector('#btn-sub');
    let btn_reset = document.querySelector('#btn-reset');

// Coletando as opções de tipos de cálculos
    let verifica_tipo = -1;
    let simbol = -1;
    let tipo_calc = [
        document.querySelector('#soma'),
        document.querySelector('#sub'),
        document.querySelector('#multi'),
        document.querySelector('#division')
    ]

        tipo_calc[0].addEventListener("click", function(){
                verifica_tipo = tipo_calc[0].value;
                simbol = 0;
                create_count();
                view_count()
        })

        tipo_calc[1].addEventListener("click", function(){
            verifica_tipo = tipo_calc[1].value;
            simbol = 1;
            create_count();
            view_count()
        })

        tipo_calc[2].addEventListener("click", function(){
            verifica_tipo = tipo_calc[2].value;
            simbol = 2;
            create_count();
            view_count()
        })

        tipo_calc[3].addEventListener("click", function(){
            verifica_tipo = tipo_calc[3].value;
            simbol = 3;
            create_count();
            view_count()
        })

        let verifica_level = -1;
        let level = [
            document.querySelector('#easy'),
            document.querySelector('#mid'),
            document.querySelector('#hard'),
            document.querySelector('#impossible')
        ]
        level[0].addEventListener("click", function(){
            verifica_level = level[0].value;
            fun_dificulty();
            create_count();
            //view_count();
        })

        level[1].addEventListener("click", function(){
            verifica_level = level[1].value;
            fun_dificulty();
            create_count();
            //view_count();
        })

        level[2].addEventListener("click", function(){
            verifica_level = level[2].value;
            fun_dificulty();
            create_count();
            //view_count();
        })

        level[3].addEventListener("click", function(){
            verifica_level = level[3].value;
            fun_dificulty();
            create_count();
            //view_count();
        })
        
        let desempenho = 0;

        let exec = 1;
        btn_sub.addEventListener("click", function(){
            if(exec == 1){
        if(verifica_tipo == -1){
            window.alert('Escolha uma operação matemática');
            return false;
        }if(verifica_level == -1){
            window.alert("Selecione a dificuldade da operação");
            return false;
        }
        if(put_result.value == ""){
            window.alert("Preencha o campo com o resultado da operação");
            return false;
        }else{
            for(let i = 0; i<tipo_calc.length;i++){
                if(i == verifica_tipo){
                    fun_tipos[i](first_number,second_number);
                        if(put_result.value == res){
                            console.log('Cálculo certo, reultado =', res)
                            desempenho = desempenho + points_dificulty + points_calc;
                            result(desempenho);
                            res = 0;
                            //change = 0;
                            //change_dificulty = 0;
                            verifica_tipo = 0;
                            verifica_level = 0;
                            console.log("Pontuação atual = " + desempenho)
                            console.log(change)
                            exec = 0;
                        }else{
                            console.log('Cálculo errado, resultado =', res)
                            result(0);
                            res = 0;
                            //change = 0;
                            //change_dificulty = 0;
                            verifica_tipo = 0;
                            verifica_level = 0;
                            desempenho = 0;
                            console.log("Pontuação atual = " + 0)
                            exec = 0;
                        }
                    }
                }
            }
        }
        })

        btn_reset.addEventListener("click", function(){
            console.log(next)
            let sure = window.confirm("Tem certeza que deseja reiniciar?");
            if(sure){
                if(next == 0){
                    show_points.innerText = "";
                    res = 0;
                    change = 0;
                    change_dificulty = 0;
                    exec = 1;
                    dificulty = -1;
                    desempenho = 0;
                    hide = 0;
                    verifica_tipo = -1;
                    verifica_level = -1;
                }else{
                res = 0;
                change = 0;
                change_dificulty = 0;
                exec = 1;
                dificulty = -1;
                desempenho = 0;
                hide = 0;
                verifica_tipo = -1;
                verifica_level = -1;
                put_result.value = "";
                put_count.style.backgroundColor = "#F23869";
                pos_num_one.innerText = "";
                pos_num_two.innerText = "";
                pos_simbol.innerText = "";
                put_count.removeChild(pos_result);
                show_points.innerText = "";
                }
            }
        })

        let btn_next = document.querySelector('#btn-next');

        btn_next.addEventListener("click", after_res);

    let first_number = 0;
    let second_number = 0;
    let res;
    
    let dificulty = -1;
    let change_dificulty = 0;
    
    let points_calc;
    let points_dificulty;

    let next = 0;

    let simbols = [
        "+",
        "-",
        "*",
        "/",
    ]
    
    let change = -1;
    function create_count(){
        if(exec == 1){
        if(change==-1){
                first_number = parseInt(Math.random() * dificulty);
                second_number = parseInt(Math.random() * dificulty);
                change = 0;
                console.log("change create " + change)
        }
    }
    }

    function view_count(){
        if(exec == 1){
        if(change==0 && change_dificulty==1){
        
        pos_num_one.innerText = first_number;
        pos_simbol.innerText = simbols[simbol];
        pos_num_two.innerText = second_number;   

        change = 1;
        change_dificulty = -1;
        console.log("change 1 " + change + change_dificulty)
        }else if(change==-1 && change_dificulty == 0){
            window.alert("Escolha a dificuldade primeiro")
            console.log("change 2 " + change + change_dificulty)
        }
    }
    }

    function result(des){
        //Exibindo resultado
        if(put_result.value == res){
            
            put_count.appendChild(pos_result)
            pos_result.innerText = "= " + res;
            put_count.style.backgroundColor="#72ff72";
            put_count.style.borderRadius="1rem";
            next = 1;

        }else{

            put_count.appendChild(pos_result)
            pos_result.innerText = "= " + res;
            put_count.style.backgroundColor="red";
            put_count.style.borderRadius="1rem";
            next = 1;

        }
        //Exibindo desempenho
        show_points.style.textAlign="center";
        show_points.style.textTransform="uppercase";
        //show_count.style.width="70%";
        //show_count.style.heght="1.5rem";
        //show_count.style.borderRadius="2rem";
        //show_count.style.backgroundColor="#3621BF";
        //show_count.style.color="pink";
        return show_points.innerText = "Pontuação Atual: " + des;
    }

    function after_res(){
        if(next == 1){
        put_count.style.backgroundColor = "#F23869";
        pos_num_one.innerText = "";
        pos_num_two.innerText = "";
        pos_simbol.innerText = "";
        put_result.value = "";
        put_count.removeChild(pos_result);
        res = 0;
        change = 0;
        change_dificulty = 0;
        exec = 1;
        next = 0;
        verifica_tipo = -1;
        verifica_level = -1;
        }
    }
    function fun_dificulty(){
        if(exec == 1){
        if(change_dificulty == 0){
            if(verifica_level==0){
                //level[0].style.backgroundColor="lightgreen";
                dificulty = 10;
                points_dificulty = 1;
                console.log("easy")
                change_dificulty = 1;
                change = -1;
                console.log(change)
            }else if(verifica_level==1){
                //level[1].style.backgroundColor="lightgreen";
                dificulty = 100;
                points_dificulty = 5;
                console.log("mid")
                change_dificulty = 1;
                change = -1;
            }else if(verifica_level==2){
                //level[2].style.backgroundColor="lightgreen";
                dificulty = 500;
                points_dificulty = 7;
                console.log("hard")
                change_dificulty = 1;
                change = -1;
            }else if(verifica_level==3){
                //level[3].style.backgroundColor="lightgreen";
                dificulty = 1000;
                points_dificulty = 10;
                console.log("impossible")
                change_dificulty = 1;
                change = -1;
            }
        }
    }
    }
    let fun_tipos = [
        function soma (a,b){
            res = a + b;
            points_calc = 10;
            return res;
        },
        function subtracao(a,b){
            res = a - b;
            points_calc = 10;
            return res;
        },
        function multipli(a,b){
            res = a * b;
            points_calc = 20;
            return res;
        },
        function div(a,b){
            if(b==0){
                points_calc = 20;
                res = 0;
                return res;
            }
            res = a / b;
            points_calc = 20;
            return res;
        }
    ]
