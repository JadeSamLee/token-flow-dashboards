
interface ProgressBarProps {
  progress: number;
  className?: string;
}

const ProgressBar = ({ progress, className = "" }: ProgressBarProps) => {
  const clampedProgress = Math.min(100, Math.max(0, progress));
  
  return (
    <div className={`progress-bar ${className}`}>
      <div 
        className="progress-bar-fill" 
        style={{ width: `${clampedProgress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
