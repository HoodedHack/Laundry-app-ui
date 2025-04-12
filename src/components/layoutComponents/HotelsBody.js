import { useState , useEffect , Suspence} from "react";
import { MAIN_API , HOTELS_API} from "../../utils/constants";
import HotelsTable from "../baseComponents/HotelsTable";
import { ShimmerTable } from "react-shimmer-effects";



const HotelsBody = () => {
    const [tableData,setTableData] = useState([]);
    const [filteredTableData,setFilteredTableData] = useState([]);
    const [hotelNames,setHotelNames] = useState([]);
    const [selected,setSelected] = useState("");
 
    // console.log("body component");


    useEffect(()=>{
        fetchData();
        // filterData(hotelNames[0]?.["Hotel Name"])
    },[])

    const fetchData = async () => {
        const data = await fetch(MAIN_API);
        const tablejson = await data.json();
        const data1 = await fetch( HOTELS_API);
        const hotelsjson = await data1.json();
        setTableData(tablejson)
        setHotelNames(hotelsjson)
        const datax  = await filterData(hotelsjson[0]?.["Hotel Name"],tablejson)
        setFilteredTableData(datax);
    }

    const filterData = (HotelName , tableData ) =>{
        const filteredData = tableData.filter((i)=>i.Hotel.trim().toLowerCase() == HotelName?.trim().toLowerCase())
        return filteredData;

    }
 

    const change = function(event){
        const data = filterData(event.target.value , tableData)
        setFilteredTableData(data);
        setSelected(event.target.value);    
    }

    return( <div>
                <div className="flex flex-wrap h-7 m-4 text-sm">
                    <select className="flex flex-wrap bg-slate-200 px-2 rounded-lg" id="lang" onChange={change} value={selected}>
                        {  hotelNames.map((item)=>{
                        return <option className="" key={item?.HID} value={item?.['Hotel Name']}>{item?.["Hotel Name"]}</option>})}
                    </select>
                    {/* <button className="bottom-2 p-3 rounded-lg hover:bg-slate-200 focus:bg-slate-300 flex flex-wrap items-center" onClick={() => filterData(selected,tableData)}>Search</button> */}
                </div>
                {/* <Suspence fallBack = {<ShimmerTable row={5} col={14} />}> */}
                    <HotelsTable className="bg-slate-300 text-sm" data={filteredTableData}  />
                {/* </Suspence> */}
                
                
                {/* totalCounts = {totalCounts} */}
            </div>);            
}
export default HotelsBody;