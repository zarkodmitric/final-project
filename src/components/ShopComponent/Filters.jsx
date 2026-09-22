import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { use, useState } from "react";
import { ChevronDown, ChevronRight, Check, Zap } from "lucide-react";

const PRICES = ['$1-50', '$50-100', '$100+'];
const BRANDS = ['Zara', 'H&M', 'BERSHKA', 'KOTON'];
const CATEGORIES = ['Fleece', 'Sweaters', 'Shirts', 'T-Shirts', 'All items'];
const COLLECTION = ['Spring/Summer', 'Autumn/Winter'];
const COLORS = ['Black', 'White', 'Blue', 'Red', 'Pink'];
const OTHER = ['Jackets', 'Shoes', 'Umbrellas'];

function FilterCheckbox({ label, checked, onChange }) {
    return(
        <label className="flex items-center gap-3 py-2 cousor-pointer select-none">
            <span
                className={`w-4 h-4 border flex items-center justify-center shrink-0
                ${checked ? 'bg-black border-black' : 'border-gray-400'}`}
                onClick={(e) => {
                    e.preventDefault();
                    onChange();
                }}
            >
                {checked && <Check size={12} className="text-white" strokeWidth={3} />}
            </span>
            <span>
                {label}      
            </span>
        </label>
    )
}

function FilterSection({ title, open, onToggle, children, expandable = true }) {
    return(
        <div className="border-b border-grey-200 py-3">
            <button
                onClick={onToggle}
                className="flex items-center justify-between w-full text-left font-midium text-gray-900"
            >
                <span>{title}</span>
                {expandable && (open ? <ChevronDown size={18} /> : <ChevronRight size={18}/>)}
            </button>
            {open && <div className="mt-2">{children}</div>}
        </div>
    )
}

function Filters(props) {

    const [priceOpen, setPriceOpen] = useState(false);
    const [brandOpen, setBrandOpen] = useState(true);
    const [categoriesOpen, setCategoriesOpen] = useState(true);
    const [collectionOpen, setCollectionOpen] = useState(true);
    const [colorsOpen, setColorsOpen] = useState(false);
    const [otherOpen, setOtherOpen] = useState(false);

    const [selectPrice, setSelectPrice] = useState({});
    const [selectBrand, setSelectBrand] = useState({ 'Zara': true});
    const [selectCategories, setSelectCategories] = useState({ 'All items': true});
    const [selectCollection, setSelectCollection] = useState({});
    const [selectColors, setSelectColors] = useState({});
    const [selectOther, setSelectOther] =useState({});

    const togglePrice = ((price) => setSelectPrice((prev) => ({...prev, [price]: !prev[price] })));
    const toggleBrand = ((brand) => setSelectBrand((prev) => ({...prev, [brand]: !prev[brand] })));
    const toggleCategory = ((cat) => setSelectCategories((prev) => ({...prev, [cat]: !prev[cat] })));
    const toggleCollection = ((col) => setSelectCollection((prev) => ({...prev, [col]: !prev[col] })));
    const toggleColors = ((color) => setSelectColors((prev) => ({...prev, [color]: !prev[color] })));
    const toggleOther = ((other) => setSelectOther((prev) => ({...prev, [other]: !prev[other] })));

    return(
        <div className="w-64 p-4 flex flex-col h-full">
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            <FilterSection
                title='Price'
                open={priceOpen}
                onToggle={() => setPriceOpen((v) => !v)}
            >
                {PRICES.map((price) => (
                    <FilterCheckbox 
                        key={price}
                        label={price}
                        checked={!!selectPrice[price]}
                        onChange={() => togglePrice(price)}
                    />
                ))}
            </FilterSection>
            <FilterSection
                title='Brand'
                open={brandOpen}
                onToggle={() => setBrandOpen((v) => !v)}
            >
                {BRANDS.map((brand) => (
                    <FilterCheckbox 
                        key={brand}
                        label={brand}
                        checked={!!selectBrand[brand]}
                        onChange={() => toggleBrand(brand)}
                    />
                ))}
            </FilterSection>
            <FilterSection
                title='Categories'
                open={categoriesOpen}
                onToggle={() => setCategoriesOpen((v) => !v)}
            >
                {CATEGORIES.map((cat) => (
                    <FilterCheckbox 
                        key={cat}
                        label={cat}
                        checked={!!selectCategories[cat]}
                        onChange={() => toggleCategory(cat)}
                    />
                ))}
            </FilterSection>
            <FilterSection
                title='Collection'
                open={collectionOpen}
                onToggle={() => setCollectionOpen((v) => !v)}
            >
                {COLLECTION.map((col) => (
                    <FilterCheckbox 
                        key={col}
                        label={col}
                        checked={!!selectCollection[col]}
                        onChange={() => toggleCollection(col)}
                    />
                ))}
            </FilterSection>
            <FilterSection
                title='Colors'
                open={colorsOpen}
                onToggle={() => setColorsOpen((v) => !v)}
            >
                {COLORS.map((color) => (
                    <FilterCheckbox 
                        key={color}
                        label={color}
                        checked={!!selectColors[color]}
                        onChange={() => toggleColors(color)}
                    />
                ))}
            </FilterSection>
            <FilterSection
                title='Other'
                open={otherOpen}
                onToggle={() => setOtherOpen((v) => !v)}
            >
                {OTHER.map((other) => (
                    <FilterCheckbox 
                        key={other}
                        label={other}
                        checked={!!selectOther[other]}
                        onChange={() => toggleOther(other)}
                    />
                ))}
            </FilterSection>
            {props.selectedCategory && (
                                <div className="flex justify-center my-5">
                                    <Button
                                        className='btn white-btn h-10 w-50'
                                        onClick={props.clearFilter}
                                    >
                                        View All Products
                                    </Button>
                                </div>
                            )}
            <Button className='w-full h-10 mt-auto cursor-pointer'>Apply Filters</Button>
        </div>
    )
}

export default Filters;