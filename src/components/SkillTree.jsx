import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  FiActivity, FiBox, FiCloud, FiCode, FiCpu, FiDatabase, FiGitBranch,
  FiGlobe, FiLayers, FiLink, FiPackage, FiServer, FiShoppingBag,
  FiTerminal, FiUser, FiX, FiZap,
} from 'react-icons/fi';
import { skillEdges, skillNodes, skillTreeConfig } from '../data/skills.js';
import SectionHeading from './SectionHeading.jsx';
import './SkillTree.css';

const icons = {
  hub: FiUser, html: FiCode, css: FiLayers, javascript: FiZap, typescript: FiCode,
  react: FiCpu, 'framer-motion': FiActivity, nextjs: FiLayers, python: FiCode,
  flask: FiPackage, node: FiServer, rest: FiLink, php: FiCode, spring: FiCpu,
  java: FiCpu, mysql: FiDatabase, mongodb: FiDatabase, wordpress: FiGlobe, woocommerce: FiShoppingBag,
  linux: FiTerminal, git: FiGitBranch, actions: FiActivity, runner: FiTerminal,
  docker: FiBox, nginx: FiServer, pm2: FiActivity, aws: FiCloud,
};

const edgeId = (a, b) => [a, b].sort().join(':');

function getPathToNode(targetId) {
  if (targetId === 'hub') return new Set(['hub']);
  const graph = new Map(skillNodes.map(({ id }) => [id, []]));
  skillEdges.forEach(([a, b]) => {
    graph.get(a)?.push(b);
    graph.get(b)?.push(a);
  });
  const queue = ['hub'];
  const parent = new Map([['hub', null]]);
  while (queue.length) {
    const current = queue.shift();
    if (current === targetId) break;
    (graph.get(current) || []).forEach((next) => {
      if (!parent.has(next)) {
        parent.set(next, current);
        queue.push(next);
      }
    });
  }
  const path = new Set();
  let cursor = targetId;
  while (cursor && !path.has(cursor)) {
    path.add(cursor);
    cursor = parent.get(cursor);
  }
  return path;
}

function DustCanvas({ active }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !active) return undefined;
    const context = canvas.getContext('2d');
    if (!context) return undefined;
    let frame;
    let width = 0;
    let height = 0;
    const particles = Array.from({ length: 28 }, (_, index) => ({
      x: Math.random(),
      y: Math.random(),
      radius: 0.5 + Math.random() * 1.1,
      speed: 0.025 + Math.random() * 0.06,
      phase: index * 0.7,
    }));
    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = bounds.width;
      height = bounds.height;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const draw = (time) => {
      context.clearRect(0, 0, width, height);
      particles.forEach((particle) => {
        const y = (particle.y - (time * particle.speed) / 1000 + 1) % 1;
        const alpha = 0.12 + (Math.sin(time / 1800 + particle.phase) + 1) * 0.12;
        context.beginPath();
        context.arc(particle.x * width, y * height, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(147, 197, 253, ${alpha})`;
        context.fill();
      });
      frame = window.requestAnimationFrame(draw);
    };
    resize();
    frame = window.requestAnimationFrame(draw);
    window.addEventListener('resize', resize);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, [active]);

  return <canvas className="skill-tree__dust" ref={canvasRef} aria-hidden="true" />;
}

/** @param {{ node: import('../data/skills.js').SkillNodeData, color: string, activePath: boolean, isSelected: boolean, dimmed: boolean, delay: number, reducedMotion: boolean, onClick: (node: import('../data/skills.js').SkillNodeData) => void, onHover: (id: string | null) => void }} props */
function SkillNode({ node, color, activePath, isSelected, dimmed, delay, reducedMotion, onClick, onHover }) {
  const Icon = icons[node.id] || FiCode;
  const diameter = skillTreeConfig.sizes[node.tier];
  return (
    <motion.button
      type="button"
      className={`skill-node skill-node--${node.tier}${node.special ? ' skill-node--special' : ''}${activePath ? ' is-on-path' : ''}${isSelected ? ' is-selected' : ''}${dimmed ? ' is-dimmed' : ''}`}
      style={{ left: `${node.x / 10}%`, top: `${node.y / 7}%`, '--node-color': color, '--node-size': `${diameter}px` }}
      initial={reducedMotion ? false : { opacity: 0, scale: 0.55 }}
      animate={{ opacity: dimmed ? 0.18 : 1, scale: 1 }}
      transition={{ duration: reducedMotion ? 0 : 0.38, delay: reducedMotion ? 0 : delay, type: 'spring', stiffness: 180, damping: 18 }}
      whileHover={reducedMotion ? undefined : { scale: 1.1, y: -3 }}
      whileTap={reducedMotion ? undefined : { scale: 0.96 }}
      onClick={() => onClick(node)}
      onFocus={() => onHover(node.id)}
      onMouseEnter={() => onHover(node.id)}
      onMouseLeave={() => onHover(null)}
      aria-label={`${node.name}, ${node.tier} skill, ${node.proficiency}% proficiency`}
      aria-pressed={isSelected}
    >
      <span className="skill-node__medallion" style={{ width: diameter, height: diameter }}>
        <span className="skill-node__inner"><Icon aria-hidden="true" /></span>
        <span className="skill-node__ripple" />
      </span>
      <span className="skill-node__label">{node.name}</span>
    </motion.button>
  );
}

export default function SkillTree() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const pointerRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [desktopPointer, setDesktopPointer] = useState(false);
  const [filter, setFilter] = useState('all');
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);
  const [expanded, setExpanded] = useState({ frontend: true, backend: true, devops: true });
  const [camera, setCamera] = useState({ x: 0, y: 0, scale: 1 });

  useEffect(() => {
    const media = window.matchMedia('(min-width: 821px) and (hover: hover) and (pointer: fine)');
    const update = () => setDesktopPointer(media.matches);
    update();
    media.addEventListener?.('change', update);
    return () => media.removeEventListener?.('change', update);
  }, []);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element || !('IntersectionObserver' in window)) {
      setInView(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, { rootMargin: '180px' });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!selected) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selected]);

  const nodeById = useMemo(() => new Map(skillNodes.map((node) => [node.id, node])), []);
  const pathIds = useMemo(() => hovered ? getPathToNode(hovered) : new Set(), [hovered]);
  const visibleNodes = useMemo(() => {
    if (filter === 'all') return skillNodes;
    const requiredIds = new Set(['hub']);
    skillNodes
      .filter((node) => (node.branches || [node.branch]).includes(filter))
      .forEach((node) => getPathToNode(node.id).forEach((id) => requiredIds.add(id)));
    return skillNodes.filter((node) => requiredIds.has(node.id));
  }, [filter]);
  const visibleIds = useMemo(() => new Set(visibleNodes.map(({ id }) => id)), [visibleNodes]);
  const visibleEdges = useMemo(() => skillEdges.filter(([a, b]) => visibleIds.has(a) && visibleIds.has(b)), [visibleIds]);

  const chooseFilter = useCallback((branch) => {
    setFilter(branch);
    setHovered(null);
    setCamera((current) => {
      if (branch === 'all') return { x: 0, y: 0, scale: 1 };
      const branchNodes = skillNodes.filter((node) => (node.branches || [node.branch]).includes(branch));
      const center = branchNodes.reduce((acc, node) => ({ x: acc.x + node.x, y: acc.y + node.y }), { x: 0, y: 0 });
      const x = center.x / branchNodes.length;
      const y = center.y / branchNodes.length;
      const bounds = viewportRef.current?.getBoundingClientRect();
      const scale = 1.22;
      return { x: (bounds?.width || 900) / 2 - (x / skillTreeConfig.viewBox.width) * (bounds?.width || 900) * scale, y: (bounds?.height || 620) / 2 - (y / skillTreeConfig.viewBox.height) * (bounds?.height || 620) * scale, scale };
    });
    if (branch !== 'all') setExpanded({ frontend: branch === 'frontend', backend: branch === 'backend', devops: branch === 'devops' });
    else setExpanded({ frontend: true, backend: true, devops: true });
  }, []);

  const startPan = (event) => {
    if (event.button !== 0 || event.target.closest('button, .skill-tree__minimap')) return;
    pointerRef.current = { x: event.clientX, y: event.clientY, cameraX: camera.x, cameraY: camera.y };
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const movePan = (event) => {
    if (!pointerRef.current) return;
    const bounds = viewportRef.current?.getBoundingClientRect();
    const maxX = (bounds?.width || 900) * 0.55;
    const maxY = (bounds?.height || 620) * 0.55;
    setCamera((current) => ({
      ...current,
      x: Math.max(-maxX, Math.min(maxX, pointerRef.current.cameraX + event.clientX - pointerRef.current.x)),
      y: Math.max(-maxY, Math.min(maxY, pointerRef.current.cameraY + event.clientY - pointerRef.current.y)),
    }));
  };
  const endPan = () => { pointerRef.current = null; };
  const zoomAtWheel = (event) => {
    event.preventDefault();
    setCamera((current) => ({ ...current, scale: Math.min(1.8, Math.max(0.72, current.scale * (event.deltaY < 0 ? 1.08 : 0.92))) }));
  };
  const zoomToPoint = (event) => {
    const bounds = viewportRef.current?.getBoundingClientRect();
    const mapBounds = event.currentTarget.closest('.skill-tree__minimap')?.getBoundingClientRect();
    if (!bounds || !mapBounds) return;
    const x = Math.max(0, Math.min(1, (event.clientX - mapBounds.left) / mapBounds.width));
    const y = Math.max(0, Math.min(1, (event.clientY - mapBounds.top) / mapBounds.height));
    const scale = 1.3;
    setCamera({ x: bounds.width / 2 - x * bounds.width * scale, y: bounds.height / 2 - y * bounds.height * scale, scale });
  };

  const toggleExpanded = (branch) => setExpanded((current) => ({ ...current, [branch]: !current[branch] }));
  const branchGroups = skillTreeConfig.branches.map((branch) => ({
    ...branch,
    nodes: skillNodes.filter((node) => node.id !== 'hub' && (node.branches || [node.branch]).includes(branch.id)),
  }));

  return (
    <section id="skills" className="section skill-tree-section" ref={sectionRef}>
      <SectionHeading prefix="#" title="Skill Tree" />
      <p className="section-hint">Explore skills, paths, and projects across the stack</p>
      <div className="skill-tree__filters" role="group" aria-label="Filter skill branches">
        <button type="button" className={filter === 'all' ? 'is-active' : ''} onClick={() => chooseFilter('all')}>All</button>
        {skillTreeConfig.branches.map((branch) => (
          <button key={branch.id} type="button" className={filter === branch.id ? 'is-active' : ''} style={{ '--filter-color': branch.color }} onClick={() => chooseFilter(branch.id)}>{branch.label}</button>
        ))}
      </div>

      <div className="skill-tree__desktop">
        <div
          className="skill-tree__viewport"
          ref={viewportRef}
          onPointerDown={startPan}
          onPointerMove={movePan}
          onPointerUp={endPan}
          onPointerCancel={endPan}
          onWheel={zoomAtWheel}
          aria-label="Interactive skill tree. Drag to pan and scroll to zoom."
        >
          <div className="skill-tree__vignette" />
          {inView && desktopPointer && !reducedMotion && <DustCanvas active={inView && desktopPointer} />}
          <motion.div
            className={`skill-tree__world${filter !== 'all' ? ' is-zoomed' : ''}`}
            animate={{ x: camera.x, y: camera.y, scale: camera.scale }}
            transition={{ duration: reducedMotion ? 0 : 0.45, ease: 'easeOut' }}
          >
            <svg className="skill-tree__connections" viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                {skillTreeConfig.branches.map((branch) => (
                  <linearGradient key={branch.id} id={`skill-gradient-${branch.id}`}>
                    <stop offset="0%" stopColor={skillTreeConfig.colors.hub} stopOpacity=".7" />
                    <stop offset="100%" stopColor={branch.color} stopOpacity=".85" />
                  </linearGradient>
                ))}
                <filter id="skill-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
              </defs>
              {visibleEdges.map(([a, b], index) => {
                const from = nodeById.get(a);
                const to = nodeById.get(b);
                const branch = to.branch === 'hub' ? from.branch : to.branch;
                const onPath = pathIds.has(a) && pathIds.has(b);
                return (
                  <g key={edgeId(a, b)} className={`skill-edge${onPath ? ' is-on-path' : ''}${hovered && !onPath ? ' is-dimmed' : ''}`}>
                    <motion.path
                      d={`M ${from.x} ${from.y} Q ${(from.x + to.x) / 2} ${(from.y + to.y) / 2 - (edgeId(a, b) === edgeId('rest', 'php') ? -90 : 14)} ${to.x} ${to.y}`}
                      stroke={onPath ? skillTreeConfig.colors[to.special ? 'special' : branch] || skillTreeConfig.colors.hub : `url(#skill-gradient-${branch})`}
                      initial={reducedMotion ? false : { pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: hovered && !onPath ? 0.08 : onPath ? 1 : 0.6 }}
                      transition={{ duration: reducedMotion ? 0 : 0.65, delay: reducedMotion ? 0 : 0.16 + index * 0.035 }}
                      filter={onPath ? 'url(#skill-glow)' : undefined}
                    />
                    {onPath && !reducedMotion && <path className="skill-edge__energy" d={`M ${from.x} ${from.y} Q ${(from.x + to.x) / 2} ${(from.y + to.y) / 2 - (edgeId(a, b) === edgeId('rest', 'php') ? -90 : 14)} ${to.x} ${to.y}`} />}
                  </g>
                );
              })}
            </svg>
            {visibleNodes.map((node, index) => {
              const nodePath = pathIds.has(node.id);
              return (
                <SkillNode
                  key={node.id}
                  node={node}
                  color={node.id === 'hub' ? skillTreeConfig.colors.hub : skillTreeConfig.colors[node.special ? 'special' : node.branch]}
                  activePath={nodePath}
                  isSelected={selected?.id === node.id}
                  dimmed={Boolean(hovered && !nodePath)}
                  delay={node.id === 'hub' ? 0 : 0.18 + index * 0.08}
                  reducedMotion={reducedMotion}
                  onClick={setSelected}
                  onHover={setHovered}
                />
              );
            })}
          </motion.div>

          <button className="skill-tree__reset" type="button" onClick={() => setCamera({ x: 0, y: 0, scale: 1 })}>Reset view</button>
          <div className="skill-tree__minimap" aria-label="Skill tree minimap">
            <svg viewBox="0 0 1000 700" role="img" aria-label="Overview of skill branches">
              {visibleEdges.map(([a, b]) => {
                const from = nodeById.get(a); const to = nodeById.get(b);
                return <line key={`mini-${edgeId(a, b)}`} x1={from.x} y1={from.y} x2={to.x} y2={to.y} />;
              })}
              {visibleNodes.map((node) => <circle key={`mini-${node.id}`} cx={node.x} cy={node.y} r={node.id === 'hub' ? 18 : 11} fill={node.id === 'hub' ? skillTreeConfig.colors.hub : skillTreeConfig.colors[node.special ? 'special' : node.branch]} />)}
            </svg>
            <button type="button" aria-label="Recenter skill tree" onClick={zoomToPoint} />
          </div>

          <AnimatePresence>
            {selected && (
              <motion.aside
                className="skill-detail"
                role="dialog"
                aria-modal="false"
                aria-label={`${selected.name} skill details`}
                initial={reducedMotion ? false : { opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 18 }}
                transition={{ duration: reducedMotion ? 0 : 0.22 }}
                style={{ '--detail-color': skillTreeConfig.colors[selected.special ? 'special' : selected.branch] || skillTreeConfig.colors.hub }}
              >
                <button type="button" className="skill-detail__close" onClick={() => setSelected(null)} aria-label="Close skill details"><FiX /></button>
                <span className="skill-detail__branch">{selected.id === 'hub' ? 'CORE PROFILE' : `${selected.branch} · ${selected.tier}`}</span>
                <h3>{selected.name}</h3>
                <p>{selected.description}</p>
                <div className="skill-detail__meter-label"><span>Proficiency</span><strong>{selected.proficiency}%</strong></div>
                <div className="skill-detail__meter"><span style={{ width: `${selected.proficiency}%` }} /></div>
                <p className="skill-detail__years"><span>Experience</span><strong>{selected.years}</strong></p>
                <div className="skill-detail__projects"><span>Used in</span><div>{selected.projects.map((project) => <span key={project}>{project}</span>)}</div></div>
              </motion.aside>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="skill-tree__mobile">
        <button className="skill-tree__mobile-hub" type="button" onClick={() => setSelected(nodeById.get('hub'))}><FiUser /><span>ME / Developer</span></button>
        {branchGroups.map((branch) => {
          const isOpen = expanded[branch.id] && (filter === 'all' || filter === branch.id);
          return (
            <section key={branch.id} className={`skill-branch skill-branch--${branch.id}`} style={{ '--branch-color': branch.color }}>
              <button className="skill-branch__toggle" type="button" aria-expanded={Boolean(isOpen)} onClick={() => toggleExpanded(branch.id)}>
                <span>{branch.label}</span><span className="skill-branch__count">{branch.nodes.length} skills</span><span className="skill-branch__chevron">{isOpen ? '−' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div className="skill-branch__nodes" initial={reducedMotion ? false : { height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reducedMotion ? 0 : 0.24 }}>
                    {branch.nodes.map((node, index) => {
                      const Icon = icons[node.id] || FiCode;
                      return (
                        <motion.button key={`${branch.id}-${node.id}`} type="button" className={`skill-mobile-node skill-mobile-node--${node.tier}`} onClick={() => setSelected(node)} initial={reducedMotion ? false : { opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reducedMotion ? 0 : index * 0.035 }}>
                          <span className="skill-mobile-node__icon"><Icon aria-hidden="true" /></span>
                          <span className="skill-mobile-node__name">{node.name}</span>
                          <span className="skill-mobile-node__tier">{node.tier}</span>
                        </motion.button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </section>
          );
        })}
        <AnimatePresence>
          {selected && (
            <motion.aside
              className="skill-detail skill-detail--mobile"
              role="dialog"
              aria-modal="false"
              aria-label={`${selected.name} skill details`}
              initial={reducedMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 28 }}
              transition={{ duration: reducedMotion ? 0 : 0.22 }}
              style={{ '--detail-color': skillTreeConfig.colors[selected.special ? 'special' : selected.branch] || skillTreeConfig.colors.hub }}
            >
              <button type="button" className="skill-detail__close" onClick={() => setSelected(null)} aria-label="Close skill details"><FiX /></button>
              <span className="skill-detail__branch">{selected.id === 'hub' ? 'CORE PROFILE' : `${selected.branch} · ${selected.tier}`}</span>
              <h3>{selected.name}</h3>
              <p>{selected.description}</p>
              <div className="skill-detail__meter-label"><span>Proficiency</span><strong>{selected.proficiency}%</strong></div>
              <div className="skill-detail__meter"><span style={{ width: `${selected.proficiency}%` }} /></div>
              <p className="skill-detail__years"><span>Experience</span><strong>{selected.years}</strong></p>
              <div className="skill-detail__projects"><span>Used in</span><div>{selected.projects.map((project) => <span key={project}>{project}</span>)}</div></div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
