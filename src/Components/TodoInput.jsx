import React, { useState } from 'react';

function TodoInput() {
    const [activity, setActivity] = useState(""); 
    const [listData, setListData] = useState([]);

    function addActivity() {
        if (activity.trim() !== "") { // Check for non-empty activity
            setListData((prevListData) => {
                const updatedList = [...prevListData, activity];
                console.log(updatedList);
                setActivity('');
                return updatedList;
            });
        }
    }

    function removeActivity(i) {
        const updatedListData = listData.filter((_, id) => i !== id);
        setListData(updatedListData);
    }

    return (
        <div className="container">
            <div className="header">TODO LIST</div>
            <input type="text" placeholder="Add Activity" value={activity} onChange={(e) => setActivity(e.target.value)} />
            <button onClick={addActivity}>Add</button>
            <p className="List-heading">Here is your list</p>
            {listData.length > 0 && listData.map((data, i) => (
                <p key={i}>
                    <div className='listData'>{data}</div>
                    <div className='btn-position'>
                        <button onClick={() => removeActivity(i)}>remove(x)</button>
                    </div>
                </p>
            ))}
        </div>
    );
}

export default TodoInput;

/*import React, { useState } from 'react';

function TodoInput() {
    const [activity,setActivity]= useState(""); 
    const [listData,setListData]= useState([]);
    function addActivity(){
    setListData((listData)=>{
    const updatedList =[...listData, activity];
    console.log(updatedList)
    setActivity('');
    return updatedList;
    });
    }
    function removeActivity(i){
        const updatedListData = listData.filter((elem, id)=>{
            return i !==id;
        });
        setListData(updatedListData);
    }
  return (
   <>
   <div className="container">
    <div className="header">TODO LIST</div>
    <input type="text" placeholder="Add Activity" value={activity} onChange={(e)=> setActivity(e.value.target)} />
   <button onClick={addActivity}>Add</button>
   <p className="List-heading">Here is you list</p>
   {listData!=[] && listData.map((data, i)=>{
    return(
        <>
        <p Ikey={i}>
            <div className='listData'>{data}</div>
            <div className='btn-position'><button onClick={()=>removeActivity(i)}>remove(x)</button></div>

        </p>
        </>
    )
   })}
   </div>
   </>
 
  )
}

export default TodoInput*/

