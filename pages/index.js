import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function Home() {
  const [data, setData] = React.useState({
    loading: false,
    data: null,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setData((initialData) => {
      return {
        ...initialData,
        loading: true,
      };
    });
    const formData = {
      url: event.target.url.value,
    };
    const JSONdata = JSON.stringify(formData);
    const endpoint = "/api/link-preview";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const result = await response.json();
    console.log(result.data);
    setData((initialData) => {
      return {
        ...initialData,
        loading: false,
        data: {...result.data},
      };
    });
    
  };
  return (
    <div className="">
      <Head>
        <title>Next Link Previewer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-10">
        <div className="flex flex-col justify-center">
          <div className="my-10 ">
            <div>
              <h1 className="text-center text-4xl text-white font-poppins font-extrabold">
                Next Link Previewer
              </h1>
              <p className="text-white text-center font-sans">
                A Link Previewer{" "}
                <span className="bg-yellow-200 text-black">
                  {" "}
                  &nbsp; without any third party library. &nbsp;
                </span>
              </p>
            </div>
          </div>

          <div className="mb-6 flex justify-center">
            <form onSubmit={handleSubmit} className="max-w-md">
              <div className="flex flex-col items-center w-full">
                <input
                  type="text"
                  name="url"
                  className=" form-control block min-w-md px-4 py-2 text-xl font-normal text-black bg-white bg-clip-padding   border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-amber-300 focus:outline-none"
                  placeholder="Enter a URL"
                />
                <button
                  type="submit"
                  className="mt-5 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium font-poppins text-base leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  View Preview
                </button>
              </div>
            </form>
          </div>
          {data.loading && (
            <div className="flex justify-center items-center my-6">
              <svg
                aria-hidden="true"
                className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}

          {data.data && (
            <div className="flex justify-center">
              <div className="max-w-sm rounded-lg border shadow-md bg-gray-700 border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src={data?.data?.image}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="text-ellipsis overflow-hidden mb-2 text-2xl font-bold tracking-tight  text-white text-center">
                      {data?.data?.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-400 text-center">
                    {data?.data?.description}
                  </p>
                  <div className="text-center">
                    <a
                      href={`http://${data?.data?.domain}`}
                      target="_blank"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium  text-white  rounded-lg  focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 "
                    >
                      Open
                      <svg
                        aria-hidden="true"
                        className="ml-2 -mr-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
