import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUpRight, FiX } from 'react-icons/fi';
import { blogs } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

export default function Blogs() {
  const hasBlogs = blogs && blogs.length > 0;
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActive(null);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <section id="blogs" className="section">
      <SectionHeading command="ls -la ~/blogs" />

      {!hasBlogs ? (
        <motion.div
          className="empty-state"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="empty-state__line">
            <span className="prompt">$</span> cat ~/blogs/*.md
          </p>
          <p className="empty-state__msg">
            No posts published yet. Add entries to the <code>blogs</code> array in{' '}
            <code>src/data/portfolio.js</code> to populate this section.
          </p>
        </motion.div>
      ) : (
        <div className="blog-list">
          {blogs.map((post, i) => (
            <motion.button
              key={post.title}
              type="button"
              className="blog-card"
              onClick={() => setActive(post)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="blog-card__head">
                {post.icon && (
                  <img className="blog-card__icon" src={post.icon} alt="" aria-hidden="true" />
                )}
                <h3 className="blog-card__title">{post.title}</h3>
                <FiArrowUpRight className="blog-card__ext" />
              </div>
              <p className="blog-card__excerpt">{post.excerpt}</p>
              <div className="blog-card__foot">
                <span className="blog-card__date">{post.date}</span>
                <div className="tag-row">
                  {(post.tags || []).map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      )}

      <AnimatePresence>
        {active && (
          <motion.div
            className="blog-modal-overlay"
            onClick={() => setActive(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="blog-modal"
              role="dialog"
              aria-modal="true"
              aria-label={active.title}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <button
                type="button"
                className="blog-modal__close"
                onClick={() => setActive(null)}
                aria-label="Close"
              >
                <FiX />
              </button>

              <div className="blog-modal__header">
                {active.icon && (
                  <img className="blog-modal__icon" src={active.icon} alt="" aria-hidden="true" />
                )}
                <div>
                  <h3 className="blog-modal__title">{active.title}</h3>
                  <span className="blog-modal__date">{active.date}</span>
                </div>
              </div>

              {active.tags && (
                <div className="tag-row blog-modal__tags">
                  {active.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <div className="blog-modal__body">
                {active.meta && (
                  <dl className="blog-modal__meta">
                    {active.meta.map((m) => (
                      <div className="blog-modal__meta-row" key={m.label}>
                        <dt>{m.label}</dt>
                        <dd>{m.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                {(active.sections || []).map((s) => (
                  <div className="blog-modal__section" key={s.heading}>
                    <h4>{s.heading}</h4>
                    {(s.body || []).map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                    {s.list && (
                      <ul>
                        {s.list.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
