
function Footer() {
    return (
        <>
            <section className="flex justify-around">
                <section>
                    <p>Quick Links</p>
                    <li>Shop</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Faqs</li>
                </section>
                <section>
                    <p>Other links</p>
                    <li>My Account</li>
                    <li>Cart</li>
                    <li>Orders</li>
                    <li>Checkout</li>
                </section>
                <section>
                    <p>Products</p>
                    <li>Gypson’s Pink</li>
                    <li>Gypson’s Gin</li>
                    <li>Glen Moray</li>
                    <li>Perlino Rose</li>
                </section>
                <section>
                    <p>Follow Us</p>
                    <li>Instagram</li>
                    <li>facebook</li>
                    <li>Twitter</li>
                    <li>Youtube</li>
                </section>
            </section>
            <section>
                <div className='flex justify-end pr-10'>
                    <img src="/visa.png"alt="" />
                    <img src="mastercard.png" alt="" />
                    <img src="/mtn.png" alt="" />
                </div>
            </section>
            <section className=" text-center">
                <p>&copy; All right reserved TOKA Beverages</p>
            </section>
        </>
    )
}

export default Footer
