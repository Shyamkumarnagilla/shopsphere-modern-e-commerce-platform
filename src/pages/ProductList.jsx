import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import '../styles/ProductList.css';

const ProductList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryParam = searchParams.get('category') || 'All';
    const searchParam = searchParams.get('search') || '';

    const [filteredProducts, setFilteredProducts] = useState(products);
    const [sortBy, setSortBy] = useState('featured');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    useEffect(() => {
        let result = products;

        if (categoryParam !== 'All') {
            result = result.filter(p => p.category === categoryParam);
        }

        if (searchParam) {
            result = result.filter(p =>
                p.name.toLowerCase().includes(searchParam.toLowerCase()) ||
                p.description.toLowerCase().includes(searchParam.toLowerCase())
            );
        }

        if (sortBy === 'price-low') {
            result = [...result].sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-high') {
            result = [...result].sort((a, b) => b.price - a.price);
        } else if (sortBy === 'rating') {
            result = [...result].sort((a, b) => b.rating - a.rating);
        }

        setFilteredProducts(result);
    }, [categoryParam, searchParam, sortBy]);

    const handleCategoryChange = (cat) => {
        setSearchParams({ category: cat });
        setIsFilterOpen(false);
    };

    return (
        <div className="product-list-page-modern container">
            <header className="list-header">
                <div className="breadcrumb-modern">
                    <a href="/">Home</a> / <span>Products</span>
                </div>
                <div className="title-row">
                    <h1>{categoryParam === 'All' ? 'Our Collection' : categoryParam}</h1>
                    <p>{filteredProducts.length} items found</p>
                </div>
            </header>

            <div className="list-layout">
                <aside className={`filters-sidebar-modern ${isFilterOpen ? 'open' : ''}`}>
                    <div className="filter-group">
                        <h3>Categories</h3>
                        <div className="category-tags">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    className={`cat-tag ${categoryParam === cat ? 'active' : ''}`}
                                    onClick={() => handleCategoryChange(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="filter-group">
                        <h3>Sort By</h3>
                        <div className="sort-options">
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Top Rated</option>
                            </select>
                        </div>
                    </div>
                </aside>

                <main className="products-content">
                    <div className="mobile-filter-bar">
                        <button onClick={() => setIsFilterOpen(true)}>Filters & Sort</button>
                    </div>

                    {filteredProducts.length > 0 ? (
                        <div className="products-grid-modern">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="no-results-modern glass">
                            <div className="no-res-icon">🔍</div>
                            <h3>No products found</h3>
                            <p>We couldn't find any products matching your current filters.</p>
                            <button onClick={() => setSearchParams({})} className="btn-primary-modern">Clear All Filters</button>
                        </div>
                    )}
                </main>
            </div>

            {isFilterOpen && <div className="filter-overlay" onClick={() => setIsFilterOpen(false)}></div>}
        </div>
    );
};

export default ProductList;
