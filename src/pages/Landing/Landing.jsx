import styles from './Landing.module.css'

const Landing = ({user}) => {
  return (
    <main className="flex flex-col p-12">
      <p 
        className="font-extrabold text-6xl mb-12"
      >
        Welcome, {user ? user.name : "friend"}
      </p>

      <p className="p-8 text-3xl mb-4 rounded-3xl border-4 border-opacity-60 border-blue-500">
      OnlyPages will start out as an interactive book club, as the app grows, we’d like for authors to connect with readers who are celebrating them in our app, and develop live-reading sessions for published authors and maybe even offer opportunities for bookworms to learn how to write and publish their own works with tutorials within out app.
      </p>
      <p className="p-8 mb-8 text-3xl rounded-3xl border-4 border-opacity-60 border-blue-500">
      <span className="font-bold underline">Purpose:</span> Create a community of readers to discuss their favorite books and celebrate their favorite authors
      </p>
      <img
        className="rounded-3xl"
        src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg"
        alt="book stack"
      />
    </main>
  )
}
 
export default Landing