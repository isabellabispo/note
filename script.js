
    


    function btn(){
        var textoArea = document.querySelector("#text");

        var value = textoArea.value
   

        var janela = window.open('', '', 'width=800, heigth=600')
        janela.document.write(value)
        janela.document.close();
        janela.print();
    }
