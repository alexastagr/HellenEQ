// components
import Logo from "./Logo";
import Button from "./header/Button";

interface IActions {
  refresh?: () => void;
  github?: () => void;
  filter?: () => void;
}

function Header({ refresh }: IActions) {
  // open repo url
  const repo = () => {
    window.open("https://github.com/alexastagr/HellenEQ");
    window.close();
  };
  return (
    <header>
      <Logo />

      <div className="buttons">
        <Button icon="refresh" onClick={refresh} />
        <Button icon="github" onClick={repo} />
      </div>
    </header>
  );
}

export default Header;
