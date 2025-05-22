
const MessageContainer = ({ message, type }) => {
  return (
    <div className={`message ${type}-message`}>
      {message}
    </div>
  );
};

export default MessageContainer;