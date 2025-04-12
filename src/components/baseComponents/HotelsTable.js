import { useState , Suspense } from "react";
import { ShimmerTable } from "react-shimmer-effects";

const HotelsTable = ({data}) => {
  const [totalCounts,setTotalCounts] = useState({})
    // console.log("Table component",data);
    function taskDate(date) {
        var d = (new Date(date) + '').split(' ');
        d[2] = d[2] + ',';

        return [d[0], d[1], d[2], d[3]].join(' ');
    }

    return (<>
            <table className="table-auto bg-slate-300 text-sm w-full" >
                <thead>
                  <tr >  
                    <th className="px-2 py-2 border-spacing-1 border-black border-solid"  >Date</th>
                    <th className="px-2 py-2 border-spacing-1 border-black border-solid" >Bed Sheets(s)</th>
                    <th className="px-2 py-2 border-spacing-1 border-black border-solid" >Double Bed (D)</th>
                    <th className="px-2 py-2 border-spacing-1 border-black border-solid" >Duvet Covers(S) </th>
                    <th className="px-2 py-2 border-spacing-1 border-black border-solid" >Duvet Covers(D) </th>
                    <th className="px-2 py-2 border-spacing-1 border-black border-solid" >Pillow covers </th>
                    <th className="px-2 py-2 border-spacing-1 border-black border-solid" >Bath Towels </th>
                    <th className="px-2 py-2 border-spacing-1 border-black border-solid" >Bath mats </th>
                    <th className="px-2 py-2 border-spacing-1 border-black border-solid" >Runners </th>
                    <th className="px-2 py-2 border-spacing-1 border-black border-solid" >Pillows </th>
                    <th className="px-2 py-2 border-spacing-1 border-black border-solid" >Quilts </th>
                    <th className="px-2 py-2 border-spacing-1 border-black border-solid" >Curtains </th>
                    <th className="px-2 py-2 border-spacing-1 border-black border-solid" >Cussion Covers </th>
                    <th className="px-2 py-2 border-spacing-1 border-black border-solid" >day total  </th>
                  </tr>
                </thead>
                <tbody className="bg-slate-100">
                    { data?.map(
                      (item) => {
                        return item?.["total count for the day "] ? 
                          ( 
                              <tr key={item.id}>
                              <td className="px-2 border-spacing-1 text-center" >{taskDate(item?.Date)}</td>
                              <td className="px-2 border-spacing-1 text-center" >{item?.["Single Bed Sheets"] }</td>
                              <td className="px-2 border-spacing-1 text-center" >{item?.["Double Bed Sheets"]}</td>
                              <td className="px-2 border-spacing-1 text-center" >{item?.["Single Duvet Covers"]}</td>
                              <td className="px-2 border-spacing-1 text-center" >{item?.["Double Duvet Covers"]}</td>
                              <td className="px-2 border-spacing-1 text-center" >{item?.["Pillow covers"]}</td>
                              <td className="px-2 border-spacing-1 text-center" >{item?.["Bath Towels"]}</td>
                              <td className="px-2 border-spacing-1 text-center" >{item?.["Bath mats"]}</td>
                              <td className="px-2 border-spacing-1 text-center" >{item?.["Runners"]}</td>
                              <td className="px-2 border-spacing-1 text-center" >{item?.["Pillows"]}</td>
                              <td className="px-2 border-spacing-1 text-center" >{item?.["Blankets/Quilts"]}</td>
                              <td className="px-2 border-spacing-1 text-center" >{item?.["Curtains"]}</td>
                              <td className="px-2 border-spacing-1 text-center" >{item?.["Cussion Covers"]}</td>
                              <td className="px-2 border-spacing-1 text-center" >{item?.["total count for the day "]}</td>
                              </tr> ):null
                              })
                    }
                </tbody>
              </table>
              
          </>)
}

export default HotelsTable;