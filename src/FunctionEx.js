function FunctionEx(){

    const Arraye=[100,200,300];
    const arrofint=[2,4,7,9,3,5,6,8]

    const decreaseBy10=Arraye.map((price)=>price-10);
    const icreaseBy10=Arraye.map((price)=>price+10);
    const fitenumber=arrofint.filter((num)=>num%2===0);
    const reducePrice=Arraye.reduce((acc,price)=>acc+price,0);


    return(
        <div>
            <h1>filter</h1>
        {
        decreaseBy10.map((price,index)=>(
            <li key={index}>${price}</li>
        )
        )
    }
    <ul>
        {
        icreaseBy10.map((price,index)=>(
            <li key={index}>${price}</li>
        )
        )
    }
    </ul>

    <ul>
        {
        fitenumber.map((num,index)=>(
            <li key={index}>{num}</li>
        )
        )
    }
    </ul>

    <h1>reduced price is : {reducePrice}</h1>
        </div>

    );
}

export default FunctionEx;