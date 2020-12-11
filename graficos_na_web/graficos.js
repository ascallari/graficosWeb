function desenharGraficos(){
    //gráfico de pizza
    var tabela = new google.visualization.DataTable();
    //colunas
    tabela.addColumn('string','categorias');
    tabela.addColumn('number','valores');
    //linhas da tabela
        tabela.addRows([
            ['Educação',2000],
            ['Transporte',500],
            ['Lazer',230],
            ['Saúde',50],
            ['Cartão de crédito',900],
            ['Alimentação',260]
        ]);
    //opcoes que customizam o gráfico
        var opcoes = {
            'title': 'Tipos de Gastos',
            'height': 400,
            'width': 900,
            /*'pieHole': 0.4 Adiciona círculo vazado dentro do gráfico de pizza*/
            is3D: true,
            legend: 'labeled',
            pieSliceText: 'value',
            //colors: ['grey', 'red','yellow', 'blue', 'pink','purple']
            slices: {                   
                1:{color: 'grey'},
                2:{color: '#a6a6a6'},
                3:{color: 'grey'},
                4:{offset: 0.4},
                5:{color: 'grey'}
                
                }

        };
    //desenhando gráfico   
    var grafico = new google.visualization.PieChart(document.getElementById('graficoPizza'));
        grafico.draw(tabela, opcoes);

    //gráfico de linha
    tabela = new google.visualization.DataTable();
    //colunas da tabela
    tabela.addColumn('string', 'mês');
    tabela.addColumn('number', 'gastos');
    //linhas da tabela
        tabela.addRows([
            ['jan',800],
            ['fev',400],
            ['mar',1100],
            ['abr',400],
            ['mai',500],
            ['jun',750],
            ['jul',1500],
            ['ago',650],
            ['set',850],
            ['out',400],
            ['nov',1000],
            ['dez',720]
        ]);
    //opcoes que customizam o gráfico    
        var opcoes = {
            title: 'Gastos por mês',
            width: 650,
            height: 300,
            vAxis: {
                format: 'currency',
                gridlines: {count:5, 
                            color: 'transparent'}
                },
            curveType: 'function',
            legend: 'none'



        }

    var grafico = new google.visualization.LineChart(document.getElementById('graficoLinha'));
    grafico.draw(tabela, opcoes);

    // gráfico de colunas
   var tabela = google.visualization.arrayToDataTable(
        [
            ['Mês', 'Entrada', 'Saída'],
            ['jan',2500,1000],
            ['fev',1000,500],
            ['mar',3000,1300],
            ['abr',1500,1700],
            ['mai',5000,2250],
            ['jun',3567,3000],
            ['jul',3452,1468],
            ['ago',1833,5250],
            ['set',1800,1000],
            ['out',1800,1000],
            ['nov',3569,1500],
            ['dez',3000 ,1740] 
                
        ]);
        
    var opcoes = {
        title: 'Entradas e saídas da conta',
        width: 800,
        height: 400,
        vAxis: {
            gridlines:{color: 'transparent'},
            format: 'currency',
            title: 'Valores'
            },
        hAxis: {
            title:'Mês'
            }
        }
var grafico = new google.visualization.ColumnChart(document.getElementById('graficoColuna'));
grafico.draw(tabela,opcoes);

    //gráfico de barras 
    var tabela = new google.visualization.DataTable();
    
    tabela.addColumn('string','categorias');
    tabela.addColumn('number','valores');
    tabela.addColumn({type:'string', role:'annotation'});
    tabela.addColumn({type:'string', role:'style'});

        tabela.addRows([        
            ['Educação',2000, 'R$2.000,00', 'blue'],
            ['Transporte',500, 'R$500,00', 'grey'],
            ['Lazer',230,'R$230,00', 'grey'],
            ['Saúde',50,'R$50,00', 'grey'],
            ['Cartão de crédito',900, 'R$900,00', '#8904b1'],
            ['Alimentação',260, 'R$260,00', 'grey']
            ]);
    //ordenando a tabela pela coluna de indice 1       
    tabela.sort([{column: 1, desc: true}]);
        var opcoes = {
            title: 'Tipos de Gastos',
            height: 400,
            width: 800,
            vAxis: {
                    gridlines: {
                        count:0}, 
                        textPosition: 'none'},
            legend: 'none',
            hAxis: { 
                    gridlines:
                    {
                        color: 'transparent'},
                        format: 'currency',
                        textPosition: 'none'
                    },
            annotations:
                    {
                    alwaysOutside: true
                    }
            }
    var grafico = new google.visualization.BarChart(document.getElementById('graficoBarras')); //BarChart ao invés de ColumnChart para o gráfico ficar na horizontal
    grafico.draw(tabela, opcoes);

    //gráfico de barras com arquivo json
        var dadosJson = $.ajax({
            //url: 'dados.json',
            url: 'https://gist.githubusercontent.com/amartins/4bdda5481b7cc9fccd7bc11c801915db/raw/4a80277d6c190abab466544d0ab09c828c7cf7bd/dados.json',
            mimeType: 'application-json',    
            dataType: 'json',
            async: false
        }).responseText;

        var tabela = new google.visualization.DataTable(dadosJson);

        tabela.sort([{column: 1, desc: true}]);

        var opcoes = {
                    title: 'Usuários e Poupanças',
                    height: 400,
                    width: 800,
                    legend: 'none',
                    hAxis: {
                            gridlines:
                            {
                                color: 'transparent'
                            },  
                            textPosition: 'none'    
                    },
                    annotations:
                    {
                        alwaysOutside: true
                    }
        }

        var grafico = new google.visualization.BarChart(document.getElementById('graficoBarrasJson'));
        grafico.draw(tabela, opcoes);




}