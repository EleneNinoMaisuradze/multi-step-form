const GoBack = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        backgroundColor: "transparent",
        border: "none",
        color: "#022959",
        cursor: "pointer",
        marginRight: "1rem",
        fontWeight: "600",
      }}
    >
      Go Back
    </button>
  );
};

export default GoBack;
