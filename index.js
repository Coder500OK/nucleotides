function RNA () {

    let x = ''
    let result = document.getElementById('result')

    for (let i of document.getElementById('main').value) {
        switch (i) {
            case 'A' || 'a':
                x += 'U';
                break;
            case 'T' || 't':
                x += 'A'
                break;
            case 'C' || 'c':
                x += 'G'
                break;
            case 'G' || 'g':
                x += 'C'
                break;

            default:
                alert('You messed up')
                break;
        }

        result.innerHTML = x;

    }
}

function DNA (){


    let x = ''
    let result = document.getElementById('result')

    for (let i of document.getElementById('main').value) {
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
                break;
        }

        result.innerHTML = x;

    }
}



