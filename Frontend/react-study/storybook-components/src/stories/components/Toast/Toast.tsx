import './style.css';

export interface ToastProps {
  position?: "center";
  backgroundColor?: string;
  title: string;
  content: string;
  width?: number | string;
  titleColor: string;
  descriptionColor: string;
  icon: 'sucess' | 'alert' | 'error';
  onClick?: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  backgroundColor,
  title = "",
  content = "",
  width = 50,
  titleColor,
  descriptionColor,
  icon,
  ...props
}) => {
  console.log(icon)
  return (
    <div className="c-wrapper">
      <section
        className="c-toast"
        style={{ backgroundColor, width }}
        {...props}
      >
        <div className="w-icon">
          <img data-icon={icon} className="c-icon" />
        </div>
        <div className="w-info">
          <h1 className="w-title" style={{ color: titleColor }}>
            {title}
          </h1>

          <span className="w-content" style={{ color: descriptionColor }}>
            {content}
          </span>
        </div>
      </section>
    </div>
  );
};
