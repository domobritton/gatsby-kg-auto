import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../common/layouts/';
import Seo from '../common/seo';
import 'tachyons';


export default () => (
  <Layout>
    <Seo
      title="Privacy Policy"
      description="Privacy policies and statements" />
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
    <div className="pv5 flex flex-column items-center">
      <h1 className="db f1 display fw1">Privacy Policy</h1>
      <p className="db sans-serif f5 tracked ttu tc">Effective date: February 22, 2019</p>
    </div>
    <div className="lh-copy f4 serif mw8 center">
      <p>Protecting your private information is our priority. This Statement of Privacy applies to www.kgautorepair.co and KG Auto Repair and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to KG Auto Repair include www.kgautorepair.co. The KG Auto Repair website is a Auto Repair site. By using the KG Auto Repair website, you consent to the data practices described in this statement.</p>
      <h2>Collection of your Personal Information</h2>
      <p>We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to use certain products or services available on the Site. These may include: (a) registering for an account on our Site; (b) entering a sweepstakes or contest sponsored by us or on one of our partners; (c) signing up for special offers from selected third parties; (d) sending us an email message; (e) submitting your credit card or other payment information when ordering and purchasing products and services on our Site. To wit, we will use your information for, but not limited to, communicating with you in relation to services and/or products you have requested from us. We also my gather additional personal or non-personal information in the future.</p>
      <h2>Sharing Information with Third Parties</h2>
      <p>KG Auto Repair does not sell, rent or lease its customer lists to third parties.</p>
      <p>KG Auto Repair may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange deliveries. All such thir parties are prohibited from using your personal information except to provide these services to KG Auto Repair, and they are required to maintain the confidentiality of your information.</p>
      <p>KG Auto Repair may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action in necessary to: (a) conform to the edicts of the law or comply with legal process served on KG Auto Repair or the site; (b) protect and defend the rights or proper of KG Auto Repair; and/or (c) act under exigent circumstances to protect personal safety of users of KG Auto Repair, or the public.</p>
      <h2>Automatically Collected Information</h2>
      <p>Information about your computer hardware and software may be automatically collected by KG Auto Repair. This information can include: your IP Address, browser type, domain names, access times and referring websitre addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the KG Auto Repair website.</p>
      <h2>Links</h2>
      <p>This websites contains links to other sites. Please be awayre that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.</p>
      <h2>Security of your Personal Information</h2>
      <p>KG Auto Repair secures your personal information from unauthorized access, use, or disclosure. KG Auto Repair uses the following methods for this purpose:</p>
      <ul><li>SSL Protocol</li></ul>
      <p>When personal information (such as a credit card number) is transmitted to other websites, it is protected through the use of encryption, such as the Secure Sockets Layer (SSL) protocol.</p>
      <p>We strive to take appropriate security measures to protect against unauthorized access to or alteration of your personal information. Unfortunately, no data transmission over the Internet or any wireless network can be guaranteed to be 100% secure. As a result, while we strive to protect your personal information, you acknowledge that: (a) there are security and privacy limitations inherent to the Internet which are beyond our control; and (b) security, integrity, and privacy of any and all information and data exchanged between you and us through this Site cannot be guaranteed.</p>
      <h2>Children Under Thirteen</h2>
      <p>KG Auto Repair does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you much ask your parent or guardian for permission to use this website.</p>
      <h2>Email Communications</h2>
      <p>From time to time, KG Auto Repair may contact you via email for the purpose of providing announcements, promotional offers, alerts, confirmations, surveys, and/or other general communication. In order to improve our Services, we may receive a notification when you open an email from KG Auto Repair or click on a link therein.</p>
      <p>If you would like to stop receiving marketing or promotional communication via email from KG Auto Repair, you may opt out of such communications by clicking on the UNSUBSCRIBE button.</p>
      <h2>Changes to this Statement</h2>
      <p>KG Auto Repair reserves the right to change this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account, by placing a prominent notice on our site, and/or by updating any privacy information on this page. your continued use of the Site and/or Services available through this Site after such modification will constitute your: (a) acknowledgment of the modified Privacy Policy; and (b) agreement to abide and be bound by that Policy.</p>
      <h2>Contact Information</h2>
      <p>KG Auto Repair welcomes your questions regarding this Statement of Privacy. If you believe that KG Auto Repair has not adhered to this Statement, please contact KG Auto Repair at:</p>
      <br />
      <p>KG Auto Repair</p>
      <p>264 South Broadway</p>
      <p>Lawrence, MA 01841</p>
    </div>
  </Layout>
)
