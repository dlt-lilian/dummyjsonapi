'use client';

import { useState, useEffect } from 'react';

import ProductGrid from "@/app/components/ProductGrid";
import NavBar from "@/app/components/NavBar";
import ProductPage from "@/app/components/ProductPage";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            setProducts(data.products);
        };
        fetchData();
    }, []);

    const filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <div className={'mx-32 space-y-8 flex flex-col'}>
            <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <ProductGrid products={filteredProducts} />
            <ProductPage products={filteredProducts}/>
        </div>


    );
}
