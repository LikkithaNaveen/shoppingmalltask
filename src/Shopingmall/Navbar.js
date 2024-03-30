

const Navbar = ({cart}) => {
    // console.log(cart,setCart)
    const navbarstyle = {
        display: "flex",
        justifyContent: "space-between",
        padding: "8px",
        fontsize: "16px",height:"auto",fontweight: "bolder"

    }
    
    return (
        <>
            {/* inline styling */}

            <div style={{ backgroundColor: "white", height: "auto", width: "100%", marginBottom: "0%", color: "black" ,border:"1px solid black",fontweight: "bolder"}}>

                <div style={navbarstyle}>
                <div> </div>
                    <div> </div>
                    <div> </div>
                    <div> </div>
                    <div> </div>
                    <div> </div>

                    <div>Home</div>
                    <div>About </div>
                    <div class="dropdown">
                        <button class="button1">Shop</button>
                        <div class="dropdown-options">
                            <a href="#">All Products</a><hr></hr>
                            <a href="#">Popular Items</a>
                            <a href="#">New Arrivals</a>
                        </div>
                    </div>
                    <div> </div>
                    <div> </div>
                    <div> </div>
                    <div> </div>
                    <div> </div>
                    <div> </div>
                    <div> </div>
                    <div> </div>
                    <div> </div>
                    <div> </div>
                    <div> </div>
                    <div> </div>
                    <div > 🛒Cart {cart}</div>
                    <div> </div>
                    <div> </div>
                    <div> </div>



                </div>
            </div>
        </>

    )
}
export default Navbar