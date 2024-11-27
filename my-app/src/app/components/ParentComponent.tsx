import ChildComponent from "./ChildComponent";
function ParentComponent(){
    
    let fullName = "Muntaha shah"
    let favDish = "French Fries"
    let favWork = "Coding"
    
    return(
        <div> 
       <ChildComponent fullName = {fullName}
                       favDish = {favDish}
                       favWork = {favWork}
                       />
        </div>
    )
}
export default ParentComponent;