//Function to calculate the grade based on score
function gradeCalulation(scroe){
    let grade=""
    switch(scroe>0){//switch case to calculate the grade based on scroe
        case(scroe>95):
            grade="O" //out standing
            break
        case(scroe>90):
            grade="E" //Excellent
            break
        case(scroe>80):
            grade="VG" //Very Good
            break
        case(scroe>=40):
            grade="G" //Good
            break
        case(scroe<40):
            grade="F" //Fail
            break
    }
    return grade
}
console.log("If your score is above 95, the grade will be: ", gradeCalulation(96))
console.log("If your score is above 90, the grade will be: ", gradeCalulation(91))
console.log("If your score is above 80, the grade will be: ", gradeCalulation(81))
console.log("If your score is above 40, the grade will be: ", gradeCalulation(40))
console.log("If your score is below 40, the grade will be: ", gradeCalulation(39))