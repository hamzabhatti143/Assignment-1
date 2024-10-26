import Link from "next/link"
import styles from "./../app/index.module.css"
const website = () => {
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

    <section className={styles.serviceHome}>
        <h1>Website Designing & Development</h1>
    </section>

    <section className={styles.web}>
        <img src="./web-design.png" alt="" height={"400px"}/>
        <h2 className="text-align: center; font-size: 40px;">Website Design & Development</h2>
        <p>At Digital Marketing, we offer professional website design and development services tailored to meet your business goals. Your website is the digital face of your brand, and we ensure it not only looks stunning but also functions seamlessly, providing a user-friendly experience that keeps visitors engaged.</p>

        <h2>Custom Design Tailored to Your Brand</h2>
        <p>We believe that your website should reflect your brand’s unique identity. Our team of skilled designers works closely with you to understand your vision and translate it into a visually appealing, intuitive design. Whether you’re looking for a sleek, modern look or something more traditional, we create a custom design that captures your brand’s essence.</p>

        <h2>Responsive and Mobile-Friendly</h2>
        <p>With the majority of users accessing websites from mobile devices, having a mobile-friendly site is essential. We build fully responsive websites that look great and function smoothly on all screen sizes—whether on a desktop, tablet, or smartphone. This ensures a consistent user experience, no matter how your audience interacts with your site.</p>

        <h2>SEO-Optimized for Better Visibility</h2>
        <p>A beautiful website is only effective if it can be found. Our web development process includes SEO optimization to help your site rank higher on search engines. We integrate SEO best practices right from the start, ensuring your website has the visibility it needs to attract organic traffic and drive conversions.</p>

        <h2>Fast and Secure</h2>
        <p>Speed and security are critical for user experience and search rankings. We build websites that are optimized for fast loading times and provide a secure environment for your users. Whether you need e-commerce functionality or a simple business site, we ensure your data and your customers information are protected.</p>

        <h2>User-Centric and Intuitive</h2>
        <p>Our websites are built with your audience in mind. From intuitive navigation to clean layouts, we focus on creating an engaging and user-friendly experience. We prioritize ease of use, making it simple for visitors to find the information they need and take action—whether that’s making a purchase, signing up for a newsletter, or contacting your business.</p>

        <h2>Scalable and Future-Ready</h2>
        <p>As your business grows, your website needs to keep up. We build scalable solutions that can adapt to your evolving needs. Whether you’re planning to add more products, services, or features in the future, our websites are designed to grow with your business.</p>

        <h2>Content Management System (CMS)</h2>
        <p>We integrate user-friendly content management systems (CMS) such as WordPress, allowing you to easily update and manage your website content without any technical expertise. This gives you control over your site, ensuring that you can keep it up-to-date with minimal effort.</p>

        <h2>Ongoing Support and Maintenance</h2>
        <p>Our relationship doesn’t end after your website is launched. We offer ongoing support and maintenance services to keep your site running smoothly. From regular updates to troubleshooting issues, we’re here to ensure your website stays optimized and up-to-date as technology evolves.</p>
        
    </section>


    <section className={styles.portfolio}>
        <h1>Portfolio</h1>

        <div className={styles.serviceCards}>
            <div className={styles.containerFluid}>
                <div>
                <img src="port-1.png" alt="" />
                </div>
            </div>

            <div className={styles.containerFluid}>
                <div>
                <img src="port-2.png" alt="" />
                </div>
            </div>

            <div className={styles.containerFluid}>
                <div>
                <img src="port-3.png" alt="" />
                </div>
            </div>
        </div>
    </section>
    <section className={styles.whyUs}>
        <h1>Why Choose Us</h1>
        <p>
<br /><br /><b>1. Experienced Team:</b> With Many years of experience, we understand the nuances of effective website design and development.

<br /><br /><b>2. Custom Solutions:</b> Every website we create is uniquely tailored to your business needs.
<br /><br />
<b>3. Full-Service Approach:</b> From design to development, SEO to ongoing support, we handle everything so you can focus on growing your business.
</p>
    </section>

    <section className={styles.contact}>
        <h2>Contact Us</h2>
        <div className={styles.contFluid}>
           <label htmlFor="Name">Full Name</label>
           <input type="text" placeholder="Enter Your Name" />

            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter Your Email" />

            <label htmlFor="Number">Phone Number</label>
            <input type="text" placeholder="Enter Your Phone Number" />

            <button className={styles.btn}>Submit</button>
        </div>
    </section>

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

export default website
