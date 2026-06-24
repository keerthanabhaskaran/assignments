class apiClient{
    //declare the same method with diff parameters
    sendRequest(endpoint:string):void
    sendRequest(endpoint:string, requestBody:string, requestStatus:boolean):void
    //define the method
    sendRequest(endpoint:string, requestBody?:string, requestStatus?:boolean):void{
        if(requestStatus==false){
            console.log("Fetching "+requestBody+" of "+endpoint+" is failed")
        }
        else if(requestStatus==true){
            console.log("Fetching "+requestBody+" of "+endpoint+" is success")
        }
        else{
             console.log("get request for "+endpoint)
        }
    }
}
//define the function
function demonstrate(){
    const apicli=new apiClient()
    //call the method with diff parameter
    apicli.sendRequest("user")
    apicli.sendRequest("user","json body",true)
    apicli.sendRequest("alarm","json body",false)
}
//call the function
demonstrate()
