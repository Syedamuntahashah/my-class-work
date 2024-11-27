
const ChildComponent = (props:any) => {
    console.log(props)
    return(
<div>
    <div className="my-4 px-4">
      <h1 className="text-2xl text-center bg-red-200 font-medium">Full Name: {props.fullName}</h1>
    </div> 

    <div className="my-4 px-4"> 
      <h1 className="text-2xl text-center bg-red-200 font-semibold">Fav Dish: {props.favDish}</h1>
    </div> 

     <div className="my-4 px-4">
      <h1 className="text-2xl text-center bg-red-200 font-semibold">Fav Work: {props.favWork}</h1>
     </div>  
</div>
    
)
}

export default ChildComponent;