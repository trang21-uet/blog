"use client";

import AdminAppTable from "./admin.app.table";
// import useSWRImmutable from 'swr/immutable';
import useSWR from "swr";

const Admin = () => {
  
  // const res = fetch(url);
  // console.log(">>> check res", res);
  // .then((response: { json: () => any; }) => response.json())
  // .then((data: any) => {
    // console.log(">>> respone:",res, " Data...", data);
  // })
  // .catch((error: any) => {
    // console.error(error);
  // });

  const fetcher = (url : string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR("http://localhost:8000/blogs",
    fetcher, {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );

  // console.log(">>> Check Data ... ", data);

  // if (!data) {
  //   return <div>loading...</div>
  // };

  return (
    <div>
        {/* <span>{data?.length}</span> */}
        {/* Routing to Admin Page successfully!!! */}
        <AdminAppTable blogs={data}/>
    </div>
  );
};

export default Admin;

// import { NextPage } from "next";
// import { useRouter } from "next/router";

// interface Props {};

// const TestCatchAllPages : NextPage<Props> = () => {
//     const router = useRouter();
//     console.log(router);
//     return ( 
//     <div> Test Catch All Pages successfully!!!</div>
//     )
// }
// export default TestCatchAllPages;