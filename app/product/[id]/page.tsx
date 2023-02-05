import React from "react";
async function getData(url:string) {
    // Fetch data from external API
    const res = await fetch(`https://fireex.vercel.app/url/${url}`)
    return res.json()
  }
async function page({params}:any){
    const {id} = params
    const item = await getData(id);
  return(<div>
    <p>
    { item.response.pname}
    </p>
    <p><img src={item.response.pimgcover} /></p>
    </div>);
}
export default page;