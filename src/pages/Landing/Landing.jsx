import styles from './Landing.module.css'
// import { Base } from "tailwind-react-ui"; /* this is to test if tailwind-react-ui works without installing craco etc */
// import { FillButton } from "tailwind-react-ui"; /* this is to test if tailwind-react-ui works without installing craco etc */

const Landing = ({user}) => {
  return (
    <main >
      hello, {user ? user.name : "friend"}
     {/*  <Base
          bg="blue-lightest"
          p={{ x: 4, y: 2 }}
          shadow
          text={["xl", "blue-dark", "center"]}
          font="bold"
          w="1/2"
          m={{ x: "auto" }}
          rounded
        > 
        <FillButton brand="primary">tailwind react-ui render test</FillButton> */}
        {/* /* this is to test if tailwind-react-ui works without installing craco etc */}
    </main>
  )
}
 
export default Landing