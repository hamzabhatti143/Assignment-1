import Link from "next/link"
import styles from "./../app/index.module.css"

const contact = () => {
  return (
    <>
    <nav className={styles.nav}>
        <img src="./logo.png"  />
        <div className={styles.navIcons}>
            <ul>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/service">Services</Link>
                <Link href="/contact">Contact</Link>
            </ul>
        </div>
    </nav>
    <section className={styles.contactUs}>
        <h1>Contact Us</h1>
    </section>

    <form action="" className={styles.contactForm}>
        <h2>Full Name</h2>
        <input type="text" placeholder="Enter Your Name" width="300px" />
        
        <h2>Email</h2>
        <input type="email" placeholder="Enter Your Email" />

        <h2>Phone Number</h2>
        <input type="text" placeholder="Enter Your Phone Number" />
    </form>

    <footer className={styles.footer}>
        <img src="./logo-footer.png" alt="" />
        <div className={styles.footerIcons}>
            <ul>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/service">Services</Link>
                <Link href="/contact">Contact</Link>
            </ul>
        </div>
    </footer>
    </>
  )
}

export default contact
