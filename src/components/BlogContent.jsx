import { useState } from 'react';
import { FiCheck, FiCopy } from 'react-icons/fi';

const flowSteps = ['Developer', 'GitHub', 'Actions runner\non EC2', 'PM2', 'Nginx', 'Browser'];

function ConsoleMockup({ variant, screenshot }) {
  const headers = {
    launch: 'Instance configuration',
    rules: 'Inbound security rules',
    instance: 'Compute instances',
    runner: 'Repository runners',
    workflow: 'Workflow run · main',
  };

  return (
    <figure className="tutorial-mockup">
      <figcaption>Simplified illustration</figcaption>
      <div className="tutorial-mockup__window">
        <div className="tutorial-mockup__bar"><span /><span /><span /> <b>{headers[variant]}</b></div>
        {variant === 'launch' && <div className="tutorial-mockup__fields">
          <div><small>Name</small><strong>userdesk-api</strong></div>
          <div><small>Operating system image</small><strong>Ubuntu Server 24.04 LTS</strong></div>
          <div><small>Instance type</small><strong>t3.micro</strong></div>
          <div><small>Key pair</small><strong>your-key-pair</strong></div>
          <span className="tutorial-mockup__button">Launch instance</span>
        </div>}
        {variant === 'rules' && <table><thead><tr><th>Type</th><th>Port</th><th>Source</th></tr></thead><tbody>
          <tr><td>SSH</td><td>22</td><td>Your IP only</td></tr><tr><td>HTTP</td><td>80</td><td>0.0.0.0/0</td></tr><tr><td>HTTPS</td><td>443</td><td>0.0.0.0/0</td></tr>
        </tbody></table>}
        {variant === 'instance' && <div className="tutorial-mockup__instance"><span className="tutorial-mockup__status">● Running</span><span>userdesk-api</span><strong>Public IPv4&nbsp; YOUR_PUBLIC_IP</strong></div>}
        {variant === 'runner' && <div className="tutorial-mockup__runner"><div><strong>Linux · x64</strong><small>YOUR_REPO / Settings / Actions / Runners</small></div><span className="tutorial-mockup__button">New self-hosted runner</span><p><b className="tutorial-mockup__status">● Idle</b> &nbsp; userdesk-ec2</p></div>}
        {variant === 'workflow' && <div className="tutorial-mockup__workflow"><strong>✓ deploy.yml</strong><span>Deploy · main · #12</span><b>✓ Success</b><small>Checkout → Install dependencies → Restart app</small></div>}
      </div>
      {screenshot && <img className="tutorial-mockup__screenshot" src={screenshot} alt={`${headers[variant]} screenshot`} />}
    </figure>
  );
}

function CodeBlock({ block }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(block.code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch { setCopied(false); }
  };

  return <div className="tutorial-code">
    <div className="tutorial-code__head"><span>{block.label}</span><button type="button" onClick={copy} aria-label="Copy code">{copied ? <FiCheck /> : <FiCopy />}{copied ? 'Copied' : 'Copy'}</button></div>
    <pre><code>{block.code}</code></pre>
  </div>;
}

function TutorialBlock({ block }) {
  if (block.type === 'heading') return <h4 className="tutorial-heading" id={block.id}>{block.text}</h4>;
  if (block.type === 'paragraph') return <p>{block.text}</p>;
  if (block.type === 'list') return <ul>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
  if (block.type === 'code') return <CodeBlock block={block} />;
  if (block.type === 'callout') return <aside className={`tutorial-callout tutorial-callout--${block.tone || 'tip'}`}><strong>{block.title}</strong><p>{block.text}</p></aside>;
  if (block.type === 'mockup') return <ConsoleMockup variant={block.variant} screenshot={block.screenshot} />;
  if (block.type === 'diagram') return <div className="tutorial-flow" aria-label="Deployment flow">{flowSteps.map((step, index) => <div className="tutorial-flow__item" key={step}>{step.split('\n').map((line) => <span key={line}>{line}</span>)}{index < flowSteps.length - 1 && <b aria-hidden="true">→</b>}</div>)}</div>;
  if (block.type === 'link') return <p><a className="tutorial-link" href={block.href} target="_blank" rel="noreferrer">{block.text}</a></p>;
  return null;
}

export default function BlogContent({ post }) {
  if (!post.blocks) return (post.sections || []).map((section) => (
    <div className="blog-modal__section" key={section.heading}>
      <h4>{section.heading}</h4>
      {(section.body || []).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      {section.list && <ul>{section.list.map((item, index) => <li key={index}>{item}</li>)}</ul>}
    </div>
  ));

  const headings = post.blocks.filter((block) => block.type === 'heading');
  return <>
    {post.readTime && <p className="tutorial-read-time">⌁ {post.readTime} read</p>}
    <nav className="tutorial-toc" aria-label="Tutorial contents"><strong>In this guide</strong><ol>{headings.map((heading) => <li key={heading.id}><a href={`#${heading.id}`}>{heading.text}</a></li>)}</ol></nav>
    <div className="blog-modal__section tutorial-content">{post.blocks.map((block, index) => <TutorialBlock block={block} key={`${block.type}-${block.id || index}`} />)}</div>
  </>;
}
