import React , { useState , useEffect} from "react";
import { HOTELS_API} from "../../utils/constants";

const AddData = () => {
    const [inputs, setInputs] = useState({});
    const [hotelNames,setHotelNames] = useState([]);


    useEffect(()=>{
            fetchData();
        },[])
    
    const fetchData = async () => {
        const data = await fetch( HOTELS_API);
        const hotelsjson = await data.json();
        setHotelNames(hotelsjson)
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const insertData = async () => {
        setInputs(values => ({...values, "Date": Date.now()}))
        const data = await fetch( "https://script.google.com/macros/s/AKfycbzhUay7Sfk7Oqpk7vxQIQKxy8IuWEp_7yoghH9fkLKnrKmeWdlPySdgbFZiO1GRWipz1A/exec?path=04-2025", {
            body: JSON.stringify(inputs),
            redirect: "follow",
            headers: {
                "access-control-allow-origin" : "*",
                "Content-Type": "application/json; charset=UTF-8",
            },
            method: "POST"});
            console.log(data);
        const data2 = await data.json();
        console.log(data2)
        setInputs({});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        insertData();

    }

    return (<form onSubmit={handleSubmit}  className="max-w-sm mx-auto">
        <div className="my-3">
            <label className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Hotels :
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="lang" onChange={handleChange}   name="Hotel"  value={inputs["Hotel"] || ""}>
                    {  hotelNames.map((item)=>{
                    return <option className="" key={item?.HID} value={item?.['Hotel Name']}>{item?.["Hotel Name"]}</option>})}
                </select>
            </label>
        </div>
        <div className="mb-3">
            <label className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Single Bed Sheets :
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="number" 
                name="Single Bed Sheets"
                value={inputs["Single Bed Sheets"] || ""} 
                onChange={handleChange}
                />
            </label>
        </div>
        <div className="mb-3">
            <label className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Double Bed Sheets:
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                type="number" 
                name="Double Bed Sheets" 
                value={inputs["Double Bed Sheets"] || ""} 
                onChange={handleChange}
                />
            </label>
        </div>
        <div className="mb-3">
            <label className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Single Duvet Covers:
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                type="number" 
                name="Single Duvet Covers"
                value={inputs["Single Duvet Covers"] || ""} 
                onChange={handleChange}
                />
            </label>
        </div>    
        <div className="mb-3">
            <label className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Double Duvet Covers:
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                type="number" 
                name="Double Duvet Covers"
                value={inputs["Double Duvet Covers"] || ""} 
                onChange={handleChange}
                />
            </label>
        </div>    
        <div className="mb-3">
            <label className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Pillow covers:
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                type="number" 
                name="Pillow covers"
                value={inputs["Pillow covers"] || ""} 
                onChange={handleChange}
                />
            </label>
        </div>    
        <div className="mb-3">
            <label className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Bath Towels:
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                type="number" 
                name="Bath Towels" 
                value={inputs["Bath Towels"] || ""} 
                onChange={handleChange}
                />
            </label>
        </div>    
        <div className="mb-3">
            <label className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Bath mats:
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                type="number" 
                name="Bath mats" 
                value={inputs["Bath mats"] || ""} 
                onChange={handleChange}
                />
            </label>
        </div>    
        <div className="mb-3">
            <label className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Pillows:
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                type="number" 
                name="Pillows" 
                value={inputs["Pillows"] || ""} 
                onChange={handleChange}
                />
            </label>
        </div>    
        <div className="mb-3">
            <label className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Blankets/Quilts:
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                type="number" 
                name="Blankets/Quilts" 
                value={inputs["Blankets/Quilts"] || ""} 
                onChange={handleChange}
                />
            </label>
        </div>    
        <div className="mb-3">
            <label className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Cussion Covers:
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                type="number" 
                name="Cussion Covers" 
                value={inputs["Cussion Covers"] || ""} 
                onChange={handleChange}
                />
            </label>
        </div>    
        <div className="mb-3">
            <label className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Curtains:
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                type="number" 
                name="Curtains" 
                value={inputs["Curtains"] || ""} 
                onChange={handleChange}
                />
            </label>
        </div>     
          <input type="submit" />
      </form>);
}

export default AddData;