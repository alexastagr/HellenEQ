interface IProps {
  state: boolean;
}

function Loading({ state }: IProps) {
  if (!state) {
    return null;
  }

  return (
    <div className="loading">
      <div className="earthquake">
        <img src="earthquake.png" />
      </div>

      <div className="texts">
        <h1>Ενημέρωση</h1>
        <span>τελευταίων γεγονότων</span>
      </div>
    </div>
  );
}

export default Loading;
