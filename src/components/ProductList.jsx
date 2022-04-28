import React, { useEffect, useState } from "react";

function ProductList({ brandName, addListHandler }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const url = "https://makeup-api.herokuapp.com/api/v1/products.json";
    const fetchUrl = async () => {
      fetch(`${url}?brand=${brandName}`)
        .then((response) => response.json())
        .then((data) => {
          setList(data);
        });
      // catch (error) {
      //   console.log(error);
      // }
    };
    fetchUrl();
  }, [brandName]);

  return (
    <>
      <ul className="w-9/12 border-2 border-blue-600 bg-white text-blue-600 ">
        {brandName ? (
          list.map((item) => (
            <li
              className="flex py-8 border-b border-blue-600 hover:bg-blue-600 hover:text-white relative"
              key={item.id}
            >
              <img
                className="w-16 h-16 rounded-xl object-cover mx-7"
                src={item.image_link}
                alt=""
              />
              <div className="flex flex-col">
                <p className="text-sm">[ {item.brand} ]</p>
                <a
                  className="underline font-display after:content-['↗'] font-bold"
                  href={item.product_link}
                  target="_blank"
                  rel="noopner noreferrer"
                >
                  {item.name}
                </a>
                {item.tag_list && (
                  <ul className="flex flex-row flex-wrap">
                    {item.tag_list.map((item) => (
                      <li className="text-xs mr-4 before:content-['#_']">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="flex flex-col text-sm absolute right-4">
                <button
                  onClick={() => addListHandler(item, false)}
                  className="p-1 bg-gray-200 border-4 border-r-gray-400 border-b-gray-400 border-t-gray-50 border-l-gray-50 hover:border-l-gray-400 hover:border-t-gray-400 hover:border-b-gray-50 hover:border-r-gray-50 text-blue-600"
                >
                  want this
                </button>
                <button
                  onClick={() => addListHandler(item, true)}
                  className="p-1 bg-gray-200 border-4 border-r-gray-400 border-b-gray-400 border-t-gray-50 border-l-gray-50 hover:border-l-gray-400 hover:border-t-gray-400 hover:border-b-gray-50 hover:border-r-gray-50 text-blue-600"
                >
                  got this
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className="font-display text-center my-16">empty!</p>
        )}
      </ul>
    </>
  );
}

export default ProductList;
