const rock = require('../lib/index')


async function main() {
    const Rock = rock('YOUR_TOKEN_HERE')
    
    await Rock.sendMessage({
        text: 'how are you'
    })

}

main()