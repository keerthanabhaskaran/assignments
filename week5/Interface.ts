//Create an interface DatabseConnection with abstract method
interface databseConnection{
    connect():void
    disconnect():void
    executeUpdate():void
}
//Provide concrete implementations for the abstract methods in the Concrete class
class playwrightConnection implements databseConnection{
    connect(){
        console.log("You are connected to PlaywrightConnection class")
    }
    disconnect(){
        console.log("You are disconnected from PlaywrightConnection class")
    }
    executeUpdate(){
        console.log("Your execution got updated in PlaywrightConnection class")
    }
}
const play= new playwrightConnection()
play.connect()
play.disconnect()
play.executeUpdate()
