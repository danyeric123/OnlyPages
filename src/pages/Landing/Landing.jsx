import styles from "./Landing.module.css";
// import { Base } from "tailwind-react-ui"; /* this is to test if tailwind-react-ui works without installing craco etc */
// import { FillButton } from "tailwind-react-ui"; /* this is to test if tailwind-react-ui works without installing craco etc */

/* https://images.unsplash.com/photo-1515932803766-b49b14f22917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80 */

const Landing = ({ user }) => {
  return (
    <>
    {/*   <div className={styles.bg}></div>

      <p>
        This example creates a full page background image. Try to resize the
        browser window to see how it always will cover the full screen (when
        scrolled to top), and that it scales nicely on all screen sizes.
      </p> */}
      <main>hello, {user ? user.name : "friend"}</main>
    </>
  );
};

export default Landing;
