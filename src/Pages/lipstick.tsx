import { Col, Row, Select, Table } from "antd";
import lipstickData from "./lipstickData"

const { Option } = Select;
const Lipstick = () => {
    return (
        <div style={{width:"100%"}}>
            <div className="lipstick-div">
                <p>Showing all 7 results</p>
                <Select className="lipstick-select">
                    <Option value="" >Sort by popularity</Option>
                    <Option value="Sort by popularity" >Sort by popularity</Option>
                    <Option value="Sort by average rating" >Sort by average rating</Option>
                    <Option value="Sort by latest" >Sort by latest</Option>
                    <Option value="Sort by price: low to high" >Sort by price: low to high</Option>
                    <Option value="Sort by price: high to low" >Sort by price: high to low</Option>
                </Select>
            </div>
            <div  className="lipStick-card-wrapper">
                {lipstickData.map((lipStick) => (
                  
                        <div className="lipstickCard">
                            <img className="lipstickImages" src={lipStick.image} alt="lipstick-images" />
                            <a href="https://zaroncosmetics.com/product/zaron-boss-lady-matte-lipstick/" className="lipstickName" >{lipStick.name}</a>
                            <p className="lipstickPrice">  &#8358;
{lipStick.price}</p>
                        </div>
                   

                ))}
            </div>
        </div>
    )
}

export default Lipstick