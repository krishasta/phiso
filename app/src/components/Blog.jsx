import React from 'react'
import './Blog.css'
import blog1 from '../assets/slide1.png'
import blog2 from '../assets/slide2.png'
import blog3 from '../assets/slide3.png'

const blogPosts = [
  {
    id: 1,
    title: '5 Exercises to Relieve Lower Back Pain at Home',
    excerpt: 'Discover simple, effective stretches you can do in your living room to ease chronic lower back stiffness and improve your daily mobility.',
    date: 'July 15, 2026',
    category: 'Home Exercises',
    image: blog1
  },
  {
    id: 2,
    title: 'The Hidden Dangers of "Tech Neck"',
    excerpt: 'Working from home? Learn how poor desk posture is affecting your cervical spine and what ergonomic adjustments can save your neck.',
    date: 'July 02, 2026',
    category: 'Posture & Ergonomics',
    image: blog2
  },
  {
    id: 3,
    title: 'Why Sports Rehab is Not Just for Pro Athletes',
    excerpt: 'Whether you are a weekend warrior or a casual runner, tailored sports rehabilitation can help you recover faster and prevent future injuries.',
    date: 'June 20, 2026',
    category: 'Sports Recovery',
    image: blog3
  }
]

const Blog = () => {
  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <div className="section-header">
          <h2>Latest Health Insights</h2>
          <p>Read our latest articles on physical therapy, wellness tips, and recovery strategies.</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <p className="blog-date">{post.date}</p>
                <h3>{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href="#blog" className="btn-read-more">
                  Read Article <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
