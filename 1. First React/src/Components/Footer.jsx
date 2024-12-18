const Footer = () => {
    const d = new Date();
    return (
        <>
            <footer>
                <p>Thank You for Reading</p>
                <p>All Rights Reserved {d.getFullYear()} &copy; </p>
            </footer>
        </>
    )
}
export default Footer;
