const dictionary = {
    words: ['gyroscope' , 'cricket', 'creativity','jupiter','computer','hardisk','trophy','salad','car parts'],
    getWord: function(){
        const numWords = this.words.length
        let randomNum = Math.floor(Math.random()*numWords)
        return this.words[randomNum]
    },
    async asyncWordApi(){
        const response = await fetch('//puzzle.mead.io/puzzle',{})
            if( response.status ===200 ){
                 const data = await response.json() 
                 return data.puzzle
            }else{ 
                throw new Error('reponse code: not successfull')
            }
    }
}

export {dictionary as default}