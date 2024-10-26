import Link from "next/link"
import styles from "./../app/index.module.css"
const graphic = () => {
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
        <h1>Graphic Designing</h1>
    </section>

    <section className={styles.graphic}>
        <img src="./GRAPHICS.jpg" alt="" />
        <h2 className="text-align: center; font-size: 40px;">Graphic Designing</h2>
        <p>At Digital Marketing, we understand the power of visual storytelling. Our graphic design services 
            are tailored to help your brand stand out and communicate its message clearly and effectively. 
            Whether you need a fresh logo, eye-catching marketing materials, or engaging digital content, we 
            bring your ideas to life with creative and professional designs.</p>

        <h2>Custom Designs That Reflect Your Brand</h2>
        <p>Every business is unique, and your design should be too. Our team works closely with you to capture 
            the essence of your brand and translate it into compelling visuals. We create custom designs that are 
            perfectly aligned with your brand’s values, voice, and goals, ensuring your business is represented in 
            the best possible light.</p>

        <h2>Logos and Brand Identity</h2>
        <p>Your logo is the cornerstone of your brand identity. We craft memorable logos that not only look 
            great but also convey the personality and values of your brand. Our brand identity services extend beyond 
            logos to include color schemes, typography, and visual styles that create a cohesive look across all your 
            marketing materials.</p>

        <h2>Marketing Materials
        </h2>
        <p>From brochures and business cards to flyers and banners, we design marketing materials that leave a lasting impression. Whether you’re attending a trade show, launching a new product, or running a marketing campaign, our designs help you communicate your message in a way that captivates your audience.

        </p>

        <h2>Digital Design
        </h2>
        <p>In the digital age, a strong online presence is crucial. We create stunning digital assets, including social media graphics, email templates, and website visuals, that engage your audience and enhance your brand’s online image. Our designs are optimized for all platforms and devices, ensuring your brand shines wherever it appears.

        </p>

        <h2>Packaging Design
        </h2>
        <p>Product packaging plays a vital role in customer decisions. Our creative packaging designs not only attract attention on the shelf but also communicate the value of your product. We create innovative packaging that enhances your product’s appeal and aligns with your brand identity.

        </p>

        <h2>Infographics and Visual Content
        </h2>
        <p>Communicate complex information in an engaging and easily digestible format with our infographic design services. Whether for presentations, reports, or social media, we create clear, visually appealing graphics that help your audience quickly grasp key concepts and data.

        </p>

        <h2>Print Design
        </h2>
        <p>Our print design services cover everything from posters and billboards to event materials and invitations. We ensure your print materials are visually appealing, on-brand, and professionally executed, creating a seamless experience across all touchpoints.

        </p>
        
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

<br /><br /><b>1. Creative Expertise:</b> Our team of graphic designers brings a wealth of creativity and experience to every project.

<br /><br /><b>2. Tailored Designs:</b> We craft designs that are custom-made to reflect your brand and resonate with your target audience.
<br /><br />
<b>3. Full-Service Approach:</b> From digital content to print materials, we offer comprehensive graphic design solutions to meet all your needs.
<br /><br />
<b>4. Attention to Detail:</b> We take pride in delivering high-quality designs that are polished, professional, and visually striking.
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

export default graphic
