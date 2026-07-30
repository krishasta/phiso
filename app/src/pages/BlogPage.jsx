import React from 'react'
import Blog from '../components/Blog'

const BlogPage = () => {
  return (
    <div className="page-container" style={{ padding: '4rem 2rem' }}>
      <Blog />
      <section style={{ marginTop: '4rem', background: 'var(--surface-color)', padding: '3rem', borderRadius: '1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-color)', textAlign: 'center' }}>Health Tips & Insights</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <article style={{ background: 'var(--bg-color)', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Ergonomics at Home</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Discover simple adjustments to your home office setup that can prevent back and neck pain while working remotely.</p>
          </article>
          <article style={{ background: 'var(--bg-color)', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Post-Workout Recovery</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Learn the best practices for cooling down, stretching, and recovering after an intense workout to minimize soreness and prevent injuries.</p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
