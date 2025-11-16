<template>
    <div :class="$style.contactPage">
        <!-- Header -->
        <header :class="$style.header">
            <div :class="$style.headerContent">
                <img :class="$style.logo" alt="Caleaf Logo" />
                <nav :class="$style.nav">
                    <span>Products Technology Customize US Local Service Why Caleaf</span>
                </nav>
                <div :class="$style.contactBtn">
                    <span>Contact</span>
                </div>
                <img :class="$style.headerIcon" alt="" />
            </div>
        </header>

        <!-- Hero Section -->
        <section :class="$style.hero">
            <div :class="$style.heroBackground">
                <img :class="$style.heroImage" alt="" />
            </div>
            <div :class="$style.heroContent">
                <h1 :class="$style.heroTitle">Get in Touch</h1>
                <p :class="$style.heroEmail">Email: info@caleaftech.com</p>
                <div :class="$style.divider"></div>
                <div :class="$style.socialSection">
                    <p :class="$style.followText">Follow Us</p>
                    <img :class="$style.socialIcon" alt="Instagram" />
                </div>
            </div>
        </section>

        <!-- Form Section -->
        <section :class="$style.formSection">
            <div :class="$style.formContainer">
                <div :class="$style.formCard">
                    <h2 :class="$style.formTitle">Get Samples and Pricing</h2>
                    <form :class="$style.form">
                        <div :class="$style.formField">
                            <input type="text" placeholder="Your name*" />
                        </div>
                        <div :class="$style.formField">
                            <input type="email" placeholder="Email Address*" />
                        </div>
                        <div :class="$style.formField">
                            <input type="text" placeholder="Country*" />
                            <img :class="$style.dropdownIcon" alt="" />
                        </div>
                        <div :class="$style.formField">
                            <input type="text" placeholder="State" />
                            <img :class="$style.dropdownIcon" alt="" />
                        </div>
                        <div :class="$style.formField">
                            <input type="tel" placeholder="Phone Number" />
                        </div>
                        <div :class="$style.formField">
                            <textarea placeholder="Message"></textarea>
                        </div>
                        <button type="submit" :class="$style.submitBtn">SUBMIT</button>
                    </form>
                </div>
                <div :class="$style.formImage">
                    <img alt="Product Image" />
                </div>
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
.contactPage {
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
    font-family: Roboto, sans-serif;
    color: #555;
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
    color: #fff;
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
}

.contactBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1ce785;
    border-radius: 50px;
    width: 140px;
    height: 40px;
    color: #222;
    font-size: 18px;
    margin-right: 32px;
    cursor: pointer;
}

.headerIcon {
    width: 22px;
    height: 22px;
}

/* Hero Section */
.hero {
    position: relative;
    width: 100%;
    min-height: 980px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    overflow: hidden;
}

.heroBackground {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.heroImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.heroContent {
    max-width: 1920px;
    width: 100%;
    padding: 0 310px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.heroTitle {
    font-size: 100px;
    font-weight: bold;
    color: #fff;
    margin: 0 0 35px 0;
}

.heroEmail {
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    margin: 0 0 64px 0;
}

.divider {
    width: 100%;
    height: 1px;
    background-color: #fff;
    opacity: 0.2;
    margin-bottom: 36px;
}

.socialSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.followText {
    font-size: 20px;
    color: #fff;
    margin: 0;
}

.socialIcon {
    width: 44px;
    height: 44px;
}

/* Form Section */
.formSection {
    width: 100%;
    padding: 100px 0;
    background-color: #fff;
}

.formContainer {
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 310px;
    display: flex;
    gap: 60px;
    align-items: flex-start;
}

.formCard {
    flex: 0 0 440px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.05);
    padding: 55px 40px;
}

.formTitle {
    font-size: 30px;
    font-weight: normal;
    color: #000;
    margin: 0 0 31px 0;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.formField {
    position: relative;
}

.formField input,
.formField textarea {
    width: 100%;
    padding: 15px 14px;
    border: 1px solid #d9d9d9;
    background-color: #fff;
    font-size: 16px;
    font-family: Roboto, sans-serif;
    color: #555;
    box-sizing: border-box;
}

.formField input {
    height: 50px;
}

.formField textarea {
    height: 100px;
    resize: vertical;
}

.formField input::placeholder,
.formField textarea::placeholder {
    color: #555;
}

.dropdownIcon {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    object-fit: contain;
}

.submitBtn {
    width: 100%;
    height: 50px;
    background-color: #1ce785;
    border: none;
    border-radius: 50px;
    font-size: 18px;
    color: #111;
    cursor: pointer;
    margin-top: 10px;
}

.formImage {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f8f9fc;
    border-radius: 20px;
    min-height: 630px;
}

.formImage img {
    max-width: 687px;
    width: 100%;
    height: auto;
    object-fit: cover;
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
