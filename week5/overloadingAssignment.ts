class overloadingAssignment{
    //declar the same method with diff parameters
    reportStep(message: string, status: string): void
    reportStep(messsgae:string, status:string, snapshot:boolean):void
    //define the method
    reportStep(messsgae:string, status:string, snapshot?:boolean):void{
        if(snapshot == undefined){ //it will work for both boolean value
            console.log(messsgae+" "+status)
        }
        else{
            console.log(messsgae+" "+status+" Please find the snapshot")
        }
    }
}
//defined the function
function demonstrate(){
    const assignment=new overloadingAssignment()
    //call the method with diff parameter
    assignment.reportStep("login", "success")
    assignment.reportStep("login", "failed", false)
}
//call the function
demonstrate()
