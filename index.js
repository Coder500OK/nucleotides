document.addEventListener("DOMContentLoaded", () => {

    let result = document.getElementById('result')

    function RNA () {

        let x = ''
    
        for (let i of document.getElementById('main').value.toUpperCase()) {
            switch (i) {
                case 'A':
                    x += 'U';
                    break;
                case 'T':
                    x += 'A'
                    break;
                case 'C':
                    x += 'G'
                    break;
                case 'G':
                    x += 'C'
                    break;
    
                default:
                    alert('You messed up')
                    location.reload()
                    break;
            }
    
            result.innerHTML = x;
    
        }
    }
    
    function DNA (){
    
    
        let x = ''
    
        for (let i of document.getElementById('main').value.toUpperCase()) {
            switch (i) {
                case 'A':
                    x += 'T';
                    break;
                case 'T':
                    x += 'A'
                    break;
                case 'C':
                    x += 'G'
                    break;
                case 'G':
                    x += 'C'
                    break;
    
                default:
                    alert('You messed up')
                    location.reload()
                    break;
            }
    
            result.innerHTML = x;
    
        }
    }

    document.querySelector("#RNA").addEventListener('click', () => RNA())
    document.querySelector("#DNA").addEventListener('click', () => DNA())

})