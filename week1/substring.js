//function to find substring between # and -
function substring(statement)
{
    let startindex=statement.indexOf("#")
    let endindex=statement.indexOf("-")
    console.log("Order ID is "+ statement.slice(startindex+1, endindex))
}
//call the function
substring("Order ID: #12345-Confirmed")
substring("OrderID:#282902-declined")