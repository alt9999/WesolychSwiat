var i = 0;
var txt = `Aby otrzymać prezent rozwiaż quiz i otrzymaj kod dzięki któremu znajdziesz swój prezent. Powodzenia !`;
var speed = 100; 


var prawidlowe = 0
var falszywe = 0

var iteracja = 0

function add_button(){
    const pytania = ["Jaka jest ulubiona saltka Olka i Mamy", "Co tata robi na kazda wigilje", "Co Didol najczesciej je w daleszynie (poprawne jest kilka odpowiedzi)", "Co kikus najbardzej lubi (poprawne jest kilka odpowiedzi)", "Wymarzone wajacje taty (poprawne jest kilka odpowiedzi)"]
    const odpowiedzi = ["Jarzynowa|z burakow|ziemniaczana|grecka z serem feta", "Pierogi|siekane glizdy|spaghetti|sushi","Pyzy|Kluski|miesko|ziemniaki","Spacerki|Ciasteczka|Spac|kapac sie","gory|jezioro|ZOSTAC W DOMU|HISZPANIA"]

    if(add_button.done) return;
    const button = document.createElement('button')
    button.innerHTML = "Zaczynamy!"
    button.onclick = function name() {
        function koniec(){
            const form = document.getElementById('text_top')
            form.innerHTML = ''
            const staty = document.createElement('p')
            console.log(prawidlowe)
            if(5>prawidlowe){
                staty.innerHTML = `Nie udzieliłeś na wszystkie pytania prawidłowej odpowedzi`
                var button = "<button id='button_start' onClick='window.location.reload()'>Sprobój jeszcze raz</button>"
                button.id = 'button_start'
                form.appendChild(staty)
                form.innerHTML+=button

            }else if(prawidlowe == 5){
                staty.innerHTML = `Zdobyłeś ${prawidlowe} na 5 punktow. Teraz odbierz prezent`
                staty.innerHTML += "<br>"
                staty.innerHTML += "Mamuś: ABC123"
                staty.innerHTML += "<br>"
                staty.innerHTML += "Tate: QAZ456"
                staty.innerHTML += "<br>"
                staty.innerHTML += "Didol: XYZ789"
                form.appendChild(staty)
                
            }
        }
        function pytanie_4() {

            const form = document.getElementById('text_top')
            const pytanie_text = document.createElement('p')
            form.innerHTML = ''
            pytanie_text.innerHTML = pytania[4]

                
            form.appendChild(pytanie_text)
            const odpowiedz = odpowiedzi[4].split('|')
            for(odp of odpowiedz){
                if(odp[0] == odp[0].toUpperCase()){
                    var button_1 = document.createElement('button')
                    button_1.innerHTML = odp.toLowerCase()
                    button_1.id = "button_start"
                    button_1.onclick = function(){
                        prawidlowe++
                        koniec()
                    }
                    form.appendChild(button_1)
                    
                }else{
                    var button = document.createElement('button')
                    button.innerHTML = odp
                    button.id = "button_start"
                    button.onclick = function(){
                        falszywe++;
                        koniec()
                    }
                    form.appendChild(button)
                    
                }
            }
        }
        function pytanie_3() {
            
            const form = document.getElementById('text_top')
            const pytanie_text = document.createElement('p')
            form.innerHTML = ''
            pytanie_text.innerHTML = pytania[3]

                
            form.appendChild(pytanie_text)
            const odpowiedz = odpowiedzi[3].split('|')
            for(odp of odpowiedz){
                if(odp[0] == odp[0].toUpperCase()){
                    var button_1 = document.createElement('button')
                    button_1.innerHTML = odp.toLowerCase()
                    button_1.id = "button_start"
                    button_1.onclick = function(){
                        prawidlowe++
                        pytanie_4()
                    }
                    form.appendChild(button_1)
                    
                }else{
                    var button = document.createElement('button')
                    button.innerHTML = odp
                    button.id = "button_start"
                    button.onclick = function(){
                        falszywe++;
                        pytanie_4();
                    }
                    form.appendChild(button)
                    
                }
            }
        }
        function pytanie_2() {
            
            const form = document.getElementById('text_top')
            const pytanie_text = document.createElement('p')
            form.innerHTML = ''
            pytanie_text.innerHTML = pytania[2]

                
            form.appendChild(pytanie_text)
            const odpowiedz = odpowiedzi[2].split('|')
            for(odp of odpowiedz){
                if(odp[0] == odp[0].toUpperCase()){
                    var button_1 = document.createElement('button')
                    button_1.innerHTML = odp.toLowerCase()
                    button_1.id = "button_start"
                    button_1.onclick = function(){
                        prawidlowe++
                        pytanie_3()
                    }
                    form.appendChild(button_1)
                    
                }else{
                    var button = document.createElement('button')
                    button.innerHTML = odp
                    button.id = "button_start"
                    button.onclick = function(){
                        falszywe++;
                        pytanie_3();
                    }
                    form.appendChild(button)
                    
                }
            }
        }
        function pytanie_1() {
            
            const form = document.getElementById('text_top')
            const pytanie_text = document.createElement('p')
            form.innerHTML = ''
            pytanie_text.innerHTML = pytania[1]

                
            form.appendChild(pytanie_text)
            const odpowiedz = odpowiedzi[1].split('|')
            for(odp of odpowiedz){
                if(odp[0] == odp[0].toUpperCase()){
                    var button_1 = document.createElement('button')
                    button_1.innerHTML = odp.toLowerCase()
                    button_1.id = "button_start"
                    button_1.onclick = function(){
                        prawidlowe++
                        pytanie_2()
                    }
                    form.appendChild(button_1)
                    
                }else{
                    var button = document.createElement('button')
                    button.innerHTML = odp
                    button.id = "button_start"
                    button.onclick = function(){
                        falszywe++;
                        pytanie_2();
                    }
                    form.appendChild(button)
                    
                }
            }
        }
        function pytanie_0() {
            
            const form = document.getElementById('text_top')
            const pytanie_text = document.createElement('p')
            form.innerHTML = ''
            pytanie_text.innerHTML = pytania[0]

                
            form.appendChild(pytanie_text)
            const odpowiedz = odpowiedzi[0].split('|')
            for(odp of odpowiedz){
                if(odp[0] == odp[0].toUpperCase()){
                    var button_1 = document.createElement('button')
                    button_1.innerHTML = odp.toLowerCase()
                    button_1.id = "button_start"
                    button_1.onclick = function(){
                        prawidlowe++
                        pytanie_1()
                    }
                    form.appendChild(button_1)
                    
                }else{
                    var button = document.createElement('button')
                    button.innerHTML = odp
                    button.id = "button_start"
                    button.onclick = function(){
                        falszywe++;
                        pytanie_1();
                    }
                    form.appendChild(button)
                    
                }
            }
        }
        pytanie_0()

    }
    button.id = "button_start"
    document.getElementById('button_add').appendChild(button)
    add_button.done = true
}

function typeWriter() {
    if(i < txt.length) {
        document.getElementById("text_top_typer").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    if(i >= txt.length){
        add_button()
    }
    
}



document.addEventListener("DOMContentLoaded", function(){
    typeWriter()
});
