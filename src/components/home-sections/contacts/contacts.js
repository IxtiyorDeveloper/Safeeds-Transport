import styles from "./contacts.module.scss";
import GMap from "./map";
import Location from "../../../assets/vectorIcons/location";
import EmailIcon from "../../../assets/vectorIcons/emailIcon";
import PhoneIcon from "../../../assets/vectorIcons/phoneIcon";
import Facebookteamdefult1 from "../../../assets/vectorIcons/facebookteamdefult1";
import Instagramteamdefult1 from "../../../assets/vectorIcons/instagramteamdefult1";
import Twittertamdefult1 from "../../../assets/vectorIcons/twittertamdefult1";

export default function ContactUs() {
    const instaGram = () => {
        // window.location.href = "https://youtu.be/CRtB7DZJqHk";
        window.open("https://www.instagram.com");

    }
    const faceBook = () => {
        // window.location.href = "https://youtu.be/CRtB7DZJqHk";
        window.open("https://www.facebook.com");

    }
    const twitTer = () => {
        // window.location.href = "https://youtu.be/CRtB7DZJqHk";
        window.open("https://www.twitter.com");

    }
    const sendMail = () => {
        window.location.href = "mailto:info@dtmtrucking.com?subject=DtmTruckCompany";
    }
    return (
        <div className={styles.wrapper} id="section-7">
            <div className={styles.tit}>
                Our contacts:
            </div>
            <GMap/>
            <div className={styles.left}>
                <div className={styles.inner}>
                    <div className={styles.title}>
                        Contact us
                    </div>
                    <div className={styles.htitle}>
                        Headquarters
                    </div>
                    <div className={styles.adress}>
                        <div className={styles.contactIcon}>
                            <Location/>
                        </div>
                        <div className={styles.text}>
                            1275 Davis Rd, Suite 130
                            Elgin, IL 60123
                        </div>
                    </div>
                    <div className={styles.adress}>
                        <div className={styles.contactIcon}>
                            <EmailIcon/>
                        </div>
                        <div className={styles.text}>

                            <div className={styles.email}
                                 onClick={sendMail}
                            >
                                info@dtmtrucking.com
                            </div>
                        </div>
                    </div>
                    <div className={styles.adress}>
                        <div className={styles.contactIcon}>
                            <PhoneIcon/>
                        </div>
                        <div className={styles.text}>
                            <a className={styles.phoneNumber} href="tel:+17733092111">+1 773 309 2111</a>
                            <div>
                                <a className={styles.phoneNumber} href="tel:+16308838733 ">+1 630 883 8733 </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.htitle}>
                        Social networks
                    </div>
                    <div className={styles.icon}>
                        <div className={styles.iconIn} onClick={faceBook}>
                            <Facebookteamdefult1 />
                        </div>
                        <div className={styles.iconIn} onClick={instaGram}>
                            <Instagramteamdefult1 />
                        </div>
                        <div className={styles.iconIn} onClick={twitTer}>
                            <Twittertamdefult1/>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    );
}
