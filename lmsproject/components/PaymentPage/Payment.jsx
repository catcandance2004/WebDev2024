import React from "react";
import './Payment.css';
import madimage from './drawable/madimage.jpg'
import wadimage from './drawable/wadimage.jpg'

function Payment() {
    const deals = [
        {
            image: './src/components/drawable/anniversary.png',
            value: "30%",
            title: "Two Years Anniversary",
            subtitle: "Celebrate our 2nd anniversary with us! Enjoy 15% off your purchase as our thanks for your support over the years. Let’s make this milestone memorable together!",
        },

        {
            image: './src/components/drawable/anniversary.png',
            value: "20%",
            title: "Back-to-School",
            subtitle: "Get ready for the new school year with our exclusive back-to-school promotion! Enjoy 20% off all courses. Don’t miss out on these great savings!",
        }
    ];
    return (
        <>

            <section className="paymentpage">

                <form className="payment_form">
                <div>
                    <label className="label_payment" htmlFor="number">Card Number</label>
                    <input className="input_payment" id="c_number" type="number" required />
                </div>

                <div>
                    <label className="label_payment" htmlFor="holder">Card Holder</label>
                    <input className="input_payment" id="c_holder" type="text" required />
                </div>

                <div className="filled_group">
                    <div>

                        <label className="label_payment" htmlFor="expiration_month">Expiration Month</label>
                        <div className="filled_date">
                            <select className="select_payment" id="expriration_month" required >

                            <option disabled selected>Month</option>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                            <option>07</option>
                            <option>08</option>
                            <option>09</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            </select>

                            <select className="select_payment" id="expriration_year" required >
                            <option disabled selected>Year</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2026</option>
                            <option>2027</option>
                            <option>2028</option>
                            <option>2029</option>
                            <option>2030</option>
                            <option>2031</option>
                            <option>2032</option>
                            <option>2033</option>
                            <option>2034</option>
                            <option>2035</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="label_payment" htmlFor="cvv">CVV</label>
                        <input className="input_payment" id="cvv" type="number" min={0} max={999} required />
                    </div>
                </div>


                <div className="button_confirm">
                    <button>Confirm Payment</button>

                </div>
                </form>

                <div className="cart">
                    <div className="payment_cart">
                        <div className="payment_card_header">Payment Cart</div>
                        
                        <div className="payment_in4">
                            <div className="payment_course">
                                <img src={madimage} alt="MAD" height={90} width={90}/>

                                <div className="course_in4">
                                    <div className="course_name">Mobile Application Development</div>
                                    <div className="lecturer">PhD. Tran Giang Son</div>
                                    <div className="price">5.000.000 VND</div>
                                </div>
                            </div>

                            <div className="payment_course">
                                <img src={wadimage} alt="WAD" height={90} width={90}/>

                                <div className="course_in4">
                                    <div className="course_name">Web Application Development</div>
                                    <div className="lecturer">MsC. Huynh Vinh Nam</div>
                                    <div className="price">5.000.000 VND</div>
                                </div>
                            </div>
                        </div>

                        <div className="totalmoney">
                            <hr />
                            <div className="cart_element">
                                <div className='left'>Subtotal</div>
                                <div className="right">
                                    <div className="value">10.000.000</div>
                                    <div className="unit">VND</div>
                                </div>
                            </div>
                            <hr />

                            <div className="cart_element">
                                <div className='left'>Discount</div>
                                <div className="right">
                                    <div className="value">0</div>
                                    <div className="unit">%</div>
                                </div>
                            </div>
                            <hr />

                            <div className="cart_element">
                                <div className='left'>TAX</div>
                                <div className="right">
                                    <div className="value">10</div>
                                    <div className="unit">%</div>
                                </div>
                            </div>
                            <hr />

                            <div className="cart_element total">
                                <div className='left'>TOTAL</div>
                                <div className="right">
                                    <div className="value">10.500.000</div>
                                    <div className="unit">VND</div>
                                </div>
                            </div>
                            <hr />
                        </div>

                    </div>
                </div>
            </section>

            <section className="offers">
                <div className="title">
                    <div className="header_offers">Top Education offers and deals for you...</div>
                    
                    <div className="see_all">
                        <a href="">See All</a>

                    </div>
                </div>

                <div className="deals">
                    {deals.map((deals, index) => (
                        <div key={index} className="deals_card" >
                        

                            <div className="deals_value_box"> 
                                <div className="deals_value">{deals.value}</div>
                            </div>

                            <div className="deals_title">{deals.title}</div>

                            <div className="deals_subtitle">{deals.subtitle}</div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Payment;