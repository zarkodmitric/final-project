import { Button } from "../ui/button";
import Employee from "./Employee";

const AboutUs = () => {
    const employees = [
        {
            id: 1,
            name: 'Emily Johnson',
            position: 'Cheif Executive Officer (CEO)',
            description: 'Emily leads our team with vision and a passion for innovation. With over 10 years of experience in the e- commerce industry, her mission is to ensure every customer has the best possible experoence.',
            image: '/images/about-us/emili-1.png'

        },
        {
            id: 2,
            name: 'Sarah Smith',
            position: 'Head of Product Development',
            description: 'Sarah oversees product development and selection. Her expertise in market trends and product quality ensures that our offerings meet the highest standards..',
            image: '/images/about-us/sarah-2.png'
        },
        {
            id: 3,
            name: 'Michael Smith',
            position: 'Marketing & Community Manager',
            description: 'Michael manages all marketing campaigns and community engagement. He ensures that every customer receives clear information and feels connected to our brand.',
            image: '/images/about-us/michael-3.png'
        }
    ]

    return(
        <div >
            <div className="mt-8 flex gap-10 h-140 m-30">
                <img src="/images/about-us/about-us-togeder.png" alt="Two peapol image" className="w-600 object-cover" />
                <div className="max-h-150 w-400 flex flex-col">
                    <h2 className="font-bold text-3xl mb-6">So, who are we?</h2>
                    <p className="text-xl text-justify overflow-y-auto">
                        Since our founding in 2015, 
                        our mission has always been to bring quality and convenience to our customers. 
                        We believe in transparency, sustainability, and delivering value in every product we offer. <br /> 
                        Over the years, we've grown from a small local shop to a trusted e-commerce brand serving thousands of satisfied customers. 
                        Every product is carefully selected and tested to ensure it meets our high standards. <br />
                        Our team is passionate about innovation and constantly works on improving the shopping experience, 
                        offering new products, and listening to our community's feedback.  <br />
                        We are committed to giving back to the community and supporting local initiatives, 
                        because we believe a business should make a positive impact beyond its sales.  
                    </p>
                    <Button className="ml-auto w-40 h-10">Get in Touch</Button>
                </div>
            </div>
            <h2 className="mx-30 font-bold text-2xl">Meet the Team</h2>
            <div className="flex justify-evenly w-full">
                {employees.map((emp) => (
                    <Employee
                        key={emp.id}
                        name={emp.name}
                        position={emp.position}
                        description={emp.description}
                        image={emp.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default AboutUs;