interface BtnProps {
  icon: string;
  onClick?: () => void;
}

function Button({ icon, onClick }: BtnProps) {
  return (
    <div className="btn" onClick={onClick}>
      <div className={icon}></div>
    </div>
  );
}

export default Button;
