function ExternalLink({ href = '', children }) {
  return (
    <a href={href} target="_blank" rel="nofollow noreferrer">
      {children || href}
    </a>
  );
}

export default ExternalLink;
