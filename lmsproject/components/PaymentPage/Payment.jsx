import React from "react";
import './Payment.css';

const Payment = () => {
    return (
        <div class="card_payment_page">
            <form class="payment_form">
            <div>
                <label htmlFor="number">Card Number</label>
                <input id="c_number" type="number" />
            </div>

            <div>
                <label htmlFor="holder">Card Holder</label>
                <input id="c_holder" type="text" />
            </div>

            <div class="filled_group">
                <div>
                    <label htmlFor="expiration_month">Expiration Month</label>
                    <div class="filled_date">
                        <select id="expriration_month">
                        <option select disabled>Month</option>
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

                        <select id="expriration_year">
                        <option select disabled>Year</option>
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
                    <label htmlFor="cvv">CVV</label>
                    <input id="cvv" type="number"/>
                </div>
            </div>

            <div class="button_confirm">
                <button>Confirm Payment</button>
            </div>
            </form>

            <div class="cart">
                <div class="payment_cart">
                    <div class="header">Payment Cart</div>

                    <div class="payment_in4">
                        <div class="payment_course">
                            <div class="image_course"></div>
                            <div class="course_in4">
                                <div class="course_name">Mobile Application Development</div>
                                <div class="lecturer">Tran Giang Son</div>
                                <div class="price">5.000.000 VND</div>
                            </div>
                        </div>

                        <div class="payment_course">
                            <div class="image_course"></div>
                            <div class="course_in4">
                                <div class="course_name">Web Application Development</div>
                                <div class="lecturer">Huynh Vinh Nam</div>
                                <div class="price">5.000.000 VND</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;