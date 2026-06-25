//Create an Interface Payments with abstract method
interface Payments{
    cashOnDelivery():void
    upiPayments():void
    cardPayments():void
    internetBanking():void
}
//Create an Abstract Class CanaraBank that implements Payments
abstract class CanaraBank implements Payments{
    abstract cashOnDelivery():void
    abstract upiPayments():void
    abstract cardPayments():void
    abstract internetBanking():void
    //add its own method
    abstract recordPaymentDetails():void
} 
//Create a Concrete Class Amazon that inherits CanaraBank, implementing methods.
class Amazon extends CanaraBank{
    recordPaymentDetails(){
        console.log("You payments details are recorded")
    }
    cashOnDelivery(){
        console.log("your payment method is COD")
    }
    upiPayments(){
        console.log("your payment method is UPI")
    }
    cardPayments(){
        console.log("your payment method is card")
    }
    internetBanking(){
        console.log("your payment method is net banking")
    }
}
const amz= new Amazon()
amz.recordPaymentDetails()
amz.upiPayments()
