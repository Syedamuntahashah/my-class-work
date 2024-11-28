import ChildComponent from "./ChildComponent";
function ParentComponent(){

    let fullName = "Muntaha Shah"
    let age = "23"
    let  favdiah = "Zinger burger"
    let favwork = "Programming"

     return(
        <div> 
       <ChildComponent fullName = {fullName}
                            age =  {age}
                         favdiah =  {favdiah}
                           favwork = {favwork}
                                     />                                                      
        </div>
    )
}
export default ParentComponent;