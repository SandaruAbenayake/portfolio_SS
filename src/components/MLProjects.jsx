import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiEye, FiActivity } from 'react-icons/fi';
import { mlProjects } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

export default function MLProjects() {
  const [unavailableVideos, setUnavailableVideos] = useState({});

  return (
    <section id="ml-projects" className="section ml-section">
      <SectionHeading command="python3 ~/computer-vision" />
      <p className="section-hint">From model training to real-time webcam applications</p>

      <div className="ml-projects">
        {mlProjects.map((project, index) => (
          <motion.article
            className={`ml-project ml-project--${project.accent}`}
            key={project.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <div className="ml-project__media">
              {project.video && !unavailableVideos[project.title] ? (
                <video
                  className="ml-project__video"
                  src={project.video}
                  controls
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={`${project.title} demonstration video`}
                  onError={() => setUnavailableVideos((videos) => ({
                    ...videos,
                    [project.title]: true,
                  }))}
                />
              ) : (
                <div className="ml-project__placeholder">
                  <div className="ml-project__placeholder-grid" aria-hidden="true" />
                  <FiEye />
                  <span>Demo recording</span>
                  <small>
                    {project.video
                      ? `Add ${project.video.split('/').pop()} to public/videos`
                      : 'No video available yet'}
                  </small>
                </div>
              )}
              <div className="ml-project__scan" aria-hidden="true" />
              <span className="ml-project__live"><span /> LIVE DEMO</span>
            </div>

            <div className="ml-project__body">
              <span className="ml-project__eyebrow">{project.eyebrow}</span>
              <h3 className="ml-project__title">{project.title}</h3>
              <p className="ml-project__description">{project.description}</p>

              <div className="ml-project__highlights" aria-label="Project highlights">
                {project.highlights.map((highlight) => (
                  <div className="ml-project__highlight" key={highlight}>
                    <FiActivity aria-hidden="true" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="tag-row ml-project__tags">
                {project.stack.map((technology) => (
                  <span className="tag" key={technology}>{technology}</span>
                ))}
              </div>

              <a
                className="btn btn--ghost ml-project__link"
                href={project.repo}
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub />
                <span>View Repository</span>
                <FiExternalLink className="ml-project__external" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
