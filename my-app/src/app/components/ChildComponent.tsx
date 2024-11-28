
const ChildComponent = (props:any) => {
    console.log(props)
    return(
<div className="flex m-auto justify-center p-10 shadow-2xl border-solid rounded-sm w-1/2 bg-slate-300">
    <div className="font-semibold shadow-slate-200">
         <h1>Full Name: {props.fullName}</h1>
          <h2>Age: {props.age}</h2>
          <h2>Fav Dish: {props.favdiah}</h2>
          <h2>Fav Work: {props.favwork}</h2>
    </div>
</div>
    
)
}

export default ChildComponent;