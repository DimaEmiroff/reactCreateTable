import React from "react";
import addUsers, {arrUser} from "./AddUsers";



const IsRemoveUser = (id) => {
        console.log(arrUser)
    this.setState(prevState => ({
        list: prevState.list.filter(row => (
            row.id !== id
        ))
    }))
    addUsers()

        //const remUser = arrUser.findIndex((item) => item.id === id ? item : null)// remove item
        //let myArray = arrUser.filter(item => item.id !== 1)
       // if (arrUser.splice(0,1)){
            //let te = document.querySelector('tr').hidden === true
       // }


}
export default IsRemoveUser
