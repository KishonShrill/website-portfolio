import('./styles/blog-preview-card.css')

const BlogPreviewCard = (props) => {
  document.title = props.title

  return(
    <main className="blog-preview-card">

      <main className="preview-card">
        <img className="preview-card__banner" src="/images/project-assets/illustration-article.svg" alt="Preview Card Banner" />
        <mark className="preview-card__tag">Learning</mark>
        <p className="preview-card__published-date">Published 21 Dec 2023</p>
        <h1 className="preview-card__title">HTML & CSS foundations</h1>
        <p className="preview-card__description">These languages are the backbone of every website, defining structure, content, and presentation.</p>
        <div>
          <img className="preview-card__profile" src="/images/project-assets/image-avatar.webp" alt="Author Profile Picture" />
          <p className="preview-card__author">Greg Hooper</p>
        </div>
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
export default BlogPreviewCard