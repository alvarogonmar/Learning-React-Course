const balance = 1000
const pay = 500
const target = true


/**
 * ||  Or - Al menos una se cumple
 * && And - Revisa que todas se cumplan
 */
if(balance>pay || target){
    console.log("You can pay")
} else{
    console.log("You cant pay")
}