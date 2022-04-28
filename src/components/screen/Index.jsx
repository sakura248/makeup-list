import { addDoc } from "firebase/firestore";
import React, { useMemo, useState } from "react";
import { brandList } from "../../data/brands.js";
import { wishlistRef } from "../../firebase/firestore";
import UseAuthStatus from "../../hooks/UseAuthStatus";
import Input from "../Input/Input";
import ProductList from "../ProductList";

function Index() {
  const [searchWord, setSearchWord] = useState("");
  const [brand, setBrand] = useState("");
  const [showSuggest, setShowSuggest] = useState(false);
  // const [saveData, setSaveData] = useState({
  //   brand: "glossier",
  //   haveThis: false,
  //   id: "1004",
  //   image_link:
  //     "https://static-assets.glossier.com/production/spree/images/attachments/000/001/631/portrait_normal/SC_Carousel_1_copy_2.jpg?1506948615",
  //   name: "Stretch Concealer",
  //   product_link: "https://www.glossier.com/products/stretch-concealer",
  // });
  const { uid } = UseAuthStatus();

  const addListHandler = (item, bool) => {
    const data = {
      brand: item.brand,
      id_user: uid,
      id: item.id,
      image_link: item.image_link,
      name: item.name,
      product_link: item.product_link,
    };
    data.haveThis = bool;

    addDoc(wishlistRef, data);
  };

  const handleSearch = (e) => {
    setSearchWord(e.target.value);
    setShowSuggest(true);
  };

  const filteredList = useMemo(() => {
    const tempList = brandList.filter((element) => {
      return element.toUpperCase().includes(searchWord.toUpperCase());
    });
    return tempList;
  }, [searchWord]);

  const selectBrand = (e) => {
    setShowSuggest(false);
    setBrand(e.currentTarget.name);
    setSearchWord("");
  };

  return (
    <div className="font-body flex flex-col items-center mx-auto md:container">
      <Input
        handleSearch={handleSearch}
        placeholder="Type brand name..."
        filteredList={filteredList}
        showSuggest={showSuggest}
        selectBrand={selectBrand}
        searchWord={searchWord}
      />
      <ProductList brandName={brand} addListHandler={addListHandler} />
    </div>
  );
}

export default Index;
