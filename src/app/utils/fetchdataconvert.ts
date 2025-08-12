export default function dataconvertquiz(givendata:any){
    const quizdata=givendata.map((data:any,index:number)=>{
        let options=data.incorrect_answers.map((incrct:any)=>{
                return incrct
            })
            options.push(data.correct_answer)
            options.sort(() => Math.random() - 0.5)
            
        return {
            id:index,
            ...data,
            options:options
        }

    })
    return quizdata
}