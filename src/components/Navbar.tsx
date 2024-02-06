
const Navbar = () => {
    const HomeLinks = [{
        label: "Welcome",
        link: "/"
    },
    {
        label: "About",
        link: "/about"
    },
    {
        label: "Our Brands",
        link: "/our-brands"
    },
    {
        label: "Contact us",
        link: "/contact"
    }
    ]

    return (
        <div className='flex py-2 justify-center gap-4 items-center'>
            {
                HomeLinks.map((links, index) => (
                    <a href={links.link} key={index} className="uppercase text-sm">
                        {
                            links.label
                        }
                    </a>
                ))
            }
        </div>
    )
}

export default Navbar
