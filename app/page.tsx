import React from "react";
import Link from "next/link";

interface products{
  id: number,
        pname: string,
        purl: string,
        pdetail: string,
        pprice: number,
        pimgcover: string,
        pimgmain: string,
        pimgdesc: string,
        pimgmore: any,
        porder: any,
        psort: number,
        pdate: string,
        pactive: boolean,
}


 async function getData() {
  // Fetch data from external API
  const res = await fetch(`https://fireex.vercel.app/product`)
  return res.json()
}

async function page() {
  const items = await getData();

  return(<div>
{items.response.map((item:products)=>(
  <div key={item.id}>
    <p><Link href={"/product/"+item.purl}><img src={item.pimgcover} alt={item.pname} style={{width:"20%"}} /></Link></p>
    <p>{item.pname}</p>
    <p>{item.pprice}</p>
  </div>
))}
  </div>);
 }
export default page;