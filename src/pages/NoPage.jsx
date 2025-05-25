import('../styles/App.css')
import("../styles/utils.css")
import Button from "../components/Button"

export default function NoPage() {
  // Theme getter for local user setting
  const body = document.body
  const theme = localStorage.getItem('theme');
  theme && body.classList.add(theme);
  let currentTheme = localStorage.getItem('theme');

  if (currentTheme === 'dark-mode') {
    localStorage.setItem('theme', 'light-mode');
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
  } else {
    localStorage.setItem('theme', 'dark-mode');
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
  }

  return(
    <>
      <section className="placeCenter" style={
        {
          height: "75dvh",
          fontSize: "var(--size-xl)"
        }
      }>
        <h2 style={{
          fontSize: "4rem"
        }}>Error 404</h2>

        <p style={{
          textAlign: "center",
          maxWidth: "80vw",
          marginBottom: "2rem"
        }}>I'm pretty sure you're not supposed to be in here...</p>
        <Button link={"/"} text={"Wanna go back?"}/>
      </section>
    </>
  )
}