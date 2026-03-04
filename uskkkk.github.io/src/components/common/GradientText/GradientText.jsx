import styles from './GradientText.module.css';

function GradientText({ children, as: Component = 'span', className = '' }) {
  return (
    <Component className={`${styles.gradientText} ${className}`}>
      {children}
    </Component>
  );
}

export default GradientText;
