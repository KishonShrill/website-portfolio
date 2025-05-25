import('./styles/profile-card-component.css')

const ProfileCardComponent = (props) => {
  document.title = props.title

  return(
    <main className="profile-card-component">

      <main className="profile__card">
        <span role="banner" className="profile__banner"></span>
        <img className="profile__picture" src="/images/project-assets/image-victor.jpg" alt="Profile Picture" />
        <h1 className="profile__name"><span>Victor Crest</span><span className="profile__age">26</span></h1>
        <h2 className="profile__location">London</h2>
        <hr className="profile__divider" />
        <section className="profile__info">
          <div>
            <h1 className="profile__stats">80K</h1>
            <h2 className="profile__stat-info">Followers</h2>
          </div>
          <div>
            <h1 className="profile__stats">803K</h1>
            <h2 className="profile__stat-info">Likes</h2>
          </div>
          <div>
            <h1 className="profile__stats">1.4K</h1>
            <h2 className="profile__stat-info">Photos</h2>
          </div>
        </section>
        
      </main>
      
      <footer className="attribution web">
        <div>
          <p>Challenge by <a className="mentor" href="https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q/hub" target="_blank"> Frontend Mentor</a>. 
          Coded by <a href="https://github.com/KishonShrill"> Chriscent Pingol</a>.</p>
        </div>
      
        <p>Go back <a href="/"> Home</a>.</p>
      </footer>
    </main>
  )
}
export default ProfileCardComponent