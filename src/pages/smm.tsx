import Link from "next/link"
import styles from "./../app/index.module.css"
const smm = () => {
  return (
    <>
      <nav className={styles.nav}>
        <img src="./logo.png" alt="" />
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
        <h1>Social Media Marketing</h1>
    </section>

    <section className={styles.smm}>
        <img src="./SMM.jpg" alt="" />
        <h2 className="text-align: center; font-size: 40px;">Social Media Marketing 
        </h2>
        <p>In today’s digital world, having a strong social media presence is essential for building your brand and engaging with your audience. At Digital Marketing, we offer expert Social Media Marketing services designed to enhance your brand’s visibility, foster meaningful connections, and drive real results. Whether you’re looking to grow your follower base or increase engagement, our strategic approach ensures that your brand stands out on every platform.

        </p>

        <h2>Platform-Specific Strategies
        </h2>
        <p>Each social media platform has its own audience and best practices. We develop tailored strategies for platforms like Facebook, Instagram, Twitter, LinkedIn, and more to ensure that your content resonates with the right audience. Whether it’s creating visually engaging posts for Instagram or professional content for LinkedIn, we customize our approach for each platform to maximize your impact.

        </p>

        <h2>Content Creation and Management
        </h2>
        <p>Creating engaging, shareable content is at the heart of a successful social media strategy. Our team designs and curates content that captures attention and encourages interaction. From stunning visuals and videos to informative and compelling posts, we ensure that your brand’s message is clear, consistent, and engaging. We also handle the scheduling and management of your social media content to keep your profiles active and up-to-date.

        </p>

        <h2>Audience Engagement
        </h2>
        <p>Social media is all about building relationships. We help you connect with your audience by managing interactions, responding to comments, and fostering engagement across your social channels. By creating meaningful conversations and fostering community, we help build loyalty and trust with your followers.

        </p>

        <h2>Social Media Advertising
        </h2>
        <p>Maximize your reach with targeted social media advertising campaigns. We develop data-driven ad strategies that are designed to reach your ideal audience, increase brand awareness, and drive conversions. From Facebook and Instagram ads to LinkedIn and Twitter promotions, we create campaigns that deliver measurable results.

        </p>

        <h2>Analytics and Reporting
        </h2>
        <p>Our social media strategies are based on data and performance metrics. We continuously monitor your social media accounts, track engagement, and analyze performance to ensure that your strategy is driving results. Through regular reports, we provide insights into how your campaigns are performing and where improvements can be made.

        </p>

        <h2>Brand Consistency
        </h2>
        <p>Consistency is key to building a recognizable brand on social media. We ensure that your voice, visuals, and messaging are aligned across all platforms, creating a cohesive and professional brand presence. Whether you are launching a new product or promoting services, we maintain a consistent tone and style that reflects your brand’s identity.</p>

        <h2>Influencer Marketing
        </h2>
        <p>Partnering with influencers can significantly boost your brand’s reach and credibility. We help you identify and collaborate with influencers who align with your brand values and target audience. By leveraging their followers and influence, we help you expand your reach and connect with new potential customers.</p>
        
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
<br /><br /><b>1. Customized Strategies:</b> We create platform-specific strategies to engage your audience and achieve your business goals.

<br /><br /><b>2. Creative Content:</b> Our team crafts engaging and visually appealing content that drives interaction and brand awareness.
<br /><br />
<b>3. Data-Driven Approach:</b> We use analytics to fine-tune your social media campaigns, ensuring you get the best results.
<br /><br />
<b>4. Comprehensive Management:</b> From content creation to ad management, we handle every aspect of your social media presence.

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

export default smm
