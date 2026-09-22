import Columns from "./FooterColumn"
import FooterBottom from "./FooterBottom"

function Footer() {
    const column1 = {
        name: 'Shop',
        text: ['Dresses', 'Jackets', 'Skirts', 'Shoes', 'Gift Cards', 'Sales & Offers']
    }
    
    const column2 = {
        name: 'Information',
        text: ['About', 'Therms and Conditions', 'Privacy Policy', 'Delevery and Return']
    }

    const column3 = {
        name: 'Customer Support',
        text: ['Contact', 'Help', 'FAQ']
    }

    return (
        <div className="pt-15" id="footer">
            <div className="column-div">
                <Columns name={column1.name} text={column1.text} />
                <Columns name={column2.name} text={column2.text} />
                <Columns name={column3.name} text={column3.text} />
            </div>
            <FooterBottom/>
        </div>
    )
}

export default Footer;