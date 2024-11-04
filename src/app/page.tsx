import styles from "../app/style.module.css";
import Image from "next/image";
import tahapic from "../../image/temp_image_20241104_235926_2b7cc9f9-95d8-49fa-83ba-1af6794ea400.jpg";
import Instagram from "../../image/Instagram-Logo-PNG-Free-Download.png";
import it from "../../image/temp_image_20241104_235253_2b22b67a-455e-4309-a47b-438f187fde7c.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <br />
      <section id="home">
        <h1> <i>Welcome to My Site</i></h1>
        <br />
        <Image src={tahapic} alt="taha pic" height={200} width={200} />
        <p><strong>Hello, I am Taha Qureshi and I have expertise in web development and UI design</strong></p>
      </section>
      <br />
      <section id="about">
        <h2>About Us</h2>
        <p>My latest work info</p>
        <ul>
          <Image src={it} alt="i.tboy" height={100} width={100} />
          <li className="hover:border-l-red-700"> <a href="https://milestone5-updatecopy.vercel.app/"><button>(click:&apos;resume-builder&apos;)</button></a></li>
          <li className="hover:border-l-red-700"> <a href="https://simple-html-foam-taha.vercel.app/"><button>(click:&apos;access-foam&apos;)</button></a></li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <label>
          Name: <input type="text" placeholder="Enter your name" />
        </label>
        <br /><br />
        <label>
          E-mail: <input type="email" placeholder="Enter your email" />
        </label>
        <br /><br />
        <label>
          Contact Number: <input type="number" placeholder="Enter your number" />
        </label>
        <br />
      </section>

      <footer>
        <p>© 2024 My Site. All rights reserved.</p>
      </footer>
      <section id="sociallink">
        <a href="https://www.instagram.com/723_taha?igsh=N254aGVsZ24yeGFn">
          <Image src={Instagram} alt="Instagram" height={24} width={24} />
          Insta
        </a>
        <a href="https://github.com/Tahaimran56">
          <Image src="/path/to/github-image.png" alt="GitHub" height={24} width={24} />
        </a>
        <a href="https://www.linkedin.com/in/taha-khan-37a5792a6/">
          <Image src="/path/to/linkedin-image.png" alt="LinkedIn" height={24} width={24} />
        </a>
      </section>
    </div>
  );
}
