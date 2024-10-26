import Link from "next/link"
import styles from "./about.module.css"
const About = () => {
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
    <section className={styles.about_cont}>
        <h1>About</h1>
    </section>

    <section className={styles.about}>
        <div className={styles.container}>
            <div className={styles.img}>
                <img src="./about.jpg" alt="" />
            </div>
            <div className="content">
                <h1>About US</h1>
                <p>At Digital Marketing, we are passionate about helping businesses thrive in the 
                    fast-paced online world. Our mission is to provide innovative and results-driven 
                    digital marketing solutions that empower brands to achieve their full potential. 
                    With a team of experienced professionals, we specialize in a range of services 
                    including website design and development, SEO, social media marketing, and graphic 
                    design.<br/><br/>We believe that every business is unique, which is why we craft 
                    customized strategies tailored to your specific needs and objectives. Our approach 
                    focuses on delivering measurable results, ensuring your brand not only gains 
                    visibility but also connects meaningfully with your target audience. Whether you are 
                    aiming to improve your search engine rankings, build an engaging social media 
                    presence, or create a stunning website, we are committed to driving your success.
                    <br/><br/>At Digital Marketing, we see ourselves as your partner in growth. With a 
                    keen understanding of the latest industry trends and tools, we help businesses stay 
                    ahead of the competition and navigate the digital landscape with confidence. 
                    Together, let’s elevate your brand and achieve lasting success in the digital world.
                    </p>
            </div>
        </div>
    </section>

    <section className={styles.whyUs}>
        <h1>Why Choose Us</h1>
        <p>
            At Digital Marketing, we believe in the power of collaboration and expertise to drive 
            success. Here why we stand out as your ideal partner in digital marketing:<br/><br/>
            <b>1. Expert Team:</b> Our team is composed of experienced professionals who are passionate 
            about what they do. With diverse backgrounds in digital marketing, design, and technology, 
            we bring a wealth of knowledge to every project. We stay updated with the latest trends and 
            best practices to ensure that your business benefits from innovative solutions.<br/><br/>
            <b>2. Customized Solutions:</b> We understand that every business has unique goals and 
            challenges. Thats why we take the time to listen to your needs and develop tailored 
            strategies that align with your specific objectives. Whether you are a small startup or 
            an established enterprise, we create customized solutions designed to help you succeed in 
            the digital landscape.<br/><br/><b>3. Results-Driven Approach:</b> Our focus is on 
            delivering measurable outcomes. We utilize data analytics to inform our strategies, 
            ensuring that our efforts are aligned with your goals. By continuously monitoring performance
            and making data-driven adjustments, we maximize your return on investment and help your 
            business grow sustainably.<br/><br/><b>4. Comprehensive Services:</b> We offer a full suite 
            of digital marketing services, including website designing and development, graphic 
            designing, social media marketing, and SEO. This comprehensive approach allows us to manage 
            all aspects of your online presence, ensuring consistency and effectiveness across different 
            channels. With us, you can trust that all your digital marketing needs are covered.<br/><br/>
            <b>5. Client-Centric Philosophy:</b> Your success is at the heart of what we do. We 
            prioritize open communication and collaboration, ensuring that you are involved in the 
            decision-making process. Our client-centric philosophy means that we work tirelessly to 
            exceed your expectations, building long-lasting relationships based on trust and 
            transparency.<br/><br/><b>6. Proven Track Record:</b> Our success stories speak for 
            themselves. We have helped numerous businesses enhance their online presence, drive traffic, 
            and achieve their marketing goals. Our portfolio reflects our commitment to excellence and 
            our ability to deliver results that matter.<br/><br/><b>7. Commitment to Quality:</b> 
            We take pride in our work and are committed to maintaining the highest quality standards. 
            From the initial consultation to the final implementation, we ensure that every aspect of 
            our service is executed with precision and care.<br/><br/>In a rapidly evolving digital 
            landscape, having a reliable partner like Digital Marketing can make all the difference. 
            We are here to help you navigate the challenges and seize the opportunities that the online 
            world presents. Let us work together to elevate your brand and achieve lasting success.
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
  
  export default About