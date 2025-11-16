<template>
    <div :class="$style.technologyPage">
        <!-- Header -->
        <header :class="$style.header">
            <div :class="$style.headerContent">
                <img :class="$style.logo" alt="Caleaf Logo" />
                <nav :class="$style.nav">
                    <span>Products Technology Customize US Local Service Why Caleaf</span>
                </nav>
                <div :class="$style.contactBtn">
                    <span>Contact</span>
                    <img :class="$style.contactIcon" alt="" />
                </div>
            </div>
        </header>

        <!-- Hero Section -->
        <section :class="$style.hero">
            <h1 :class="$style.heroTitle">UNICORE</h1>
            <img :class="$style.heroProductImage" alt="UNICORE Product" />
            <button :class="$style.watchVideoBtn">
                <span>Watch Video</span>
                <img :class="$style.playIcon" alt="Play" />
            </button>
        </section>

        <!-- Feature Section 1: Savor the most natural flavors -->
        <section :class="$style.featureSection">
            <div :class="$style.featureContent">
                <div :class="$style.featureLeft">
                    <div :class="$style.imagePlaceholder"></div>
                </div>
                <div :class="$style.featureRight">
                    <div :class="$style.badge100">100% Rosin-Ready</div>
                    <h2 :class="$style.featureTitle">Savor the most natural <br />and rich flavors</h2>
                    <p :class="$style.featureText">
                        We always strive to be pioneers in the industry.<br />
                        Our patented U-shape ceramic design is the result of extensive testing and validation of various structures.
                        It is the optimal structure for the vast majority of Resin and Rosin oils on the market.<br />
                        It is 30% thinner than ordinary ceramics while maintaining the strength, which means fewer terpene molecules
                        are filtered out, and the rich, natural flavors are preserved.
                    </p>
                    <div :class="$style.stats">
                        <div :class="$style.statItem">
                            <div :class="$style.statValue">30%</div>
                            <div :class="$style.statLabel">Thinner in Structure</div>
                        </div>
                        <div :class="$style.statItem">
                            <div :class="$style.statValue">
                                45%
                                <img :class="$style.statIcon" alt="" />
                            </div>
                            <div :class="$style.statLabel">Flavor Retention</div>
                        </div>
                    </div>
                    <img :class="$style.featureGraphic" alt="" />
                </div>
            </div>
        </section>

        <!-- Feature Section 2: Anti-clogging solution -->
        <section :class="$style.featureSection">
            <div :class="$style.featureContent">
                <div :class="$style.featureLeft">
                    <div :class="$style.badge">We fixed it first</div>
                    <h2 :class="$style.featureTitle">The most effective<br />anti-clogging solution ever built.</h2>
                    <p :class="$style.featureText">
                        Most customers have reported bubble issues to us with various devices from different suppliers during oil filling.
                        Our U-shape ceramic design solves this problem perfectly. No more burnt taste caused by clogged bubbles.
                    </p>
                </div>
                <div :class="$style.featureRight">
                    <img :class="$style.featureImage" alt="Anti-clogging" />
                </div>
            </div>
        </section>

        <!-- Background Image Section -->
        <section :class="$style.backgroundSection">
            <img :class="$style.backgroundImage" alt="" />
        </section>

        <!-- Feature Section 3: Aerospace-grade -->
        <section :class="$style.featureSection">
            <div :class="$style.featureContent">
                <div :class="$style.featureLeft">
                    <div :class="$style.badge">
                        <img :class="$style.badgeIcon" alt="" />
                        20% at firing temp
                    </div>
                    <h2 :class="$style.featureTitle">Aerospace-grade<br />high thermal conductivity.</h2>
                    <p :class="$style.featureText">
                        We never let existing rules and regulations hold us back.<br />
                        We pioneered the incorporation of aerospace-grade high thermal conductivity materials into ceramics.
                        Through round-the-clock firing and suction tests, we have finally succeeded in firing the ceramic at
                        1832 °F (1000 ℃), surpassing our peers by 20%.
                    </p>
                </div>
                <div :class="$style.featureRight">
                    <img :class="$style.featureImage2" alt="Aerospace" />
                </div>
            </div>
        </section>

        <!-- Feature Section 4: No dry burning -->
        <section :class="$style.featureSection">
            <div :class="$style.featureContent">
                <div :class="$style.featureLeft">
                    <img :class="$style.featureImage3" alt="No dry burning" />
                </div>
                <div :class="$style.featureRight">
                    <div :class="$style.badge">Built-in wires</div>
                    <h2 :class="$style.featureTitle">No more dry burning</h2>
                    <p :class="$style.featureText">
                        We pay attention to every detail.<br />
                        It is only when we use the highest-grade nichrome alloy as the heating coil material, shape it for uniform
                        heat distribution, and embed it into the ceramic core, allowing the oil to be heated by the ceramic and not
                        by exposed hot wires, that we say, "That's it. This is a truly perfect structure!"
                    </p>
                </div>
            </div>
        </section>

        <!-- Feature Section 5: Consistent Temp -->
        <section :class="$style.featureSection">
            <div :class="$style.featureContent">
                <div :class="$style.featureLeft">
                    <div :class="$style.imagePlaceholder2"></div>
                </div>
                <div :class="$style.featureRight">
                    <div :class="$style.badge">RTD Control</div>
                    <h2 :class="$style.featureTitle">Consistent Temp</h2>
                    <p :class="$style.featureText">
                        Unicore combines smoothness with purity, ensuring efficient THC and terpene extraction without burning,
                        and guarantees an exceptional session every time.
                    </p>
                </div>
            </div>
        </section>

        <!-- Feature Section 6: Another placeholder -->
        <section :class="$style.featureSection">
            <div :class="$style.featureContent">
                <div :class="$style.imagePlaceholder3"></div>
            </div>
        </section>

        <!-- Awards Section 1 -->
        <section :class="$style.awardsSection">
            <div :class="$style.dividerGreen"></div>
            <div :class="$style.awardsContent">
                <h2 :class="$style.awardsTitle">Our clients have taken home trophies</h2>
                <p :class="$style.awardsText">
                    We take pride in having earned our clients' trust. The trophies shine brightly and stand as proof of our
                    products' excellence.
                </p>
            </div>
        </section>

        <!-- Awards Section 2 -->
        <section :class="$style.awardsSection2">
            <div :class="$style.awardsImagePlaceholder"></div>
            <div :class="$style.awardsContent">
                <h2 :class="$style.awardsTitle">Our clients have taken home trophies</h2>
                <p :class="$style.awardsText">
                    We take pride in having earned our clients' trust. The trophies shine brightly and stand as proof of our
                    products' excellence.
                </p>
            </div>
        </section>

        <!-- Lab Section -->
        <section :class="$style.labSection">
            <div :class="$style.labBackground">
                <img :class="$style.labImage" alt="" />
            </div>
            <div :class="$style.labContent">
                <h2 :class="$style.labTitle">From lab to awards: journey to the top</h2>
                <p :class="$style.labText">
                    Our R&D Director, Frank, with 20 years of industry experience, has worked with US labs for 18 months,
                    conducting round-the-clock tests to redefine the gold standard for Rosin and Resin oils. This dedication
                    means we don't just offer testing capabilities—we offer proven results.<br />
                    We once partnered with a client for a year-long testing phase to ensure their product not only made a big
                    hit in the market but also stood the test of time.<br />
                    Choose us, and you're not just choosing a supplier—you're choosing a reliable partner you can always count on.
                </p>
            </div>
        </section>

        <!-- Products Section -->
        <section :class="$style.productsSection">
            <h2 :class="$style.productsTitle">UNICORE Products</h2>
            <div :class="$style.productsGrid">
                <div :class="$style.productCard">
                    <img :class="$style.productImage" alt="" />
                    <div :class="$style.productInfo">
                        <h3><b>UNIT</b><br /><span :class="$style.productDesc">UNICORE™ tech & large display</span></h3>
                    </div>
                    <button :class="$style.productBtn">View More</button>
                </div>
                <div :class="$style.productCard">
                    <img :class="$style.productImage" alt="" />
                    <div :class="$style.productInfo">
                        <h3><b>UNIT</b><br /><span :class="$style.productDesc">UNICORE™ tech & large display</span></h3>
                    </div>
                    <button :class="$style.productBtn">View More</button>
                </div>
                <div :class="$style.productCard">
                    <img :class="$style.productImage" alt="" />
                    <div :class="$style.productInfo">
                        <h3><b>UNIT</b><br /><span :class="$style.productDesc">UNICORE™ tech & large display</span></h3>
                    </div>
                    <button :class="$style.productBtn">View More</button>
                </div>
                <div :class="$style.productCard">
                    <img :class="$style.productImage" alt="" />
                    <div :class="$style.productInfo">
                        <h3><b>UNIT</b><br /><span :class="$style.productDesc">UNICORE™ tech & large display</span></h3>
                    </div>
                    <button :class="$style.productBtn">View More</button>
                </div>
            </div>
            <div :class="$style.productNavigation">
                <button :class="$style.navBtnLeft">
                    <img alt="Left" />
                </button>
                <button :class="$style.navBtnRight">
                    <img alt="Right" />
                </button>
            </div>
        </section>

        <!-- Footer -->
        <footer :class="$style.footer">
            <div :class="$style.footerContent">
                <div :class="$style.footerColumns">
                    <div :class="$style.footerColumn">
                        <h3>Products</h3>
                        <ul>
                            <li>For Resin/Rosin</li>
                            <li>Pod System</li>
                            <li>Full Ceramic</li>
                            <li>D9 Distillate</li>
                            <li>US STOCK</li>
                            <li>Dab Pen</li>
                            <li>510 Cartridge</li>
                            <li>D8 Distillate</li>
                        </ul>
                    </div>
                    <div :class="$style.footerColumn">
                        <h3>Technology</h3>
                        <ul>
                            <li>Product Support</li>
                            <li>Repair Service</li>
                            <li>After-Sales Policy</li>
                            <li>Care Service</li>
                            <li>Downloads</li>
                        </ul>
                    </div>
                    <div :class="$style.footerColumn">
                        <h3>Customize</h3>
                        <ul>
                            <li>For Resin/Rosin</li>
                            <li>Pod System</li>
                            <li>Full Ceramic</li>
                            <li>D9 Distillate</li>
                            <li>US STOCK</li>
                            <li>Dab Pen</li>
                            <li>510 Cartridge</li>
                            <li>D8 Distillate</li>
                        </ul>
                    </div>
                    <div :class="$style.footerColumn">
                        <h3>Why Caleaf</h3>
                        <ul>
                            <li>About Caleaf</li>
                            <li>Press</li>
                            <li>Blog</li>
                            <li>CSR</li>
                            <li>Awards</li>
                            <li>Join Us</li>
                        </ul>
                    </div>
                    <div :class="$style.footerColumn">
                        <h3>Subscribe</h3>
                        <p :class="$style.subscribeText">Get the latest news from CALEAF TECH</p>
                        <div :class="$style.subscribeForm">
                            <input type="email" placeholder="Email" />
                            <button>Sign Up</button>
                        </div>
                        <div :class="$style.privacyCheckbox">
                            <input type="checkbox" />
                            <label>
                                <span>I agree with the </span>
                                <span :class="$style.privacyLink">Privacy Policy</span>
                                <span> and I'd like to receive the latest CALEAF TECH news and deals by email.</span>
                            </label>
                        </div>
                        <div :class="$style.socialIcons">
                            <img alt="YouTube" />
                            <img alt="LinkedIn" />
                            <img alt="Facebook" />
                            <img alt="Instagram" />
                            <img alt="TikTok" />
                        </div>
                    </div>
                </div>
                <div :class="$style.footerBottom">
                    <div :class="$style.copyright">Copyright © 2025 CALEAF TECH All rights reserved.</div>
                    <div :class="$style.designer">Designed by HOLY</div>
                </div>
            </div>
        </footer>
    </div>
</template>

<style module>
/* Main Container */
.technologyPage {
    width: 100%;
    min-height: 100vh;
    background-color: #000;
    font-family: Roboto, sans-serif;
    color: #fff;
}

/* Header */
.header {
    position: sticky;
    top: 0;
    width: 100%;
    background-color: transparent;
    z-index: 100;
    padding: 30px 0;
}

.headerContent {
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 310px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    width: 187.2px;
    height: 30px;
    object-fit: cover;
}

.nav {
    flex: 1;
    margin-left: 60px;
    font-size: 16px;
    color: #fff;
}

.contactBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: #1ce785;
    border-radius: 50px;
    padding: 0 35px;
    height: 40px;
    color: #222;
    font-size: 18px;
    cursor: pointer;
}

.contactIcon {
    width: 22px;
    height: 22px;
}

/* Hero Section */
.hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 807px;
    padding: 100px 310px;
    position: relative;
}

.heroTitle {
    font-size: 200px;
    font-weight: bold;
    margin: 0 0 60px 0;
    text-align: center;
}

.heroProductImage {
    width: 445px;
    height: 633px;
    object-fit: cover;
    margin-bottom: 40px;
}

.watchVideoBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: rgba(255, 255, 255, 0.7);
    border: none;
    border-radius: 50px;
    width: 300px;
    height: 60px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
}

.playIcon {
    width: 24px;
    height: 24px;
}

/* Feature Section */
.featureSection {
    width: 100%;
    padding: 100px 0;
}

.featureContent {
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 310px;
    display: flex;
    gap: 100px;
    align-items: center;
}

.featureLeft,
.featureRight {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.imagePlaceholder {
    background-color: #d9d9d9;
    border-radius: 20px;
    width: 400px;
    height: 680px;
}

.imagePlaceholder2 {
    background-color: #d9d9d9;
    border-radius: 20px;
    width: 750px;
    height: 400px;
}

.imagePlaceholder3 {
    background-color: #d9d9d9;
    border-radius: 20px;
    width: 800px;
    height: 400px;
    margin: 0 auto;
}

.badge,
.badge100 {
    font-size: 20px;
    color: #1ce785;
    margin-bottom: 32px;
}

.badge100 {
    text-shadow: 1px 0 0 #000, 0 1px 0 #000, -1px 0 0 #000, 0 -1px 0 #000;
}

.badgeIcon {
    width: 28px;
    height: 26px;
    object-fit: cover;
    margin-right: 8px;
    vertical-align: middle;
}

.featureTitle {
    font-size: 40px;
    font-weight: bold;
    margin: 0 0 32px 0;
    text-align: center;
}

.featureText {
    font-size: 20px;
    line-height: 30px;
    margin: 0;
    text-align: center;
}

.stats {
    display: flex;
    gap: 80px;
    margin-top: 36px;
    justify-content: center;
}

.statItem {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.statValue {
    font-size: 40px;
    font-weight: bold;
    color: #1ce785;
    line-height: 30px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.statIcon {
    width: 43.1px;
    height: 39.8px;
    object-fit: cover;
}

.statLabel {
    font-size: 20px;
    line-height: 30px;
    color: #fff;
}

.featureGraphic {
    width: 763px;
    height: 368px;
    object-fit: cover;
    margin: 30px auto 0;
}

.featureImage {
    width: 595px;
    height: 412px;
    object-fit: cover;
    margin: 0 auto;
}

.featureImage2 {
    width: 640px;
    height: 341px;
    object-fit: cover;
    margin: 0 auto;
}

.featureImage3 {
    width: 577px;
    height: 560px;
    object-fit: cover;
    margin: 0 auto;
}

/* Background Section */
.backgroundSection {
    width: 100%;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.backgroundImage {
    width: 1920px;
    height: 1080px;
    object-fit: cover;
    opacity: 0.56;
}

/* Awards Section */
.awardsSection {
    width: 100%;
    padding: 50px 0;
}

.dividerGreen {
    max-width: 1920px;
    margin: 0 auto;
    height: 2px;
    background-color: #1ce785;
}

.awardsContent {
    max-width: 1920px;
    margin: 0 auto;
    padding: 46px 310px;
}

.awardsTitle {
    font-size: 40px;
    font-weight: bold;
    margin: 0 0 34px 0;
}

.awardsText {
    font-size: 20px;
    line-height: 30px;
    margin: 0;
    max-width: 800px;
}

.awardsSection2 {
    width: 100%;
    padding: 50px 0;
}

.awardsImagePlaceholder {
    background-color: #d9d9d9;
    border-radius: 20px;
    width: 800px;
    height: 400px;
    margin: 0 auto 34px;
}

/* Lab Section */
.labSection {
    position: relative;
    width: 100%;
    padding: 100px 0;
}

.labBackground {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1300px;
    height: 560px;
    border-radius: 20px;
    overflow: hidden;
    opacity: 0.6;
}

.labImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.labContent {
    position: relative;
    max-width: 1920px;
    margin: 0 auto;
    padding: 142px 310px 100px;
    text-align: center;
}

.labTitle {
    font-size: 40px;
    font-weight: bold;
    margin: 0 0 41px 0;
}

.labText {
    font-size: 20px;
    line-height: 30px;
    margin: 0 auto;
    max-width: 983px;
}

/* Products Section */
.productsSection {
    width: 100%;
    padding: 100px 0;
    background-color: #000;
}

.productsTitle {
    font-size: 80px;
    font-weight: 800;
    font-style: italic;
    line-height: 80px;
    color: #1ce785;
    text-align: center;
    margin: 0 0 45px 0;
}

.productsGrid {
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 310px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 27px;
}

.productCard {
    background-color: #23242a;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: 440px;
}

.productImage {
    width: 185px;
    height: 165px;
    object-fit: cover;
    margin: 43px auto 46px;
}

.productInfo {
    flex: 1;
    margin-bottom: 24px;
}

.productInfo h3 {
    font-size: 24px;
    line-height: 32px;
    margin: 0;
}

.productDesc {
    font-size: 16px;
    font-weight: normal;
    color: #f5f5f5;
}

.productBtn {
    background-color: #1ce785;
    border: none;
    border-radius: 50px;
    width: 130px;
    height: 40px;
    font-size: 16px;
    color: #000;
    cursor: pointer;
}

.productNavigation {
    display: flex;
    justify-content: space-between;
    max-width: 1920px;
    margin: 30px auto 0;
    padding: 0 310px;
}

.navBtnLeft,
.navBtnRight {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.navBtnLeft {
    background-color: #fff;
}

.navBtnLeft img {
    width: 24px;
    height: 24px;
    opacity: 0.4;
}

.navBtnRight {
    background-color: #1ce785;
}

.navBtnRight img {
    width: 24px;
    height: 24px;
}

/* Footer */
.footer {
    width: 100%;
    background-color: #fff;
    padding: 60px 0 30px 0;
}

.footerContent {
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 310px;
}

.footerColumns {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 60px;
    margin-bottom: 50px;
}

.footerColumn h3 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin: 0 0 32px 0;
}

.footerColumn ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footerColumn li {
    font-size: 16px;
    line-height: 32px;
    color: #555;
}

.subscribeText {
    font-size: 16px;
    line-height: 32px;
    color: #555;
    margin: 0 0 17px 0;
}

.subscribeForm {
    display: flex;
    margin-bottom: 17px;
}

.subscribeForm input {
    flex: 1;
    height: 44px;
    padding: 0 17px;
    border: 1px solid #d9d9d9;
    background-color: #fff;
    font-size: 16px;
    font-family: Roboto, sans-serif;
    color: #555;
}

.subscribeForm input::placeholder {
    color: #999;
}

.subscribeForm button {
    width: 90px;
    height: 44px;
    background-color: #1ce785;
    border: none;
    color: #000;
    font-size: 16px;
    line-height: 32px;
    cursor: pointer;
}

.privacyCheckbox {
    display: flex;
    gap: 12px;
    margin-bottom: 36px;
}

.privacyCheckbox input[type="checkbox"] {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    margin-top: 3px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
}

.privacyCheckbox label {
    font-size: 14px;
    line-height: 22px;
    color: #555;
}

.privacyLink {
    color: #000;
}

.socialIcons {
    display: flex;
    gap: 32px;
}

.socialIcons img {
    width: 18px;
    height: 18px;
}

.footerBottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.copyright,
.designer {
    font-size: 14px;
    line-height: 22px;
    color: #555;
}
</style>
